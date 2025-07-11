import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Feature from './pages/Feature';
import Destination from './pages/Destination';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
