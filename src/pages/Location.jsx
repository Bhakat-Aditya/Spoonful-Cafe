import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".loc-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert(); // ✅ cleanup
  }, []);

  return (
    <div className="bg-cafe-dark text-cafe-cream min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
            className="w-full h-full object-cover opacity-40 scale-110"
            alt="Kolkata Streets"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cafe-dark"></div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-cafe-gold">
            Find Us
          </h1>
          <p className="text-xl tracking-[0.3em] uppercase mt-4 opacity-60">
            The Heart of Lake Market
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12"
      >
        {/* INFO */}
        <div className="md:col-span-1 space-y-8">
          <div className="loc-card p-8 bg-cafe-accent rounded-3xl border border-cafe-gold/20 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-cafe-gold mt-1" />
              <div>
                <h3 className="text-xl font-serif text-white">Address</h3>
                <p className="text-cafe-cream/60 leading-relaxed">
                  14/B, Maharaj Nanda Kumar Rd,
                  <br />
                  Lake Market, Kalighat,
                  <br />
                  Kolkata, West Bengal 700029
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-cafe-gold mt-1" />
              <div>
                <h3 className="text-xl font-serif text-white">Hours</h3>
                <p className="text-cafe-cream/60">Open Daily: 12 PM — 9 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-cafe-gold mt-1" />
              <div>
                <h3 className="text-xl font-serif text-white">Contact</h3>
                <p className="text-cafe-cream/60">+91 98301 67093</p>
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir/?api=1&destination=Spoonful+Cafe+Kolkata",
                "_blank",
              )
            }
            className="loc-card p-8 bg-cafe-gold text-cafe-dark rounded-3xl flex flex-col items-center text-center gap-4 group cursor-pointer"
          >
            <Navigation className="group-hover:animate-bounce" />
            <span className="font-bold uppercase tracking-widest text-sm">
              Get Directions
            </span>
          </div>
        </div>

        {/* MAP */}
        <div className="md:col-span-2 loc-card h-[600px] relative rounded-3xl overflow-hidden border border-cafe-gold/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58971.581190432335!2d88.35177829999999!3d22.514542799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89de87a4affd5%3A0xc0af4151260b2c1!2sSpoonful%20Cafe!5e0!3m2!1sen!2sin!4v1776775097544!5m2!1sen!2sin"
            className="w-full h-full grayscale invert opacity-80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Spoonful Cafe Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Location;
