import React from 'react';
import './NationalHero.css';

const NationalHero = () => {
  const aspects = [
    {
      title: "Revolutionary Ideas",
      year: "1887-1896",
      description: "Through his writings, Rizal exposed the abuses of Spanish colonial rule and inspired a peaceful revolution for reform.",
      keyThemes: ["Reform", "National awakening", "Peaceful resistance"],
      impact: "His ideas became the foundation of the Philippine Revolution and the country's struggle for independence."
    },
    {
      title: "Martyrdom",
      year: "1896",
      description: "Rizal's execution at Bagumbayan (now Rizal Park) transformed him into a symbol of martyrdom and national sacrifice.",
      keyThemes: ["Sacrifice", "Patriotism", "Legacy"],
      impact: "His death united Filipinos and strengthened the revolutionary movement against Spanish rule."
    },
    {
      title: "National Recognition",
      year: "1898-Present",
      description: "Recognized as the preeminent national hero of the Philippines, Rizal's legacy continues to inspire generations.",
      keyThemes: ["National identity", "Heroism", "Inspiration"],
      impact: "His life and works remain central to Philippine education and national consciousness."
    }
  ];

  return (
    <div className="national-hero-page">
      <div className="hero-section">
        <h1>National Hero</h1>
        <p className="subtitle">The legacy of José Rizal as the Philippines' national hero</p>
      </div>

      <div className="content-section">
        <div className="intro-text">
          <p>
            José Rizal is recognized as the national hero of the Philippines, not for leading an armed revolution, 
            but for his intellectual contributions that awakened Filipino nationalism. His life and works continue 
            to inspire the Filipino people in their pursuit of freedom, justice, and national identity.
          </p>
          <div className="historical-note">
            <p>
              <strong>Historical Note:</strong> Even José Rizal, considered as the greatest among the Filipino heroes, 
              was not explicitly proclaimed as a national hero through any law or executive order. His status as the 
              preeminent national hero evolved through popular recognition and historical consensus, reflecting the 
              profound impact of his life and works on the Filipino people's struggle for independence and national identity.
            </p>
            <p className="source">
              Source: National Commission for Culture and the Arts (NCCA)
            </p>
          </div>
        </div>

        <div className="works-grid">
          {aspects.map((aspect, index) => (
            <div 
              key={index}
              className="work-card"
            >
              <div className="work-header">
                <h2>{aspect.title}</h2>
                <span className="year">{aspect.year}</span>
              </div>
              <p className="description">{aspect.description}</p>
              <div className="themes">
                <h3>Key Themes</h3>
                <div className="themes-container">
                  {aspect.keyThemes.map((theme, i) => (
                    <span key={i} className="theme-tag">{theme}</span>
                  ))}
                </div>
              </div>
              <div className="impact">
                <h3>Impact</h3>
                <p>{aspect.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <h2>Why Rizal?</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Intellectual Leadership</h3>
              <p>Rizal's writings exposed the injustices of colonial rule and provided a vision for a free Philippines.</p>
            </div>
            <div className="info-card">
              <h3>Peaceful Reform</h3>
              <p>He advocated for peaceful reforms through education and civic participation rather than violent revolution.</p>
            </div>
            <div className="info-card">
              <h3>Universal Values</h3>
              <p>His ideals of freedom, justice, and human dignity resonate with people worldwide.</p>
            </div>
            <div className="info-card">
              <h3>Enduring Legacy</h3>
              <p>His life and works continue to inspire Filipinos in their pursuit of national development and progress.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-section">
        <blockquote>
          "I die without seeing the dawn brighten over my native land. You, who have it to see, welcome it - and forget not those who have fallen during the night."
        </blockquote>
        <cite>- José Rizal, Mi Último Adiós</cite>
      </div>
    </div>
  );
};

export default NationalHero; 