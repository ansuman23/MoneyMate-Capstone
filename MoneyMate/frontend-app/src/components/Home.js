
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Home.css';
import background from '../images/samplecoin.jpg';

const Home = () => {
  return (
<div
  className="home-container"
  style={{
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // minHeight: '100vh',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="card shadow-lg bg-dark text-white">
          <div className="card-body text-center">
            <h1 className="card-title">🏦 Money Mate 🏦</h1>
            <p className="card-text lead">Welcome! Please login or register to continue.</p>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <Link to="/register" className="btn btn-primary btn-lg">Register</Link>
              <Link to="/login" className="btn btn-success btn-lg">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;
