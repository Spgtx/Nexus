import { FaInstagram, FaTwitter, FaFacebook, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] bg-clip-text text-transparent">NEXUS</h3>
            <p className="text-gray-200 mb-6 max-w-md leading-relaxed font-light">
              Redefining comfort and style through innovation. Every step is a statement, 
              every design is a commitment to excellence.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#00FFD5] hover:to-[#FF6EC7] transition-all duration-500 group">
                <FaInstagram className="w-5 h-5 group-hover:text-[#111111] transition-colors duration-500" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#00FFD5] hover:to-[#FF6EC7] transition-all duration-500 group">
                <FaTwitter className="w-5 h-5 group-hover:text-[#111111] transition-colors duration-500" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#00FFD5] hover:to-[#FF6EC7] transition-all duration-500 group">
                <FaFacebook className="w-5 h-5 group-hover:text-[#111111] transition-colors duration-500" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#00FFD5] hover:to-[#FF6EC7] transition-all duration-500 group">
                <FaMailBulk className="w-5 h-5 group-hover:text-[#111111] transition-colors duration-500" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#00FFD5] to-pink-600 bg-clip-text text-transparent">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">New Arrivals</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Men's Collection</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Women's Collection</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Limited Edition</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#00FFD5] to-pink-600 bg-clip-text text-transparent">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">About Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Contact</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Size Guide</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Shipping Info</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#00FFD5] transition-colors duration-300 font-light">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-3xl font-dark font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent">Stay Updated</h4>
            <p className="text-gray-200 mb-6 font-light">Get the latest news about new collections and exclusive offers</p>
            
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-full focus:outline-none focus:border-[#00FFD5] transition-colors duration-300 font-light"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] text-[#111111] font-bold rounded-r-full hover:shadow-lg transition-all duration-500 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-light">
            © 2025 NEXUS. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;