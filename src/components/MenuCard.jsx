import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star } from "lucide-react";

const MenuCard = ({ item }) => {
  if (!item) return null; // ✅ prevents crash

  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, cardRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative w-full md:w-[400px] h-[500px] bg-cafe-accent rounded-3xl overflow-hidden border border-cafe-gold/20 hover:border-cafe-gold transition-colors duration-500 cursor-pointer"
    >
      {/* Image Section */}
      <div className="h-3/5 overflow-hidden relative">
        <img
          src={item.img}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          alt={item.name}
        />
        <div className="absolute top-4 right-4 bg-cafe-gold text-cafe-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter flex items-center gap-1">
          <Star size={10} fill="currentColor" /> Must Try
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-serif text-cafe-gold">{item.name}</h3>
          <span className="text-xl font-serif italic text-white">
            {item.price}
          </span>
        </div>
        <p className="text-cafe-cream/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.desc}
        </p>
        <div className="pt-4">
          <div className="h-[1px] w-0 group-hover:w-full bg-cafe-gold transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

// wrapper component
export const SignatureSection = () => {
  const favorites = [
    {
      name: "Chicken Steam Momo",
      price: "₹180",
      desc: "Our legendary juicy handmade momos served with spicy Himalayan chutney.",
      img: "https://images.unsplash.com/photo-1625220197328-67666e437855?q=80&w=2070",
    },
    {
      name: "Egg Thukpa",
      price: "₹220",
      desc: "Hearty Tibetan noodle soup, perfect for a cozy rainy evening in Kolkata.",
      img: "https://images.unsplash.com/photo-1563245339-67652967912c?q=80&w=1974",
    },
    {
      name: "Chicken Shapta",
      price: "₹320",
      desc: "Traditional stir-fried meat with a blend of mountain spices.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f27?q=80&w=2047",
    },
  ];

  return (
    <section className="py-32 bg-cafe-dark px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif text-cafe-gold">
              The Signature <br />
              <span className="text-white italic">Collection</span>
            </h2>
            <p className="text-cafe-cream/50 mt-4 uppercase tracking-widest">
              Curated by our Chefs, loved by guests.
            </p>
          </div>
          <div className="text-cafe-gold font-serif italic text-2xl">
            04 / Experience
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {favorites.map((item, i) => (
            <MenuCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCard;
