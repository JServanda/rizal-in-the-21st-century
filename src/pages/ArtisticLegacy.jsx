import React, { useState, useEffect, useRef } from 'react';
import './ArtisticLegacy.css';

// Import images
import dapitanCurtains from '../assets/Dapitan Church Curtains.png';
import saturninaRizal from '../assets/Saturnina Rizal.png';
import moraytaPortrait from '../assets/Portrait of Morayta.png';
import allegoryPorcelain from '../assets/Allegory on a pair of porcelain bases of the new year celebration.png';
import spanishCoatOfArms from '../assets/Spanish Coat of Arms.png';
import motherOfPearl from '../assets/A Painting on a pair of mother-of-pearl.png';

const ArtisticLegacy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const [showFullImage, setShowFullImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);

  const artworks = [
    {
      imageSrc: dapitanCurtains,
      title: "Dapitan Church Curtains"
    },
    {
      imageSrc: saturninaRizal,
      title: "Saturnina Rizal"
    },
    {
      imageSrc: moraytaPortrait,
      title: "Portrait of Morayta"
    },
    {
      imageSrc: allegoryPorcelain,
      title: "Allegory on a pair of porcelain bases of the new year celebration"
    },
    {
      imageSrc: spanishCoatOfArms,
      title: "Spanish Coat of Arms"
    },
    {
      imageSrc: motherOfPearl,
      title: "A Painting on a pair of mother-of-pearl"
    }
  ];

  // Create infinite scroll effect by duplicating items
  const extendedArtworks = [...artworks, ...artworks, ...artworks];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
    startAutoScroll();
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    // Reset scroll position when reaching the end
    if (scrollLeft >= maxScroll - 100) {
      carouselRef.current.scrollLeft = clientWidth;
    } else if (scrollLeft <= 100) {
      carouselRef.current.scrollLeft = maxScroll - clientWidth;
    }

    // Update current index based on scroll position
    const cardWidth = clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth) % artworks.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      carousel.style.cursor = 'grab';
    }

    // Start auto-scroll
    startAutoScroll();

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
      // Cleanup auto-scroll interval
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll(); // Clear any existing interval
    autoScrollInterval.current = setInterval(() => {
      if (isAutoScrolling && carouselRef.current) {
        handleNext();
      }
    }, 5000); // Scroll every 5 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const works = [
    {
      title: "Self-Portrait",
      year: "1892",
      description: "A detailed self-portrait showcasing Rizal's artistic skill and self-awareness.",
      keyThemes: ["Self-reflection", "Artistic expression", "Personal identity"],
      impact: "Demonstrates Rizal's mastery of portraiture and self-expression through art."
    },
    {
      title: "Saturnina Rizal",
      year: "1889",
      description: "Portrait of Rizal's sister, capturing family bonds and artistic sensitivity.",
      keyThemes: ["Family", "Portraiture", "Emotional connection"],
      impact: "Shows Rizal's ability to capture human emotion and family relationships."
    },
    {
      title: "Dapitan Sketches",
      year: "1892-1896",
      description: "Collection of sketches and drawings made during his exile in Dapitan.",
      keyThemes: ["Nature", "Daily life", "Documentation"],
      impact: "Provides valuable historical and artistic documentation of Dapitan during Rizal's time."
    }
  ];

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: cardWidth * (currentIndex + 1 + artworks.length),
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: cardWidth * (currentIndex - 1 + artworks.length),
        behavior: 'smooth'
      });
    }
  };

  const handleImageClick = (artwork) => {
    setSelectedImage(artwork);
    setShowFullImage(true);
  };

  const handleCloseFullImage = () => {
    setShowFullImage(false);
    setSelectedImage(null);
  };

  return (
    <div className="artistic-legacy-page">
      <div className="hero-section">
        <h1>Artistic Legacy</h1>
        <p className="subtitle">The Visual Art of José Rizal</p>
        <div className="hero-description">
          <p>Explore the artistic works of José Rizal, showcasing his remarkable talent in various mediums including sketches, paintings, and sculptures. His artworks reflect his keen observation, attention to detail, and deep appreciation for beauty and culture.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>Artwork Gallery</h2>
          <p className="section-description">Browse through Rizal's artistic creations. Click and drag to explore the collection.</p>
        </div>

        <div className="artworks-carousel-section">
          <button 
            className="carousel-arrow prev"
            onClick={() => {
              handlePrev();
              stopAutoScroll();
              startAutoScroll();
            }}
            aria-label="Previous artwork"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div 
            className="carousel-container"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="carousel-track">
              {extendedArtworks.map((artwork, index) => (
                <div key={index} className="artwork-card">
                  <div 
                    className="artwork-image"
                    onClick={() => handleImageClick(artwork)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleImageClick(artwork);
                      }
                    }}
                  >
                    <img 
                      src={artwork.imageSrc} 
                      alt={artwork.title}
                      onError={(e) => {
                        e.target.src = '/images/placeholder-art.jpg';
                        e.target.alt = 'Artwork image not available';
                      }}
                    />
                    <div className="artwork-overlay">
                      <h3>{artwork.title}</h3>
                      <span className="click-hint">Click to enlarge</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-arrow next"
            onClick={() => {
              handleNext();
              stopAutoScroll();
              startAutoScroll();
            }}
            aria-label="Next artwork"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="carousel-controls">
            <div className="carousel-indicators">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    if (carouselRef.current) {
                      const cardWidth = carouselRef.current.clientWidth;
                      carouselRef.current.scrollTo({
                        left: cardWidth * (index + artworks.length),
                        behavior: 'smooth'
                      });
                      stopAutoScroll();
                      startAutoScroll();
                    }
                  }}
                  aria-label={`Go to artwork ${index + 1}`}
                />
              ))}
            </div>
            <div className="carousel-hint">
              <span>{isAutoScrolling ? '← Auto-scrolling →' : '← Paused - Hover to resume →'}</span>
            </div>
          </div>
        </div>

        <div className="artistic-context">
          <div className="context-card">
            <h3>Artistic Style</h3>
            <p>Rizal's artworks demonstrate a unique blend of European academic training and Filipino sensibility. His attention to detail and mastery of different techniques showcase his versatility as an artist.</p>
          </div>
          <div className="context-card">
            <h3>Historical Significance</h3>
            <p>Beyond their aesthetic value, Rizal's artworks serve as important historical documents, offering insights into the cultural and social landscape of his time.</p>
          </div>
          <div className="context-card">
            <h3>Legacy</h3>
            <p>Rizal's artistic contributions continue to inspire Filipino artists and serve as a testament to the rich cultural heritage of the Philippines.</p>
          </div>
        </div>
      </div>

      {showFullImage && selectedImage && (
        <div className="full-image-overlay" onClick={handleCloseFullImage}>
          <button 
            className="close-button"
            onClick={handleCloseFullImage}
            aria-label="Close full image view"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="full-image-container" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.imageSrc} 
              alt={selectedImage.title}
              className="full-image"
            />
            <div className="full-image-info">
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtisticLegacy; 