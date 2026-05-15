import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { ArrowRight, Sparkles, CheckCircle, Code, Globe, Cpu, Layers } from 'lucide-react';
import heroImage from './assets/hero-bg.png';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const visualRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!visualRef.current) return;
      
      const rect = visualRef.current.getBoundingClientRect();
      // Calculate relative position (-0.5 to 0.5)
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePos({ x: 0, y: 0 }); // Reset to center
    };

    const element = visualRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Calculate transforms with smoothing
  const tiltX = isHovering ? mousePos.y * 15 : 0;
  const tiltY = isHovering ? -mousePos.x * 15 : 0;

  return (
    <section id="home" className="hero">
      {/* Background Decor */}
      <div className="hero-bg-decor">
        <div className="pixel-grid"></div>
        <div className="glow-sphere" style={{ 
          transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)` 
        }}></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">
            <Sparkles size={16} style={{ marginRight: '8px' }} />
            Next-Gen Digital Solutions
          </div>
          <h1 className="hero-title">
            Best Web Development Company for <span className="text-gradient">Businesses</span> | Nubiluz Tech
          </h1>
          <p className="hero-subtitle">
            Nubiluz Tech is the best web development company providing custom websites, software solutions, SEO & digital marketing services for businesses. We help startups and growing brands build a strong online presence, generate leads, and grow faster with modern technology solutions.
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
        
        <div className="hero-visual animate-fade-in-up stagger-1" ref={visualRef}>
          <div 
            className="hero-interactive-container"
            style={{
              transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transition: isHovering ? 'none' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            <div className="main-visual-hub">
              <img src={heroImage} alt="Nubiluz Visual" className="hero-image-v2" />
              <div className="hub-overlay"></div>
              <div className="scan-line"></div>
            </div>
            
            {/* Parallax Floating Icons */}
            <div className="parallax-icon p1" style={{ transform: `translate3d(${mousePos.x * 40}px, ${mousePos.y * 40}px, 50px)` }}>
              <Code size={24} />
            </div>
            <div className="parallax-icon p2" style={{ transform: `translate3d(${mousePos.x * -60}px, ${mousePos.y * -60}px, 80px)` }}>
              <Globe size={28} />
            </div>
            <div className="parallax-icon p3" style={{ transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * -50}px, 40px)` }}>
              <Cpu size={24} />
            </div>
            <div className="parallax-icon p4" style={{ transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * 30}px, 60px)` }}>
              <Layers size={24} />
            </div>

            <div className="floating-card card-1" style={{ transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 100px)` }}>
              <div className="card-icon-wrapper">
                <CheckCircle size={24} color="#16a34a" />
              </div>
              <div className="card-text">
                <p className="card-val">99% Success Rate</p>
                <p className="card-label">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

