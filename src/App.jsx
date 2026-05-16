import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TourPage from './pages/TourPage';
import WaypointDetailPage from './pages/WaypointDetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tour/:tourId" element={<TourPage />} />
        <Route path="/waypoint/:tourId/:waypointId" element={<WaypointDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
