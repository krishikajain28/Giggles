import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Gigs</Link> | <Link to="/profile">Profile</Link> | <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;