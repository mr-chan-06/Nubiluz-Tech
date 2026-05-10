import React from 'react';
import './About.css';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';
import aboutImage from './assets/about.png';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual animate-fade-in-up">
            <img src={aboutImage} alt="About Nubiluz" className="about-image" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
          
          <div className="about-content animate-fade-in-up stagger-1">
            <h2>Helping Businesses Navigate the Digital Frontier</h2>
            <p>
              At Nubiluz, we combine technical expertise with creative vision to deliver solutions that drive real business value. 
              Our team of dedicated professionals works tirelessly to ensure your project exceeds expectations.
            </p>
            
            <div className="about-features">
              <div className="about-feature-item">
                <CheckCircle2 size={20} />
                <span>Quality Assurance</span>
              </div>
              <div className="about-feature-item">
                <Users size={20} />
                <span>Client Centric</span>
              </div>
              <div className="about-feature-item">
                <Award size={20} />
                <span>Industry Leaders</span>
              </div>
              <div className="about-feature-item">
                <Zap size={20} />
                <span>Rapid Delivery</span>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

