import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from '../data/tours';
import '../styles/pages.css';

function WaypointDetailPage() {
  const { tourId, waypointId } = useParams();
  const tour = toursData.find(t => t.id === parseInt(tourId));
  const waypoint = tour?.waypoints.find(w => w.id === parseInt(waypointId));

  if (!tour || !waypoint) {
    return (
      <div className="error-page">
        <h1>Waypoint not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const currentIndex = tour.waypoints.findIndex(w => w.id === waypoint.id);
  const prevWaypoint = currentIndex > 0 ? tour.waypoints[currentIndex - 1] : null;
  const nextWaypoint = currentIndex < tour.waypoints.length - 1 ? tour.waypoints[currentIndex + 1] : null;

  return (
    <div className="waypoint-detail-page">
      {/* Header with Navigation */}
      <header className="waypoint-header">
        <Link to={`/tour/${tour.id}`} className="back-button">← Back to {tour.name}</Link>
        <h1>{waypoint.name}</h1>
        <div className="waypoint-breadcrumb">
          <span className="waypoint-number">Stop {currentIndex + 1} of {tour.waypoints.length}</span>
        </div>
      </header>

      {/* Content */}
      <div className="waypoint-content">
        <article className="waypoint-article">
          {waypoint.image && (
            <div className="waypoint-image">
              <img src={waypoint.image} alt={waypoint.name} />
            </div>
          )}
          
          <div className="waypoint-text">
            {waypoint.text.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Navigation between waypoints */}
        <nav className="waypoint-navigation">
          {prevWaypoint ? (
            <Link 
              to={`/waypoint/${tour.id}/${prevWaypoint.id}`}
              className="nav-button prev-button"
            >
              ← Previous: {prevWaypoint.name}
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextWaypoint ? (
            <Link 
              to={`/waypoint/${tour.id}/${nextWaypoint.id}`}
              className="nav-button next-button"
            >
              Next: {nextWaypoint.name} →
            </Link>
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default WaypointDetailPage;
