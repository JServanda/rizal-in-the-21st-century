import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import statueImage from '../assets/rizal-statue.png';
import { FaBook, FaPalette, FaFlask, FaHeart, FaGraduationCap, FaBalanceScale } from 'react-icons/fa';

const LandingPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const tangibleLegacies = [
    {
      id: 1,
      title: "Literary Works",
      description: "Novels, poems, and essays that shaped Philippine nationalism",
      icon: <FaBook />,
      category: "Literature",
      path: "/literary-works"
    },
    {
      id: 2,
      title: "Artistic Creations",
      description: "Paintings, sculptures, and sketches showcasing his artistic talent",
      icon: <FaPalette />,
      category: "Art",
      path: "/artistic-legacy"
    },
    {
      id: 3,
      title: "Scientific Works",
      description: "Medical research, ethnological studies, and scientific observations",
      icon: <FaFlask />,
      category: "Science",
      path: "/medical-practice"
    }
  ];

  const intangibleLegacies = [
    {
      id: 4,
      title: "Nationalism",
      description: "Ideals that inspired the Philippine Revolution",
      icon: <FaHeart />,
      category: "Ideology",
      path: "/national-hero"
    },
    {
      id: 5,
      title: "Education",
      description: "Advocacy for knowledge and enlightenment",
      icon: <FaGraduationCap />,
      category: "Philosophy",
      path: "/education"
    },
    {
      id: 6,
      title: "Human Rights",
      description: "Championing equality, justice, and human dignity",
      icon: <FaBalanceScale />,
      category: "Advocacy",
      path: "/languages"
    }
  ];

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page">
      {/* Statue Section */}
      <section className="statue-section">
       
        <div className="statue-content">
          <h1 className="title">José Rizal</h1>
          <div className="floating-image">
            <img src={statueImage} alt="José Rizal Statue" />
          </div>
          <p className="subtitle">A Legacy of Courage and Wisdom</p>
        </div>
      </section>

      {/* Legacies Section */}
      <div className="legacies-container">
        {/* Tangible Legacies */}
        <section className="tangible-legacies">
          <h2>Tangible Legacies</h2>
          <p className="section-description">
            Explore the physical and artistic contributions of José Rizal that continue to inspire generations.
            From his literary masterpieces to his scientific works, discover how his tangible legacies shaped Philippine history.
          </p>
          <div className="legacies-grid">
            {tangibleLegacies.map((legacy) => (
              <div
                key={legacy.id}
                className={`legacy-card ${hoveredCard === legacy.id ? 'hovered' : ''}`}
                onMouseEnter={() => handleCardHover(legacy.id)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(legacy.path)}
              >
                <div className="legacy-icon">{legacy.icon}</div>
                <h3>{legacy.title}</h3>
                <p>{legacy.description}</p>
                <span className="category-tag">{legacy.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Intangible Legacies */}
        <section className="intangible-legacies">
          <h2>Intangible Legacies</h2>
          <p className="section-description">
            Discover the enduring ideals and principles that José Rizal championed.
            His intangible legacies continue to influence Philippine society and inspire people worldwide.
          </p>
          <div className="legacies-grid">
            {intangibleLegacies.map((legacy) => (
              <div
                key={legacy.id}
                className={`legacy-card ${hoveredCard === legacy.id ? 'hovered' : ''}`}
                onMouseEnter={() => handleCardHover(legacy.id)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(legacy.path)}
              >
                <div className="legacy-icon">{legacy.icon}</div>
                <h3>{legacy.title}</h3>
                <p>{legacy.description}</p>
                <span className="category-tag">{legacy.category}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage; 