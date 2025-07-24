import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GigList from './pages/GigList';
import GigDetail from './pages/GigDetail';
import ApplicationFlow from './pages/ApplicationFlow';
import Profile from './pages/Profile';
import Login from './pages/Login';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<GigList />} />
      <Route path="/gig/:id" element={<GigDetail />} />
      <Route path="/apply/:gigId" element={<ApplicationFlow />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRoutes;