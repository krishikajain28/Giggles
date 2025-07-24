import React, { useEffect, useState } from 'react';

const GigList = () => {
  const [gigs, setGigs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/gigs/')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => setGigs(Array.isArray(data) ? data : []))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h2>Gig Listings</h2>
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      <ul>
        {gigs.map(gig => (
          <li key={gig.id}>{gig.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GigList;