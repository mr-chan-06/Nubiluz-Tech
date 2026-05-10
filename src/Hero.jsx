import React from 'react';
import './Hero.css';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import heroImage from './assets/hero-bg.png';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container" style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '4rem' }}>
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">
            <Sparkles size={16} style={{ marginRight: '8px' }} />
            Next-Gen Digital Solutions
          </div>
          <h1 className="hero-title">
            Empowering Your Business Through <span className="text-gradient">Innovation</span>
          </h1>
          <p className="hero-subtitle">
            We deliver cutting-edge software solutions and data-driven digital marketing strategies, 
            helping startups and enterprises scale seamlessly in the digital age.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in-up stagger-1">
          <div className="hero-image-container">
            <img src={heroImage} alt="Nubiluz Visual" className="hero-image" />
            
            <div className="floating-card card-1">
              <div style={{ background: '#dcfce7', padding: '8px', borderRadius: '50%' }}>
                <CheckCircle size={24} color="#16a34a" />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.875rem' }}>99% Success Rate</p>
                <p style={{ color: '#64748b', fontSize: '0.75rem' }}>Client Satisfaction</p>
              </div>
            </div>

            <div className="floating-card card-2">
              <div style={{ background: '#dbeafe', padding: '8px', borderRadius: '50%' }}>
                <Sparkles size={24} color="#2563eb" />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.875rem' }}>Expert Team</p>
                <p style={{ color: '#64748b', fontSize: '0.75rem' }}>10+ Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

