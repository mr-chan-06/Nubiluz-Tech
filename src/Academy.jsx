import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Academy.css';
import { X, Send, Briefcase, GraduationCap, ArrowRight, BookOpen, Award, Users, Zap, Star, Layout, Globe, Terminal, Code2, PenTool, CheckCircle } from 'lucide-react';

export default function Academy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Save to Local Storage for Admin Panel
    const registrations = JSON.parse(localStorage.getItem('academyRegistrations')) || [];
    const newRegistration = {
      id: Date.now(),
      ...formData,
      appliedAt: new Date().toLocaleString()
    };
    registrations.push(newRegistration);
    localStorage.setItem('academyRegistrations', JSON.stringify(registrations));

    // 2. Send to WhatsApp
    const adminWhatsApp = "919943202681";
    const messageText = `*New Academy Registration*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Course:* ${formData.course}%0A*Qualification:* ${formData.qualification}%0A*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${messageText}`;
    window.open(whatsappUrl, '_blank');

    alert("Registration submitted! Redirecting to WhatsApp for further discussion.");
    setIsModalOpen(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      qualification: '',
      message: ''
    });
  };

  return (
    <div className="academy-page">
      <Nav />
      
      {/* Academy Hero */}
      <section className="academy-hero">
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="academy-badge">Nubi Academy</div>
            <h1 className="hero-title">Professional <span className="text-gradient">Training Programs</span></h1>
            <p className="hero-subtitle">Industry-oriented learning designed for the future.</p>
            <p className="hero-description">
              Bridge the gap between academic learning and industry requirements with our 
              hands-on training programs and real-world project experience.
            </p>
            <div className="hero-btns" style={{ marginTop: '2rem' }}>
               <button onClick={toggleModal} className="btn btn-primary">Enroll Now <ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development Training */}
      <section className="academy-section software-training">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Software Development Training</h2>
            <p>Master the most in-demand technologies with our comprehensive development tracks.</p>
          </div>

          <div className="course-grid">
            <div className="course-card animate-fade-in-up stagger-1" onClick={toggleModal} style={{ cursor: 'pointer' }}>
              <div className="course-icon"><Layout size={28} /></div>
              <h3>Full Stack Development</h3>
              <p>Comprehensive training covering frontend and backend technologies to build complete web applications.</p>
            </div>
            <div className="course-card animate-fade-in-up stagger-2" onClick={toggleModal} style={{ cursor: 'pointer' }}>
              <div className="course-icon"><Code2 size={28} /></div>
              <h3>MERN Stack Development</h3>
              <p>Specialized track focusing on MongoDB, Express.js, React, and Node.js for modern web apps.</p>
            </div>
            <div className="course-card animate-fade-in-up stagger-3" onClick={toggleModal} style={{ cursor: 'pointer' }}>
              <div className="course-icon"><Terminal size={28} /></div>
              <h3>Python Programming</h3>
              <p>From basics to advanced concepts, including data structures, web development, and automation.</p>
            </div>
            <div className="course-card animate-fade-in-up stagger-4" onClick={toggleModal} style={{ cursor: 'pointer' }}>
              <div className="course-icon"><Globe size={28} /></div>
              <h3>Java Development</h3>
              <p>Enterprise-grade application development using Java, Spring Boot, and robust architectures.</p>
            </div>
            <div className="course-card animate-fade-in-up stagger-1" onClick={toggleModal} style={{ cursor: 'pointer' }}>
              <div className="course-icon"><PenTool size={28} /></div>
              <h3>UI/UX Design</h3>
              <p>Learn the principles of user-centric design, prototyping, and creating stunning interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Training */}
      <section className="academy-section marketing-training bg-subtle">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Digital Marketing Training</h2>
            <p>Learn practical strategies with live projects and real campaign experience.</p>
          </div>

          <div className="module-grid">
            <div className="module-item animate-fade-in-up stagger-1">
              <CheckCircle className="check-icon" />
              <div>
                <h4>SEO & SEM</h4>
                <p>Search Engine Optimization and Marketing strategies.</p>
              </div>
            </div>
            <div className="module-item animate-fade-in-up stagger-2">
              <CheckCircle className="check-icon" />
              <div>
                <h4>Social Media Marketing</h4>
                <p>Platform-specific strategies for brand growth.</p>
              </div>
            </div>
            <div className="module-item animate-fade-in-up stagger-3">
              <CheckCircle className="check-icon" />
              <div>
                <h4>Google Ads</h4>
                <p>Mastering PPC and paid advertising campaigns.</p>
              </div>
            </div>
            <div className="module-item animate-fade-in-up stagger-4">
              <CheckCircle className="check-icon" />
              <div>
                <h4>Content Marketing</h4>
                <p>Storytelling and value-driven content creation.</p>
              </div>
            </div>
            <div className="module-item animate-fade-in-up stagger-1">
              <CheckCircle className="check-icon" />
              <div>
                <h4>Analytics & Reporting</h4>
                <p>Data-driven decision making and performance tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship & Live Projects */}
      <section className="academy-section internship-program">
        <div className="container">
          <div className="internship-box animate-fade-in-up">
            <div className="internship-content">
              <div className="service-icon"><Briefcase size={32} /></div>
              <h2>Internship & Live Projects</h2>
              <p>Gain hands-on experience through real-time projects guided by industry experts. Our internship program is designed to give you a head start in your professional career.</p>
              
              <div className="program-highlights">
                <div className="highlight-item">
                  <Star size={18} />
                  <span>Practical Assignments</span>
                </div>
                <div className="highlight-item">
                  <Star size={18} />
                  <span>Live Client Projects</span>
                </div>
                <div className="highlight-item">
                  <Star size={18} />
                  <span>Industry Mentorship</span>
                </div>
                <div className="highlight-item">
                  <Star size={18} />
                  <span>Portfolio Development</span>
                </div>
                <div className="highlight-item">
                  <Star size={18} />
                  <span>Certification Support</span>
                </div>
                <div className="highlight-item">
                  <Star size={18} />
                  <span>Placement Assistance</span>
                </div>
              </div>

              <button onClick={toggleModal} className="btn btn-primary">
                Apply for Internship <ArrowRight size={20} />
              </button>
            </div>
            <div className="internship-visual">
               <div className="stat-card">
                  <h3>95%</h3>
                  <p>Placement Rate</p>
               </div>
               <div className="stat-card">
                  <h3>50+</h3>
                  <p>Live Projects</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}><X size={24} /></button>
            <div className="modal-header">
               <h2>Registration Form</h2>
               <p>Fill in your details to get started with Nubi Academy.</p>
            </div>

            <form onSubmit={handleSubmit} className="academy-form">
               <div className="form-row">
                  <div className="form-group">
                     <label>Full Name *</label>
                     <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                     <label>Email Address *</label>
                     <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
                  </div>
               </div>

               <div className="form-row">
                  <div className="form-group">
                     <label>Phone Number *</label>
                     <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 9943202681" required />
                  </div>
                  <div className="form-group">
                     <label>Select Program *</label>
                     <select name="course" value={formData.course} onChange={handleInputChange} required>
                        <option value="">Choose a track</option>
                        <option value="Full Stack Dev">Full Stack Development</option>
                        <option value="MERN Stack">MERN Stack Development</option>
                        <option value="Python">Python Programming</option>
                        <option value="Java">Java Development</option>
                        <option value="UI/UX">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Internship">Internship Program</option>
                     </select>
                  </div>
               </div>

               <div className="form-group">
                  <label>Educational Qualification *</label>
                  <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} placeholder="e.g., B.Tech Final Year" required />
               </div>

               <div className="form-group">
                  <label>Your Goals / Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="Tell us what you want to achieve..."></textarea>
               </div>

               <button type="submit" className="btn btn-primary submit-btn">
                  Submit Application <Send size={18} />
               </button>
            </form>
          </div>
        </div>
      )}

      {/* Academy Benefits */}
      <section className="academy-section academy-benefits">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Why Learn With Us</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card animate-fade-in-up stagger-1">
              <div className="benefit-icon"><Award /></div>
              <h4>Industry Certification</h4>
              <p>Get certified upon completion of your training and projects.</p>
            </div>
            <div className="benefit-card animate-fade-in-up stagger-2">
              <div className="benefit-icon"><Users /></div>
              <h4>Expert Mentorship</h4>
              <p>Learn from professionals with years of industry experience.</p>
            </div>
            <div className="benefit-card animate-fade-in-up stagger-3">
              <div className="benefit-icon"><BookOpen /></div>
              <h4>Updated Curriculum</h4>
              <p>Our courses are constantly updated to match industry trends.</p>
            </div>
            <div className="benefit-card animate-fade-in-up stagger-4">
              <div className="benefit-icon"><Zap /></div>
              <h4>Placement Support</h4>
              <p>We help you prepare for interviews and find job opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
