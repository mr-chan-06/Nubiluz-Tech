import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState('careers');
    const [careers, setCareers] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [internships, setInternships] = useState([]);
    const [academyLeads, setAcademyLeads] = useState([]);
    const [inquiries, setInquiries] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        description: '',
        requirements: ''
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Check if admin is authenticated
        const adminAuth = localStorage.getItem('adminAuthenticated');
        if (adminAuth) {
            setIsAuthenticated(true);
        }

        loadCareersAndCandidates();
    }, []);

    const loadCareersAndCandidates = () => {
        const storedCareers = JSON.parse(localStorage.getItem('careerRequirements')) || [];
        const storedCandidates = JSON.parse(localStorage.getItem('candidates')) || [];
        const storedInternships = JSON.parse(localStorage.getItem('internshipApplications')) || [];
        const storedAcademyLeads = JSON.parse(localStorage.getItem('academyRegistrations')) || [];
        const storedInquiries = JSON.parse(localStorage.getItem('contactMessages')) || [];
        setCareers(storedCareers);
        setCandidates(storedCandidates);
        setInternships(storedInternships);
        setAcademyLeads(storedAcademyLeads);
        setInquiries(storedInquiries);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password check (In production, use proper backend authentication)
        if (password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuthenticated', 'true');
            setPassword('');
            alert('Login successful!');
        } else {
            alert('Invalid password');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuthenticated');
        setShowForm(false);
        setEditingId(null);
        setFormData({
            title: '',
            department: '',
            location: '',
            description: '',
            requirements: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitCareer = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.department || !formData.location) {
            alert('Please fill in all required fields');
            return;
        }

        const requirementsArray = formData.requirements
            .split('\n')
            .map(req => req.trim())
            .filter(req => req !== '');

        if (editingId) {
            // Update existing career
            const updatedCareers = careers.map(c =>
                c.id === editingId
                    ? {
                        ...c,
                        title: formData.title,
                        department: formData.department,
                        location: formData.location,
                        description: formData.description,
                        requirements: requirementsArray
                    }
                    : c
            );
            setCareers(updatedCareers);
            localStorage.setItem('careerRequirements', JSON.stringify(updatedCareers));
            alert('Career updated successfully!');
            setEditingId(null);
        } else {
            // Add new career
            const newCareer = {
                id: Date.now(),
                title: formData.title,
                department: formData.department,
                location: formData.location,
                description: formData.description,
                requirements: requirementsArray,
                createdAt: new Date().toLocaleString()
            };
            const updatedCareers = [...careers, newCareer];
            setCareers(updatedCareers);
            localStorage.setItem('careerRequirements', JSON.stringify(updatedCareers));
            alert('Career added successfully!');
        }

        setFormData({
            title: '',
            department: '',
            location: '',
            description: '',
            requirements: ''
        });
        setShowForm(false);
    };

    const handleEditCareer = (career) => {
        setFormData({
            title: career.title,
            department: career.department,
            location: career.location,
            description: career.description,
            requirements: career.requirements.join('\n')
        });
        setEditingId(career.id);
        setShowForm(true);
    };

    const handleDeleteCareer = (id) => {
        if (confirm('Are you sure you want to delete this career?')) {
            const updatedCareers = careers.filter(c => c.id !== id);
            setCareers(updatedCareers);
            localStorage.setItem('careerRequirements', JSON.stringify(updatedCareers));
            alert('Career deleted successfully!');
        }
    };

    const handleDeleteCandidate = (id) => {
        if (confirm('Are you sure you want to delete this candidate?')) {
            const updatedCandidates = candidates.filter(c => c.id !== id);
            setCandidates(updatedCandidates);
            localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
            alert('Candidate deleted successfully!');
        }
    };

    const downloadCSV = (data, fileName) => {
        if (data.length === 0) return;
        
        // Get headers from the first object
        const headers = Object.keys(data[0]);
        const csvRows = [];
        
        // Add headers
        csvRows.push(headers.join(','));
        
        // Add data rows
        for (const row of data) {
            const values = headers.map(header => {
                const val = row[header] || '';
                const escaped = ('' + val).replace(/"/g, '""'); // Escape double quotes
                return `"${escaped}"`; // Enclose in double quotes
            });
            csvRows.push(values.join(','));
        }
        
        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileName}-${new Date().toISOString().split('T')[0]}.csv`);
        link.click();
    };

    const handleExportCandidates = () => {
        downloadCSV(candidates, 'candidates');
    };

    const handleDeleteInternship = (id) => {
        if (confirm('Are you sure you want to delete this internship application?')) {
            const updatedInternships = internships.filter(i => i.id !== id);
            setInternships(updatedInternships);
            localStorage.setItem('internshipApplications', JSON.stringify(updatedInternships));
            alert('Internship application deleted successfully!');
        }
    };

    const handleExportInternships = () => {
        downloadCSV(internships, 'internships');
    };

    const handleDeleteAcademyLead = (id) => {
        if (confirm('Are you sure you want to delete this academy registration?')) {
            const updatedLeads = academyLeads.filter(l => l.id !== id);
            setAcademyLeads(updatedLeads);
            localStorage.setItem('academyRegistrations', JSON.stringify(updatedLeads));
            alert('Lead deleted successfully!');
        }
    };

    const handleExportAcademyLeads = () => {
        downloadCSV(academyLeads, 'academy-leads');
    };

    const handleDeleteInquiry = (id) => {
        if (confirm('Are you sure you want to delete this inquiry?')) {
            const updatedInquiries = inquiries.filter(i => i.id !== id);
            setInquiries(updatedInquiries);
            localStorage.setItem('contactMessages', JSON.stringify(updatedInquiries));
            alert('Inquiry deleted successfully!');
        }
    };

    const handleExportInquiries = () => {
        downloadCSV(inquiries, 'contact-inquiries');
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="login-box">
                    <h1>Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter admin password"
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <Link to="/" className="back-link">← Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-panel">
            <header className="admin-header">
                <div className="header-content">
                    <h1>Admin Panel</h1>
                    <div className="header-actions">
                        <Link to="/" className="back-to-home">
                            <ArrowLeft size={20} /> Back to Home
                        </Link>
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </div>
                </div>
            </header>

            <div className="admin-content">
                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'careers' ? 'active' : ''}`}
                        onClick={() => setActiveTab('careers')}
                    >
                        Career Management
                    </button>
                    <button
                        className={`tab ${activeTab === 'candidates' ? 'active' : ''}`}
                        onClick={() => setActiveTab('candidates')}
                    >
                        Candidates ({candidates.length})
                    </button>
                    <button
                        className={`tab ${activeTab === 'internships' ? 'active' : ''}`}
                        onClick={() => setActiveTab('internships')}
                    >
                        Internships ({internships.length})
                    </button>
                    <button
                        className={`tab ${activeTab === 'academy' ? 'active' : ''}`}
                        onClick={() => setActiveTab('academy')}
                    >
                        Academy Leads ({academyLeads.length})
                    </button>
                    <button
                        className={`tab ${activeTab === 'inquiries' ? 'active' : ''}`}
                        onClick={() => setActiveTab('inquiries')}
                    >
                        Contact Inquiries ({inquiries.length})
                    </button>
                </div>

                {activeTab === 'careers' && (
                    <section className="tab-content">
                        <div className="section-header">
                            <h2>Career Requirements</h2>
                            <button
                                className="add-btn"
                                onClick={() => {
                                    setShowForm(!showForm);
                                    setEditingId(null);
                                    setFormData({
                                        title: '',
                                        department: '',
                                        location: '',
                                        description: '',
                                        requirements: ''
                                    });
                                }}
                            >
                                {showForm ? 'Cancel' : '+ Add New Career'}
                            </button>
                        </div>

                        {showForm && (
                            <div className="career-form-container">
                                <form onSubmit={handleSubmitCareer} className="career-form">
                                    <div className="form-group">
                                        <label htmlFor="title">Job Title *</label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Senior React Developer"
                                            required
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="department">Department *</label>
                                            <input
                                                type="text"
                                                id="department"
                                                name="department"
                                                value={formData.department}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Engineering"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="location">Location *</label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                placeholder="e.g., New York"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            placeholder="Job description..."
                                            rows="4"
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="requirements">Requirements (one per line)</label>
                                        <textarea
                                            id="requirements"
                                            name="requirements"
                                            value={formData.requirements}
                                            onChange={handleInputChange}
                                            placeholder="5+ years of React experience&#10;Node.js knowledge&#10;Team player"
                                            rows="5"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        {editingId ? 'Update Career' : 'Add Career'}
                                    </button>
                                </form>
                            </div>
                        )}

                        <div className="careers-grid">
                            {careers.length === 0 ? (
                                <p className="empty-state">No career openings yet. Add one to get started!</p>
                            ) : (
                                careers.map(career => (
                                    <div key={career.id} className="career-item">
                                        <h3>{career.title}</h3>
                                        <p className="meta">{career.department} • {career.location}</p>
                                        <p className="description">{career.description}</p>
                                        <div className="actions">
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEditCareer(career)}
                                            >
                                                <Edit2 size={18} /> Edit
                                            </button>
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDeleteCareer(career.id)}
                                            >
                                                <Trash2 size={18} /> Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                )}

                {activeTab === 'candidates' && (
                    <section className="tab-content">
                        <div className="section-header">
                            <h2>Candidate Details</h2>
                            {candidates.length > 0 && (
                                <button className="export-btn" onClick={handleExportCandidates}>
                                    📥 Export to Excel
                                </button>
                            )}
                        </div>

                        {candidates.length === 0 ? (
                            <p className="empty-state">No candidates yet.</p>
                        ) : (
                            <div className="candidates-table">
                                <div className="table-header">
                                    <div className="cell">Name</div>
                                    <div className="cell">Email</div>
                                    <div className="cell">Phone</div>
                                    <div className="cell">Position</div>
                                    <div className="cell">Applied At</div>
                                    <div className="cell">Resume</div>
                                    <div className="cell">Action</div>
                                </div>
                                {candidates.map(candidate => (
                                    <div key={candidate.id} className="table-row">
                                        <div className="cell">{candidate.name}</div>
                                        <div className="cell">{candidate.email}</div>
                                        <div className="cell">{candidate.phone}</div>
                                        <div className="cell">{candidate.position}</div>
                                        <div className="cell">{candidate.appliedAt}</div>
                                        <div className="cell">
                                            <a href={candidate.resume} target="_blank" rel="noopener noreferrer" className="resume-link">
                                                View
                                            </a>
                                        </div>
                                        <div className="cell">
                                            <button
                                                className="delete-btn-small"
                                                onClick={() => handleDeleteCandidate(candidate.id)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}

                {activeTab === 'internships' && (
                    <section className="tab-content">
                        <div className="section-header">
                            <h2>Internship Applications</h2>
                            {internships.length > 0 && (
                                <button className="export-btn" onClick={handleExportInternships}>
                                    📥 Export to Excel
                                </button>
                            )}
                        </div>

                        {internships.length === 0 ? (
                            <p className="empty-state">No internship applications yet.</p>
                        ) : (
                            <div className="internship-grid">
                                {internships.map(internship => (
                                    <div key={internship.id} className="internship-card">
                                        <div className="card-header">
                                            <h3>{internship.name}</h3>
                                            <span className={`status ${internship.status}`}>{internship.status}</span>
                                        </div>
                                        <div className="card-details">
                                            <p><strong>Email:</strong> <a href={`mailto:${internship.email}`}>{internship.email}</a></p>
                                            <p><strong>Phone:</strong> {internship.phone}</p>
                                            <p><strong>College:</strong> {internship.college}</p>
                                            <p><strong>Degree:</strong> {internship.degree}</p>
                                            <p><strong>Branch:</strong> {internship.branch}</p>
                                            <p><strong>Semester:</strong> {internship.semester}</p>
                                            <p><strong>Duration:</strong> {internship.duration}</p>
                                            <p><strong>Skills:</strong> {internship.skills}</p>
                                            <p><strong>Applied At:</strong> {internship.appliedAt}</p>
                                        </div>
                                        {internship.motivation && (
                                            <div className="motivation">
                                                <strong>Motivation:</strong>
                                                <p>{internship.motivation}</p>
                                            </div>
                                        )}
                                        <div className="card-actions">
                                            <a href={internship.resume} target="_blank" rel="noopener noreferrer" className="resume-link-btn">
                                                📄 View Resume
                                            </a>
                                            <button
                                                className="delete-btn-small"
                                                onClick={() => handleDeleteInternship(internship.id)}
                                                title="Delete application"
                                            >
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
                {activeTab === 'academy' && (
                    <section className="tab-content">
                        <div className="section-header">
                            <h2>Academy Registrations</h2>
                            {academyLeads.length > 0 && (
                                <button className="export-btn" onClick={handleExportAcademyLeads}>
                                    📥 Export to Excel
                                </button>
                            )}
                        </div>

                        {academyLeads.length === 0 ? (
                            <p className="empty-state">No academy registrations yet.</p>
                        ) : (
                            <div className="candidates-table">
                                <div className="table-header">
                                    <div className="cell">Name</div>
                                    <div className="cell">Email</div>
                                    <div className="cell">Phone</div>
                                    <div className="cell">Course</div>
                                    <div className="cell">Qualification</div>
                                    <div className="cell">Applied At</div>
                                    <div className="cell">Action</div>
                                </div>
                                {academyLeads.map(lead => (
                                    <div key={lead.id} className="table-row">
                                        <div className="cell">{lead.name}</div>
                                        <div className="cell">{lead.email}</div>
                                        <div className="cell">{lead.phone}</div>
                                        <div className="cell">{lead.course}</div>
                                        <div className="cell">{lead.qualification}</div>
                                        <div className="cell">{lead.appliedAt}</div>
                                        <div className="cell">
                                            <button
                                                className="delete-btn-small"
                                                onClick={() => handleDeleteAcademyLead(lead.id)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
                {activeTab === 'inquiries' && (
                    <section className="tab-content">
                        <div className="section-header">
                            <h2>Contact Inquiries</h2>
                            {inquiries.length > 0 && (
                                <button className="export-btn" onClick={handleExportInquiries}>
                                    📥 Export to Excel
                                </button>
                            )}
                        </div>

                        {inquiries.length === 0 ? (
                            <p className="empty-state">No inquiries yet.</p>
                        ) : (
                            <div className="candidates-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Requirement</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inquiries.map(inquiry => (
                                            <tr key={inquiry.id}>
                                                <td>{inquiry.date}</td>
                                                <td>{inquiry.name}</td>
                                                <td>{inquiry.email}</td>
                                                <td>{inquiry.phone}</td>
                                                <td className="message-cell">{inquiry.requirement}</td>
                                                <td>
                                                    <button
                                                        className="delete-btn"
                                                        onClick={() => handleDeleteInquiry(inquiry.id)}
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
}
