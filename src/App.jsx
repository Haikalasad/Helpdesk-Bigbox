import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';
import HelpDeskButton from './components/HelpDeskbutton';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <HelpDeskButton/>
    </Router>
  );
}

export default App;
