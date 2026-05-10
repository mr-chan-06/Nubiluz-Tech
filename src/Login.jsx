import React, { useState } from 'react';
import './Login.css';
import { Lock, User, LogIn } from 'lucide-react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration
    if (username === 'nubiluz' && password === 'nubiluz@2026') {
      setError('');
      onLogin(); // Trigger the callback to update authentication state
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card fade-in">
        <div className="login-header">
          <div className="login-icon-wrapper">
            <Lock size={32} />
          </div>
          <h2>Admin Access</h2>
          <p>Please enter your credentials to proceed.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error slide-up">{error}</div>}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-with-icon">
              <User size={18} className="input-icon" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary login-btn">
            Sign In <LogIn size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
