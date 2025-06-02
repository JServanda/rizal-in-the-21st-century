import React from 'react';
import './MedicalPractice.css';

const MedicalPractice = () => {
  const practices = [
    {
      title: "Ophthalmology",
      year: "1882-1896",
      description: "Specialized in ophthalmology, treating various eye conditions and performing surgeries.",
      keyThemes: ["Medical expertise", "Patient care", "Surgical innovation"],
      impact: "Established a successful medical practice in Hong Kong and Dapitan, treating patients from all walks of life."
    },
    {
      title: "Public Health",
      year: "1892-1896",
      description: "Implemented public health initiatives in Dapitan, including water systems and sanitation.",
      keyThemes: ["Community health", "Infrastructure", "Preventive medicine"],
      impact: "Improved the health and living conditions of the Dapitan community through practical medical solutions."
    },
    {
      title: "Medical Research",
      year: "1882-1896",
      description: "Conducted research on tropical diseases and local medicinal plants.",
      keyThemes: ["Scientific inquiry", "Traditional medicine", "Disease prevention"],
      impact: "Contributed to the understanding of tropical medicine and local healthcare practices."
    }
  ];

  return (
    <div className="medical-practice-page">
      <div className="hero-section">
        <h1>Medical Practice</h1>
        <p className="subtitle">The medical contributions of José Rizal</p>
      </div>

      <div className="content-section">
        <div className="works-grid">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="work-card"
            >
              <div className="work-header">
                <h2>{practice.title}</h2>
                <span className="year">{practice.year}</span>
              </div>
              <p className="description">{practice.description}</p>
              <div className="themes">
                <h3>Key Themes</h3>
                <div className="themes-container">
                  {practice.keyThemes.map((theme, i) => (
                    <span key={i} className="theme-tag">{theme}</span>
                  ))}
                </div>
              </div>
              <div className="impact">
                <h3>Impact</h3>
                <p>{practice.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalPractice; 