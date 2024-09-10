import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/user/landingPage';
import Navbar from './components/navbar';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import Dashboard from './pages/admin/Dashboard';
import NewTicket from './pages/user/NewTicket';
import CheckStatus from './pages/user/checkStatus';
import Footer from './components/footer';

function App() {
  const location = useLocation();

  const hideElementsRoutes = ['/login', '/register','/dashboard'];
  const shouldHideElements = hideElementsRoutes.includes(location.pathname);

  return (
    <>
    {/* Navbar */}
    {!shouldHideElements && <Navbar />}
    
    {/* Routes */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Create-ticket" element={<NewTicket />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Check-status" element={<CheckStatus />} />
    </Routes>
    
    {/* Footer */}
    {!shouldHideElements && <Footer />}
  </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
