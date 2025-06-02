import React from 'react';
import './References.css';

const References = () => {
  const references = [
    {
      category: "Literary Works",
      items: [
        {
          citation: "Rizal, Jose. \"Noli Me Tangere (Touch Me Not) by Jose Rizal - Reading Guide: 9780143039693 - Penguinrandomhouse.Com: Books.\" PenguinRandomhouse.com, June 27, 2006."
        }
      ]
    }
  ];

  return (
    <div className="references-page">
      <div className="hero-section">
        <h1>References</h1>
        <p className="subtitle">Chicago Manual Style</p>
      </div>

      <div className="content-section">
        {references.map((category, categoryIndex) => (
          <div key={categoryIndex} className="reference-category">
            <h2>{category.category}</h2>
            <div className="references-list">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="reference-item">
                  <p className="citation-text">{item.citation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="references-footer">
        <p>Last updated: March 2024</p>
      </footer>
    </div>
  );
};

export default References; 