import sqlite3

def init_db():
    conn = sqlite3.connect('feedback.db')
    conn.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)')
    # conn.execute('CREATE TABLE IF NOT EXISTS feedbacks (id INTEGER PRIMARY KEY, rating INTEGER, user_id INTEGER, feedback TEXT)')
    conn.execute('''
    CREATE TABLE IF NOT EXISTS feedbacks (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        rating INTEGER,
        user_id INTEGER,
        feedback TEXT
         )
    ''')

    conn.close()

init_db()