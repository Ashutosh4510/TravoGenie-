import { useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';

const testimonialData = [
  {
    name: "Ananya Mehta",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 5,
    text: "Travogenie made my family vacation magical!"
  },
  {
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    rating: 4,
    text: "Travogenie’s app updates and 24/7 support gave me peace of mind."
  },
  {
    name: "Sana & Amir Qureshi",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    rating: 5,
    text: "Our honeymoon in the Maldives was beyond perfect!"
  }
];

function Testimonial() {
  const [filter, setFilter] = useState('all');

  const filteredData = testimonialData.filter(item => {
    if (filter === 'all') return true;
    if (filter === '5') return item.rating === 5;
    if (filter === '4') return item.rating >= 4;
    return true;
  });

  return (
    <section style={{ padding: "8rem 5% 5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Traveler Experiences</h1>
        <p>Read what our customers have to say about their journeys with us</p>
      </div>

      <div className="filter-controls" style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        marginBottom: "2rem"
      }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('5')}>5 Stars</button>
        <button onClick={() => setFilter('4')}>4+ Stars</button>
      </div>

      <div className="testimonials-container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        {filteredData.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
