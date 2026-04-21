import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".parallax-img");
    images.forEach((img, i) => {
      gsap.fromTo(
        img,
        { y: i % 2 === 0 ? -50 : 50 },
        {
          y: i % 2 === 0 ? 50 : -50,
          scrollTrigger: {
            trigger: img,
            scrub: true,
          },
        },
      );
    });
  }, []);

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1563245339-67652967912c?q=80&w=1974",
      size: "md",
    },
    {
      src: "https://images.unsplash.com/photo-1625220197328-67666e437855?q=80&w=2070",
      size: "lg",
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-5567aa553fbe?q=80&w=2070",
      size: "sm",
    },
    {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070",
      size: "md",
    },
    {
      src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070",
      size: "lg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-cafe-dark px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`parallax-img relative overflow-hidden rounded-2xl ${
              item.size === "lg" ? "col-span-2 row-span-2" : "col-span-1"
            }`}
          >
            <img
              src={item.src}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
              alt="Cafe Visual"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark/60 to-transparent"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
