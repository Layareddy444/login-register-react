import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import img from '../assets/image.PNG';
import "./Registration.css";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    // Function to generate a 6-digit OTP
    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const sendOtpToEmail = (otp) => {
        
        const templateParams = {
            user_email: email,
            otp: otp,
        };

        emailjs.send(
            'service_k2q15xn',    
            'template_qwhexa8',    
            templateParams,
            '9uDcUS83QeBv2LsQd'         
        ).then(response => {
            console.log('OTP sent!', response.status, response.text);
        }).catch(error => {
            console.error('Error sending OTP:', error);
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            // Generate a new OTP
            const newOtp = generateOtp();
            setOtp(newOtp);  // Store the OTP

            // Store email and password locally 
            localStorage.setItem('registeredEmail', email);
            localStorage.setItem('registeredPassword', password);

            // Send OTP to user's email
            sendOtpToEmail(newOtp);

            // Navigate to the OTP page
            navigate('/verify-otp', { state: { email, otp: newOtp } });
        }
    };

    return (
        <div className='login-container'>
            <div className='login-image-section'>
                {/* Left Side (Image Section) */}
                 <img
                    src={img}
                    alt="Background"
                    className="login-image"
                   />
            </div>

            {/* Right Side Form Section */}
            <div className="login-form-section ">
                <h3 className=" text-center text-dark text-bold">Register to Admin Panel</h3>
                <p className="text-center mb-2">Enter your email and password below</p>
                <form onSubmit={handleRegister}>
                    <div className="input-box">
                        <label>Email ID</label>
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
                    <div className="input-box">
                        <label >Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className='btn-1'>
                    <button type="submit" className="btn btn-dark w-100 py-2">Register</button>
                    </div>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
                </p>
            </div>

        </div>
    );
};

export default Register;
