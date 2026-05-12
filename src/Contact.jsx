import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMessage = {
      name: formData.get('full-name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'N/A',
      requirement: formData.get('message'),
      date: new Date().toISOString()
    };

    // Direct connection logic (WhatsApp)
    const adminWhatsApp = "919943202681"; // TODO: Replace with real admin number
    const messageText = `*New Inquiry from Website*%0A%0A*Name:* ${newMessage.name}%0A*Email:* ${newMessage.email}%0A*Phone:* ${newMessage.phone}%0A*Requirement:* ${newMessage.requirement}`;
    
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${messageText}`;
    
    window.open(whatsappUrl, '_blank');
    alert("Redirecting to WhatsApp to connect with our admin directly...");
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
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Us</p>
                  <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>hello@nubiluz.tech</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Call Us</p>
                  <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
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
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="3" placeholder="Tell us about your project..." required></textarea>
              </div>
              <div className="form-group full-width">
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

