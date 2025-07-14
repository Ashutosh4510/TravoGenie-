
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section
      className="home global-bg"
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        padding: 0,
      }}
    >
      <div
        style={{
          background: 'rgba(30,53,94,0.72)',
          borderRadius: '24px',
          padding: '3.5rem 2.5rem 3rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.28)',
          textAlign: 'center',
          maxWidth: 540,
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          animation: 'fadeInUp 1s ease-out',
        }}
      >
        <h1
          style={{
            fontSize: '3.2rem',
            fontWeight: 800,
            marginBottom: '0.7rem',
            color: '#fff',
            letterSpacing: '1.5px',
            textShadow: '0 4px 24px #1e355e, 0 1px 0 #fff',
          }}
        >
          Discover Your Next Adventure
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#e3eafc',
            marginBottom: '2.2rem',
            fontWeight: 500,
            letterSpacing: '0.2px',
            textShadow: '0 1px 8px #1e355e33',
          }}
        >
          Explore the world with Travogenie. Your journey begins here.
        </p>
        <Link
          to="/destination"
          style={{
            background: 'linear-gradient(135deg, #1E90FF, #2ECC71)',
            color: '#fff',
            padding: '0.85rem 2.5rem',
            fontSize: '1.18rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 700,
            boxShadow: '0 0 18px #1E90FF33',
            transition: 'all 0.3s',
            marginTop: '0.5rem',
            letterSpacing: '0.5px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'linear-gradient(135deg, #2ECC71, #1E90FF)';
            e.target.style.boxShadow = '0 0 32px #2ECC7144';
          }}
          onMouseLeave={e => {
            e.target.style.background = 'linear-gradient(135deg, #1E90FF, #2ECC71)';
            e.target.style.boxShadow = '0 0 18px #1E90FF33';
          }}
        >
          Explore Destinations
        </Link>
      </div>
    </section>
  );
}

export default Home;
