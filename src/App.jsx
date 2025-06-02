import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LiteraryWorks from './pages/LiteraryWorks';
import ArtisticLegacy from './pages/ArtisticLegacy';
import MedicalPractice from './pages/MedicalPractice';
import NationalHero from './pages/NationalHero';
import Languages from './pages/Languages';
import Education from './pages/Education';
// import NationalHero from './pages/NationalHero';
// import Languages from './pages/Languages';
// import Education from './pages/Education';
import Navigation from './components/Navigation';
import References from './pages/References';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const BASE_PATH = '/rizal-in-the-21st-century';

function App() {
  return (
    <Router basename={BASE_PATH}>
      <ScrollToTop />
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/literary-works" element={<LiteraryWorks />} />
          <Route path="/artistic-legacy" element={<ArtisticLegacy />} />
          <Route path="/medical-practice" element={<MedicalPractice />} />
          <Route path="/national-hero" element={<NationalHero />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/education" element={<Education />} />
          {/* <Route path="/national-hero" element={<NationalHero />} /> */}
          {/* <Route path="/languages" element={<Languages />} /> */}
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/references" element={<References />} />
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
