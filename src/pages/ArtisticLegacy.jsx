import React from 'react';
import './ArtisticLegacy.css';

const ArtisticLegacy = () => {
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

  return (
    <div className="artistic-legacy-page">
      <div className="hero-section">
        <h1>Artistic Legacy</h1>
        <p className="subtitle">The visual art of José Rizal</p>
      </div>

      <div className="content-section">
        <div className="works-grid">
          {works.map((work, index) => (
            <div 
              key={index}
              className="work-card"
            >
              <div className="work-header">
                <h2>{work.title}</h2>
                <span className="year">{work.year}</span>
              </div>
              <p className="description">{work.description}</p>
              <div className="themes">
                <h3>Key Themes</h3>
                <div className="themes-container">
                  {work.keyThemes.map((theme, i) => (
                    <span key={i} className="theme-tag">{theme}</span>
                  ))}
                </div>
              </div>
              <div className="impact">
                <h3>Impact</h3>
                <p>{work.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quote-section">
        <blockquote>
          "The glory of saving a country is not only for those who wield the sword but also for those who spread the light of knowledge."
        </blockquote>
        <cite>- José Rizal, "The Philippines a Century Hence"</cite>
      </div>
    </div>
  );
};

export default ArtisticLegacy; 