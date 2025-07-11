function DestinationCard({ image, title, desc, price }) {
  return (
    <div className="destination-card">
      <img
  src={image}
  alt={title}
  className="destination-image"
  style={{
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px"
  }}
/>

      <div className="destination-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="destination-price">{price}</div>
      </div>
    </div>
  );
}

export default DestinationCard;
