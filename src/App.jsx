import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LiteraryWorks from './pages/LiteraryWorks';
// import NationalHero from './pages/NationalHero';
// import MedicalPractice from './pages/MedicalPractice';
// import Languages from './pages/Languages';
// import Education from './pages/Education';
// import ArtisticLegacy from './pages/ArtisticLegacy';
import Navigation from './components/Navigation';
import References from './pages/References';
import './App.css';

// Component to handle root path redirect
const RootRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If we're at the root path (just the hash), redirect to the landing page
    if (location.pathname === '/' && location.hash === '') {
      navigate('/#/');
    }
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <RootRedirect />
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/literary-works" element={<LiteraryWorks />} />
          {/* <Route path="/national-hero" element={<NationalHero />} /> */}
          {/* <Route path="/medical-practice" element={<MedicalPractice />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/education" element={<Education />} />
          <Route path="/artistic-legacy" element={<ArtisticLegacy />} /> */}
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
