import React, { useEffect, useState } from 'react';

const backgroundStyle = {
  minHeight: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
  background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
  opacity: 0.5,
};

const landingStyle = {
  background: '#f28c28',
  color: '#fff',
  padding: '3rem 0 2rem 0',
  textAlign: 'center',
  fontFamily: 'Fredoka One, Arial Rounded MT Bold, Arial, sans-serif',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  letterSpacing: '2px',
};

const subtitleStyle = {
  fontSize: '1.3rem',
  fontWeight: '400',
  marginBottom: '1.5rem',
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '2rem auto',
  padding: '2rem',
  background: '#fff6e5',
  borderRadius: '16px',
  position: 'relative',
  zIndex: 1,
};

const filterBarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  flexWrap: 'wrap',
  gap: '1rem',
};

const inputStyle = {
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  width: '100%',
  maxWidth: '300px',
};

const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
};

const cardStyle = {
  background: '#fff',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s',
};

const cardTitle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  color: '#17415a',
};

const cardDesc = {
  fontSize: '1rem',
  color: '#555',
};

const GigList = () => {
  const [gigs, setGigs] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/gigs/')
      .then(res => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      })
      .then(data => setGigs(Array.isArray(data) ? data : []))
      .catch(err => setError(err.message));
  }, []);

  const filteredGigs = gigs.filter(gig =>
    gig.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={backgroundStyle}></div>

      <div style={landingStyle}>
        <div style={titleStyle}>Find Your Next Gig</div>
        <div style={subtitleStyle}>
          Discover flexible, student-friendly opportunities — start earning while you learn!
        </div>
      </div>

      <div style={containerStyle}>
        <div style={filterBarStyle}>
          <input
            type="text"
            placeholder="Search gigs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={inputStyle}
          />
          {/* Optional: add dropdown for sorting/filtering */}
        </div>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <div style={cardGrid}>
          {filteredGigs.length > 0 ? (
            filteredGigs.map((gig) => (
              <div key={gig.id} style={cardStyle}>
                <div style={cardTitle}>{gig.title}</div>
                <div style={cardDesc}>{gig.description || 'No description available.'}</div>
              </div>
            ))
          ) : (
            <p style={{ color: '#888' }}>No gigs found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GigList;
