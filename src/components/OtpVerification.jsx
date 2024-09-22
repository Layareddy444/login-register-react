import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import img from '../assets/image.PNG';
import './Registration.css';

const OtpVerification = () => {
  const [otpInput, setOtpInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { email, otp } = location.state || {};

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otpInput === otp) {
      console.log('OTP Verified!');
      navigate('/login');  
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        {/* Left Side (Image Section) */}

        <img
          src={img}
          alt="Background"
          className="login-image"
        />
      </div>

      {/* Right Side OTP Form Section */}
      <div className="login-form-section">
        <h3 className='text-center text-dark text-bold'>Verify your email</h3>
        <p className='text-center' >Enter the OTP sent to your registered email</p>
        <form onSubmit={handleOtpSubmit}>
          <div className="input-box">
            {/* Input boxes for the 6-digit OTP */}
            <input
              type="text"
              maxLength="6"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
            />
          </div>
          <div className='btn-1'>
          <button type="submit" className="btn btn-dark w-80 py-2">Proceed</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default OtpVerification;
