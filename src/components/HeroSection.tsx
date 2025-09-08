import ThreeScene from './ThreeScene';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#111111] via-gray-900 to-[#111111] relative">
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00FFD5] to-[#FF6EC7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF6EC7] to-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
            Step Into The
            <span className="bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] bg-clip-text text-transparent"> Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Redefining comfort and style through innovation
          </p>
        </div>

          <button className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white bg-[#111111] rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500 scale-0 group-hover:scale-150"></div>
          </button>

          <div className="flex flex-col items-center">
          <div className="relative flex justify-center overflow-visible">
            <ThreeScene 
              className="mx-auto top-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              enableMouseInteraction={true}
              autoRotate={true}
              modelColor="#ffffff"
              lightIntensity={7}
              modelPath="/3d/shoe1.glb"
              scale={6.3}
            />
            </div>
          </div>
            
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#00FFD5] to-[#FF6EC7] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#FF6EC7] to-purple-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-[#00FFD5] to-purple-400 rounded-full animate-float delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;