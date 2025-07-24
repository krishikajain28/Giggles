import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f28c28',
  padding: '1rem',
  gap: '2rem',
};

const linkStyle = {
  color: '#f2e9e4',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background 0.2s',
};

const linkHoverStyle = {
  background: '#a04000',
};

const links = [
  { to: '/', label: 'Gigs' },
  { to: '/companies', label: 'Companies' },
  { to: '/profile', label: 'Profile' },
  { to: '/login', label: 'Login' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <nav style={navStyle}>
      {links.map((link, idx) => (
        <Link
          key={link.to}
          to={link.to}
          style={{
            ...linkStyle,
            ...(hovered === idx ? linkHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;