import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Career.css';
import { X, Send, Briefcase, GraduationCap, MapPin, Building2, ChevronRight, CheckCircle } from 'lucide-react';

export default function Career() {
    const [careers, setCareers] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [showCareerModal, setShowCareerModal] = useState(false);
    const [showInternshipModal, setShowInternshipModal] = useState(false);
    const [activeTab, setActiveTab] = useState('careers'); // 'careers' or 'internships'
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: '',
        position: ''
    });

    const [internshipFormData, setInternshipFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        degree: '',
        branch: '',
        semester: '',
        resume: '',
        motivation: '',
        duration: '',
        skills: ''
    });

    useEffect(() => {
        const storedCareers = localStorage.getItem('careerRequirements');
        if (storedCareers) {
            setCareers(JSON.parse(storedCareers));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleInternshipInputChange = (e) => {
        const { name, value } = e.target;
        setInternshipFormData(prev => ({ ...prev, [name]: value }));
    };

    const openCareerModal = (career) => {
        setSelectedCareer(career);
        setShowCareerModal(true);
    };

    const handleSubmitApplication = (e) => {
        e.preventDefault();
        const existingCandidates = JSON.parse(localStorage.getItem('candidates')) || [];
        const newCandidate = {
            id: Date.now(),
            ...formData,
            position: selectedCareer.title,
            appliedAt: new Date().toLocaleString()
        };
        existingCandidates.push(newCandidate);
        localStorage.setItem('candidates', JSON.stringify(existingCandidates));
        alert('Application submitted successfully!');
        setFormData({ name: '', email: '', phone: '', resume: '', coverLetter: '', position: '' });
        setShowCareerModal(false);
    };

    const handleSubmitInternship = (e) => {
        e.preventDefault();
        const existingInternships = JSON.parse(localStorage.getItem('internshipApplications')) || [];
        const newInternship = {
            id: Date.now(),
            ...internshipFormData,
            appliedAt: new Date().toLocaleString(),
            status: 'pending'
        };
        existingInternships.push(newInternship);
        localStorage.setItem('internshipApplications', JSON.stringify(existingInternships));
        alert('Internship application submitted successfully!');
        setInternshipFormData({
            name: '', email: '', phone: '', college: '', degree: '', branch: '',
            semester: '', resume: '', motivation: '', duration: '', skills: ''
        });
        setShowInternshipModal(false);
    };

    return (
        <div className="career-page">
            <Nav />
            <main className="career-container">
                <section className="career-hero">
                    <div className="container">
                        <h1>Join Our Team</h1>
                        <p>Build your career with Nubiluz Tech</p>
                    </div>
                </section>

                <section className="career-tabs">
                    <div className="container">
                        <div className="tabs-wrapper">
                            <button 
                                className={`career-tab-btn ${activeTab === 'careers' ? 'active' : ''}`}
                                onClick={() => setActiveTab('careers')}
                            >
                                <Briefcase size={20} /> Career Opportunities
                            </button>
                            <button 
                                className={`career-tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
                                onClick={() => setActiveTab('internships')}
                            >
                                <GraduationCap size={20} /> Internship Program
                            </button>
                        </div>
                    </div>
                </section>

                <section className="career-content">
                    <div className="container">
                        {activeTab === 'careers' ? (
                            <div className="career-listings-wrapper">
                                <div className="section-header">
                                    <h2>Open Positions</h2>
                                    <p>Find your next challenge and grow with us.</p>
                                </div>
                                {careers.length === 0 ? (
                                    <div className="empty-careers">
                                        <Building2 size={64} />
                                        <p>No positions available at the moment. Check back soon!</p>
                                    </div>
                                ) : (
                                    <div className="careers-grid">
                                        {careers.map(career => (
                                            <div key={career.id} className="career-card-modern">
                                                <div className="card-header">
                                                    <h3>{career.title}</h3>
                                                    <span className="dept-tag">{career.department}</span>
                                                </div>
                                                <div className="card-meta">
                                                    <span><MapPin size={16} /> {career.location}</span>
                                                </div>
                                                <p className="description">{career.description}</p>
                                                <div className="requirements-preview">
                                                    <strong>Key Requirements:</strong>
                                                    <ul>
                                                        {career.requirements && career.requirements.slice(0, 3).map((req, idx) => (
                                                            <li key={idx}>{req}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <button className="apply-btn-trigger" onClick={() => openCareerModal(career)}>
                                                    Apply Now <ChevronRight size={18} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="internship-promo-wrapper">
                                <div className="internship-promo-card">
                                    <div className="promo-content">
                                        <h2>Internship Registration</h2>
                                        <p>Join our internship program and gain valuable industry experience by working on live client projects under expert mentorship.</p>
                                        <ul className="promo-features">
                                            <li><CheckCircle size={18} /> Live Client Projects</li>
                                            <li><CheckCircle size={18} /> Industry Certification</li>
                                            <li><CheckCircle size={18} /> Placement Assistance</li>
                                        </ul>
                                        <button className="btn btn-primary btn-lg" onClick={() => setShowInternshipModal(true)}>
                                            Register for Internship <ChevronRight size={20} />
                                        </button>
                                    </div>
                                    <div className="promo-visual">
                                        <GraduationCap size={150} strokeWidth={1} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {/* Career Application Modal */}
            {showCareerModal && (
                <div className="modal-overlay" onClick={() => setShowCareerModal(false)}>
                    <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowCareerModal(false)}><X size={24} /></button>
                        <div className="modal-header">
                            <h2>Apply for {selectedCareer?.title}</h2>
                            <p>Fill in your details to submit your application.</p>
                        </div>
                        <form onSubmit={handleSubmitApplication} className="application-form-modal">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number *</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 9943202681" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Resume Link (Google Drive/Dropbox) *</label>
                                <input type="url" name="resume" value={formData.resume} onChange={handleInputChange} placeholder="https://..." required />
                            </div>
                            <div className="form-group">
                                <label>Cover Letter</label>
                                <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows="4" placeholder="Why should we hire you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Submit Application <Send size={18} /></button>
                        </form>
                    </div>
                </div>
            )}

            {/* Internship Modal */}
            {showInternshipModal && (
                <div className="modal-overlay" onClick={() => setShowInternshipModal(false)}>
                    <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowInternshipModal(false)}><X size={24} /></button>
                        <div className="modal-header">
                            <h2>Internship Registration</h2>
                            <p>Join our program to gain industry experience.</p>
                        </div>
                        <form onSubmit={handleSubmitInternship} className="internship-form-modal">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input type="text" name="name" value={internshipFormData.name} onChange={handleInternshipInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input type="email" name="email" value={internshipFormData.email} onChange={handleInternshipInputChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone *</label>
                                    <input type="tel" name="phone" value={internshipFormData.phone} onChange={handleInternshipInputChange} placeholder="+91 9943202681" required />
                                </div>
                                <div className="form-group">
                                    <label>College/University *</label>
                                    <input type="text" name="college" value={internshipFormData.college} onChange={handleInternshipInputChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Degree *</label>
                                    <input type="text" name="degree" value={internshipFormData.degree} onChange={handleInternshipInputChange} placeholder="e.g. B.Tech" required />
                                </div>
                                <div className="form-group">
                                    <label>Branch *</label>
                                    <input type="text" name="branch" value={internshipFormData.branch} onChange={handleInternshipInputChange} placeholder="e.g. CSE" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Resume Link *</label>
                                <input type="url" name="resume" value={internshipFormData.resume} onChange={handleInternshipInputChange} placeholder="https://..." required />
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Register Now <Send size={18} /></button>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
