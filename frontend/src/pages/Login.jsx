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
  maxWidth: '400px',
  margin: '3rem auto',
  padding: '2rem',
  background: 'rgba(255,246,229,0.95)', // semi-transparent
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  fontFamily: 'Arial, sans-serif',
  position: 'relative',
  zIndex: 1,
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

const toggleStyle = {
  textAlign: 'center',
  marginTop: '1rem',
  color: '#17415a',
  cursor: 'pointer',
  textDecoration: 'underline',
};

const errorStyle = {
  color: 'red',
  textAlign: 'center',
  marginBottom: '1rem',
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      if (isLogin) {
        // Login
        const res = await fetch('http://127.0.0.1:8000/api/token/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Invalid credentials');
        const data = await res.json();
        localStorage.setItem('token', data.access);
        setSuccess('Login successful!');
      } else {
        // Signup
        const res = await fetch('http://127.0.0.1:8000/api/user/register/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Signup failed. Try a different username.');
        setSuccess('Signup successful! You can now log in.');
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div style={backgroundStyle}></div>
      <div style={containerStyle}>
        <h2 style={headingStyle}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <div style={errorStyle}>{error}</div>}
        {success && <div style={{ ...errorStyle, color: 'green' }}>{success}</div>}
        <form onSubmit={handleSubmit}>
          <label style={labelStyle} htmlFor="username">Username</label>
          <input
            style={inputStyle}
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <label style={labelStyle} htmlFor="password">Password</label>
          <input
            style={inputStyle}
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button style={buttonStyle} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <div
          style={toggleStyle}
          onClick={() => {
            setIsLogin(!isLogin);
            setError(null);
            setSuccess(null);
          }}
        >
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
        </div>
      </div>
    </>
  );
};

export default Login; 