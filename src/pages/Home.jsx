
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <div className="landing-page">
        <div className="overlay">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world with Travogenie. Your journey begins here.</p>
          <Link to="/destination" className="cta-button">Explore Destinations</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
