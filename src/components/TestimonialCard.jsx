function TestimonialCard({ name, location, image, rating, text, className }) {
  return (
    <div className={`testimonial-card ${className || ""}`}>
      <div className="user-info">
        <img
          src={image}
          alt={name}
          className="user-avatar"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "1rem"
          }}
        />

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
