import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { toursData } from '../data/tours';
import WaypointModal from '../components/WaypointModal';
import '../styles/pages.css';

function TourPage() {
  const { tourId } = useParams();
  const tour = toursData.find(t => t.id === parseInt(tourId));
  const [selectedWaypoint, setSelectedWaypoint] = useState(null);

  if (!tour) {
    return (
      <div className="error-page">
        <h1>Tour not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const handleWaypointClick = (waypoint) => {
    setSelectedWaypoint(waypoint);
  };

  const handleCloseModal = () => {
    setSelectedWaypoint(null);
  };

  return (
    <div className="tour-page">
      {/* Header */}
      <header className="tour-header">
        <Link to="/" className="back-button">← Back</Link>
        <div className="header-content">
          <h1>{tour.name}</h1>
          <p className="tour-description">{tour.description}</p>
        </div>
      </header>

      {/* Tour Map */}
      <div className="map-container map-tour">
        <MapContainer
          center={[tour.lat, tour.lng]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {tour.waypoints.map(waypoint => (
            <CircleMarker
              key={waypoint.id}
              center={[waypoint.lat, waypoint.lng]}
              radius={7}
              fillColor={waypoint.type === 'modal' ? '#A67C52' : '#9D6B51'}
              color="#2C2C2C"
              weight={2}
              opacity={1}
              fillOpacity={0.9}
              eventHandlers={{
                click: () => handleWaypointClick(waypoint)
              }}
            >
              <Popup>
                <div className="waypoint-popup">
                  <h3>{waypoint.name}</h3>
                  <p className="waypoint-type">
                    {waypoint.type === 'modal' ? 'Quick Info' : 'Full Story'}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Waypoint Info Sidebar */}
      <div className="waypoint-sidebar">
        <div className="sidebar-content">
          <h3>Waypoints on this tour</h3>
          <div className="waypoint-list">
            {tour.waypoints.map(waypoint => (
              <button
                key={waypoint.id}
                className={`waypoint-item ${selectedWaypoint?.id === waypoint.id ? 'active' : ''}`}
                onClick={() => handleWaypointClick(waypoint)}
              >
                <span className="waypoint-number">{waypoint.id}</span>
                <span className="waypoint-name">{waypoint.name}</span>
                <span className="waypoint-badge">
                  {waypoint.type === 'modal' ? 'ⓘ' : '📖'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for short content */}
      {selectedWaypoint && selectedWaypoint.type === 'modal' && (
        <WaypointModal
          waypoint={selectedWaypoint}
          onClose={handleCloseModal}
          tourId={tour.id}
        />
      )}

      {/* Page redirect for long content */}
      {selectedWaypoint && selectedWaypoint.type === 'page' && (
        <script>
          {window.location.href = `/waypoint/${tour.id}/${selectedWaypoint.id}`}
        </script>
      )}
    </div>
  );
}

export default TourPage;
