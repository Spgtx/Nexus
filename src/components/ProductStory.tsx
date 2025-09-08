import ThreeScene from './ThreeScene';

const ProductStory = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#111111] via-gray-900 to-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto flex justify-center left-[-70px] top-[-150px]">
              <ThreeScene 
                className="mx-auto"
                enableMouseInteraction={true}
                enableScrollRotation={true}
                autoRotate={false}
                modelColor="#111111"
                lightIntensity={7.0}
                modelPath='/3d/shoe6.glb'
                scale={6}
              />
              
              <div className="absolute top-10 right-10 w-4 h-4 bg-gradient-to-br from-[#00FFD5] to-[#FF6EC7] rounded-full animate-float"></div>
              <div className="absolute bottom-10 left-10 w-3 h-3 bg-gradient-to-br from-[#FF6EC7] to-purple-400 rounded-full animate-float delay-1000"></div>
              <div className="absolute top-1/2 right-5 w-2 h-2 bg-gradient-to-br from-[#00FFD5] to-[#FF6EC7] rounded-full animate-float delay-500"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
                Designed for
                <span className="bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] bg-clip-text text-transparent"> Motion</span>
              </h2>
              
              <p className="text-lg text-white leading-relaxed mb-6 font-light">
                Every curve, every contour, and every material choice in our shoes is meticulously crafted 
                to enhance your natural movement. We combine advanced biomechanics with cutting-edge materials 
                to create footwear that doesn't just look extraordinary—it performs extraordinarily.
              </p>
              
              <p className="text-lg text-white leading-relaxed mb-8 font-light">
                From our proprietary foam technology that adapts to your stride, to our sustainable materials 
                that reduce environmental impact without compromising durability, each pair represents our 
                commitment to innovation and responsibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-500">Advanced Cushioning</h3>
                <p className="text-gray-300 font-light">Proprietary foam that adapts to your unique stride pattern</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-500">Sustainable Materials</h3>
                <p className="text-gray-300 font-light">Eco-friendly components without performance compromise</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-500">Precision Engineering</h3>
                <p className="text-gray-300 font-light">Every detail optimized for comfort and durability</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-green-500">Timeless Design</h3>
                <p className="text-gray-300 font-light">Modern aesthetics that transcend trends</p>
              </div>
            </div>

            <button className="inline-flex bg-transparent items-center px-10 py-4 bg-[#111111] text-white rounded-full font-bold hover:bg-gradient-to-r hover:from-[#00FFD5] hover:to-[#FF6EC7] hover:text-[#111111] hover:opacity-40 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStory;