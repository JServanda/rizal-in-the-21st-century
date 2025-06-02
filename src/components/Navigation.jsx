import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
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

  const tangibleLinks = [
    { path: '/literary-works', label: 'Literary Works' },
    { path: '/artistic-legacy', label: 'Artistic Legacy' },
    { path: '/medical-practice', label: 'Medical Practice' }
  ];

  const intangibleLinks = [
    { path: '/national-hero', label: 'National Hero' },
    { path: '/languages', label: 'Languages' },
    { path: '/education', label: 'Education' }
  ];

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            José Rizal
          </Link>
          <div className="nav-links">
            <div 
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter('tangible')}
              onMouseLeave={handleDropdownLeave}
            >
              <span className={`nav-link ${activeDropdown === 'tangible' ? 'active' : ''}`}>
                Tangible
              </span>
              {activeDropdown === 'tangible' && (
                <div className="dropdown-menu">
                  {tangibleLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter('intangible')}
              onMouseLeave={handleDropdownLeave}
            >
              <span className={`nav-link ${activeDropdown === 'intangible' ? 'active' : ''}`}>
                Intangible
              </span>
              {activeDropdown === 'intangible' && (
                <div className="dropdown-menu">
                  {intangibleLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/references" 
              className={`nav-link ${location.pathname === '/references' ? 'active' : ''}`}
            >
              References
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