import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function DestinationDetail() {
  const { id } = useParams();
  const idx = Number(id);
  // Example data for 5 destinations (customize as needed)
  const detailsData = [
    {
      title: 'Goa Beachfront Villa : Seacoast Beach Escape',
      subtitle: 'Modern beach retreat on Goa Beach · 6 guests · 2 bedrooms · 2 beds · 2 bathrooms',
      badge: 'Guest favorite',
      rating: 4.83,
      reviews: 47,
      mainImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
      ],
      price: '₹3,652',
      originalPrice: '₹5,656',
      nights: 2,
      checkin: '8/8/2025',
      checkout: '8/10/2025',
      guests: 1,
      host: 'Dubinsky',
      hostBadge: 'Superhost · 3 years hosting',
      amenities: [
        { icon: '🏖️', label: 'Beach access - Goa Beach' },
        { icon: '🍷', label: 'Wine cellar' },
        { icon: '🏊', label: 'Swimming pool' },
        { icon: '📺', label: 'Smart TV' },
        { icon: '🍳', label: 'Fully equipped kitchen' },
        { icon: '🚗', label: 'Free parking' },
        { icon: '🐾', label: 'Pet friendly' },
        { icon: '📷', label: 'Security cameras' },
        { icon: '🔥', label: 'Smoke alarm' }
      ],
      description: [
        'Enjoy a modern, sunlit retreat right on Goa Beach. Spacious living, contemporary design, and all amenities for a relaxing family or group stay. Explore Goa’s vibrant nightlife, water sports, and delicious cuisine from your stylish beachfront base.',
        'Check-in: 3pm · Checkout: 11am. Complimentary housekeeping and local tips provided.'
      ],
      reviewsList: [
        { name: '1 month on Airbnb', date: '2 weeks ago', text: 'Perfect location for beach lovers! The house was spotless and the host was very helpful.' },
        { name: '2 years on Airbnb', date: 'August 2024', text: 'Loved the pool and the easy walk to Goa Beach. Highly recommended for families.' }
      ]
    },
    {
      title: 'Agra: Taj Mahal Retreat',
      subtitle: 'Luxury suite near Taj Mahal · 4 guests · 1 bedroom · 2 beds · 1 bathroom',
      badge: 'Iconic Experience',
      rating: 4.9,
      reviews: 112,
      mainImage: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
      ],
      price: '₹5,200',
      originalPrice: '₹7,000',
      nights: 2,
      checkin: '9/9/2025',
      checkout: '9/11/2025',
      guests: 2,
      host: 'Priya Singh',
      hostBadge: 'Superhost · 5 years hosting',
      amenities: [
        { icon: '🏰', label: 'View of Taj Mahal' },
        { icon: '🛏️', label: 'King-size bed' },
        { icon: '🌐', label: 'Free WiFi' },
        { icon: '🍳', label: 'Breakfast included' },
        { icon: '🚗', label: 'Free parking' },
        { icon: '🧺', label: 'Laundry service' },
        { icon: '🛁', label: 'Luxury bath' },
        { icon: '🌳', label: 'Garden access' }
      ],
      description: [
        'Stay steps away from the Taj Mahal in a luxury suite with breathtaking monument views. Enjoy curated local experiences, private garden, and world-class hospitality. Walk to the Taj Mahal at sunrise for a magical experience.',
        'Perfect for couples and families seeking a blend of history, comfort, and culture. Explore Agra Fort, Mehtab Bagh, and local markets.'
      ],
      reviewsList: [
        { name: '3 years on Airbnb', date: 'June 2025', text: 'Unforgettable view of the Taj Mahal from our room! The host was very attentive and the breakfast was delicious.' },
        { name: '1 year on Airbnb', date: 'March 2025', text: 'The suite was spotless and the location unbeatable. Highly recommended for a luxury stay in Agra.' }
      ]
    },
    {
      title: 'Leh: Himalayan Haven',
      subtitle: 'Mountain lodge in Leh, Ladakh · 5 guests · 2 bedrooms · 3 beds · 2 bathrooms',
      badge: 'Adventure Base',
      rating: 4.85,
      reviews: 89,
      mainImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
      ],
      price: '₹4,800',
      originalPrice: '₹6,200',
      nights: 2,
      checkin: '7/15/2025',
      checkout: '7/17/2025',
      guests: 3,
      host: 'Tsering Namgyal',
      hostBadge: 'Superhost · 4 years hosting',
      amenities: [
        { icon: '⛰️', label: 'Mountain view' },
        { icon: '🔥', label: 'Heated rooms' },
        { icon: '🥾', label: 'Trekking trails' },
        { icon: '🧘', label: 'Yoga deck' },
        { icon: '🍲', label: 'Ladakhi cuisine' },
        { icon: '🚗', label: 'Free parking' },
        { icon: '🌌', label: 'Stargazing' }
      ],
      description: [
        'Wake up to panoramic Himalayan views in a cozy mountain lodge. Guided treks to Pangong Lake and Nubra Valley, yoga sessions, and authentic Ladakhi meals await. Explore monasteries and local culture.',
        'Ideal for adventure seekers and families looking for a peaceful retreat in the heart of Ladakh.'
      ],
      reviewsList: [
        { name: '5 years on Airbnb', date: 'July 2025', text: 'The best mountain lodge in Leh! The views are stunning and the food is authentic.' },
        { name: '2 years on Airbnb', date: 'May 2025', text: 'Loved the yoga deck and the trekking trails. Will visit again!' }
      ]
    },
    {
      title: 'Goa: Beachside Bliss',
      subtitle: 'Luxury villa in North Goa · 8 guests · 3 bedrooms · 4 beds · 3 bathrooms',
      badge: 'Top Pick',
      rating: 4.92,
      reviews: 134,
      mainImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
      ],
      price: '₹7,200',
      originalPrice: '₹9,000',
      nights: 2,
      checkin: '12/20/2025',
      checkout: '12/22/2025',
      guests: 6,
      host: 'Rohan Dsouza',
      hostBadge: 'Superhost · 6 years hosting',
      amenities: [
        { icon: '🏖️', label: 'Private beach access' },
        { icon: '🏊', label: 'Infinity pool' },
        { icon: '🍹', label: 'Poolside bar' },
        { icon: '🎶', label: 'Live music' },
        { icon: '🍳', label: 'Breakfast included' },
        { icon: '🚗', label: 'Free parking' },
        { icon: '🌴', label: 'Garden' }
      ],
      description: [
        'Experience North Goa’s best beaches from a luxury villa with private access, infinity pool, and lush gardens. Enjoy vibrant nightlife, water sports, and local cuisine. Walk to Anjuna and Baga beaches.',
        'Perfect for groups and families seeking relaxation and adventure in Goa.'
      ],
      reviewsList: [
        { name: '4 years on Airbnb', date: 'December 2024', text: 'Amazing villa! The private beach and pool were highlights. Great for family gatherings.' },
        { name: '2 years on Airbnb', date: 'January 2025', text: 'Loved the live music and the breakfast spread. Will book again!' }
      ]
    },
    {
      title: 'Kerala Backwaters: Houseboat Escape',
      subtitle: 'Premium houseboat in Alleppey · 4 guests · 2 bedrooms · 2 beds · 1 bathroom',
      badge: 'Nature Retreat',
      rating: 4.88,
      reviews: 76,
      mainImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
      ],
      price: '₹6,000',
      originalPrice: '₹7,800',
      nights: 2,
      checkin: '11/5/2025',
      checkout: '11/7/2025',
      guests: 2,
      host: 'Anjali Menon',
      hostBadge: 'Superhost · 7 years hosting',
      amenities: [
        { icon: '🚤', label: 'Houseboat stay' },
        { icon: '🌅', label: 'Sunset cruise' },
        { icon: '🍲', label: 'Kerala cuisine' },
        { icon: '🛶', label: 'Canoe rides' },
        { icon: '🌴', label: 'Palm views' },
        { icon: '🚗', label: 'Free parking' }
      ],
      description: [
        'Cruise through the tranquil backwaters of Alleppey on a premium houseboat. Enjoy sunset cruises, authentic Kerala cuisine, and breathtaking palm-lined scenery. Visit local villages and bird sanctuaries.',
        'Ideal for couples and families seeking a unique nature retreat in Kerala.'
      ],
      reviewsList: [
        { name: '6 years on Airbnb', date: 'November 2024', text: 'The houseboat was beautiful and the food was amazing. Loved the sunset cruise!' },
        { name: '3 years on Airbnb', date: 'October 2024', text: 'A peaceful escape. The canoe rides and palm views were unforgettable.' }
      ]
    }
  ];
  const destination = detailsData[idx] || detailsData[0];
  const [showMore, setShowMore] = useState(false);
  const [showReserve, setShowReserve] = useState(false);
  const [country, setCountry] = useState('+91');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(destination.guests);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 20px 20px 20px', color: '#222', fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 26, fontWeight: 600, marginBottom: 5 }}>{destination.title}</h1>
        <p className="subtitle" style={{ fontSize: 16, color: '#717171', marginBottom: 20 }}>{destination.subtitle}</p>
      </header>
      <div className="badge" style={{ display: 'inline-block', background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', color: 'white', padding: '5px 10px', borderRadius: 4, fontSize: 14, fontWeight: 500, marginBottom: 20 }}>{destination.badge}</div>
      <div className="rating" style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <div className="stars" style={{ background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 14, marginRight: 5 }}>★★★★★</div>
        <span className="review-count" style={{ fontSize: 14, textDecoration: 'underline', color: '#222' }}>{destination.reviews} Reviews</span>
      </div>
      <div className="action-buttons" style={{ display: 'flex', gap: 15, marginBottom: 20 }}>
        <button style={{ background: 'none', border: 'none', fontSize: 14, fontWeight: 500, textDecoration: 'underline', cursor: 'pointer' }}>Share</button>
        <button style={{ background: 'none', border: 'none', fontSize: 14, fontWeight: 500, textDecoration: 'underline', cursor: 'pointer' }}>Save</button>
        <button style={{ background: 'none', border: 'none', fontSize: 14, fontWeight: 500, textDecoration: 'underline', cursor: 'pointer' }} onClick={() => alert('Showing all photos gallery')}>Show all photos</button>
      </div>
      {/* Image Gallery */}
      <div className="image-gallery" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 8, height: 400, marginBottom: 20, borderRadius: 12, overflow: 'hidden' }}>
        <div className="main-image" style={{ gridRow: 'span 2', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${destination.gallery[0]}')` }}></div>
        <div className="secondary-image" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${destination.gallery[1]}')` }}></div>
        <div className="secondary-image" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${destination.gallery[2]}')` }}></div>
        <div className="secondary-image show-all-photos" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${destination.gallery[3]}')`, position: 'relative', cursor: 'pointer' }} onClick={() => alert('Showing all photos gallery')}>
          <span style={{ position: 'absolute', bottom: 15, right: 15, backgroundColor: 'white', padding: '8px 12px', borderRadius: 8, fontSize: 14, fontWeight: 500 }}>Show all photos</span>
        </div>
        <div className="secondary-image" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${destination.gallery[4]}')` }}></div>
      </div>
      <div className="rare-find" style={{ fontWeight: 600, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '20px 0' }}>Rare find! This place is usually booked</div>
      {/* Price Card */}
      <div className="price-card" style={{ border: '1px solid #ddd', borderRadius: 12, padding: 20, marginBottom: 20 }}>
        <div className="price" style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          <span className="original-price" style={{ textDecoration: 'line-through', color: '#717171', marginRight: 10 }}>{destination.originalPrice}</span>
          <span className="discounted-price">{destination.price} for {destination.nights} nights</span>
        </div>
        <div className="date-selector" style={{ marginBottom: 15 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#f7f7f7', fontWeight: 500, padding: 10 }}>CHECK IN</th>
                <th style={{ backgroundColor: '#f7f7f7', fontWeight: 500, padding: 10 }}>CHECKOUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 10, textAlign: 'center', border: '1px solid #ddd' }}>{destination.checkin}</td>
                <td style={{ padding: 10, textAlign: 'center', border: '1px solid #ddd' }}>{destination.checkout}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guest-selector" style={{ marginBottom: 15 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <th style={{ backgroundColor: '#f7f7f7', fontWeight: 500, padding: 10 }}>GUESTS</th>
                <td style={{ padding: 10, textAlign: 'center', border: '1px solid #ddd' }}>
                  <input type="number" min={1} max={20} value={guests} onChange={e => setGuests(Number(e.target.value))} style={{ width: 60, padding: 6, borderRadius: 6, border: '1px solid #ddd', fontSize: 16, textAlign: 'center' }} /> guest{guests > 1 ? 's' : ''}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="reserve-btn" style={{ width: '100%', padding: 14, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', color: 'white', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer', marginBottom: 15 }} onClick={() => setShowReserve(true)}>Reserve</button>
        <p className="disclaimer" style={{ fontSize: 14, color: '#717171', textAlign: 'center', marginBottom: 20 }}>You won't be charged yet</p>
      </div>
      <div className="host-info" style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <div className="host-avatar" style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 15, backgroundColor: '#ddd', backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80')", backgroundSize: 'cover' }}></div>
        <div className="host-details">
          <h3 style={{ fontSize: 18, marginBottom: 5 }}>Hosted by {destination.host}</h3>
          <div className="host-badge" style={{ display: 'inline-block', backgroundColor: '#000', color: 'white', padding: '3px 8px', borderRadius: 4, fontSize: 12, fontWeight: 500 }}>{destination.hostBadge}</div>
          {/* Strictly show correct details for each destination */}
          {idx === 0 && (
            <>
              <p>Modern beach retreat on Goa Beach</p>
              <p>Wine cellar, swimming pool, smart TV</p>
              <p>Pet friendly, security cameras, smoke alarm</p>
              <p>Free cancellation before 7 Aug</p>
            </>
          )}
          {idx === 1 && (
            <>
              <p>Luxury suite near Taj Mahal</p>
              <p>King-size bed, free WiFi, breakfast included</p>
              <p>Private garden, laundry service, luxury bath</p>
              <p>Free cancellation before 8 Sep</p>
            </>
          )}
          {idx === 2 && (
            <>
              <p>Mountain lodge in Leh, Ladakh</p>
              <p>Heated rooms, trekking trails, yoga deck</p>
              <p>Ladakhi cuisine, stargazing, free parking</p>
              <p>Free cancellation before 14 July</p>
            </>
          )}
          {idx === 3 && (
            <>
              <p>Luxury villa in North Goa</p>
              <p>Private beach access, infinity pool, poolside bar</p>
              <p>Live music, breakfast included, garden</p>
              <p>Free cancellation before 19 Dec</p>
            </>
          )}
          {idx === 4 && (
            <>
              <p>Premium houseboat in Alleppey</p>
              <p>Sunset cruise, Kerala cuisine, canoe rides</p>
              <p>Palm views, free parking</p>
              <p>Free cancellation before 4 Nov</p>
            </>
          )}
        </div>
      </div>
      <div className="description" style={{ marginBottom: 20 }}>
        <h2>Welcome to</h2>
        {destination.description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
        <p className="show-more" style={{ background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 500, textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</p>
      </div>
      <div className="rare-find" style={{ fontWeight: 600, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '20px 0' }}>Rare find! This place is usually booked</div>
      <div className="amenities" style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 15 }}>What this place offers</h2>
        <div className="amenities-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15 }}>
          {destination.amenities.map((am, idx) => (
            <div key={idx} className="amenity-item" style={{ display: 'flex', alignItems: 'center' }}>
              <span className="amenity-icon" style={{ marginRight: 10, fontSize: 18 }}>{am.icon}</span>
              <span>{am.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Calendar */}
      <div className="calendar" style={{ marginBottom: 20, maxWidth: 340, background: '#f7f7f7', borderRadius: 12, boxShadow: '0 2px 12px #1e90ff22', padding: 18, border: '1px solid #ddd' }}>
        <h2 style={{ fontSize: 18, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, margin: 0 }}>{destination.nights} nights in {destination.title.split(':')[0]}</h2>
        <p>{destination.checkin} - {destination.checkout}</p>
        <div className="month-selector" style={{ display: 'flex', gap: 10, margin: '8px 0 12px 0', fontSize: 14, color: '#183153', fontWeight: 500 }}>
          <span>{new Date(destination.checkin).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <span>{new Date(destination.checkout).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 0, fontSize: 13, background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 1px 4px #1e90ff11' }}>
          <thead>
            <tr style={{ background: '#f7f7f7', color: '#FF385C', fontWeight: 700 }}>
              <th style={{ padding: 6 }}>M</th><th style={{ padding: 6 }}>T</th><th style={{ padding: 6 }}>W</th><th style={{ padding: 6 }}>T</th><th style={{ padding: 6 }}>F</th><th style={{ padding: 6 }}>S</th><th style={{ padding: 6 }}>S</th>
            </tr>
          </thead>
          <tbody>
            <tr><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
            <tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
            <tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr>
            <tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr>
            <tr><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
      <div className="rare-find" style={{ fontWeight: 600, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '20px 0' }}>Rare find! This place is usually booked</div>
      <div className="reviews" style={{ marginBottom: 30 }}>
        <h2 style={{ fontSize: 22, marginBottom: 15, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Guest favourite</h2>
        <p>This home is a guest favourite based on ratings, reviews and reliability.</p>
        <div className="rating-breakdown" style={{ margin: '15px 0' }}>
          <h3>Overall rating</h3>
          <p>Cleanliness 4.8</p>
          <p>Accuracy 4.8</p>
          <p>Communication 4.8</p>
          <p>Location 4.7</p>
          <p>Value 4.8</p>
        </div>
        {destination.reviewsList.map((r, idx) => (
          <div key={idx} className="review-item" style={{ marginBottom: 20 }}>
            <div className="review-header" style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <span className="reviewer-name" style={{ fontWeight: 600, marginRight: 10 }}>{r.name}</span>
              <span className="review-date" style={{ color: '#717171', fontSize: 14 }}>{r.date}</span>
            </div>
            <p className="review-text" style={{ fontSize: 16 }}>{r.text}</p>
            <p className="show-more" style={{ background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 500, textDecoration: 'underline', cursor: 'pointer' }} onClick={() => alert(r.text)}>Show more</p>
          </div>
        ))}
      </div>
      {/* Reserve Modal */}
      {showReserve && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,30,30,0.18)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto' }}>
          <div style={{ background: '#fff', borderRadius: 16, maxWidth: 600, width: '100%', padding: 32, boxShadow: '0 8px 32px #1e90ff22', position: 'relative' }}>
            <button onClick={() => setShowReserve(false)} title="Cancel" style={{ position: 'absolute', top: 24, right: 24, border: 'none', fontSize: 28, cursor: 'pointer', background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', zIndex: 102 }}>
              <span style={{ fontSize: 28, fontWeight: 700 }}>&#10006;</span>
            </button>
            <div className="price-alert" style={{ backgroundColor: '#f7f7f7', padding: 15, borderRadius: 8, marginBottom: 20, fontSize: 16 }}>
              Lower price. Your dates are ₹840 less than the avg. nightly rate of the last 60 days.
            </div>
            <h1 style={{ fontSize: 22, marginBottom: 20 }}>Confirm and pay</h1>
            <div className="trip-details" style={{ marginBottom: 30 }}>
              <h2 style={{ fontSize: 18, marginBottom: 15 }}>Your trip</h2>
              <div className="detail-item" style={{ marginBottom: 10 }}>
                <span className="detail-label" style={{ fontWeight: 500 }}>Dates</span>
                <span>{destination.checkin} – {destination.checkout}</span>
              </div>
              <div className="detail-item" style={{ marginBottom: 10 }}>
                <span className="detail-label" style={{ fontWeight: 500 }}>Guests</span>
                <span>{destination.guests} guest{destination.guests > 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="login-form" style={{ marginBottom: 30 }}>
              <h2 style={{ fontSize: 18, marginBottom: 15 }}>Log in or sign up to book</h2>
              <div className="form-group" style={{ marginBottom: 15 }}>
                <label htmlFor="country" style={{ display: 'block', marginBottom: 5, fontWeight: 500 }}>Country/Region</label>
                <select id="country" value={country} onChange={e => setCountry(e.target.value)} style={{ width: '100%', padding: 12, border: '1px solid #ddd', borderRadius: 8, fontSize: 16 }}>
                  <option value="+91">India (+91)</option>
                  <option value="+1">United States (+1)</option>
                  <option value="+44">United Kingdom (+44)</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: 15 }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: 5, fontWeight: 500 }}>Phone number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', padding: 12, border: '1px solid #ddd', borderRadius: 8, fontSize: 16 }} />
              </div>
            </div>
            <p className="disclaimer" style={{ fontSize: 14, color: '#717171', marginBottom: 20 }}>
              We'll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
            </p>
            <div className="property-info" style={{ display: 'flex', marginBottom: 20 }}>
              <div className="property-image" style={{ width: 100, height: 80, borderRadius: 8, backgroundColor: '#ddd', marginRight: 15, backgroundImage: `url('${destination.mainImage}')`, backgroundSize: 'cover' }}></div>
              <div className="property-details">
                <h3 style={{ fontSize: 16, marginBottom: 5 }}>{destination.title}</h3>
                <p className="property-type" style={{ fontSize: 14, color: '#717171', marginBottom: 5 }}>{destination.subtitle}</p>
                <p className="rating" style={{ fontSize: 14 }}>★ {destination.rating} ({destination.reviews} reviews) · {destination.hostBadge}</p>
              </div>
            </div>
            <div className="price-summary" style={{ borderTop: '1px solid #ddd', paddingTop: 20, marginBottom: 30 }}>
              <h2 style={{ fontSize: 18, marginBottom: 15 }}>Your total</h2>
              <div className="price-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span>Price details</span>
                <span></span>
              </div>
              <div className="price-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span>{destination.price} x {destination.nights} nights x {guests} guest{guests > 1 ? 's' : ''}</span>
                <span>{`₹${(parseInt(destination.price.replace(/[^\d]/g, '')) * destination.nights * guests).toLocaleString()}`}</span>
              </div>
              <div className="price-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span>Taxes</span>
                <span>₹384</span>
              </div>
              <div className="price-row total-row" style={{ fontWeight: 600, fontSize: 18, paddingTop: 10, borderTop: '1px solid #ddd' }}>
                <span>Total (INR)</span>
                <span style={{ background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>{`₹${((parseInt(destination.price.replace(/[^\d]/g, '')) * destination.nights * guests) + 384).toLocaleString()}`}</span>
              </div>
            </div>
            <button className="continue-btn" style={{ width: '100%', padding: 14, background: 'linear-gradient(90deg, #1e90ff 0%, #00cba9 100%)', color: 'white', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer' }} onClick={() => {
              if (phone) {
                alert('Booking confirmation will be sent to ' + phone);
              } else {
                alert('Please enter your phone number');
              }
            }}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinationDetail;