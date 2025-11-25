import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Catalog from './components/Catalog';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Products />
      <Catalog />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
