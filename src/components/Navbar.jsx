import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const magBtnRef = useRef(null);

  useEffect(() => {
    // Navbar scroll effect: fade out and slide up on scroll
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "100px top",
        scrub: true,
      },
      y: -100,
      opacity: 0,
    });

    // Magnetic Button Logic
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        magBtnRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // If cursor is within 100px, pull the button
      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
        gsap.to(magBtnRef.current, {
          x: distanceX * 0.3,
          y: distanceY * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(magBtnRef.current, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-8 md:px-16"
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-serif font-bold text-cafe-gold tracking-tighter"
      >
        S. <span className="text-white italic">Cafe</span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest text-cafe-cream/70 font-light">
        {["Menu", "Gallery", "About", "Location"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="hover:text-cafe-gold transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cafe-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Magnetic CTA */}
      <div
        ref={magBtnRef}
        className="px-6 py-2 bg-cafe-gold text-cafe-dark rounded-full text-xs font-bold uppercase tracking-tighter cursor-pointer hover:scale-105 transition-transform"
      >
        Reserve Table
      </div>
    </nav>
  );
};

export default Navbar;
