import React from 'react';

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
  maxWidth: '1000px',
  margin: '2rem auto',
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  background: '#fff6e5', // very light orange
  borderRadius: '16px',
  position: 'relative',
  zIndex: 1,
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  color: '#17415a',
};

const sectionStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '2rem',
};

const cardStyle = {
  flex: '1',
  minWidth: '300px',
  background: '#f4f4f4',
  borderRadius: '10px',
  padding: '1.5rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const nameStyle = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
};

const roleStyle = {
  fontSize: '1rem',
  fontStyle: 'italic',
  color: '#666',
  marginBottom: '1rem',
};

const aboutText = {
  fontSize: '1rem',
  lineHeight: '1.6',
};

const About = () => {
  return (
    <>
      <div style={backgroundStyle}></div>
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Giggles</h2>

        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Giggles is a student-led initiative to empower college students across India by
          helping them discover short-term, skill-based gigs and freelance opportunities.
          Whether it's earning while learning or gaining real-world experience, Giggles is
          designed to bridge the gap between ambition and opportunity.
        </p>

        <div style={sectionStyle}>

          <div style={cardStyle}>
            <div style={nameStyle}>Krishika</div>
            <div style={roleStyle}>Co-Founder & Frontend Developer</div>
            <p style={aboutText}>
              Krishika is a Computer Science undergraduate from Mumbai who loves bringing
              ideas to life through clean and intuitive design. She leads the frontend
              development of Giggles using React and ensures every interaction feels
              delightful, simple, and student-friendly.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={nameStyle}>Piyush Kumar</div>
            <div style={roleStyle}>Co-Founder & Backend Developer</div>
            <p style={aboutText}>
              Piyush is an aspiring data scientist and backend enthusiast from Delhi.
              Passionate about solving real-world problems through technology, he handles
              the Django-based API layer of Giggles. He believes in building tools that
              serve real needs and democratize opportunities for students like him.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
