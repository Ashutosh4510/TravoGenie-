import { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';

const destinationData = [
  {
    image: "https://images.unsplash.com/photo-1518544866330-95a2bf485c7a",
    title: "Bali, Indonesia",
    desc: "Experience the perfect blend of culture, nature, and relaxation.",
    price: "$1,299",
    duration: 5
  },
  {
    image: "https://images.unsplash.com/photo-1530158954463-cf1b32ad5429",
    title: "Santorini, Greece",
    desc: "Discover the stunning white-washed buildings and breathtaking views.",
    price: "$1,499",
    duration: 7
  },
  {
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    title: "Maldives",
    desc: "Relax in overwater bungalows surrounded by crystal clear waters.",
    price: "$1,899",
    duration: 6
  }
];

function Destination() {
  const [search, setSearch] = useState('');
  const [range, setRange] = useState(0);
  const [filterData, setFilterData] = useState(destinationData);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let result = destinationData;

    if (search.trim()) {
      result = result.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (range > 0) {
      result = result.filter(item => item.duration <= range);
    }

    if (sort === 'low') {
      result = [...result].sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));
    } else if (sort === 'high') {
      result = [...result].sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));
    }

    setFilterData(result);
  }, [search, range, sort]);

  return (
    <section style={{ padding: "8rem 5% 5rem" }}>
      <div className="filters-container" style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        marginBottom: "2rem"
      }}>
        <div>
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search destinations..."
            className="search-input"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div>
          <h3>Duration (Max Days)</h3>
          <input
            type="range"
            min="0"
            max="10"
            value={range}
            onChange={e => setRange(e.target.value)}
          />
          <p>{range} Days</p>
        </div>

        <div>
          <h3>Sort</h3>
          <button onClick={() => setSort('low')}>Low to High</button>
          <button onClick={() => setSort('high')}>High to Low</button>
        </div>
      </div>

      <div className="destination-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        {filterData.length > 0 ? (
          filterData.map((item, idx) => (
            <DestinationCard key={idx} {...item} />
          ))
        ) : (
          <p>No destinations found.</p>
        )}
      </div>
    </section>
  );
}

export default Destination;
