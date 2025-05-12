import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const TakeSurvey = () => {
  const [username, setUsername] = useState('');
  const [preferredBranch, setPreferredBranch] = useState('');
  const [preferredService, setPreferredService] = useState('');
  const [usesOnlineBanking, setUsesOnlineBanking] = useState(false);
  const [satisfactionRating, setSatisfactionRating] = useState(1);  // Default to 1 (you can change this)
  const [suggestions, setSuggestions] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Removed userId and adjusted payload
    const newSurvey = {
      username,
      preferredBranch,
      preferredService,
      usesOnlineBanking,
      satisfactionRating: parseInt(satisfactionRating),
      suggestions
    };

    axios.post('http://localhost:8080/survey/take', newSurvey)
      .then(() => {
        alert('✅ Survey Submitted Successfully!');
        navigate('/services'); // ✅ Redirect to services page
      })
      .catch(error => {
        console.error('Error Submitting Survey:', error);
        alert('❌ Error Submitting Survey');
      });
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
              Survey Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>Name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>Preferred Branch</label>
                <select
                  className="form-control bg-dark text-white border-secondary"
                  value={preferredBranch}
                  onChange={(e) => setPreferredBranch(e.target.value)}
                  required
                >
                  <option value="">Select Branch</option>
                  <option value="Branch A">Branch A</option>
                  <option value="Branch B">Branch B</option>
                  <option value="Branch C">Branch C</option>
                  <option value="Branch D">Branch D</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>Preferred Service</label>
                <select
                  className="form-control bg-dark text-white border-secondary"
                  value={preferredService}
                  onChange={(e) => setPreferredService(e.target.value)}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Loans">Loans</option>
                  <option value="Savings">Savings</option>
                  <option value="Credit Cards">Credit Cards</option>
                  <option value="Customer Support">Customer Support</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>Do you use Online Banking?</label>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="onlineBanking"
                    value="yes"
                    checked={usesOnlineBanking === true}
                    onChange={() => setUsesOnlineBanking(true)}
                  />
                  <label className="form-check-label" style={{ color: '#ffffff' }}>Yes</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="onlineBanking"
                    value="no"
                    checked={usesOnlineBanking === false}
                    onChange={() => setUsesOnlineBanking(false)}
                  />
                  <label className="form-check-label" style={{ color: '#ffffff' }}>No</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>Satisfaction Rating (1-5)</label>
                <input
                  type="number"
                  className="form-control bg-dark text-white border-secondary"
                  value={satisfactionRating}
                  onChange={(e) => setSatisfactionRating(e.target.value)}
                  min="1"
                  max="5"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#ffffff' }}>Suggestions</label>
                <textarea
                  className="form-control bg-dark text-white border-secondary"
                  value={suggestions}
                  onChange={(e) => setSuggestions(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-primary btn-lg" style={{ color: '#ffffff' }}>
                  Submit Survey
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

export default TakeSurvey;
