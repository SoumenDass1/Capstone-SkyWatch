import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // signup logic here (mock)
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
