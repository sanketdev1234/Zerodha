import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])([^\s]){8,}$/.test(password);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

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

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const response = await axios.post('/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
      console.log(response.data);
      setShowSuccess(true);
      setFormData({ email: '', username: '', password: '' });
      setErrors({});
      setIsSubmitting(false);
      
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/login');
      }, 4000);
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
      navigate('/pagenotfound');
    }
  };

  return (
    <div className="signup-container">
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .signup-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #87CEEB 0%, #4A90E2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }

        .signup-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 480px;
          width: 100%;
        }

        .card-header {
          padding: 2.5rem 2rem 1.5rem;
          text-align: center;
          border-bottom: 1px solid #e9ecef;
        }

        .card-title {
          color: #4A90E2;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .card-subtitle {
          color: #6c757d;
          font-size: 1rem;
          margin: 0;
        }

        .card-body {
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-control {
          border: 1px solid #ced4da;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
        }

        .form-control:focus {
          outline: none;
          border-color: #4A90E2;
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
        }

        .input-wrapper {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #4A90E2;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          user-select: none;
        }

        .password-toggle:hover {
          color: #357ABD;
        }

        .error-message {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.5rem;
          display: block;
        }

        .btn-primary {
          background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
          border: none;
          border-radius: 8px;
          padding: 0.875rem 2rem;
          font-weight: 600;
          font-size: 1rem;
          color: white;
          cursor: pointer;
          transition: opacity 0.2s;
          width: 100%;
        }

        .btn-primary:hover:not(:disabled) {
          opacity: 0.9;
        }

        .btn-primary:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .spinner-border-sm {
          width: 1rem;
          height: 1rem;
          border-width: 2px;
        }

        .success-alert {
          background-color: #d1e7dd;
          border: 1px solid #badbcc;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-text {
          text-align: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e9ecef;
        }

        .footer-text a {
          color: #4A90E2;
          text-decoration: none;
          font-weight: 600;
        }

        .footer-text a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .signup-container {
            padding: 1rem;
          }
          
          .card-header {
            padding: 2rem 1.5rem 1rem;
          }
          
          .card-body {
            padding: 1.5rem;
          }
          
          .card-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {showSuccess && (
              <div className="success-alert" role="alert">
                <div className="d-flex align-items-center">
                  <svg className="me-3" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <div>
                    <strong>Success!</strong>
                    <br />
                    <small>Your account has been created successfully. Redirecting to login...</small>
                  </div>
                </div>
              </div>
            )}

            <div className="signup-card mx-auto">
              <div className="card-header">
                <h2 className="card-title">Create Account</h2>
                <p className="card-subtitle">Join us today and get started</p>
              </div>
              
              <div className="card-body">
                <div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Choose a username"
                      required
                    />
                    {errors.username && (
                      <span className="error-message">{errors.username}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password"
                        style={{ paddingRight: '4rem' }}
                        required
                      />
                      <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                      </span>
                    </div>
                    {errors.password && (
                      <span className="error-message">{errors.password}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>

                <div className="footer-text">
                  <p className="text-muted mb-0">
                    Already have an account? <Link to='/login'>Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;