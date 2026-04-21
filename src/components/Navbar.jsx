import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = ["Menu", "Gallery", "About", "Location"];

  return (
    <>
      {/* 1. TOP NAVBAR (Affected by GSAP scroll) */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-8 md:px-16"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-serif font-bold text-cafe-gold tracking-tighter z-[110] relative"
        >
          S. <span className="text-white italic">Cafe</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest text-cafe-cream/70 font-light">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="hover:text-cafe-gold text-lg transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cafe-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Toggle Button (Mobile Only) */}
        <button
          className="md:hidden z-[110] relative flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-cafe-gold transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-cafe-gold transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-cafe-gold transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* 2. FULL-SCREEN MOBILE OVERLAY (Outside of navRef, NOT affected by GSAP scroll) */}
      <div
        className={`fixed inset-0 bg-cafe-dark flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-[90] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 text-center text-2xl uppercase tracking-widest text-cafe-cream font-light">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              className="hover:text-cafe-gold transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
