import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import HelpDeskButton from './components/HelpDeskButton';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const location = useLocation();

  const hideElementsRoutes = ['/login', '/register'];
  const shouldHideElements = hideElementsRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideElements && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      {!shouldHideElements && <HelpDeskButton />}
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
