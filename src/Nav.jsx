import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png';
import "./Nav.css";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <a href="#home" className="navbar-brand">
                    <img src={logo} alt="Nubiluz Tech" className="navbar-logo" />
                </a>
                
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item"><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li className="nav-item"><a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}