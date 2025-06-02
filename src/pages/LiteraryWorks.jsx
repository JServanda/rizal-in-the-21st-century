import React, { useState } from 'react';
import '../components/LiteraryWorks.css';

const LiteraryWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      title: "Noli Me Tangere",
      year: "1887",
      description: "Rizal's first novel, exposing the abuses of the Spanish colonial government and the Catholic Church in the Philippines.",
      keyThemes: ["Colonial oppression", "Social injustice", "National awakening"],
      impact: "Considered one of the most important works in Philippine literature, it inspired the Philippine Revolution.",
      significance: "The novel's publication led to Rizal's exile and eventual martyrdom. It remains a cornerstone of Philippine literature and national identity."
    },
    {
      title: "El Filibusterismo",
      year: "1891",
      description: "The sequel to Noli Me Tangere, depicting the continued struggle against colonial oppression.",
      keyThemes: ["Revolution", "Reform", "Social change"],
      impact: "Further fueled the revolutionary movement in the Philippines.",
      significance: "Considered a more radical work than its predecessor, it directly influenced the Philippine Revolution."
    },
    {
      title: "Mi Último Adiós",
      year: "1896",
      description: "Rizal's final poem, written on the eve of his execution.",
      keyThemes: ["Patriotism", "Sacrifice", "Hope"],
      impact: "Became a symbol of Filipino patriotism and resistance.",
      significance: "One of the most famous poems in Philippine literature, it continues to inspire Filipinos in their struggle for freedom and justice."
    }
  ];

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  return (
    <div className="literary-works-page">
      <div className="hero-section">
        <h1>Literary Works</h1>
        <p className="subtitle">The written legacy of José Rizal</p>
      </div>

      <div className="content-section">
        <div className="works-grid">
          {works.map((work, index) => (
            <div 
              key={index}
              className="work-card clickable"
              onClick={() => handleWorkClick(work)}
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

      {selectedWork && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="work-details">
              <h2>{selectedWork.title}</h2>
              <div className="work-year">{selectedWork.year}</div>
              
              <section className="work-section">
                <h3>Summary</h3>
                <p>{selectedWork.description}</p>
              </section>

              <section className="work-section">
                <h3>Key Themes</h3>
                <div className="themes-container">
                  {selectedWork.keyThemes.map((theme, index) => (
                    <span key={index} className="theme-tag">{theme}</span>
                  ))}
                </div>
              </section>

              <section className="work-section">
                <h3>Impact</h3>
                <p>{selectedWork.impact}</p>
              </section>

              <section className="work-section">
                <h3>Historical Significance</h3>
                <p>{selectedWork.significance}</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiteraryWorks; 