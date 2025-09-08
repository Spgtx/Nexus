import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedShoes from './components/FeaturedShoes';
import ProductStory from './components/ProductStory';
import CollectionCarousel from './components/CollectionCarousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FeaturedShoes />
      <ProductStory />
      <CollectionCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;