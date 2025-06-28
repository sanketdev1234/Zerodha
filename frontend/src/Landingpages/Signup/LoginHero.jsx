import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const loginurl="http://localhost:8080/auth/login";
const mfaSetupUrl="http://localhost:8080/mfa/setup2fa";
const mfaVerifyUrl="http://localhost:8080/mfa/verify2fa";
const mfaResetUrl="http://localhost:8080/mfa/reset2fa";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingfor2f, setIsSubmittingfor2f] = useState(false);
  const [disable2f, setDisable2f] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
const [showSuccessfor2f, setShowSuccessfor2f] = useState(false);
    const [YES2FA, setYES2FA] = useState(false);
  const [touched, setTouched] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [particles, setParticles] = useState([]);
  const [qrurl,setqrurl]=useState("");
  const [otpInput, setOtpInput] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate(); 
  // Generate floating particles for background animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return Math.min(strength, 100);
  };



  const validateUsername = (username) => {
    return username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username);
  };

  const validatePassword = (password) => {
    return password.length >= 8 &&  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])([^\s]){8,}$/.test(password);
  };

  const validateForm = () => {
    const newErrors = {};


    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (!validateUsername(formData.username)) {
      newErrors.username = 'Username must be 3-20 characters and contain only letters, numbers, and underscores';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, special character, and number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      username: true,
      password: true
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    await new Promise(resolve => setTimeout(resolve, 2000));
   
    setIsSubmitting(false);
    await axios.post(loginurl,formData, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then((data)=>{
      console.log(data);
      setDisable2f(false);
      setShowSuccess(true);
      setFormData({ username: '', password: '' });
      setTouched({});
      setPasswordStrength(0);
      setTimeout(() => {setShowSuccess(false)
        }, 4000);
    
    }).catch((err)=>{
      console.log(err);
      navigate('/pagenotfound');
    });
  };

  const getFieldClass = (fieldName) => {
    const baseClass = 'form-control';
    if (touched[fieldName]) {
      return errors[fieldName] ? `${baseClass} is-invalid` : `${baseClass} is-valid`;
    }
    return baseClass;
  };

  const getPasswordStrengthColor = (strength) => {
    if (strength < 25) return '#dc3545';
    if (strength < 50) return '#fd7e14';
    if (strength < 75) return '#ffc107';
    return '#198754';
  };

  const getPasswordStrengthText = (strength) => {
    if (strength < 25) return 'Weak';
    if (strength < 50) return 'Fair';
    if (strength < 75) return 'Good';
    return 'Strong';
  };
  const handleSubmitfor2f = async (e) => {
    e.preventDefault();
    setIsSubmittingfor2f(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if(YES2FA){
    await axios.post(mfaResetUrl, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }).then((data)=>{
        console.log(data)
        
      }
    ).catch((err)=>console.log(err));
    setIsSubmittingfor2f(false);
    }
    else {
      await axios.post(mfaSetupUrl, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }).then((response)=>{
        console.log(response);
        setqrurl(response.data.qrCodeUrl);
        setShowOtpInput(true);
      }).catch((err)=>console.log(err));

    }
    setYES2FA(!YES2FA);
    setIsSubmittingfor2f(false);
  };

  //////////////////////////////////////////////////////////////////////
  const handleverifyfor2f=async(e)=>{
    e.preventDefault();
    console.log(otpInput);
    console.log(typeof(otpInput));
    if (!otpInput || otpInput.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      console.log({token:otpInput});
      const response = await axios.post(mfaVerifyUrl, {
        token: otpInput
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
      console.log(response);
      setYES2FA(true);
      setShowSuccessfor2f(true);
      setShowOtpInput(false);
      setOtpInput("");
      setqrurl("");
      setTimeout(() => setShowSuccessfor2f(false), 4000);
    } catch (err) {
      console.log(err);
      alert("Invalid OTP. Please try again.");
    }
  }
//////////////////////////////////////////////////////////////////////////
  return (
    <div className="signup-container mt-5 pt-5">
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .signup-container {
          min-height: 100vh;
          background: linear-gradient(135deg,rgb(184, 186, 192) 0%,rgb(50, 176, 249) 25%,rgb(25, 40, 154) 50%,rgb(24, 25, 27) 75%, #4facfe 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .floating-particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          pointer-events: none;
          backdrop-filter: blur(1px);
        }

        .signup-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 
            0 32px 64px rgba(0,0,0,0.12),
            0 16px 32px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          transform: translateY(0) scale(1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: cardEntrance 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          max-width: 480px;
          width: 100%;
        }

        .signup-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }

        .signup-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 40px 80px rgba(0,0,0,0.16),
            0 20px 40px rgba(0,0,0,0.12),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        .card-header {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border: none;
          padding: 3rem 2.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .card-header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(transparent, rgba(102, 126, 234, 0.1), transparent);
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }

        .card-header-content {
          position: relative;
          z-index: 2;
        }

        .card-title {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          animation: titleGlow 2s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
          from { filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3)); }
          to { filter: drop-shadow(0 0 20px rgba(118, 75, 162, 0.4)); }
        }

        .card-subtitle {
          color: #6c757d;
          font-size: 1.1rem;
          font-weight: 400;
          margin: 0;
        }

        .card-body {
          padding: 0 2.5rem 2.5rem;
        }

        .form-group {
          position: relative;
          margin-bottom: 2rem;
        }

        .form-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
        }

        .form-label::before {
          content: '';
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 50%;
          margin-right: 0.5rem;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        .form-control {
          border: 2px solid transparent;
          border-radius: 16px;
          padding: 1.25rem 3.5rem 1.25rem 1.25rem;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #e9ecef, #f8f9fa) border-box;
          position: relative;
        }

        .form-control:focus {
          outline: none;
          border-color: transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #667eea, #764ba2) border-box;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
        }

        .form-control.is-valid {
          background: linear-gradient(rgba(25, 135, 84, 0.02), rgba(25, 135, 84, 0.02)) padding-box,
                      linear-gradient(135deg, #198754, #20c997) border-box;
        }

        .form-control.is-invalid {
          background: linear-gradient(rgba(220, 53, 69, 0.02), rgba(220, 53, 69, 0.02)) padding-box,
                      linear-gradient(135deg, #dc3545, #e74c3c) border-box;
        }

        .field-icon {
          position: absolute;
          right: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6c757d;
          transition: all 0.3s ease;
          z-index: 10;
          cursor: pointer;
        }

        .form-control:focus ~ .field-icon {
          color: #667eea;
          transform: translateY(-50%) scale(1.1);
        }

        .form-control.is-valid ~ .field-icon {
          color: #198754;
          animation: bounce 0.6s ease;
        }

        .form-control.is-invalid ~ .field-icon {
          color: #dc3545;
          animation: wiggle 0.6s ease;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(-50%) translateX(0); }
          40% { transform: translateY(-50%) translateX(-3px); }
          60% { transform: translateY(-50%) translateX(3px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: translateY(-50%) rotate(0deg); }
          25% { transform: translateY(-50%) rotate(-3deg); }
          75% { transform: translateY(-50%) rotate(3deg); }
        }

        .password-strength {
          margin-top: 0.75rem;
          padding: 0.75rem;
          background: rgba(248, 249, 250, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .password-strength-bar {
          height: 6px;
          background: #e9ecef;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .password-strength-fill {
          height: 100%;
          border-radius: 3px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .password-strength-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: strengthShine 2s ease-in-out infinite;
        }

        @keyframes strengthShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .password-strength-text {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 16px;
          padding: 1.25rem 2rem;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(102, 126, 234, 0.4);
          background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
        }

        .btn-primary:active {
          transform: translateY(-1px);
        }

        .btn-primary.loading {
          pointer-events: none;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .spinner-border-sm {
          width: 1.2rem;
          height: 1.2rem;
        }

        .invalid-feedback, .valid-feedback {
          display: block;
          font-size: 0.875rem;
          margin-top: 0.5rem;
          font-weight: 500;
          animation: fadeInUp 0.3s ease;
        }

        .invalid-feedback {
          color: #dc3545;
        }

        .valid-feedback {
          color: #198754;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-alert {
          animation: successSlide 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(135deg, rgba(25, 135, 84, 0.1), rgba(32, 201, 151, 0.1));
          border: 1px solid rgba(25, 135, 84, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        @keyframes successSlide {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .footer-text {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .footer-text a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-text a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 50%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .footer-text a:hover::after {
          width: 100%;
        }

        .footer-text a:hover {
          color: #764ba2;
          transform: translateY(-1px);
        }

        @media (max-width: 992px) {
          .signup-card {
            max-width: 90vw;
            padding: 0 0.5rem;
          }
          .card-header {
            padding: 2rem 1rem 1.5rem;
          }
          .card-body {
            padding: 0 1rem 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .signup-container {
            padding: 0.5rem;
            min-height: 100vh;
          }
          .signup-card {
            max-width: 98vw;
            border-radius: 16px;
            margin: 0 0.2rem;
          }
          .card-header {
            padding: 1.5rem 0.5rem 1rem;
          }
          .card-title {
            font-size: 1.5rem;
          }
          .card-body {
            padding: 0 0.5rem 1rem;
          }
          .form-group {
            margin-bottom: 1.2rem;
          }
          .btn-primary {
            padding: 1rem 1rem;
            font-size: 1rem;
          }
          .qr-section-responsive {
            order: 2;
            width: 100%;
            margin-top: 1rem;
            display: flex;
            justify-content: center;
          }
          .signup-card {
            order: 1;
          }
        }
        @media (min-width: 769px) {
          .qr-section-responsive {
            margin-top: 0;
            display: flex;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .signup-container {
            padding: 0.2rem;
          }
          .signup-card {
            max-width: 100vw;
            border-radius: 10px;
            margin: 0;
          }
          .card-header {
            padding: 1rem 0.2rem 0.5rem;
          }
          .card-title {
            font-size: 1.1rem;
          }
          .card-body {
            padding: 0 0.2rem 0.5rem;
          }
          .form-label {
            font-size: 0.85rem;
          }
          .form-control {
            font-size: 0.95rem;
            padding: 0.9rem 2.5rem 0.9rem 0.9rem;
          }
          .btn-primary {
            padding: 0.8rem 0.5rem;
            font-size: 0.95rem;
          }
          .password-strength {
            padding: 0.5rem;
          }
          .footer-text {
            font-size: 0.9rem;
            padding-top: 1rem;
          }
        }
        html, body, .signup-container {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
        />
      ))}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {showSuccess && (
              <div className="alert alert-success success-alert mb-4" role="alert">
                <div className="d-flex align-items-center">
                  <svg className="me-3" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <div>
                    <strong>🎉 Welcome-back aboard!</strong>
                    <br />
                    <small>Your account has been logged in successfully. Get ready for an amazing journey!</small>
                  </div>
                </div>
              </div>
            )}
          {showSuccessfor2f && (
              <div className="alert alert-success success-alert mb-4" role="alert">
                <div className="d-flex align-items-center">
                  <svg className="me-3" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <div>
                    <strong>🎉 {YES2FA ? "2FA Enabled" : "2FA Disabled"}</strong>
                    <br />
                    <small>{YES2FA ? "Your 2FA has been enabled successfully." : "Your 2FA has been disabled successfully."}</small>
                  </div>
                </div>
              </div>
            )}
            
            <div className="signup-card mx-auto">
              <div className="card-header">
                <div className="card-header-content">
                <h2 className="card-title">Welcome Back</h2>
                  <p className="card-subtitle">Log in to your account to continue</p>
                </div>
              </div>
              
              <div className="card-body">
                <div onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <div className="input-effect">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className={getFieldClass('username')}
                        value={formData.username}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Choose your unique username"
                        required
                      />
                      <div className="field-icon">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                      </div>
                    </div>
                    {touched.username && errors.username && (
                      <div className="invalid-feedback">❌ {errors.username}</div>
                    )}
                    {touched.username && !errors.username && formData.username && (
                      <div className="valid-feedback">✅ Awesome username! It's available</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-effect">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className={getFieldClass('password')}
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter your password"
                        required
                      />
                      <div className="field-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.708zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                          </svg>
                        ) : (
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                          </svg>
                        )}
                      </div>    
                    </div>
                    
                    {formData.password && (
                      <div className="password-strength">
                        <div className="password-strength-bar">
                          <div 
                            className="password-strength-fill"
                            style={{
                              width: `${passwordStrength}%`,
                              background: `linear-gradient(90deg, ${getPasswordStrengthColor(passwordStrength)}, ${getPasswordStrengthColor(passwordStrength)}dd)`
                            }}
                          />
                        </div>
                        <p className="password-strength-text" style={{ color: getPasswordStrengthColor(passwordStrength) }}>
                          {getPasswordStrengthText(passwordStrength)} Password ({passwordStrength}%)
                        </p>
                      </div>
                    )}
                    
                    {touched.password && errors.password && (
                      <div className="invalid-feedback">❌ {errors.password}</div>
                    )}
                    {touched.password && !errors.password && formData.password && (
                      <div className="valid-feedback">✅ Excellent! Your password is secure</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary w-100 ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging In...
                      </>
                    ) : (
                      <>
                    🚀 Log In
                      </>
                    )}
                  </button>
                </div> 
                {/* mfa button */}
                    <br/>
                    <br/>
                    <button
                    type="submit"
                    className={`btn btn-primary w-100 ${isSubmittingfor2f ? 'loading' : ''}`}
                    disabled={disable2f}
                    onClick={handleSubmitfor2f}
                  >
                    {isSubmittingfor2f ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        {YES2FA ? "Disable 2FA..." : "Enable 2FA..."}
                      </>
                    ) : (
                      <>
                    {YES2FA ? "🚀 Disable 2FA" : "🚀 Enable 2FA"}
                      </>
                    )}
                  </button>
                    <br/>
                    <br/>
                  {/* OTP input section will handle verification */}
                  {showOtpInput && (
                    <div className="form-group">
                      <label htmlFor="otp" className="form-label">Enter 6-digit OTP</label>
                      <div className="input-effect">
                        <input
                          type="text"
                          id="otp"
                          name="otp"
                          className="form-control"
                          value={otpInput}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            setOtpInput(value);
                          }}
                          placeholder="Enter 6-digit OTP from your authenticator app"
                          maxLength={6}
                          pattern="[0-9]{6}"
                          required
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && otpInput.length === 6) {
                              handleverifyfor2f(e);
                            }
                          }}
                        />
                        <div className="field-icon">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <button
                          type="button"
                          className="btn btn-outline-secondary flex-fill"
                          onClick={() => {
                            setShowOtpInput(false);
                            setOtpInput("");
                            setqrurl("");
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary flex-fill"
                          onClick={handleverifyfor2f}
                          disabled={otpInput.length !== 6}
                        >
                          Verify OTP
                        </button>
                      </div>
                    </div>
                  )}
                <div className="footer-text">
                  <p className="text-muted mb-0">
                    New to our community? <Link to='/signup' className="text-decoration-none">Sign up here</Link>
                  </p>
                </div>
              </div>
            </div>
            {/* QR code wrapper for responsive placement */}
            {qrurl ?
              <div className="qr-section-responsive">
                <div className="text-center mt-4 p-4" style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}>
                  <h5 className="text-white mb-3">🔐 Setup Two-Factor Authentication</h5>
                  <p className="text-white-75 mb-3">Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)</p>
                  <img
                    src={qrurl}
                    alt="QR Code for 2FA Setup"
                    className="img-fluid mb-3"
                    style={{ maxWidth: "200px", borderRadius: "10px" }}
                  />
                  <p className="text-white-75 small">After scanning, enter the 6-digit code from your app above</p>
                </div>
              </div>
            : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;