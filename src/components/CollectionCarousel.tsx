import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ThreeScene from './ThreeScene';

const CollectionCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const collection = [
    {
      id: 1,
      name: "Quantum Leap",
      price: "$299",
      color: "#ffffff",
      modelPath: "/3d/shoe1.glb"
    },
    {
      id: 2,
      name: "Neon Nights",
      price: "$259",
      color: "#00FFD5",
      modelPath: "/3d/shoe8.glb"
    },
    {
      id: 3,
      name: "Pure Essence",
      price: "$219",
      color: "#f8f9fa",
      modelPath: "/3d/shoe6.glb"
    },
    {
      id: 4,
      name: "Urban Edge",
      price: "$279",
      color: "#111111",
      modelPath: "/3d/shoe9.glb"
    },
    {
      id: 5,
      name: "Future Classic",
      price: "$239",
      color: "#666666",
      modelPath: "/3d/shoe8.glb"
    },
    {
      id: 6,
      name: "Velocity Pro",
      price: "$319",
      color: "#FF6EC7",
      modelPath: "/3d/shoe5.glb"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 320;
    const newScrollLeft = direction === 'left' 
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00FFD5] to-[#FF6EC7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF6EC7] to-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Complete Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our full range of innovative footwear designed for every lifestyle
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              canScrollLeft 
                ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30' 
                : 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              canScrollRight 
                ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30' 
                : 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4 px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {collection.map((shoe) => (
              <div
                key={shoe.id}
                className="group relative flex-shrink-0 w-80 bg-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 hover:-translate-y-4 border border-white/20"
              >
                <div className="relative mb-6 flex justify-center group-hover:scale-105 transition-transform duration-500 left-[-100px] top-[-60px]">
                  <ThreeScene 
                    enableMouseInteraction={true}
                    autoRotate={true}
                    modelColor={shoe.color}
                    lightIntensity={7
                    }
                    modelPath={shoe.modelPath}
                    scale={4.0}
                  />
                </div>

                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{shoe.name}</h3>
                  <p className="text-2xl font-black bg-gradient-to-r from-[#00FFD5] to-[#FF6EC7] bg-clip-text text-transparent">
                    {shoe.price}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#00FFD5] to-[#FF6EC7] transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionCarousel;