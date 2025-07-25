// Profile.jsx
// This component displays the user's profile page. Access is restricted to logged-in users.
import React, { useEffect } from 'react';
import { useAuth } from '../clerkStub.jsx';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/login');
    }
  }, [isSignedIn, navigate]);

  return <div>User Profile Page (stub)</div>;
};

export default Profile; 