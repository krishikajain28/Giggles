import React, { useState } from 'react';

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

const containerStyle = {
  maxWidth: '500px',
  margin: '3rem auto',
  padding: '2rem',
  background: '#fff6e5',
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '1.7rem',
  fontWeight: 'bold',
  color: '#17415a',
  marginBottom: '1.5rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: 'bold',
  color: '#f28c28',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '0.7rem',
  background: '#f28c28',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer',
  marginTop: '0.5rem',
};

const Companies = () => {
  const [form, setForm] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to the backend
  };

  return (
    <>
    <div style={backgroundStyle}></div>
    <div style={containerStyle}>
      <h2 style={headingStyle}>Recruiter: Post a Gig</h2>
      {submitted ? (
        <p style={{ color: '#17415a', textAlign: 'center', fontWeight: 'bold' }}>
          Thank you! Your gig has been submitted for review.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={labelStyle} htmlFor="title">Gig Title</label>
          <input
            style={inputStyle}
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <label style={labelStyle} htmlFor="company">Company Name</label>
          <input
            style={inputStyle}
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
          />

          <label style={labelStyle} htmlFor="description">Description</label>
          <textarea
            style={{ ...inputStyle, minHeight: '80px' }}
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <label style={labelStyle} htmlFor="location">Location</label>
          <input
            style={inputStyle}
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
          />

          <button style={buttonStyle} type="submit">Post Gig</button>
        </form>
      )}
    </div>
    </>
  );
};

export default Companies;
