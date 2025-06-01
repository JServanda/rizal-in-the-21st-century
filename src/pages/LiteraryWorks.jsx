import React, { useState, useEffect } from 'react';
import '../components/LiteraryWorks.css';

const LiteraryWorks = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const works = [
    {
      title: "Noli Me Tangere",
      year: "1887",
      description: "Rizal's first novel, exposing the abuses of the Spanish colonial government and the Catholic Church in the Philippines.",
      keyThemes: ["Colonial oppression", "Social injustice", "National awakening"],
      impact: "Considered one of the most important works in Philippine literature, it inspired the Philippine Revolution."
    },
    {
      title: "El Filibusterismo",
      year: "1891",
      description: "The sequel to Noli Me Tangere, depicting the continued struggle against colonial oppression.",
      keyThemes: ["Revolution", "Reform", "Social change"],
      impact: "Further fueled the revolutionary movement in the Philippines."
    },
    {
      title: "Mi Último Adiós",
      year: "1896",
      description: "Rizal's final poem, written on the eve of his execution.",
      keyThemes: ["Patriotism", "Sacrifice", "Hope"],
      impact: "Became a symbol of Filipino patriotism and resistance."
    }
  ];

  return (
    <div className="literary-works-page">
      <div 
        className="hero-section parallax-section"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
          opacity: 1 - (scrollPosition * 0.002)
        }}
      >
        <h1>Literary Works</h1>
        <p className="subtitle">The written legacy of José Rizal</p>
      </div>

      <div className="content-section">
        <div className="works-grid">
          {works.map((work, index) => (
            <div 
              key={index}
              className="work-card"
              style={{
                transform: `translateY(${scrollPosition * 0.2}px)`,
                opacity: 1 - (scrollPosition * 0.001)
              }}
            >
              <div className="work-header">
                <h2>{work.title}</h2>
                <span className="year">{work.year}</span>
              </div>
              <p className="description">{work.description}</p>
              <div className="themes">
                <h3>Key Themes</h3>
                <ul>
                  {work.keyThemes.map((theme, i) => (
                    <li key={i}>{theme}</li>
                  ))}
                </ul>
              </div>
              <div className="impact">
                <h3>Impact</h3>
                <p>{work.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="quote-section parallax-section"
        style={{
          transform: `translateY(${scrollPosition * 0.3}px)`,
          opacity: 1 - (scrollPosition * 0.001)
        }}
      >
        <blockquote>
          "The glory of saving a country is not only for those who wield the sword but also for those who spread the light of knowledge."
        </blockquote>
        <cite>- José Rizal</cite>
      </div>
    </div>
  );
};

export default LiteraryWorks; 