import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2'; // Import Bar chart component
import 'chart.js/auto'; // Import necessary modules from Chart.js
// import '../styles/Feedbacklist.css';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/getfeed')
      .then(response => {
        setFeedbacks(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedbacks:', error);
      });
  }, []);

  // Function to get top 5 feedbacks with best ratings
  const getTopFeedbacks = () => {
    return [...feedbacks]
      .sort((a, b) => b.rating - a.rating) // Sort feedbacks by rating in descending order
      .slice(0, 5); // Take the top 5
  };

  const topFeedbacks = getTopFeedbacks();

  // Prepare data for the bar chart
  const data = {
    labels: topFeedbacks.map(feedback => `AccountID: ${feedback.user_id}`),
    datasets: [
      {
        label: 'Feedback Ratings',
        data: topFeedbacks.map(feedback => feedback.rating),
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue with transparency
        borderColor: 'rgba(54, 162, 235, 1)', // Solid blue border
        borderWidth: 1,
      },
    ],
  };

  // Chart options to make the y-axis smaller
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,     // Minimum value for y-axis
        max: 5,     // Maximum value for y-axis to keep it small
        ticks: {
          stepSize: 1, // Define the step size between ticks
        },
      },
    },
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
              Top 5 Feedbacks
            </h2>
            <div className="chart-container mb-4">
              <Bar data={data} options={options} />
            </div>

            <h2 className="card-title text-center mb-4" style={{ color: '#ffffff' }}>
              All Feedbacks
            </h2>
            <div className="list-group">
              {feedbacks.length > 0 ? (
                feedbacks.map((feedback) => (
                  <li key={feedback.id} className="list-group-item bg-dark text-white border-secondary">
                    <h5>AccountID: {feedback.user_id}</h5>
                    <p>{feedback.feedback}</p>
                    <p><strong>Rating:</strong> {feedback.rating}</p>
                  </li>
                ))
              ) : (
                <li className="list-group-item bg-dark text-white border-secondary">
                  No feedbacks available.
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

export default FeedbackList;
