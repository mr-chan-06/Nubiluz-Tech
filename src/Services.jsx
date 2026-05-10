import React from 'react';
import './Services.css';
import { Code, Globe, Database, Smartphone, Shield, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Code size={28} />,
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business requirements and goals."
  },
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    description: "High-performance, responsive websites and web applications built with modern frameworks."
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps that provide a seamless user experience."
  },
  {
    icon: <Database size={28} />,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with our advanced analytics and BI solutions."
  },
  {
    icon: <Shield size={28} />,
    title: "Cyber Security",
    description: "Protect your digital assets with our comprehensive security audits and solutions."
  },
  {
    icon: <BarChart size={28} />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence and drive conversions."
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-header animate-fade-in-up">
          <h2>Our Expertise</h2>
          <p>We provide a wide range of digital services to help your business thrive in the modern world.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

