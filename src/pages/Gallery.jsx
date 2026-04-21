const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1563245339-67652967912c?q=80&w=1974",
    "https://images.unsplash.com/photo-1625220197328-67666e437855?q=80&w=2070",
    "https://images.unsplash.com/photo-1552566626-5567aa553fbe?q=80&w=2070",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
  ];

  return (
    <div className="bg-cafe-dark min-h-screen py-32 px-6">
      <h1 className="text-center text-7xl font-serif font-bold text-cafe-gold mb-20">Atmosphere</h1>
      <div className="columns-1 md:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
        {images.map((src, i) => (
          <div key={i} className="relative group overflow-hidden rounded-lg">
            <img 
              src={src} 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
              alt="Cafe" 
            />
            <div className="absolute inset-0 bg-cafe-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-cafe-gold font-serif italic text-xl">Capture the Moment</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;