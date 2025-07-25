// routes.jsx
// Defines the main application routes for ZenJob Clone using React Router.
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GigList from './pages/GigList';
import GigDetail from './pages/GigDetail';
import ApplicationFlow from './pages/ApplicationFlow';
import Profile from './pages/Profile';
import Login from './pages/Login';
import About from './pages/About';
import Companies from './pages/companies';
import Landing from './pages/Landing';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/gigs" element={<GigList />} />
      <Route path="/gig/:id" element={<GigDetail />} />
      <Route path="/apply/:gigId" element={<ApplicationFlow />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/companies" element={<Companies />} />
    </Routes>
  </Router>
);

export default AppRoutes;