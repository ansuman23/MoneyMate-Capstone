import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container sign-page">
          <Link className="navbar-brand fw-bold" to="/">🏦 Money Mate</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-4">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="btn btn-danger" to="/logout">Log Out</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    );
};

export default Navbar;
