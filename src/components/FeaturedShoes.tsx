import ThreeScene from './ThreeScene';

const FeaturedShoes = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Urban Runner",
      price: "$189",
      color: "#ffffff",
      modelPath: "/3d/shoe1.glb",
    },
    {
      id: 2,
      name: "Elite Sport",
      price: "$249",
      color: "#111111",
      modelPath: "/3d/shoe2.glb",
    },
    {
      id: 3,
      name: "Classic White",
      price: "$169",
      color: "#f8f9fa",
      modelPath: "/3d/shoe3.glb",
    },
    {
      id: 4,
      name: "Street Style",
      price: "$199",
      color: "#666666",
      modelPath: "/3d/shoe5.glb",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-[#111111] via-gray-900 to-[#111111] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Featured Collection
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our most innovative designs that blend cutting-edge technology with timeless style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 justify-center">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/10 bg-white/[0.02] backdrop-blur-md max-w-sm mx-auto"
            >
              <div className="relative z-10 mb-6 flex justify-center overflow-visible">
                <div className="relative left-[-70px] top-[-70px]">
                  <ThreeScene
                    className="transform group-hover:scale-105 transition-transform duration-500"
                    enableMouseInteraction={true}
                    autoRotate={true}
                    modelColor={product.color}
                    lightIntensity={4}
                    modelPath={product.modelPath}
                    scale={4}
                  />
                </div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-[#00FFD5] mb-4">{product.price}</p>

                <button className="w-full py-3 px-6 bg-white/10 border border-white/20 text-white rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#00FFD5] hover:to-[#FF6EC7] hover:text-black">
                  Add to Cart
                </button>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#00FFD5] to-[#FF6EC7] transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShoes;
