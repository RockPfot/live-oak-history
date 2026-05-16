import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

function WaypointModal({ waypoint, onClose, tourId }) {
  // Check if this waypoint actually has a detail page (type 'page')
  const hasDetailPage = waypoint.text.length > 300; // Heuristic: longer text might go to detail page

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {waypoint.image && (
          <div className="modal-image">
            <img src={waypoint.image} alt={waypoint.name} />
          </div>
        )}
        
        <div className="modal-body">
          <h2>{waypoint.name}</h2>
          <p className="modal-text">{waypoint.text}</p>
          
          {hasDetailPage && (
            <Link 
              to={`/waypoint/${tourId}/${waypoint.id}`}
              className="modal-link"
              onClick={onClose}
            >
              Read Full Story →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default WaypointModal;
