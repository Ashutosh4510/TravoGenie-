import { useEffect, useState } from 'react';
import DestinationCard from '../components/DestinationCard';

// Mock data as fallback
const mockDestinations = [
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800',
    title: 'Bali, Indonesia',
    desc: 'Asia | Denpasar',
    price: '$1200',
    duration: 7
  },
  {
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800',
    title: 'Santorini, Greece',
    desc: 'Europe | Fira',
    price: '$1800',
    duration: 5
  },
  // Add more mock destinations as needed
];

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try the API first
        const response = await fetch('https://restcountries.com/v3.1/all');
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const cards = data
            .filter(country => country.flags && country.name?.common)
            .slice(0, 30)
            .map((country) => ({
              image: country.flags?.png || 'https://via.placeholder.com/300x200',
              title: country.name?.common || 'Unknown',
              desc: `${country.region || 'N/A'} | ${country.capital?.[0] || 'No Capital'}`,
              price: `$${(800 + Math.random() * 1000).toFixed(0)}`,
              duration: Math.floor(Math.random() * 10) + 3
            }));
          
          setDestinations(cards);
        } else {
          throw new Error('API response is not an array');
        }
      } catch (error) {
        console.error("API fetch failed, using mock data:", error);
        setError("Couldn't load real destinations. Showing sample data.");
        setDestinations(mockDestinations);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = destinations
    .filter(d => d.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'low') return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
      if (sort === 'high') return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
      return 0;
    });

  return (
    <section style={{ padding: '8rem 5% 5rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Explore Destinations</h2>

      {error && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '0.5rem', flex: '1', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={() => setSort('low')}
          style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: sort === 'low' ? '#ddd' : '#eee' }}
        >
          Price: Low to High
        </button>
        <button 
          onClick={() => setSort('high')}
          style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', background: sort === 'high' ? '#ddd' : '#eee' }}
        >
          Price: High to Low
        </button>
      </div>

      {loading ? (
        <p>Loading destinations...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {filtered.length === 0 ? (
            <p>No destinations found.</p>
          ) : (
            filtered.map((dest, i) => (
              <DestinationCard key={i} {...dest} />
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default Destination;