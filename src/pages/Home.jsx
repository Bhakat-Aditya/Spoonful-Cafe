import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline();
      tl.from(".hero-title span", {
        y: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      }).from(
        ".hero-sub",
        {
          opacity: 0,
          duration: 1,
          y: 20,
        },
        "-=0.5",
      );

      // Scroll Parallax for Image
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.2,
        y: 100,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
          className="w-full h-full object-cover scale-110 opacity-60"
          alt="Cafe Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cafe-dark/20 to-cafe-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="hero-title text-8xl md:text-[12rem] font-serif font-bold text-cafe-gold leading-none overflow-hidden">
          <span className="block">Spoonful</span>
          <span className="block text-white italic">Cafe</span>
        </h1>
        <p className="hero-sub text-cafe-cream text-lg md:text-2xl tracking-[0.5em] uppercase mt-8 font-light opacity-70">
          A Himalayan Sanctuary in Kolkata
        </p>
      </div>
    </section>
  );
};

export default Home;
