import React from 'react';
import './Languages.css';

const Languages = () => {
  const languages = [
    {
      title: "Spanish",
      proficiency: "Native-like",
      description: "Rizal's primary language of education and literary expression. He wrote his major works in Spanish.",
      keyThemes: ["Literary expression", "Education", "International communication"],
      impact: "His Spanish writings reached a global audience and influenced Philippine literature."
    },
    {
      title: "Tagalog",
      proficiency: "Native",
      description: "His mother tongue and the language of his childhood. He used it to connect with the Filipino people.",
      keyThemes: ["Cultural identity", "Local communication", "Folk literature"],
      impact: "Helped preserve and promote Filipino cultural heritage through native language."
    },
    {
      title: "Other Languages",
      proficiency: "Advanced",
      description: "Rizal was proficient in multiple languages including English, French, German, Italian, and Latin.",
      keyThemes: ["International relations", "Academic study", "Cultural exchange"],
      impact: "Enabled him to engage with global intellectual communities and access diverse knowledge."
    }
  ];

  const contributions = [
    {
      title: "Language Studies",
      description: "Conducted research on Philippine languages and their relationships to other Austronesian languages.",
      significance: "Contributed to the understanding of Philippine linguistics and language evolution."
    },
    {
      title: "Translation Work",
      description: "Translated works between Spanish, Tagalog, and other languages, making literature accessible to different audiences.",
      significance: "Bridged cultural gaps and promoted cross-cultural understanding."
    },
    {
      title: "Language Education",
      description: "Advocated for multilingual education and the importance of learning multiple languages.",
      significance: "Influenced Philippine educational policies and language teaching methods."
    },
    {
      title: "Cultural Preservation",
      description: "Used language as a tool to preserve and promote Filipino cultural heritage.",
      significance: "Helped maintain cultural identity while embracing global perspectives."
    }
  ];

  return (
    <div className="languages-page">
      <div className="hero-section">
        <h1>Languages</h1>
        <p className="subtitle">José Rizal's linguistic legacy and contributions to Philippine languages</p>
      </div>

      <div className="content-section">
        <div className="intro-text">
          <p>
            José Rizal was a polyglot who mastered multiple languages, using them as tools for education, 
            communication, and cultural preservation. His linguistic abilities not only facilitated his 
            international connections but also helped him bridge cultural gaps and promote Filipino heritage.
          </p>
        </div>

        <div className="works-grid">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="work-card"
            >
              <div className="work-header">
                <h2>{language.title}</h2>
                <span className="proficiency">{language.proficiency}</span>
              </div>
              <p className="description">{language.description}</p>
              <div className="themes">
                <h3>Key Themes</h3>
                <div className="themes-container">
                  {language.keyThemes.map((theme, i) => (
                    <span key={i} className="theme-tag">{theme}</span>
                  ))}
                </div>
              </div>
              <div className="impact">
                <h3>Impact</h3>
                <p>{language.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contributions-section">
          <h2>Linguistic Contributions</h2>
          <div className="contributions-grid">
            {contributions.map((contribution, index) => (
              <div key={index} className="contribution-card">
                <h3>{contribution.title}</h3>
                <p className="description">{contribution.description}</p>
                <div className="significance">
                  <h4>Significance</h4>
                  <p>{contribution.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages; 