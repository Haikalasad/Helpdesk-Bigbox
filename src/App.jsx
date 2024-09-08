import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/user/landingPage';
import Navbar from './components/Navbar';
import HelpDeskButton from './components/HelpDeskButton';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import Dashboard from './pages/admin/Dashboard';
import NewTicket from './pages/user/NewTicket';

function App() {
  const location = useLocation();

  const hideElementsRoutes = ['/login', '/register','/dashboard'];
  const shouldHideElements = hideElementsRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideElements && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Create-ticket" element={<NewTicket />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      {!shouldHideElements}
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
