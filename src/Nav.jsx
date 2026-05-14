import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';
import "./Nav.css";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Nubiluz Tech" className="navbar-logo" />
                </Link>
                
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/academy" className={`nav-link ${location.pathname === '/academy' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Nubi Academy</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/career" className={`nav-link ${location.pathname === '/career' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Career</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
