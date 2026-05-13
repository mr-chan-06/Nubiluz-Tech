import React, { useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, X, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
    const adminWhatsApp = "919943202681";
    const messageText = `*New Inquiry from Website*%0A%0A*Name:* ${newMessage.name}%0A*Email:* ${newMessage.email}%0A*Phone:* ${newMessage.phone}%0A*Requirement:* ${newMessage.requirement}`;
    
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${messageText}`;
    
    window.open(whatsappUrl, '_blank');
    alert("Redirecting to WhatsApp to connect with our admin directly...");
    setIsModalOpen(false);
    e.target.reset();
  };

  return (
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
  );
}

