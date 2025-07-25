// Landing.jsx
// This component renders the landing page for the ZenJob Clone application. It welcomes users and provides a button to view available gigs.
import React from 'react';
import { useNavigate } from 'react-router-dom';

const landingStyle = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
  fontFamily: 'Arial, sans-serif',
  padding: '2rem',
};

const cardStyle = {
  background: 'rgba(255,246,229,0.97)',
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  padding: '3rem 2.5rem',
  textAlign: 'center',
  maxWidth: '420px',
  width: '90%',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#17415a',
  marginBottom: '1rem',
};

const subtitleStyle = {
  fontSize: '1.2rem',
  color: '#f28c28',
  marginBottom: '2rem',
};

const buttonGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const buttonStyle = {
  background: '#f28c28',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '0.9rem 2rem',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={landingStyle}>
      <div style={cardStyle}>
        <div style={titleStyle}>Welcome to <span style={{ color: '#f28c28' }}>Giggles</span></div>
        <div style={subtitleStyle}>
          India’s go-to platform for college students to find short-term gigs, and for companies to discover fresh talent.
        </div>
        <div style={buttonGroupStyle}>
          <button style={buttonStyle} onClick={() => navigate('/login?type=student')}>
             I’m a Student - Find Gigs
          </button>
          <button style={buttonStyle} onClick={() => navigate('/login?type=company')}>
             I’m a Company - Post Gigs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
