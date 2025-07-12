import { FaStar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import '../index.css';

function DestinationCard({ image, title, desc, price, duration, rating, className }) {
  return (
    <div className={`destination-card ${className || ''}`}>
      <div className="destination-image-container">
        <img 
          src={image} 
          alt={title}
          className="destination-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Destination+Image';
          }}
        />
        <div className="destination-duration">
          <FaCalendarAlt /> {duration} days
        </div>
      </div>
      
      <div className="destination-content">
        <div className="destination-rating">
          <FaStar style={{ color: '#FFD700' }} />
          <span style={{ color: '#333', fontWeight: 'bold' }}>{rating.toFixed(1)}</span>
        </div>
        
        <h3
          className="destination-title"
          style={{
            background: 'linear-gradient(135deg, #1E90FF, #2ECC71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {title}
        </h3>
        
        <div className="destination-desc">
          <FaMapMarkerAlt style={{
  background: 'linear-gradient(135deg, #1E90FF, #2ECC71)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent'
}} />
          <span>{desc}</span>
        </div>
        
        <div className="destination-footer">
          <div className="destination-price">
            <span style={{ fontSize: '0.8rem', color: '#888' }}>From</span>
            <strong style={{
              fontSize: '1.2rem',
              background: 'linear-gradient(135deg, #1E90FF, #2ECC71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              {price}
            </strong>
          </div>
          <button className="destination-btn" style={{
            background: 'linear-gradient(135deg, #1E90FF, #2ECC71)',
            color: 'white'
          }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;