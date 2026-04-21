import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SensoryExperience from "./components/SensoryExperience";
import Atmosphere from "./components/Atmosphere";

// Pages (These imports were missing!)
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";

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
    // Wrapping the app in <Router> fixes the crash caused by <Link> in the Navbar
    <Router>
      <div className="bg-cafe-dark selection:bg-cafe-gold selection:text-cafe-dark overflow-x-hidden">
        <CustomCursor />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
