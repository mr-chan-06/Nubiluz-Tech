import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Contact.css';
import { Mail, Phone, MapPin, Send, X, MessageSquare, Star, Zap, Users, BarChart, HeartHandshake, Target, CheckCircle, Palette } from 'lucide-react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMessage = {
      id: Date.now(),
      name: formData.get('full-name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'N/A',
      requirement: formData.get('message'),
      date: new Date().toLocaleString()
    };

    // Save to Local Storage for Admin Panel
    const existingMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    existingMessages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
    
    alert("Thank you! Your message has been sent successfully. Our team will get back to you soon.");
    setIsModalOpen(false);
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <Nav />
      {/* Digital Marketing Strategy Section */}
      <section className="service-section marketing-strategy bg-subtle section-padding">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">We Deliver <span className="text-gradient">Strategic Digital Marketing Solutions</span> for Business Growth</h2>
            <div className="title-underline"></div>
            <p className="lead-text">
              We deliver strategic digital marketing solutions designed to help businesses increase online visibility, 
              attract targeted customers, and generate quality leads. Our expertise in SEO, PPC, social media marketing, 
              and branding helps businesses build a strong digital presence and achieve long-term growth.
            </p>
          </div>

          <div className="vision-mission-grid">
            <div className="vision-card animate-fade-in-up stagger-1">
              <h3><Target size={24} /> Our Vision</h3>
              <p>
                To become a leading web development company delivering innovative digital solutions that help 
                businesses grow, scale, and succeed online.
              </p>
            </div>
            <div className="mission-card animate-fade-in-up stagger-2">
              <h3><Zap size={24} /> Our Mission</h3>
              <p>
                To become a trusted digital marketing company helping businesses grow with innovative strategies, 
                branding, SEO & technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are the Best Section */}
      <section className="service-section why-best-agency section-padding">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Why We Are the Best <span className="text-gradient">Digital Marketing & Branding Agency</span> for Business Growth</h2>
            <div className="title-underline"></div>
          </div>

          <div className="why-best-grid">
            <div className="why-best-item animate-fade-in-up stagger-1">
              <div className="why-best-icon"><Star size={28} /></div>
              <h4>10+ Years of Proven Digital Marketing Expertise</h4>
              <p>
                Our 10+ years of experience will improve your business with outcome-driven digital marketing campaigns, 
                higher online visibility, quality leads, and an increased long-term business value.
              </p>
            </div>

            <div className="why-best-item animate-fade-in-up stagger-2">
              <div className="why-best-icon"><Zap size={28} /></div>
              <h4>Innovative & Result Driven Marketing Strategies</h4>
              <p>
                Our creative and potent digital marketing strategies, focused on your objectives, will make your brand 
                reach, engagement, and sales skyrocket using SEO, branding, and other online marketing tactics.
              </p>
            </div>

            <div className="why-best-item animate-fade-in-up stagger-3">
              <div className="why-best-icon"><Users size={28} /></div>
              <h4>Experienced Digital Marketing Professionals</h4>
              <p>
                Let our digital marketing specialists manage your SEO, PPC Advertising, Social Media Marketing, 
                Branding, and Lead Generation services so your business flourishes online.
              </p>
            </div>

            <div className="why-best-item animate-fade-in-up stagger-4">
              <div className="why-best-icon"><BarChart size={28} /></div>
              <h4>Advanced Performance Tracking & Analytics</h4>
              <p>
         Monitor website traffic, performance of your campaigns, viewer participation, and your company's growth 
                with precise and detailed analytics and performance tracking reports.
              </p>
            </div>

            <div className="why-best-item animate-fade-in-up stagger-1">
              <div className="why-best-icon"><HeartHandshake size={28} /></div>
              <h4>Dependable 24/7 Client Support</h4>
              <p>
                Our diligent support team will always be on standby to assist you, offer guidance on marketing, share 
                campaign progress reports, and provide consultations so your online business is smooth and grows.
              </p>
            </div>

            <div className="why-best-item animate-fade-in-up stagger-2">
              <div className="why-best-icon"><Target size={28} /></div>
              <h4>Data Driven Marketing Outcomes</h4>
              <p>
                We generate outstanding results from data-driven digital marketing that increase your brand visibility, 
                acquire the correct customers, and increase sales conversions with increased engagement.
              </p>
            </div>

            <div className="why-best-item animate-fade-in-up stagger-3">
              <div className="why-best-icon"><CheckCircle size={28} /></div>
              <h4>Respected Business Marketers for Proven Results</h4>
              <p>
                Businesses count on us to provide quality leads, outstanding SEO services, and strong brand recognition 
                as part of a robust marketing plan for years.
              </p>
            </div>

            <div className="why-best-item animate-fade-in-up stagger-4">
              <div className="why-best-icon"><Palette size={28} /></div>
              <h4>Sophisticated SEO & Marketing Tools</h4>
              <p>
                Utilize superior SEO and advanced digital marketing instruments such as automation and analytics to 
                create campaigns that optimize business performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-cta-wrapper animate-fade-in-up">
          <div className="contact-info-card">
            <div className="info-header">
              <div className="info-icon"><MessageSquare size={32} /></div>
              <h2>Let's Talk Business</h2>
              <p>Have a project in mind? Let's discuss how we can help you achieve your goals.</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="item-label">Email Us</p>
                  <p className="item-value">hello@nubiluz.tech</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="item-label">Call Us</p>
                  <p className="item-value">+91 9943202681</p>
                </div>
              </div>
            </div>

            <button onClick={toggleModal} className="btn btn-primary contact-trigger-btn">
              Send a Message <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}><X size={24} /></button>
            <div className="modal-header">
               <h2>Inquiry Form</h2>
               <p>Tell us about your project requirements.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group full-width">
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" name="full-name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (Optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 9943202681" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
      </section>
      <Footer />
    </div>
  );
}

