import React, { useState } from 'react';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const FeedbackForm = () => {
  const [userId, setUserId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // ✅ State for rating
  const navigate = useNavigate(); // ✅ Initialize navigation
  const handleRating = (rate) => {
        setRating(rate);
      };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = { user_id: userId, feedback, rating }; // Include rating
    axios.post('http://localhost:3002/feedback', feedbackData)
      .then(() => {
        alert('✅ Feedback Submitted Successfully!');
        navigate('/services'); // ✅ Redirect to services page
      })
      .catch(error => {
        console.error('Error Submitting Feedback:', error);
        alert('❌ Error Submitting Feedback');
      });
  };

  const handleRatingChange = (e) => {
    const value = Math.max(1, Math.min(5, parseInt(e.target.value, 10))); // Ensure rating stays between 1 and 5
    setRating(value);
  };

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
              Feedback
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>
                  AccountID
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>
                  Feedback
                </label>
                <textarea
                  className="form-control bg-dark text-white border-secondary"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
              </div>

              {/* Rating Section */}
              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  className="form-control bg-dark text-white border-secondary"
                  value={rating}
                  onChange={handleRatingChange}
                  min="1"
                  max="5"
                />
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  size={30}
                  fillColor="gold"
                  emptyColor="gray"
                  allowHalfIcon
                />
              </div>
              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-primary btn-lg" style={{ color: '#ffffff' }}>
                  Submit Feedback
                </button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={() => navigate('/home')} style={{ color: '#ffffff' }}>
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default FeedbackForm;

