import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import background from '../images/samplecoin.jpg';


const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Used for redirecting to the login page

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/register', form)
      .then((res) => {
        setMessage(res.data.message);
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after successful registration
        }, 2000); // 2-second delay before redirect
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          setMessage('❌ Username already exists. Please choose a different one.');
        } else {
          setMessage('❌ Registration failed. Please try again later.');
        }
      });
  };

  return (
<div
  className="d-flex justify-content-center align-items-center vh-100"
  style={{
    backgroundColor: '#121212',
    color: '#ffffff',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div
          className="card shadow-lg border-0"
          style={{
            backgroundColor: '#1e1e1e',
            color: '#ffffff',
          }}
        >
          <div className="card-body">
            <h2 className="card-title text-center mb-4" style={{ color: '#ffffff' }}>Register</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label" style={{ color: '#ffffff' }}>
                  AccountID
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control bg-dark text-white border-secondary"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: '#ffffff' }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control bg-dark text-white border-secondary"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-4">
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  style={{
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    color: '#ffffff',
                  }}
                >
                  Register
                </button>
              </div>
            </form>
            {message && (
              <div className="alert alert-info mt-3" style={{ color: 'black' }}>
                {message}
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

export default Register;
