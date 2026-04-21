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
          {/* You can either stack everything on one page like you had it:
            <Hero />
            <SensoryExperience />
            <Atmosphere />
            <Gallery />
            <Menu />
            
            OR, you can use the Routes to separate your pages. 
            Here is how you separate them using the pages you created:
          */}
          <Routes>
            {/* Renders your dedicated Home.jsx page */}
            <Route path="/" element={<Home />} />

            {/* Renders your dedicated Menu.jsx page */}
            <Route path="/menu" element={<Menu />} />

            {/* Renders your dedicated Gallery.jsx page */}
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
