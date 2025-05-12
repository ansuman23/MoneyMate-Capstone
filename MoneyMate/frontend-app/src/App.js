import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import TransactionPage from './components/TransactionPage';
import TransactionHome from './components/TransactionHome';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Reviews from './components/Reviews';
import TakeSurvey from './components/TakeSurvey';
import FeedbackForm from './components/FeedbackForm';
import UsersList from './components/UsersList';
import Services from './components/Services';
import FeedbackList from './components/FeedbackList';  // Adjust path as necessary

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />   
          <Route path="/services" element={<Services/>} />   
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/feedback-list" element={<FeedbackList />} />
          <Route path="/take-survey" element={<TakeSurvey />} />
          <Route path="/survey-reviews" element={<Reviews />} /> 
          <Route path="/users" element={<UsersList />} />    
          
          
          
          <Route path="/home" element={<TransactionHome />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/service2" element={<Placeholder service="Service 2" />} />
          
          
   
        </Routes>
    </BrowserRouter>
    
  );
}
function Placeholder({ service }) {
  return (
    <div className="home-container text-light">
      <div className="overlay-animation" />
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h1 className="fade-in">{service} Page 🚧</h1>
      </div>
    </div>
  );
}


export default App;
