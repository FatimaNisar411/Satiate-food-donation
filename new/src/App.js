import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignInFormD from './components/SignInFormD';
import SignInFormO from './components/SignInFormO';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import TestCard from './components/RecCard';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <div style={{alignItems:'center'}}><TestCard/></div>
     
      <Routes>
      <Route path='/' exact />
      <Route path="/signup-organization" element={<SignInFormO />} />
      <Route path="/signup-donor" element={<SignInFormD />} />
      <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
