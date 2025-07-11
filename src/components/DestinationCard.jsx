import { FaStar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function DestinationCard({ image, title, desc, price, duration, rating }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)'
      }
    }}>
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Destination+Image';
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '5px 12px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <FaCalendarAlt /> {duration} days
        </div>
      </div>
      
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#FFD700', marginBottom: '10px' }}>
          <FaStar style={{ color: '#FFD700' }} />
          <span style={{ color: '#333', fontWeight: 'bold' }}>{rating.toFixed(1)}</span>
        </div>
        
        <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#2a4365' }}>{title}</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666', marginBottom: '20px', fontSize: '0.9rem' }}>
          <FaMapMarkerAlt style={{ color: '#2a4365' }} />
          <span>{desc}</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', color: '#888' }}>From</span>
            <strong style={{ fontSize: '1.2rem', color: '#2a4365' }}>{price}</strong>
          </div>
          <button style={{
            padding: '8px 20px',
            background: '#2a4365',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            ':hover': {
              background: '#1e355e'
            }
          }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;