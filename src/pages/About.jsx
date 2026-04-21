import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Manifesto Text Reveal
      gsap.from(".manifesto-text", {
        scrollTrigger: {
          trigger: ".manifesto-text",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });

      // Alternating Story Sections
      const sections = gsap.utils.toArray(".story-section");
      sections.forEach((section, i) => {
        const img = section.querySelector("img");
        const text = section.querySelector(".story-text");

        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
          },
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
          x: i % 2 === 0 ? 100 : -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-cafe-dark text-cafe-cream overflow-hidden"
    >
      {/* MANIFESTO SECTION */}
      <section className="h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="manifesto-text text-5xl md:text-8xl font-serif font-bold text-cafe-gold leading-tight">
            Beyond Food, <br />
            <span className="text-white italic">A Journey to the Peaks.</span>
          </h1>
          <p className="manifesto-text text-xl md:text-2xl text-cafe-cream/60 mt-12 font-light leading-relaxed">
            Spoonful Cafe wasn't born from a business plan, but from a longing
            for the crisp air, the warmth of a shared pot of tea, and the
            authentic soul of the Himalayas.
          </p>
        </div>
      </section>

      {/* STORY SECTIONS */}
      <div className="space-y-32 pb-32">
        {[
          {
            title: "The Root",
            text: "Our journey began with a simple mission: to bring the untouched flavors of the North East and Tibet to the vibrant streets of Kolkata. We spent months sourcing the right spices and perfecting the art of the fold for our momos.",
            img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
            align: "left",
          },
          {
            title: "The Craft",
            text: "We believe in the beauty of the 'Open Kitchen'. There is a sacred trust between the chef and the guest. Watching the steam rise from the bamboo baskets is part of the flavor.",
            img: "https://images.unsplash.com/photo-1554118811-1e0d58224f27?q=80&w=2047",
            align: "right",
          },
        ].map((item, i) => (
          <section
            key={i}
            className="story-section max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          >
            {item.align === "left" ? (
              <>
                <div className="relative h-[600px] overflow-hidden rounded-3xl">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt={item.title}
                  />
                </div>
                <div className="story-text space-y-6">
                  <h2 className="text-5xl font-serif text-cafe-gold">
                    {item.title}
                  </h2>
                  <p className="text-xl text-cafe-cream/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="story-text space-y-6 text-right">
                  <h2 className="text-5xl font-serif text-cafe-gold">
                    {item.title}
                  </h2>
                  <p className="text-xl text-cafe-cream/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="relative h-[600px] overflow-hidden rounded-3xl">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt={item.title}
                  />
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default About;
