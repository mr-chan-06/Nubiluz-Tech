import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Mail, Phone, Clock, User, LogOut } from 'lucide-react';
import Login from './Login';
import './AdminPanel.css';

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication
    const isAuth = sessionStorage.getItem('isAdminAuth') === 'true';
    setIsAuthenticated(isAuth);

    if (isAuth) {
      // Load messages from localStorage on component mount
      const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      setMessages(savedMessages);
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAdminAuth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuth');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = messages.filter(msg => msg.id !== id);
      setMessages(updatedMessages);
      localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <div className="header-actions">
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={16} /> Logout
            </button>
            <Link to="/" className="back-link">
              <ArrowLeft size={20} /> Back to Site
            </Link>
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-section-title">
          <h2>Contact Submissions</h2>
          <span className="badge">{messages.length} Total</span>
        </div>

        {messages.length === 0 ? (
          <div className="empty-state fade-in">
            <Mail size={48} className="empty-icon" />
            <h3>No messages yet</h3>
            <p>When users submit the contact form, their details will appear here.</p>
          </div>
        ) : (
          <div className="messages-grid">
            {messages.map((msg, index) => (
              <div key={msg.id} className="message-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="message-header">
                  <div className="message-author">
                    <User size={18} className="icon-text" />
                    <strong>{msg.name}</strong>
                  </div>
                  <div className="message-date">
                    <Clock size={16} className="icon-text" />
                    {formatDate(msg.date)}
                  </div>
                </div>
                
                <div className="message-contact-info">
                  <div className="info-badge">
                    <Mail size={14} /> {msg.email}
                  </div>
                  <div className="info-badge">
                    <Phone size={14} /> {msg.phone}
                  </div>
                </div>

                <div className="message-body">
                  <h4>Requirement:</h4>
                  <p>{msg.requirement}</p>
                </div>

                <div className="message-actions">
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(msg.id)}
                    title="Delete Message"
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
