import React, { useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Products.css';
import { 
  Code, Smartphone, Database, ShoppingCart, 
  Search, Share2, Target, Palette, 
  GraduationCap, MonitorPlay, Briefcase,
  CheckCircle, ArrowRight, Star, Users, 
  ShieldCheck, Zap, HeartHandshake
} from 'lucide-react';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-page">
      <Nav />
      
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">Our <span className="text-gradient">Products & Services</span></h1>
            <p className="hero-subtitle">Smart Digital Solutions for Modern Businesses</p>
            <p className="hero-description">
              We build scalable software, result-driven marketing campaigns, and industry-focused training programs 
              that help businesses grow faster, operate smarter, and stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section className="service-section software-solutions">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Software Development Solutions</h2>
            <div className="title-underline"></div>
          </div>

          <div className="service-grid">
            {/* Custom Web Development */}
            <div className="service-card animate-fade-in-up stagger-1">
              <div className="service-icon"><Code size={32} /></div>
              <h3>Custom Web Development</h3>
              <p>We create modern, responsive, and high-performance websites tailored to your business goals. From corporate websites to advanced web applications, our solutions are designed for speed, security, and scalability.</p>
              <div className="glassy-overlay">
                <span>Scalable architecture built for performance.</span>
                <span>SEO optimized and conversion-ready.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Responsive UI/UX Design</li>
                <li><CheckCircle size={16} /> SEO-Friendly Architecture</li>
                <li><CheckCircle size={16} /> Admin Dashboard Integration</li>
                <li><CheckCircle size={16} /> API & Third-Party Integrations</li>
                <li><CheckCircle size={16} /> Secure & Scalable Development</li>
                <li><CheckCircle size={16} /> Cloud Deployment Support</li>
              </ul>
            </div>

            {/* Mobile App Development */}
            <div className="service-card animate-fade-in-up stagger-2">
              <div className="service-icon"><Smartphone size={32} /></div>
              <h3>Mobile App Development</h3>
              <p>Transform your ideas into powerful mobile applications for Android and iOS platforms with seamless performance and user-friendly experiences.</p>
              <div className="glassy-overlay">
                <span>Smooth UX for Android and iOS.</span>
                <span>Highly responsive and feature-rich.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Native & Hybrid Apps</li>
                <li><CheckCircle size={16} /> E-Commerce Applications</li>
                <li><CheckCircle size={16} /> Business Automation Apps</li>
                <li><CheckCircle size={16} /> Real-Time Chat & Notification Systems</li>
                <li><CheckCircle size={16} /> Maintenance & Support</li>
              </ul>
            </div>

            {/* ERP & CRM Solutions */}
            <div className="service-card animate-fade-in-up stagger-3">
              <div className="service-icon"><Database size={32} /></div>
              <h3>ERP & CRM Solutions</h3>
              <p>Streamline operations, manage customers efficiently, and improve productivity with intelligent ERP and CRM systems customized for your business workflows.</p>
              <div className="glassy-overlay">
                <span>Streamline your business workflows.</span>
                <span>Centralized data for better decisions.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Centralized Data Management</li>
                <li><CheckCircle size={16} /> Sales & Lead Tracking</li>
                <li><CheckCircle size={16} /> Employee Management</li>
                <li><CheckCircle size={16} /> Inventory & Billing Automation</li>
                <li><CheckCircle size={16} /> Business Analytics Dashboard</li>
              </ul>
            </div>

            {/* E-Commerce Development */}
            <div className="service-card animate-fade-in-up stagger-4">
              <div className="service-icon"><ShoppingCart size={32} /></div>
              <h3>E-Commerce Development</h3>
              <p>Launch feature-rich online stores with secure payment gateways, product management systems, and optimized shopping experiences.</p>
              <div className="glassy-overlay">
                <span>Convert visitors into loyal customers.</span>
                <span>Secure payments and easy management.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Multi-Vendor Platforms</li>
                <li><CheckCircle size={16} /> Inventory Management</li>
                <li><CheckCircle size={16} /> Payment Gateway Integration</li>
                <li><CheckCircle size={16} /> Order Tracking Systems</li>
                <li><CheckCircle size={16} /> Marketing Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="service-section marketing-services bg-subtle">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Digital Marketing Services</h2>
            <div className="title-underline"></div>
          </div>

          <div className="service-grid">
            {/* SEO */}
            <div className="service-card animate-fade-in-up stagger-1">
              <div className="service-icon"><Search size={32} /></div>
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Increase your online visibility and rank higher on search engines with data-driven SEO strategies designed for long-term growth.</p>
              <div className="glassy-overlay">
                <span>Rank higher on Google search results.</span>
                <span>Drive organic traffic to your site.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Keyword Research</li>
                <li><CheckCircle size={16} /> On-Page SEO</li>
                <li><CheckCircle size={16} /> Technical SEO</li>
                <li><CheckCircle size={16} /> Local SEO Optimization</li>
                <li><CheckCircle size={16} /> Competitor Analysis</li>
                <li><CheckCircle size={16} /> Monthly Performance Reports</li>
              </ul>
            </div>

            {/* Social Media Marketing */}
            <div className="service-card animate-fade-in-up stagger-2">
              <div className="service-icon"><Share2 size={32} /></div>
              <h3>Social Media Marketing</h3>
              <p>Build brand awareness and engage your audience through impactful social media campaigns across major platforms.</p>
              <div className="glassy-overlay">
                <span>Engage your audience effectively.</span>
                <span>Build a strong brand presence online.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Facebook Marketing</li>
                <li><CheckCircle size={16} /> Instagram Promotions</li>
                <li><CheckCircle size={16} /> Content Strategy & Design</li>
                <li><CheckCircle size={16} /> Audience Engagement</li>
              </ul>
            </div>

            {/* Performance Marketing */}
            <div className="service-card animate-fade-in-up stagger-3">
              <div className="service-icon"><Target size={32} /></div>
              <h3>Performance Marketing</h3>
              <p>Generate quality leads and maximize ROI with targeted paid advertising campaigns.</p>
              <div className="glassy-overlay">
                <span>Maximize ROI with targeted ads.</span>
                <span>Generate high-quality business leads.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Google Ads</li>
                <li><CheckCircle size={16} /> Meta Ads</li>
                <li><CheckCircle size={16} /> Lead Generation Campaigns</li>
                <li><CheckCircle size={16} /> Retargeting Campaigns</li>
                <li><CheckCircle size={16} /> Conversion Optimization</li>
              </ul>
            </div>

            {/* Branding & Creative Design */}
            <div className="service-card animate-fade-in-up stagger-4">
              <div className="service-icon"><Palette size={32} /></div>
              <h3>Branding & Creative Design</h3>
              <p>Create a strong and memorable brand identity that connects with your audience.</p>
              <div className="glassy-overlay">
                <span>Stunning visuals that tell your story.</span>
                <span>Unique identity for your brand.</span>
              </div>
              <ul className="feature-list">
                <li><CheckCircle size={16} /> Logo Design</li>
                <li><CheckCircle size={16} /> Brand Identity Kits</li>
                <li><CheckCircle size={16} /> Corporate Brochures</li>
                <li><CheckCircle size={16} /> Social Media Creatives</li>
                <li><CheckCircle size={16} /> Video Promotions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Training Summary Section */}
      <section className="service-section training-summary">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Professional Training & Internships</h2>
            <div className="title-underline"></div>
            <p className="mt-4">We offer industry-oriented training programs and real-time project experience through Nubi Academy.</p>
          </div>

          <div className="summary-cta-card animate-fade-in-up">
            <div className="summary-content">
              <h3>Bridge the Gap Between Learning & Industry</h3>
              <p>Explore our specialized tracks in Software Development, Digital Marketing, and our exclusive Internship programs designed for students and professionals.</p>
              <ul className="mini-feature-list">
                <li><CheckCircle size={18} /> MERN & Full Stack Tracks</li>
                <li><CheckCircle size={18} /> Performance Marketing & SEO</li>
                <li><CheckCircle size={18} /> Live Client Projects</li>
                <li><CheckCircle size={18} /> Placement Assistance</li>
              </ul>
              <Link to="/academy" className="btn btn-primary">
                Visit Nubi Academy <ArrowRight size={20} />
              </Link>
            </div>
            <div className="summary-icon">
              <GraduationCap size={120} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-section bg-subtle why-us">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="title-underline"></div>
          </div>

          <div className="why-grid">
            <div className="why-item animate-fade-in-up stagger-1">
              <div className="why-icon"><Users size={24} /></div>
              <h4>Experienced Development Team</h4>
            </div>
            <div className="why-item animate-fade-in-up stagger-2">
              <div className="why-icon"><Zap size={24} /></div>
              <h4>Innovative & Scalable Solutions</h4>
            </div>
            <div className="why-item animate-fade-in-up stagger-3">
              <div className="why-icon"><Target size={24} /></div>
              <h4>Transparent Communication</h4>
            </div>
            <div className="why-item animate-fade-in-up stagger-4">
              <div className="why-icon"><ShieldCheck size={24} /></div>
              <h4>Affordable Pricing Models</h4>
            </div>
            <div className="why-item animate-fade-in-up stagger-1">
              <div className="why-icon"><Star size={24} /></div>
              <h4>Dedicated Support & Maintenance</h4>
            </div>
            <div className="why-item animate-fade-in-up stagger-2">
              <div className="why-icon"><HeartHandshake size={24} /></div>
              <h4>Client-Centric Approach</h4>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
