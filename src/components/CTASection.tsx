import ThreeScene from './ThreeScene';

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-[#111111] via-gray-900 to-[#111111] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00FFD5]/20 to-[#FF6EC7]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#FF6EC7]/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-[#00FFD5]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border border-white rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-[#00FFD5] rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-[#FF6EC7] to-purple-400 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
        <div className="text-center">
          <div className="relative mb-16">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30"
              style={{ zIndex: -1 }}
            >
              <ThreeScene 
                enableMouseInteraction={false}
                autoRotate={true}
                modelColor="#ffffff"
                lightIntensity={10}
                modelPath='/3d/shoe8.glb'
                scale={6}
              />
            </div>
          </div>

          <div className="relative z-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              Discover The
              <br />
              <span className="bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] bg-clip-text text-transparent">
                Collection
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Experience the future of footwear. Every step is a statement.
            </p>

            <button className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white bg-transparent border-2 border-white rounded-full hover:border-transparent transition-all duration-500 hover:scale-110 hover:shadow-2xl">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#111111]">
                Shop Collection
              </span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500 scale-0 group-hover:scale-150"></div>
            </button>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-white mb-2">50+</div>
                <div className="text-gray-400 font-light">Unique Designs</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-2">1M+</div>
                <div className="text-gray-400 font-light">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-2">5★</div>
                <div className="text-gray-400 font-light">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;