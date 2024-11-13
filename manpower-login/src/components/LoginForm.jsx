// src/components/LoginForm.jsx
import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <h1 className="login-header">ManPro</h1>
      <div className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <p className="forgot-password" style={{ whiteSpace: "nowrap" }}>
        - If you forgot password, please contact IT team -
      </p>
        <button className="login-button">Login</button>
        <p className="separator">- or -</p>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default LoginForm;
