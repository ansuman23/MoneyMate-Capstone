from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ Import CORS
import sqlite3
import threading
import time
import requests
import socket
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import signal
import sys

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for all routes (allow requests from React frontend)
app.config['JWT_SECRET_KEY'] = 'your-strong-secret-key'  # Change to something secure
jwt = JWTManager(app)

# Utility function to get DB connection
def get_db_connection():
    conn = sqlite3.connect('feedback.db')
    conn.row_factory = sqlite3.Row
    return conn

# Initialize database
def init_db():
    conn = sqlite3.connect('feedback.db')
    conn.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.execute('''
    CREATE TABLE IF NOT EXISTS feedbacks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rating INTEGER,
    user_id INTEGER,
    feedback TEXT
    )
    ''')

    conn.close()

# Call DB init
init_db()

# Register a new user
@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    username = data['username']
    password = data['password']

    conn = get_db_connection()
    existing_user = conn.execute('SELECT * FROM users WHERE username = ?', (username,)).fetchone()

    if existing_user:
        conn.close()
        return jsonify({'message': 'Username already taken'}), 409

    conn.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
    conn.commit()
    conn.close()

    return jsonify({'message': 'User registered successfully!'}), 201

@app.route('/login', methods=['POST'])
def login_user():
    data = request.json
    username = data['username']
    password = data['password']

    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password)).fetchone()
    conn.close()

    if user:
        access_token = create_access_token(identity=user['id'])  # Identity will be user_id
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'message': 'Invalid credentials!'}), 401


@app.route('/feedback', methods=['POST'])
def give_feedback():
    data = request.json
    print(f"Received feedback: {data}")  # Log the incoming feedback

    user_id = data['user_id']
    feedback = data['feedback']
    rating = data['rating']

    conn = get_db_connection()
    existing_user = conn.execute('SELECT * FROM users WHERE username = ?', (user_id,)).fetchone()

    if existing_user:
        conn.close()
        conn = get_db_connection()
        conn.execute('INSERT INTO feedbacks (user_id, feedback, rating) VALUES (?, ?, ?)', (user_id, feedback, rating))
        conn.commit()
        conn.close()

        return jsonify({'message': 'Feedback submitted!'}), 201
    
    if not isinstance(rating, int):
        return jsonify({'message': 'Rating must be an integer'}), 400

    

@app.route('/getfeed', methods=['GET'])
def get_feedbacks():
    conn = get_db_connection()
    feedbacks = conn.execute('SELECT * FROM feedbacks').fetchall()
    conn.close()

    feedback_list = [
        {
            'id': feedback['id'],
            'user_id': feedback['user_id'],
            'feedback': feedback['feedback'],
            'rating': feedback['rating']
        } for feedback in feedbacks
    ]
    
    return jsonify(feedback_list), 200



# Get all users
@app.route('/users', methods=['GET'])
def get_all_users():
    conn = get_db_connection()
    users = conn.execute('SELECT id, username FROM users').fetchall()
    conn.close()

    user_list = [{'id': user['id'], 'username': user['username']} for user in users]
    return jsonify(user_list), 200

# Home route
@app.route('/')
def home():
    return 'Feedback Service is Running!'


EUREKA_SERVER = "http://localhost:8761/eureka"
APP_NAME = "FEEDBACK-SERVICE-PYTHON"
PORT = 3002
INSTANCE_ID = "USA56QVXGW"

# Function to register with Eureka server
def register_with_eureka():
    payload = {
        "instance": {
            "hostName": socket.gethostname(),
            "app": APP_NAME,
            "ipAddr": socket.gethostbyname(socket.gethostname()),
            "vipAddress": APP_NAME.lower(),
            "secureVipAddress": APP_NAME.lower(),
            # "status": "UP",
            "port": {"$": PORT, "@enabled": "true"},
            "dataCenterInfo": {
                "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
                "name": "MyOwn"
            },
            "leaseInfo": {
                "renewalIntervalInSecs": 30,
                "durationInSecs": 10
            }
            
        }
        
    }
    
    headers = {'Content-Type': 'application/json'}
    try:
        res = requests.post(f"{EUREKA_SERVER}/apps/{APP_NAME}", json=payload, headers=headers)
        print(f"[Eureka] Registration status: {res.status_code}")
    except Exception as e:
        print(f"[Eureka] Registration failed: {e}")

# Function to send heartbeat to Eureka periodically
def heartbeat():
    while True:
        try:
            res = requests.put(f"{EUREKA_SERVER}/apps/{APP_NAME}/{INSTANCE_ID}")
            print(f"[Eureka] Heartbeat sent: {res.status_code}")
        except Exception as e:
            print(f"[Eureka] Heartbeat failed: {e}")
        time.sleep(30)

# Register and start heartbeat in a background thread
threading.Thread(target=register_with_eureka).start()
threading.Thread(target=heartbeat, daemon=True).start()



def deregister_from_eureka():
    try:
        res = requests.delete(f"{EUREKA_SERVER}/apps/{APP_NAME}/{INSTANCE_ID}")
        print(f"[Eureka] Deregistration status: {res.status_code}")
    except Exception as e:
        print(f"[Eureka] Deregistration failed: {e}")

def handle_exit(sig, frame):
    print("Shutting down... deregistering from Eureka")
    deregister_from_eureka()
    sys.exit(0)
    
# Register signal handler
signal.signal(signal.SIGINT, handle_exit)
signal.signal(signal.SIGTERM, handle_exit)
# Run server
if __name__ == '__main__':
    app.run(port=3002)
