import React, { useState } from 'react';
import './LoginForm.css';
import { login } from '../api'; // ใช้เส้นทางที่เหมาะสมตามโครงสร้างโปรเจกต์

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      if (data.success) {
        console.log('Login successful:', data);
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-header">ManPro</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="forgot-password" style={{ whiteSpace: 'nowrap' }}>
          - If you forgot password, please contact IT team -
        </p>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="separator">- or -</p>
        <button type="button" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
