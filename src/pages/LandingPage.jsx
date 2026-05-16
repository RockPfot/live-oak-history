import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { toursData, areaCenter, areaBounds } from '../data/tours';
import '../styles/pages.css';

function LandingPage() {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="landing-header">
        <div className="header-content">
          <h1>Live Oak History</h1>
          <p className="subtitle">Explore the stories and landmarks of our community</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Welcome to Live Oak</h2>
            <p>
              Live Oak is an unincorporated community in Santa Cruz County, nestled between 
              the cities of Santa Cruz and Capitola. With a rich history spanning from pre-colonial 
              times through the 20th century, Live Oak's landscape tells stories of indigenous peoples, 
              early settlers, agricultural heritage, and community resilience.
            </p>
            <p>
              This guide invites you to walk through time and discover the landmarks, natural features, 
              and historical sites that have shaped our community. Whether you're a longtime resident or 
              new to the area, these walking tours offer a deeper understanding of Live Oak's past and its 
              significance today.
            </p>
          </div>

          {/* Area Overview Map */}
          <div className="map-container map-landing">
            <MapContainer
              center={[areaCenter.lat, areaCenter.lng]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              {toursData.map(tour => (
                <CircleMarker
                  key={tour.id}
                  center={[tour.lat, tour.lng]}
                  radius={8}
                  fillColor="#7A8F6F"
                  color="#2C2C2C"
                  weight={2}
                  opacity={1}
                  fillOpacity={0.8}
                  eventHandlers={{
                    click: () => setSelectedTour(tour.id)
                  }}
                >
                  <Popup>
                    <div className="popup-content">
                      <h3>{tour.name}</h3>
                      <p>{tour.waypoints.length} waypoints</p>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="tours-section">
        <div className="container">
          <h2>Choose a Walking Tour</h2>
          <div className="tours-grid">
            {toursData.map(tour => (
              <Link
                to={`/tour/${tour.id}`}
                key={tour.id}
                className="tour-card"
              >
                <div className="tour-card-header">
                  <h3>{tour.name}</h3>
                </div>
                <div className="tour-card-body">
                  <p>{tour.description}</p>
                  <div className="tour-meta">
                    <span className="waypoint-count">{tour.waypoints.length} waypoints</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2024 Live Oak Community History Project. All rights reserved.</p>
          <p className="footer-note">Best viewed on mobile while walking the tours.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
