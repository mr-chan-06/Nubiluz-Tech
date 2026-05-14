import React from 'react';
import './Services.css';
import { 
  Code, 
  Globe, 
  Smartphone, 
  BarChart, 
  ArrowRight, 
  ShoppingBag, 
  Search, 
  Zap, 
  Share2, 
  TrendingUp, 
  Palette, 
  Briefcase,
  Layout
} from 'lucide-react';

const services = [
  {
    icon: <BarChart size={28} />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence and drive conversions."
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "E-commerce Development",
    description: "Building robust, scalable online stores that provide seamless shopping experiences for your customers."
  },
  {
    icon: <Search size={28} />,
    title: "Search Engine Optimization (SEO)",
    description: "Boosting your visibility on search engines to drive organic traffic and improve rankings."
  },
  {
    icon: <Zap size={28} />,
    title: "Branding Services",
    description: "Creating unique brand identities that resonate with your audience and stand out in the market."
  },
  {
    icon: <Code size={28} />,
    title: "Software Development",
    description: "Bespoke software solutions tailored to your unique business requirements and goals."
  },
  {
    icon: <Share2 size={28} />,
    title: "Social Media Marketing (SMM)",
    description: "Engaging your audience across social platforms to build brand loyalty and community."
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that provide a seamless user experience."
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Google Ads Management",
    description: "Optimizing your paid search campaigns to maximize ROI and reach your target audience effectively."
  },
  {
    icon: <Palette size={28} />,
    title: "Graphic & Logo Design",
    description: "Professional visual designs and logos that communicate your brand's story effectively."
  },
  {
    icon: <Briefcase size={28} />,
    title: "B2B & SaaS Marketing",
    description: "Tailored marketing strategies for B2B and SaaS businesses to drive lead generation and growth."
  },
  {
    icon: <Globe size={28} />,
    title: "WordPress Development",
    description: "High-quality, customizable WordPress websites that are easy to manage and highly functional."
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-header animate-fade-in-up">
          <h2>Our Services</h2>
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
              <div className="service-link">
                <span>Learn More</span>
                <ArrowRight size={16} className="link-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

