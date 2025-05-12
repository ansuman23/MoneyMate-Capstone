import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar' 
import './TransactionHome.css'

function TransactionHome() {
  const navigate=useNavigate();
  return (
    <div>
      <Navbar/>
      <div className='home-container'>
        <div className='overlay'>
          <div className='text-center text-white py-2'>
            <h1 className='display-4'>Welcome to Money Mate</h1>
            <p className='lead'>Choose a Service Below</p>
          </div>
          <div className='container '>
              <div className='row justify-content-center gap-4'>
                <div className='col-md-3 service-card' onClick={()=>navigate("/transactions")}>
                  <h4>Transactions</h4>
                  <p>Manage all your Transactions</p>
                </div>

                <div className='col-md-3 service-card' onClick={()=>navigate("/users")}>
                  <h4>User Accounts</h4>
                  <p>View your Accounts</p>
                </div>

                <div className='col-md-3 service-card' onClick={()=>navigate("/feedback")}>
                  <h4>Feedback</h4>
                  <p>Give Feedback for improvements</p>
                </div>

                <div className='col-md-3 service-card' onClick={()=>navigate("/take-survey")}>
                  <h4>Take Survey</h4>
                  <p>Participate in Money Mate's Survey</p>
                </div>

                <div className='col-md-3 service-card' onClick={()=>navigate("/feedback-list")}>
                  <h4>Watch Feedback</h4>
                  <p>Review the Website</p>
                </div>

                <div className='col-md-3 service-card' onClick={()=>navigate("/survey-reviews")}>
                  <h4>Watch Surveys</h4>
                  <p>Get some Insights of our customers</p>
                </div>



              </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default TransactionHome;