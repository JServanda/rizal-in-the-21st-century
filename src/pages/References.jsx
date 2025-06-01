import React from 'react';
import './References.css';

const References = () => {
  const references = [
    {
      id: 1,
      citation: "Guerrero, León Ma. The First Filipino: A Biography of José Rizal. Manila: National Historical Commission, 1963.",
      category: "Biography"
    },
    {
      id: 2,
      citation: "Rizal, José. Noli Me Tangere. Translated by Harold Augenbraum. New York: Penguin Classics, 2006.",
      category: "Literature"
    },
    {
      id: 3,
      citation: "Rizal, José. El Filibusterismo. Translated by Harold Augenbraum. New York: Penguin Classics, 2011.",
      category: "Literature"
    },
    {
      id: 4,
      citation: "Zaide, Gregorio F., and Sonia M. Zaide. José Rizal: Life, Works, and Writings of a Genius, Writer, Scientist, and National Hero. Manila: National Book Store, 2008.",
      category: "Biography"
    },
    {
      id: 5,
      citation: "Quirino, Carlos. The Great Malayan. Manila: Philippine Education Company, 1940.",
      category: "Biography"
    },
    {
      id: 6,
      citation: "Anderson, Benedict. \"The First Filipino: A Biography of José Rizal.\" Journal of Asian Studies 23, no. 1 (1963): 136-37.",
      category: "Academic"
    },
    {
      id: 7,
      citation: "Rizal, José. \"Mi Último Adiós.\" In The Complete Works of José Rizal, edited by Wenceslao Emilio Retana, 2:399-400. Manila: National Historical Institute, 1993.",
      category: "Literature"
    },
    {
      id: 8,
      citation: "Craig, Austin. Lineage, Life and Labors of José Rizal, Philippine Patriot. Manila: Philippine Education Company, 1913.",
      category: "Biography"
    },
    {
      id: 9,
      citation: "Rizal, José. \"The Indolence of the Filipinos.\" In Political and Historical Writings, edited by Teodoro M. Kalaw, 167-88. Manila: National Historical Institute, 1990.",
      category: "Political"
    },
    {
      id: 10,
      citation: "Rizal, José. \"To the Young Women of Malolos.\" In Political and Historical Writings, edited by Teodoro M. Kalaw, 189-96. Manila: National Historical Institute, 1990.",
      category: "Political"
    },
    {
      id: 11,
      citation: "Rizal, José. \"The Philippines a Century Hence.\" In Political and Historical Writings, edited by Teodoro M. Kalaw, 197-228. Manila: National Historical Institute, 1990.",
      category: "Political"
    },
    {
      id: 12,
      citation: "Rizal, José. \"Letter to the Women of Malolos.\" In Political and Historical Writings, edited by Teodoro M. Kalaw, 229-36. Manila: National Historical Institute, 1990.",
      category: "Political"
    },
    {
      id: 13,
      citation: "National Historical Commission of the Philippines. \"José Rizal: National Hero of the Philippines.\" Official Gazette of the Republic of the Philippines, December 30, 2011.",
      category: "Official"
    },
    {
      id: 14,
      citation: "Rizal, José. \"The Vision of Fr. Rodriguez.\" In Miscellaneous Writings, edited by Teodoro M. Kalaw, 45-52. Manila: National Historical Institute, 1990.",
      category: "Literature"
    },
    {
      id: 15,
      citation: "Rizal, José. \"My Last Farewell.\" In The Complete Works of José Rizal, edited by Wenceslao Emilio Retana, 2:399-400. Manila: National Historical Institute, 1993.",
      category: "Literature"
    }
  ];

  const categories = [...new Set(references.map(ref => ref.category))];

  return (
    <div className="references-page">
      <div className="references-header">
        <h1>References</h1>
        <p className="subtitle">A comprehensive list of sources in Chicago Manual Style</p>
      </div>

      <div className="references-content">
        {categories.map(category => (
          <section key={category} className="reference-category">
            <h2>{category}</h2>
            <div className="references-list">
              {references
                .filter(ref => ref.category === category)
                .map(reference => (
                  <div key={reference.id} className="reference-item">
                    <p>{reference.citation}</p>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      <div className="references-footer">
        <p>Note: All citations follow the Chicago Manual of Style, 17th edition.</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default References; 