import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch surveys from Spring Boot backend
    axios.get('http://localhost:8080/survey/reviews')
      .then(response => setSurveys(response.data))  // Store the surveys in the state
      .catch(error => console.error('Error fetching surveys:', error));  // Handle errors
  }, []);  // Empty dependency array to run the effect only once when the component mounts

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
      <div className="col-lg-8 col-md-10">
        <div
          className="card shadow-lg border-0"
          style={{
            backgroundColor: '#1e1e1e',
            color: '#ffffff',
          }}
        >
          <div className="card-body">
            <h2 className="card-title text-center mb-4" style={{ color: '#ffffff' }}>
              Customer Reviews
            </h2>
            <div className="list-group">
              {surveys.length > 0 ? (
                surveys.map((review) => (
                  <li key={review.id} className="list-group-item bg-dark text-white border-secondary">
                    <h5>{review.title}</h5>
                    <p><strong>Name:</strong> {review.username}</p>
                    <p><strong>Review:</strong> {review.content}</p>
                    <p><strong>Rating:</strong> {review.rating}</p>
                    <p><strong>Submitted At:</strong> {new Date(review.submittedAt).toLocaleString()}</p>
                  </li>
                ))
              ) : (
                <li className="list-group-item bg-dark text-white border-secondary">
                  No surveys available.
                </li>
              )}
            </div>
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
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Reviews;
