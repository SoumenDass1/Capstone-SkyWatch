import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import planeImage from '../assets/image.png';
import flyingPlane from '../assets/image copy.png';
import './login.css';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
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
        <div className="cloud cloud7"></div>
        <div className="cloud cloud8"></div>
        <div className="cloud cloud9"></div>
        <img src={planeImage} alt="Plane" className="plane" />
        <img src={flyingPlane} alt="Flying Plane" className="flying-plane" />
      </div>

      <div className="login-box">
        <h2>Create your SkyWatch Account</h2>
        <input placeholder="Name" required />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <input placeholder="Phone Number" type="tel" />
        <button onClick={handleSignup}>Sign Up</button>
        <h6>
          <Link to="/" className='login-link'>Already have an account?</Link>
        </h6>
      </div>
    </div>
  );
}

export default Signup;
