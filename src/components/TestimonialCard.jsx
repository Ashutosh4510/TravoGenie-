function TestimonialCard({ image, name, location, rating, text }) {
  return (
    <div className="testimonial-card">
      <div className="user-info">
        <img src={image} alt={name} className="user-avatar" />
        <div className="user-details">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>
      <div className="rating">{'★'.repeat(rating)}</div>
      <p className="testimonial-text">{text}</p>
    </div>
  );
}

export default TestimonialCard;
