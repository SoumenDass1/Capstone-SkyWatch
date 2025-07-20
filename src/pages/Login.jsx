import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import planeImage from '../assets/image.png';
import flyingPlane from '../assets/image copy.png';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Allow login with any non-empty email and password
    if (email.trim() !== '' && password.trim() !== '') {
      navigate('/dashboard');
    } else {
      alert('Please enter both email and password.');
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  const goToDashboard = () => {
    navigate('/Dashboard');
  };

  return (
    <div className="login-wrapper">
      <div className="sky">
        {[...Array(9)].map((_, i) => {
          const randomTop = Math.floor(Math.random() * 85);
          return (
            <div
              key={i}
              className={`cloud cloud${i + 1}`}
              style={{ top: `${randomTop}%` }}
            ></div>
          );
        })}

        <img src={planeImage} alt="Plane" className="plane" />
        <img src={flyingPlane} alt="Flying Plane" className="flying-plane" />
      </div>

      <div className="login-box">
        <h2>Welcome back to SkyWatch</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <a onClick={goToDashboard}><button type="submit">Login</button></a>
        </form>
        <h6>
          <a onClick={goToSignup} className="signup-link">Don't have an account?</a>
        </h6>
      </div>
    </div>
  );
}

export default Login;