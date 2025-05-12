import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import  '../styles/Services.css';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="services-container">
    <div className="container mt-4 text-center">
      <h2 className="welcome-heading">🏦Money Mate🏦</h2>
      <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <Link to="/transactions" className="btn btn-1">My Transactions</Link>         
        <Link to="/feedback" className="btn btn-3">Feedback</Link>
        <Link to="/feedback-list" className="btn btn-4">FeedbackList</Link>
        <Link to="/take-survey" className="btn btn-5">Survey</Link> 
        <Link to="/survey-reviews" className="btn btn-6">Reviews</Link>   
        <Link to="/users" className="btn btn-7">Registered Users</Link>
      </div>
      <div className="mt-4">
      <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
    </div>
    </div>
    </div>
  );
};

export default Services;
