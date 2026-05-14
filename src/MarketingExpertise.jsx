import React from 'react';
import { 
  CheckCircle, 
  Search, 
  MousePointer2, 
  Share2, 
  FileText, 
  Video, 
  LineChart, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  Mail, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import './MarketingExpertise.css';

const specializedServices = [
  { name: "Search Engine Optimization (SEO)", icon: <Search size={20} /> },
  { name: "Pay-Per-Click Advertising (PPC)", icon: <MousePointer2 size={20} /> },
  { name: "Social Media Marketing (SMM)", icon: <Share2 size={20} /> },
  { name: "Content Marketing Services", icon: <FileText size={20} /> },
  { name: "YouTube & Video Marketing", icon: <Video size={20} /> },
  { name: "Conversion Rate Optimization (CRO)", icon: <LineChart size={20} /> },
  { name: "Online Reputation Management (ORM)", icon: <ShieldCheck size={20} /> },
  { name: "LinkedIn Marketing Solutions", icon: <Briefcase size={20} /> },
  { name: "Influencer Marketing Services", icon: <Users size={20} /> },
  { name: "SaaS & B2B Marketing", icon: <CheckCircle size={20} /> },
  { name: "WhatsApp & Email Marketing", icon: <Mail size={20} /> },
  { name: "Mobile & App Marketing Services", icon: <Smartphone size={20} /> }
];

export default function MarketingExpertise() {
  return (
    <section id="about" className="marketing-expertise section-padding">
      <div className="container">
        <div className="marketing-header animate-fade-in-up">
          <div className="section-badge">Digital Marketing</div>
          <h2>Best Digital Marketing Agency in <span className="text-gradient">Coimbatore</span></h2>
          <p className="lead-text">Grow your business with expert digital marketing services in Coimbatore designed for visibility and growth.</p>
        </div>

        <div className="marketing-grid">
          <div className="marketing-main-content animate-fade-in-up stagger-1">
            <div className="content-card">
              <h3>Digital Marketing Company in Coimbatore</h3>
              <p>
                A leading digital marketing company in Coimbatore, helping businesses grow through innovative online marketing solutions. 
                Services include SEO, social media marketing, branding, content marketing, Google Ads, and lead generation strategies 
                designed to improve online visibility and customer engagement. With result-driven digital marketing campaigns, 
                businesses can increase website traffic, generate quality leads, and build a strong brand presence in competitive markets.
              </p>
            </div>

            <div className="content-card">
              <h3>Best Digital Marketing Strategies for Business Growth</h3>
              <p>
                Digital marketing approaches will ensure that the business attracts the appropriate audience while promoting brand awareness. 
                Through the implementation of search engine optimization, social media marketing, content marketing, paid marketing approaches, 
                and performance-based campaigns, the business will have improved online presence and customer interactions. 
                Good marketing approaches should be able to leverage data and target audiences' behavior.
              </p>
            </div>

            <div className="content-card highlight">
              <h3>Best SEM Services Company in Coimbatore That Drives Quality Traffic & Leads</h3>
              <p>
                A trusted SEM services company in Coimbatore helping businesses increase online visibility, generate qualified leads, 
                and drive targeted website traffic through strategic search engine marketing campaigns. From Google Ads management 
                and PPC advertising to keyword targeting and conversion optimization, every campaign is designed to maximize ROI, 
                improve brand reach, and deliver measurable business growth in competitive digital markets.
              </p>
            </div>
          </div>

          <div className="specialized-services animate-fade-in-up stagger-2">
            <div className="specialized-header">
              <h3>Our Specialized Services</h3>
              <p>Leading digital marketing company in Coimbatore offering SEO, PPC, branding & social media services for business growth.</p>
            </div>
            
            <div className="specialized-list">
              {specializedServices.map((service, index) => (
                <div key={index} className="specialized-item">
                  <div className="item-icon">{service.icon}</div>
                  <span>{service.name}</span>
                </div>
              ))}
            </div>

            <div className="marketing-cta">
              <a href="#contact" className="btn btn-secondary">
                Consult with Experts <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
