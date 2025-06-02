import React from 'react';
import './Education.css';

const Education = () => {
  const principles = [
    {
      title: "Universal Education",
      year: "1880s-1890s",
      description: "Rizal advocated for education accessible to all Filipinos, regardless of social class or gender.",
      keyThemes: ["Accessibility", "Equality", "Social mobility"],
      impact: "Influenced the development of public education in the Philippines and promoted equal opportunities."
    },
    {
      title: "Critical Thinking",
      year: "1880s-1890s",
      description: "Emphasized the importance of developing independent thinking and analytical skills.",
      keyThemes: ["Intellectual freedom", "Analysis", "Questioning"],
      impact: "Shaped modern Philippine education to focus on developing critical thinking abilities."
    },
    {
      title: "Moral Education",
      year: "1880s-1890s",
      description: "Believed in education that develops both intellectual and moral character.",
      keyThemes: ["Ethics", "Character", "Values"],
      impact: "Influenced the integration of moral and ethical education in Philippine schools."
    }
  ];

  const initiatives = [
    {
      title: "La Liga Filipina",
      description: "Founded an organization that promoted education and civic consciousness among Filipinos.",
      significance: "Established a framework for community-based education and social reform."
    },
    {
      title: "Dapitan School",
      description: "Established a school in Dapitan where he taught various subjects to local children.",
      significance: "Demonstrated practical application of his educational philosophy."
    },
    {
      title: "Educational Writings",
      description: "Wrote extensively about educational reform and the importance of learning.",
      significance: "Provided theoretical foundation for Philippine educational development."
    },
    {
      title: "Language Education",
      description: "Advocated for multilingual education to promote cultural understanding.",
      significance: "Influenced language policies in Philippine education."
    }
  ];

  return (
    <div className="education-page">
      <div className="hero-section">
        <h1>Education</h1>
        <p className="subtitle">José Rizal's educational philosophy and lasting impact on Philippine education</p>
      </div>

      <div className="content-section">
        <div className="intro-text">
          <p>
            José Rizal's vision for education went beyond academic learning. He believed in education as a 
            tool for social reform, personal development, and national progress. His educational philosophy 
            continues to influence Philippine education today, emphasizing critical thinking, moral values, 
            and equal access to learning opportunities.
          </p>
        </div>

        <div className="works-grid">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="work-card"
            >
              <div className="work-header">
                <h2>{principle.title}</h2>
                <span className="year">{principle.year}</span>
              </div>
              <p className="description">{principle.description}</p>
              <div className="themes">
                <h3>Key Themes</h3>
                <div className="themes-container">
                  {principle.keyThemes.map((theme, i) => (
                    <span key={i} className="theme-tag">{theme}</span>
                  ))}
                </div>
              </div>
              <div className="impact">
                <h3>Impact</h3>
                <p>{principle.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="initiatives-section">
          <h2>Educational Initiatives</h2>
          <div className="initiatives-grid">
            {initiatives.map((initiative, index) => (
              <div key={index} className="initiative-card">
                <h3>{initiative.title}</h3>
                <p className="description">{initiative.description}</p>
                <div className="significance">
                  <h4>Significance</h4>
                  <p>{initiative.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="legacy-section">
          <h2>Educational Legacy</h2>
          <div className="legacy-content">
            <div className="legacy-card">
              <h3>Modern Influence</h3>
              <p>
                Rizal's educational philosophy continues to shape Philippine education, emphasizing the 
                importance of critical thinking, moral values, and equal access to education. His ideas 
                have influenced educational policies and practices throughout the country's history.
              </p>
            </div>
            <div className="legacy-card">
              <h3>Global Relevance</h3>
              <p>
                His educational principles remain relevant in today's global context, addressing issues 
                of educational equity, quality, and the role of education in social development. His 
                vision of education as a tool for personal and social transformation continues to inspire 
                educators worldwide.
              </p>
            </div>
          </div>
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

export default Education; 