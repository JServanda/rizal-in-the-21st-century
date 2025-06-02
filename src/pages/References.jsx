import React from 'react';
import './References.css';

const References = () => {
  const references = [
    {
      category: "Primary Sources",
      entries: [
        {
          citation: "Rizal, José. Noli Me Tangere. Translated by Harold Augenbraum. New York: Penguin Classics, 2006.",
          description: "Rizal's first novel, originally published in 1887, exposing the abuses of Spanish colonial rule."
        },
        {
          citation: "Rizal, José. El Filibusterismo. Translated by Harold Augenbraum. New York: Penguin Classics, 2011.",
          description: "Rizal's second novel, published in 1891, continuing the narrative of colonial oppression."
        },
        {
          citation: "Rizal, José. Mi Último Adiós. Manila: National Historical Commission of the Philippines, 1961.",
          description: "Rizal's final poem, written on the eve of his execution in 1896."
        },
        {
          citation: "Rizal, José. The Philippines a Century Hence. Translated by Charles Derbyshire. Manila: National Historical Commission of the Philippines, 1961.",
          description: "An essay written in 1889-1890 discussing the future of the Philippines under colonial rule."
        }
      ]
    },
    {
      category: "Biographical Works",
      entries: [
        {
          citation: "Guerrero, León Ma. The First Filipino: A Biography of José Rizal. Manila: National Historical Commission of the Philippines, 1963.",
          description: "A comprehensive biography of Rizal's life and contributions."
        },
        {
          citation: "Zaide, Gregorio F. José Rizal: Life, Works, and Writings. Manila: National Book Store, 2008.",
          description: "Detailed account of Rizal's life, including his education, travels, and literary works."
        }
      ]
    },
    {
      category: "Academic Studies",
      entries: [
        {
          citation: "Anderson, Benedict. Under Three Flags: Anarchism and the Anti-Colonial Imagination. London: Verso, 2005.",
          description: "Analysis of Rizal's role in the anti-colonial movement and his influence on Philippine nationalism."
        },
        {
          citation: "Rafael, Vicente L. The Promise of the Foreign: Nationalism and the Technics of Translation in the Spanish Philippines. Durham: Duke University Press, 2005.",
          description: "Study of Rizal's linguistic contributions and his role in cultural translation."
        },
        {
          citation: "Schumacher, John N. The Propaganda Movement, 1880-1895: The Creation of a Filipino Consciousness. Manila: Solidaridad Publishing House, 1973.",
          description: "Analysis of the Propaganda Movement and Rizal's role in Philippine reform."
        }
      ]
    },
    {
      category: "Medical and Scientific Contributions",
      entries: [
        {
          citation: "De Ocampo, Esteban A. 'Rizal's Medical Studies in Spain.' Philippine Studies 4, no. 2 (1956): 175-183.",
          description: "Study of Rizal's medical education and practice in Europe."
        },
        {
          citation: "Quirino, Carlos. The Great Malayan. Manila: Philippine Education Company, 1940.",
          description: "Includes details about Rizal's medical practice and scientific contributions."
        }
      ]
    },
    {
      category: "Artistic Legacy",
      entries: [
        {
          citation: "Rizal, José. The Drawings of José Rizal. Manila: National Historical Commission of the Philippines, 1961.",
          description: "Collection of Rizal's artistic works, including sketches and portraits."
        },
        {
          citation: "Ocampo, Ambeth R. Rizal's Art: A Century of Collecting. Manila: Ayala Museum, 2011.",
          description: "Comprehensive study of Rizal's artistic contributions and legacy."
        }
      ]
    },
    {
      category: "Educational Philosophy",
      entries: [
        {
          citation: "Constantino, Renato. The Philippines: A Past Revisited. Quezon City: Tala Publishing Services, 1975.",
          description: "Analysis of Rizal's educational philosophy and its impact on Philippine education."
        },
        {
          citation: "Majul, Cesar Adib. 'Rizal's Concept of the Filipino Nation.' Philippine Studies 30, no. 4 (1982): 449-471.",
          description: "Study of Rizal's views on education and nation-building."
        }
      ]
    },
    {
      category: "Historical Documents",
      entries: [
        {
          citation: "National Historical Commission of the Philippines. The Trial of Rizal: The Original Spanish Documents. Manila: NHCP, 1961.",
          description: "Official documents from Rizal's trial and execution."
        },
        {
          citation: "Retana, Wenceslao Emilio. Vida y Escritos del Dr. José Rizal. Madrid: Librería General de Victoriano Suárez, 1907.",
          description: "Early biography containing primary documents about Rizal's life."
        }
      ]
    }
  ];

  return (
    <div className="references-page">
      <div className="hero-section">
        <h1>References</h1>
        <p className="subtitle">Academic sources and citations</p>
      </div>

      <div className="content-section">
        <div className="intro-text">
          <p>
            This page provides a comprehensive list of references used in compiling the information 
            about José Rizal's life, works, and legacy. I tried to follow the Chicago Manual of Style, 
            17th edition for all of the citation. The references are organized by category for easier navigation and research.
          </p>
        </div>

        <div className="references-grid">
          {references.map((category, index) => (
            <div key={index} className="reference-category">
              <h2>{category.category}</h2>
              <div className="reference-entries">
                {category.entries.map((entry, entryIndex) => (
                  <div key={entryIndex} className="reference-entry">
                    <div className="citation">{entry.citation}</div>
                    <p className="description">{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default References; 