function Home() {
  return (
    <section className="home">
      <div className="landing-page" style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/seed/beach/1920/1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div className="content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore breathtaking destinations around the world with our curated travel experiences.</p>
          <a href="/destination" className="cta-button">Explore Destinations</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
