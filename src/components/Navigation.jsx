import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            José Rizal
          </Link>
          <div className="nav-links">
            <Link to="/literary-works" className={location.pathname === '/literary-works' ? 'active' : ''}>
              Literary Works
            </Link>
            <Link to="/national-hero" className={location.pathname === '/national-hero' ? 'active' : ''}>
              National Hero
            </Link>
            <Link to="/medical-practice" className={location.pathname === '/medical-practice' ? 'active' : ''}>
              Medical Practice
            </Link>
            <Link to="/languages" className={location.pathname === '/languages' ? 'active' : ''}>
              Languages
            </Link>
            <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>
              Education
            </Link>
            <Link to="/artistic-legacy" className={location.pathname === '/artistic-legacy' ? 'active' : ''}>
              Artistic Legacy
            </Link>
          </div>
        </div>
      </nav>
      {/* {isHomePage && (
        <div className="scroll-indicator">
          <div 
            className="scroll-progress" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )} */}
    </>
  );
};

export default Navigation; 