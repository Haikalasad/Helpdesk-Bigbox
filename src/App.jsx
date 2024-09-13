import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/user/landingPage';
import Navbar from './components/navbar';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import Tickets from './pages/admin/Tickets';
import NewTicket from './pages/user/NewTicket';
import CheckStatus from './pages/user/checkStatus';
import Footer from './components/footer';
import Profile from './pages/admin/Profile';
import Dashboard from './pages/admin/Dashboard';
import MainLayout from './pages/admin/MainLayout';

function App() {
  const location = useLocation();

  const hideElementsRoutes = ['/login', '/register','/tickets','/profile','/dashboard'];
  const shouldHideElements = hideElementsRoutes.includes(location.pathname);

  return (
    <>
  
    {!shouldHideElements && <Navbar />}
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Create-ticket" element={<NewTicket />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
     
      <Route path="/Check-status" element={<CheckStatus />} />
      <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/tickets" element={<MainLayout><Tickets /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
    </Routes>
 
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
