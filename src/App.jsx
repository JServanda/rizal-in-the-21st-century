import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
