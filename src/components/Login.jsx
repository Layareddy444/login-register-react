import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import img from '../assets/image.PNG';
// import './Login.css';
import './Registration.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (email === registeredEmail && password === registeredPassword) {
      console.log('User logged in:', { email });
      navigate('/products');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-section ">
        {/* Left Side (Image Section) */}

        <img
          src={img}
          alt="Background"
          className="login-image"
          
        />
      </div>

      {/* Right Side (Form Section) */}
      <div className="login-form-section ">
        <h3 className="mb-3 text-center text-dark text-bold">Login to Admin Panel</h3>
        <p className="text-center mb-4">Enter your email and password below</p>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <label >Email ID</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>
          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className='btn-1'>
            <button type="submit" className="btn btn-dark w-100 py-2">Login</button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-decoration-none">Register</Link>
        </p>
      </div>

    </div>
  );
};

export default Login;
