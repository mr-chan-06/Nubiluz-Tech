import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMessage = {
      id: Date.now().toString(),
      name: `${formData.get('first-name')} ${formData.get('last-name')}`,
      email: formData.get('email'),
      phone: formData.get('phone') || 'N/A', // Added phone field check
      requirement: formData.get('message'),
      date: new Date().toISOString()
    };

    const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    localStorage.setItem('contactMessages', JSON.stringify([newMessage, ...existingMessages]));
    
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-grid animate-fade-in-up">
          <div className="contact-info">
            <div>
              <h2>Get in Touch</h2>
              <p>Have a project in mind? Let's discuss how we can help you achieve your goals.</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={24} />
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Email Us</p>
                  <p style={{ opacity: 0.8 }}>hello@nubiluz.tech</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Call Us</p>
                  <p style={{ opacity: 0.8 }}>+1 (555) 000-0000</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={24} />
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Location</p>
                  <p style={{ opacity: 0.8 }}>Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" placeholder="Doe" required />
              </div>
              <div className="form-group full-width">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group full-width">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
              </div>
              <div className="form-group full-width">
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

