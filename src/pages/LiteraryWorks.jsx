import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../components/LiteraryWorks.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const LiteraryWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  const literaryStats = {
    categories: [
      {
        number: 2,
        label: "Completed Novels",
        color: "#FFD700"
      },
      {
        number: 2,
        label: "Unfinished Novels",
        color: "#FFA500"
      },
      {
        number: 17,
        label: "Poems",
        color: "#FF69B4"
      },
      {
        number: 49,
        label: "Essays & Articles",
        color: "#00CED1"
      },
      {
        number: 4,
        label: "Plays",
        color: "#9370DB"
      },
      {
        number: 4,
        label: "Speeches & Petitions",
        color: "#32CD32"
      },
      {
        number: 9,
        label: "Historical Commentaries",
        color: "#FF6347"
      },
      {
        number: 4,
        label: "Letters & Correspondence",
        color: "#20B2AA"
      }
    ]
  };

  const chartData = {
    labels: literaryStats.categories.map(cat => cat.label),
    datasets: [{
      data: literaryStats.categories.map(cat => cat.number),
      backgroundColor: literaryStats.categories.map(cat => cat.color),
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      borderRadius: 4,
      barThickness: 20,
      maxBarThickness: 25,
      categoryPercentage: 0.8,
      barPercentage: 0.9
    }]
  };

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#FFD700',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 215, 0, 0.2)',
        borderWidth: 1,
        padding: 8,
        cornerRadius: 4,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.raw} works`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false
        },
        ticks: {
          color: '#fff',
          font: {
            size: 12,
            family: "'Segoe UI', 'Roboto', sans-serif"
          },
          padding: 4
        },
        border: { display: false },
        beginAtZero: true
      },
      y: {
        grid: { display: false },
        ticks: {
          color: '#fff',
          font: {
            size: 12,
            family: "'Segoe UI', 'Roboto', sans-serif"
          },
          padding: 4
        },
        border: { display: false }
      }
    },
    animation: {
      duration: 800,
      easing: 'easeOutQuart'
    }
  };

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
        <div className="stats-section">
          <div className="stats-header">
            <h2>Literary Output</h2>
            <p className="disclaimer">
              <FontAwesomeIcon icon={faInfoCircle} className="disclaimer-icon" />
               This is an approximate count based on available historical records and scholarly research.
              Some works may be lost or undocumented.
            </p>
          </div>

          <div className="visualization-container">
            <div className="chart-wrapper">
              <div className="chart-container">
                <Bar data={chartData} options={chartOptions} />
                {isAnimating && <div className="chart-overlay">Loading...</div>}
              </div>
            </div>
          </div>
        </div>

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