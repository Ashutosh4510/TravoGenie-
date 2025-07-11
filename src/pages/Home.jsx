function Home() {
  return (
    <section className="home">
      <div className="landing-page" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '3rem', borderRadius: '12px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Discover Your Next Adventure
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Explore the world with Travogenie. Your journey begins here.
          </p>
          <a href="/destination" className="cta-button" style={{
            backgroundColor: '#2a4365',
            color: 'white',
            padding: '0.75rem 2rem',
            fontSize: '1.1rem',
            borderRadius: '30px',
            textDecoration: 'none',
            transition: '0.3s ease'
          }}>Explore Destinations</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
