import React from 'react';
import { useNavigate } from 'react-router-dom';
import planeImage from '../assets/image.png';
import flyingPlane from '../assets/image copy.png';

import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-wrapper">
      <div className="sky">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        <div className="cloud cloud4"></div>
        <div className="cloud cloud5"></div>
        <div className="cloud cloud6"></div>
        <div className="cloud cloud"></div>

        <img src={planeImage} alt="Plane" className="plane" />
        <img src={flyingPlane} alt="Flying Plane" className="flying-plane" />
      </div>

      <div className="login-box">
        <h2>Welcome back to SkyWatch</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
