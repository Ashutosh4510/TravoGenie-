import { useEffect, useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const mockDestinations = [
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    title: 'Bali, Indonesia',
    desc: 'Asia | Denpasar',
    price: '$1200',
    duration: 7,
    rating: 4.8
  },
  {
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    title: 'Santorini, Greece',
    desc: 'Europe | Fira',
    price: '$1800',
    duration: 5,
    rating: 4.9
  },
  {
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    title: 'Kyoto, Japan',
    desc: 'Asia | Kyoto',
    price: '$2100',
    duration: 8,
    rating: 4.7
  },
  {
    image: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995',
    title: 'Paris, France',
    desc: 'Europe | Paris',
    price: '$1500',
    duration: 6,
    rating: 4.6
  },
  {
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
    title: 'Maldives',
    desc: 'Asia | Malé',
    price: '$2500',
    duration: 7,
    rating: 4.9
  },
  {
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
    title: 'New York, USA',
    desc: 'North America | NYC',
    price: '$1700',
    duration: 5,
    rating: 4.5
  },
  {
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    title: 'Rome, Italy',
    desc: 'Europe | Rome',
    price: '$1600',
    duration: 6,
    rating: 4.7
  },
  {
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
    title: 'Sydney, Australia',
    desc: 'Oceania | Sydney',
    price: '$2200',
    duration: 9,
    rating: 4.6
  },
  {
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    title: 'Cape Town, South Africa',
    desc: 'Africa | Cape Town',
    price: '$1900',
    duration: 8,
    rating: 4.8
  },
  {
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
    title: 'Rio de Janeiro, Brazil',
    desc: 'South America | Rio',
    price: '$1400',
    duration: 7,
    rating: 4.5
  },
  {
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    title: 'Dubai, UAE',
    desc: 'Middle East | Dubai',
    price: '$2300',
    duration: 5,
    rating: 4.7
  },
  {
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
    title: 'Barcelona, Spain',
    desc: 'Europe | Barcelona',
    price: '$1350',
    duration: 5,
    rating: 4.6
  },
  {
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    title: 'Bangkok, Thailand',
    desc: 'Asia | Bangkok',
    price: '$950',
    duration: 6,
    rating: 4.4
  },
  {
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
    title: 'Venice, Italy',
    desc: 'Europe | Venice',
    price: '$1750',
    duration: 4,
    rating: 4.8
  },
  {
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    title: 'Machu Picchu, Peru',
    desc: 'South America | Cusco',
    price: '$1650',
    duration: 8,
    rating: 4.9
  },
  {
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
    title: 'Istanbul, Turkey',
    desc: 'Eurasia | Istanbul',
    price: '$1250',
    duration: 5,
    rating: 4.6
  },
  {
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    title: 'Queenstown, New Zealand',
    desc: 'Oceania | Queenstown',
    price: '$2400',
    duration: 10,
    rating: 4.8
  },
  {
  image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
  title: 'Amalfi Coast, Italy',
  desc: 'Europe | Campania',
  price: '$1950',
  duration: 7,
  rating: 4.9
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Phuket, Thailand',
  desc: 'Asia | Phuket',
  price: '$1100',
  duration: 6,
  rating: 4.5
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Prague, Czech Republic',
  desc: 'Europe | Prague',
  price: '$1250',
  duration: 5,
  rating: 4.7
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Jaipur, India',
  desc: 'Asia | Rajasthan',
  price: '$900',
  duration: 6,
  rating: 4.4
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Swiss Alps, Switzerland',
  desc: 'Europe | Alps',
  price: '$2800',
  duration: 7,
  rating: 4.9
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Marrakech, Morocco',
  desc: 'Africa | Marrakech',
  price: '$1300',
  duration: 5,
  rating: 4.6
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Patagonia, Chile',
  desc: 'South America | Andes',
  price: '$2200',
  duration: 10,
  rating: 4.8
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Seoul, South Korea',
  desc: 'Asia | Seoul',
  price: '$1750',
  duration: 6,
  rating: 4.6
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Vancouver, Canada',
  desc: 'North America | BC',
  price: '$1850',
  duration: 6,
  rating: 4.7
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Siem Reap, Cambodia',
  desc: 'Asia | Angkor',
  price: '$950',
  duration: 5,
  rating: 4.5
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Edinburgh, Scotland',
  desc: 'Europe | Scotland',
  price: '$1550',
  duration: 5,
  rating: 4.7
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Zermatt, Switzerland',
  desc: 'Europe | Matterhorn',
  price: '$2600',
  duration: 6,
  rating: 4.9
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Hawaii, USA',
  desc: 'Oceania | Pacific',
  price: '$2300',
  duration: 8,
  rating: 4.8
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Petra, Jordan',
  desc: 'Middle East | Ma\'an',
  price: '$1650',
  duration: 7,
  rating: 4.7
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Lisbon, Portugal',
  desc: 'Europe | Lisbon',
  price: '$1400',
  duration: 5,
  rating: 4.6
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Great Barrier Reef, Australia',
  desc: 'Oceania | Queensland',
  price: '$2450',
  duration: 9,
  rating: 4.8
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Budapest, Hungary',
  desc: 'Europe | Budapest',
  price: '$1200',
  duration: 4,
  rating: 4.5
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Galápagos Islands, Ecuador',
  desc: 'South America | Pacific',
  price: '$2900',
  duration: 10,
  rating: 4.9
},
{
  image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
  title: 'Cairo, Egypt',
  desc: 'Africa | Cairo',
  price: '$1350',
  duration: 6,
  rating: 4.5
},
{
  image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
  title: 'Reykjavik, Iceland',
  desc: 'Europe | Iceland',
  price: '$2100',
  duration: 7,
  rating: 4.7
},
  {
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
    title: 'Banff, Canada',
    desc: 'North America | Alberta',
    price: '$1950',
    duration: 7,
    rating: 4.7
  },
  {
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    title: 'Zanzibar, Tanzania',
    desc: 'Africa | Zanzibar',
    price: '$2100',
    duration: 8,
    rating: 4.7
  },
  {
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4',
    title: 'Hanoi, Vietnam',
    desc: 'Asia | Hanoi',
    price: '$1100',
    duration: 6,
    rating: 4.5
  }
];

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDestinations(mockDestinations);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredDestinations = destinations
    .filter(d => {
      const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'all' || 
                         (filter === 'budget' && parseInt(d.price.slice(1)) < 1500) || 
                         (filter === 'luxury' && parseInt(d.price.slice(1)) >= 2000);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === 'price-low') return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
      if (sort === 'price-high') return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'duration') return a.duration - b.duration;
      return 0;
    });

  const totalPages = Math.ceil(filteredDestinations.length / cardsPerPage);
  const paginatedDestinations = filteredDestinations.slice((page - 1) * cardsPerPage, page * cardsPerPage);

  return (
    <div
      className="global-bg"
      style={{
        minHeight: '100vh',
        width: '100vw',
        padding: '80px 5% 40px',
        maxWidth: '100vw',
        margin: '0 auto',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1
          className="destination-heading-animate"
          style={{
            fontSize: '2.5rem',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #1E90FF, #2ECC71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Explore Destinations
        </h1>
        <p
          className="destination-subtitle-animate"
          style={{
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #1E90FF, #2ECC71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Discover your perfect getaway from our curated collection
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          rowGap: '18px',
        }}
      >
        <div
          style={{
            position: 'relative',
            flex: '0 0 320px',
            maxWidth: '320px',
            minWidth: '180px',
            marginRight: '64px',
            marginBottom: 0,
            alignSelf: 'center',
          }}
        >
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '320px',
              padding: '14px 24px 14px 44px',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1.05rem',
              background: 'linear-gradient(90deg, #e3eafc 0%, #f8fafc 100%)',
              boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
              color: '#2a4365',
              fontWeight: 500,
              outline: 'none',
              transition: 'box-shadow 0.3s, background 0.3s',
            }}
            onFocus={e => e.target.style.boxShadow = '0 0 0 3px #2a436580'}
            onBlur={e => e.target.style.boxShadow = '0 2px 8px rgba(44,62,80,0.10)'}
          />
          <FaSearch style={{
            position: 'absolute',
            left: '18px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#2a4365',
            fontSize: '1.2rem',
            opacity: 0.7,
            pointerEvents: 'none'
          }} />
        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          {['all', 'budget', 'luxury'].map(type => {
            const colors = {
              all: '#2a4365',
              budget: '#38b2ac',
              luxury: '#d69e2e'
            };
            const isActive = filter === type;
            return (
              <button
                key={type}
                style={{
                  padding: '10px 28px',
                  border: 'none',
                  borderRadius: '26px',
                  background: isActive
                    ? colors[type]
                    : 'linear-gradient(90deg, #e3eafc 0%, #f8fafc 100%)',
                  color: isActive ? 'white' : colors[type],
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  letterSpacing: '0.5px',
                  boxShadow: isActive
                    ? `0 6px 20px ${colors[type]}40`
                    : '0 4px 16px rgba(44,62,80,0.10)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(.25,.8,.25,1)',
                  outline: 'none',
                  marginRight: type !== 'luxury' ? '0px' : '0',
                  filter: isActive ? 'brightness(1.05)' : 'none',
                }}
                onClick={() => setFilter(type)}
                onMouseEnter={e => {
                  e.target.style.transform = 'scale(1.10)';
                  e.target.style.boxShadow = `0 12px 32px ${colors[type]}60`;
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = isActive
                    ? `0 6px 20px ${colors[type]}40`
                    : '0 4px 16px rgba(44,62,80,0.10)';
                }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            );
          })}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: '12px 24px',
            border: 'none',
            borderRadius: '30px',
            background: 'linear-gradient(90deg, #e3eafc 0%, #f8fafc 100%)',
            color: '#2a4365',
            fontWeight: '600',
            fontSize: '1rem',
            boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
            outline: 'none',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s, background 0.3s',
            alignSelf: 'center',
          }}
          onFocus={e => e.target.style.boxShadow = '0 0 0 3px #2a436580'}
          onBlur={e => e.target.style.boxShadow = '0 2px 8px rgba(44,62,80,0.10)'}
          onMouseEnter={e => e.target.style.background = 'linear-gradient(90deg, #dbeafe 0%, #e3eafc 100%)'}
          onMouseLeave={e => e.target.style.background = 'linear-gradient(90deg, #e3eafc 0%, #f8fafc 100%)'}
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
          <option value="duration">Shortest Duration</option>
        </select>
      </div>

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', pointerEvents: 'none' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ 
                height: '200px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite'
              }}></div>
              <div style={{ padding: '20px' }}>
                <div style={{ height: '24px', width: '70%', marginBottom: '15px', background: '#f0f0f0', borderRadius: '4px' }}></div>
                <div style={{ height: '16px', width: '90%', marginBottom: '20px', background: '#f0f0f0', borderRadius: '4px' }}></div>
                <div style={{ height: '20px', width: '50%', background: '#f0f0f0', borderRadius: '4px' }}></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredDestinations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <div style={{ 
            width: '300px', 
            height: '200px', 
            background: '#f5f5f5', 
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px'
          }}>
            <FaMapMarkerAlt style={{ fontSize: '3rem', color: '#ccc' }} />
          </div>
          <h3 style={{ color: '#2a4365', marginBottom: '20px' }}>No destinations match your search</h3>
          <button 
            onClick={() => {
              setSearch('');
              setFilter('all');
              setSort(null);
            }}
            style={{
              padding: '10px 25px',
              background: '#2a4365',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {paginatedDestinations.map((dest, i) => {
              // Find the global index in filteredDestinations for correct id
              const globalIndex = (page - 1) * cardsPerPage + i;
              return (
                <DestinationCard
                  key={`${filter}-${search}-${globalIndex}`}
                  id={globalIndex}
                  image={dest.image}
                  title={dest.title}
                  desc={dest.desc}
                  price={dest.price}
                  duration={dest.duration}
                  rating={dest.rating}
                  className={i % 2 === 0 ? 'left' : 'right'}
                />
              );
            })}
          </div>
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '32px' }}>
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                style={{
                  padding: '10px 28px',
                  border: 'none',
                  borderRadius: '26px',
                  background: page === 1 ? '#e3eafc' : '#2a4365',
                  color: page === 1 ? '#aaa' : 'white',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 16px rgba(44,62,80,0.10)',
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.25s cubic-bezier(.25,.8,.25,1)',
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (page !== 1) {
                    e.target.style.transform = 'scale(1.10)';
                    e.target.style.boxShadow = '0 12px 32px #2a436560';
                  }
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 16px rgba(44,62,80,0.10)';
                }}
              >
                Previous
              </button>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                style={{
                  padding: '10px 28px',
                  border: 'none',
                  borderRadius: '26px',
                  background: page === totalPages ? '#e3eafc' : '#2a4365',
                  color: page === totalPages ? '#aaa' : 'white',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 16px rgba(44,62,80,0.10)',
                  cursor: page === totalPages ? 'not-allowed' : 'pointer',
                  transition: 'all 0.25s cubic-bezier(.25,.8,.25,1)',
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (page !== totalPages) {
                    e.target.style.transform = 'scale(1.10)';
                    e.target.style.boxShadow = '0 12px 32px #2a436560';
                  }
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 16px rgba(44,62,80,0.10)';
                }}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

export default Destination;