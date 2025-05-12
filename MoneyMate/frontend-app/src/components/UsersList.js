// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You'll need to install axios with 'npm install axios'
import { useNavigate } from 'react-router-dom';
// import './UserList.css'

const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of users from the backend
    axios.get('http://localhost:3002/users')  // Update the URL based on your backend URL
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  return (
<div
  className="d-flex justify-content-center align-items-center vh-100"
  style={{
    backgroundColor: '#121212',
    color: '#ffffff',
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div
          className="card shadow-lg border-0"
          style={{
            backgroundColor: '#1e1e1e',
            color: '#ffffff',
          }}
        >
          <div className="card-body">
            <h2 className="card-title text-center mb-4" style={{ color: '#ffffff' }}>
              Registered Users
            </h2>

            {loading ? (
              <p style={{ color: '#ffffff' }}>Loading...</p>
            ) : error ? (
              <p style={{ color: '#ffffff' }}>{error}</p>
            ) : (
              <div>
                <table className="table table-bordered table-dark">
                  <thead>
                    <tr>
                      <th scope="col">SNo.</th>
                      <th scope="col">AccountID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-grid gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={() => navigate('/home')}
                    style={{ color: '#ffffff' }}
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default UsersList;
