import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Atmosphere = () => {
  useEffect(() => {
    gsap.from(".bento-item", {
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-serif text-center text-cafe-gold mb-20">
        The Vibe
      </h2>
      <div className="bento-grid grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
        <div className="bento-item md:col-span-2 md:row-span-2 bg-cafe-accent rounded-3xl overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Cafe"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm uppercase tracking-widest mb-2">Interiors</p>
            <h3 className="text-3xl font-serif">Cozy & Welcoming</h3>
          </div>
        </div>
        <div className="bento-item md:col-span-2 bg-cafe-accent rounded-3xl p-8 flex flex-col justify-center border border-cafe-gold/20">
          <h3 className="text-4xl font-serif text-cafe-gold mb-4">
            Open Kitchen
          </h3>
          <p className="text-cafe-cream opacity-60">
            Watch our chefs prepare authentic Himalayan dishes right before your
            eyes.
          </p>
        </div>
        <div className="bento-item bg-cafe-accent rounded-3xl overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1563245339-67652967912c?q=80&w=1974"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Momos"
          />
        </div>
        <div className="bento-item bg-cafe-gold rounded-3xl p-8 flex items-center justify-center text-center">
          <p className="text-cafe-dark font-bold text-2xl">
            4.7★ <br /> Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
