import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Trash2, Mail, Phone, Clock, User, 
  LogOut, Search, Download, BarChart3, Users, 
  Calendar, FileText, ChevronRight
} from 'lucide-react';
import Login from './Login';
import './AdminPanel.css';

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const isAuth = sessionStorage.getItem('isAdminAuth') === 'true';
    setIsAuthenticated(isAuth);

    if (isAuth) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const result = await response.json();
      if (result.success) {
        setMessages(result.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAdminAuth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuth');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`/api/messages?id=${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.success) {
          setMessages(messages.filter(msg => msg._id !== id));
        }
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  const exportToCSV = () => {
    if (messages.length === 0) return;
    
    const headers = ['Name', 'Email', 'Phone', 'Requirement', 'Date'];
    const csvRows = [
      headers.join(','),
      ...messages.map(msg => [
        `"${msg.name}"`,
        `"${msg.email}"`,
        `"${msg.phone}"`,
        `"${msg.requirement.replace(/"/g, '""')}"`,
        `"${new Date(msg.date).toLocaleString()}"`
      ].join(','))
    ];
    
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `nubiluz_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = useMemo(() => {
    const today = new Date().toDateString();
    return {
      total: messages.length,
      today: messages.filter(m => new Date(m.date).toDateString() === today).length,
      thisMonth: messages.filter(m => {
        const d = new Date(m.date);
        const now = new Date();
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      }).length
    };
  }, [messages]);

  const filteredMessages = useMemo(() => {
    return messages.filter(msg => {
      const matchesSearch = 
        msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.requirement.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [messages, searchQuery]);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">Nubiluz<span>Admin</span></div>
        </div>
        <nav className="sidebar-nav">
          <button className="nav-item active">
            <BarChart3 size={20} /> Dashboard
          </button>
          <button className="nav-item" onClick={exportToCSV} disabled={messages.length === 0}>
            <Download size={20} /> Export Leads
          </button>
          <div className="nav-spacer"></div>
          <button className="nav-item logout" onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        <header className="content-header">
          <div className="header-title">
            <h1>Dashboard Overview</h1>
            <p>Manage your client inquiries and leads</p>
          </div>
          <div className="header-actions">
            <Link to="/" className="btn-secondary">
              <ArrowLeft size={18} /> View Website
            </Link>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">
              <Users size={24} />
            </div>
            <div className="stat-info">
              <h3>{stats.total}</h3>
              <p>Total Leads</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon green">
              <Calendar size={24} />
            </div>
            <div className="stat-info">
              <h3>{stats.today}</h3>
              <p>New Today</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon purple">
              <FileText size={24} />
            </div>
            <div className="stat-info">
              <h3>{stats.thisMonth}</h3>
              <p>This Month</p>
            </div>
          </div>
        </section>

        <section className="data-section">
          <div className="section-header">
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search leads..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="section-count">
              Showing {filteredMessages.length} of {messages.length} leads
            </div>
          </div>

          {filteredMessages.length === 0 ? (
            <div className="empty-state">
              <Mail size={48} />
              <h3>No leads found</h3>
              <p>Try adjusting your search or wait for new submissions.</p>
            </div>
          ) : (
            <div className="leads-table-container">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Contact Info</th>
                    <th>Requirement</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMessages.map((msg) => (
                    <tr key={msg._id} className="lead-row">
                      <td>
                        <div className="lead-client">
                          <div className="avatar">{msg.name.charAt(0)}</div>
                          <div className="name-box">
                            <span className="name">{msg.name}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="contact-details">
                          <div className="detail"><Mail size={12} /> {msg.email}</div>
                          <div className="detail"><Phone size={12} /> {msg.phone}</div>
                        </div>
                      </td>
                      <td>
                        <div className="requirement-text" title={msg.requirement}>
                          {msg.requirement.length > 60 ? msg.requirement.substring(0, 60) + '...' : msg.requirement}
                        </div>
                      </td>
                      <td>
                        <div className="date-box">
                          <Clock size={12} /> {new Date(msg.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td>
                        <button className="delete-btn" onClick={() => handleDelete(msg._id)}>
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

