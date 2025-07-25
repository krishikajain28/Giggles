// Navbar.jsx
// This component renders the navigation bar for the ZenJob Clone application, including navigation links and the logo.
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../clerkStub.jsx';

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f28c28',
  padding: '1rem',
  gap: '2rem',
};

const logoContainerStyle = {
  position: 'absolute',
  left: '2rem',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
};

const logoStyle = {
  height: '40px',
  width: 'auto',
  cursor: 'pointer',
  borderRadius: '8px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
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

const Navbar = () => {
  const [hovered, setHovered] = React.useState(null);
  const { isSignedIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login');
  };

  return (
    <nav style={{ ...navStyle, position: 'relative' }}>
      <div style={logoContainerStyle}>
        <img
          src="/Giggles.png" // You can replace this with your own logo path
          alt="Logo"
          style={logoStyle}
          onClick={() => navigate('/')}
        />
      </div>
      <Link
        to="/gigs"
        style={{
          ...linkStyle,
          ...(hovered === 0 ? linkHoverStyle : {}),
        }}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        Gigs
      </Link>
      {isSignedIn && (
        <Link
          to="/companies"
          style={{
            ...linkStyle,
            ...(hovered === 1 ? linkHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
        >
          Companies
        </Link>
      )}
      {isSignedIn && (
        <Link
          to="/profile"
          style={{
            ...linkStyle,
            ...(hovered === 2 ? linkHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
        >
          Profile
        </Link>
      )}
      {!isSignedIn ? (
        <Link
          to="/login"
          style={{
            ...linkStyle,
            ...(hovered === 3 ? linkHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
        >
          Login
        </Link>
      ) : (
        <span
          style={{
            ...linkStyle,
            cursor: 'pointer',
            ...(hovered === 3 ? linkHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          onClick={handleLogout}
        >
          Logout
        </span>
      )}
      <Link
        to="/about"
        style={{
          ...linkStyle,
          ...(hovered === 4 ? linkHoverStyle : {}),
        }}
        onMouseEnter={() => setHovered(4)}
        onMouseLeave={() => setHovered(null)}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;