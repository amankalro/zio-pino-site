import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import About from './components/About';
import Atmosphere from './components/Atmosphere';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  return (
    <div style={{ background: '#0d0c0b', color: '#f9f1e4' }}>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <About />
        <Atmosphere />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
