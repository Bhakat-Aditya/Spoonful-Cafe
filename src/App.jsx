import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import SensoryExperience from "./components/SensoryExperience";
import Atmosphere from "./components/Atmosphere";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-cafe-dark text-cafe-cream selection:bg-cafe-gold selection:text-cafe-dark">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SensoryExperience />
        <Atmosphere />

      </main>
      <Footer />
    </div>
  );
}
export default App;
