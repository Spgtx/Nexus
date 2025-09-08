import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-transparent backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] bg-clip-text text-transparent tracking-tight">NEXUS</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-[#00FFD5] transition-colors duration-300 font-medium">Home</a>
              <a href="#products" className="text-white hover:text-[#00FFD5] transition-colors duration-300 font-medium">Products</a>
              <a href="#about" className="text-white hover:text-[#00FFD5] transition-colors duration-300 font-medium">About</a>
              <a href="#contact" className="text-white hover:text-[#00FFD5] transition-colors duration-300 font-medium">Contact</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              <ShoppingBag className="h-6 w-6 text-white" />
            </button>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-transparent backdrop-blur-md border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-white hover:text-[#00FFD5] transition-colors duration-300">Home</a>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-white hover:text-[#00FFD5] transition-colors duration-300">Products</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-white hover:text-[#00FFD5] transition-colors duration-300">About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-white hover:text-[#00FFD5] transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;