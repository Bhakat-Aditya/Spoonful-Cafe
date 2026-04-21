import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      }).from(
        ".hero-img",
        { scale: 1.2, opacity: 0, duration: 1.5, ease: "expo.out" },
        "-=0.8",
      );

      // Reveal sections on scroll
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-cafe-dark text-cafe-cream">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f27?q=80&w=2047"
            className="hero-img w-full h-full object-cover opacity-60"
            alt="Spoonful Cafe"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cafe-dark/40 to-cafe-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="hero-text text-7xl md:text-9xl font-serif font-bold text-cafe-gold leading-tight">
            Spoonful <br /> <span className="text-white italic">Cafe</span>
          </h1>
          <p className="hero-text text-lg md:text-2xl tracking-[0.3em] uppercase mt-6 font-light opacity-80">
            Authentic Himalayan Flavors • Kolkata
          </p>
          <div className="hero-text mt-10">
            <Link
              to="/menu"
              className="group relative px-10 py-4 overflow-hidden border border-cafe-gold text-cafe-gold transition-all"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium group-hover:text-cafe-dark transition-colors">
                DISCOVER MENU{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-cafe-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="reveal relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-cafe-gold"></div>
          <img
            src="https://images.unsplash.com/photo-1625220197328-67666e437855?q=80&w=2070"
            className="w-full aspect-square object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            alt="Himalayan Dishes"
          />
          <div className="absolute -bottom-6 -right-6 bg-cafe-gold text-cafe-dark p-6 font-serif text-2xl font-bold">
            4.7 ★ Rating
          </div>
        </div>

        <div className="reveal space-y-8">
          <h2 className="text-5xl font-serif font-bold text-cafe-gold">
            A Slice of the <br /> mountains in Kalighat.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            From juicy, handmade <span className="text-cafe-cream">Momos</span>{" "}
            to the comforting warmth of{" "}
            <span className="text-cafe-cream">Thukpa</span> and{" "}
            <span className="text-cafe-cream">Shapta</span>, we bring the
            authentic taste of the Himalayas to the heart of Kolkata.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex items-center gap-4 p-4 bg-cafe-gray rounded-lg">
              <MapPin className="text-cafe-gold" />
              <span className="text-sm">Lake Market, Kalighat</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-cafe-gray rounded-lg">
              <Phone className="text-cafe-gold" />
              <span className="text-sm">098301 67093</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
