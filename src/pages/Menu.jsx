import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const MenuPage = () => {
  const [category, setCategory] = useState("All");
  const menuRef = useRef(null);

  const menuData = {
    "Himalayan Special": [
      {
        name: "Chicken Steam Momo",
        price: "₹180",
        desc: "Hand-folded dough with juicy minced chicken",
      },
      {
        name: "Egg Thukpa",
        price: "₹220",
        desc: "Tibetan noodle soup with seasonal greens",
      },
      {
        name: "Chicken Shapta",
        price: "₹320",
        desc: "Sizzling stir-fry with mountain herbs",
      },
      {
        name: "Veg Momo",
        price: "₹160",
        desc: "Fresh garden vegetables and glass noodles",
      },
    ],
    "Sides & Breads": [
      {
        name: "Tingmo",
        price: "₹120",
        desc: "Traditional fluffy steamed bread",
      },
      {
        name: "Clear Soup",
        price: "₹150",
        desc: "Light, aromatic ginger-garlic broth",
      },
    ],
    Sips: [
      {
        name: "Butter Tea",
        price: "₹110",
        desc: "Authentic salty Himalayan tea",
      },
      {
        name: "Honey Lemon Tea",
        price: "₹140",
        desc: "Warm, soothing and naturally sweet",
      },
    ],
  };

  const allItems = Object.entries(menuData).flatMap(([cat, items]) =>
    items.map((item) => ({ ...item, category: cat })),
  );

  const filteredItems =
    category === "All"
      ? allItems
      : allItems.filter((item) => item.category === category);

  useEffect(() => {
    gsap.fromTo(
      ".menu-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
    );
  }, [category]);

  return (
    <div className="bg-cafe-dark min-h-screen text-cafe-cream py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-8xl font-serif font-bold text-cafe-gold mb-6">
            The Menu
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {["All", ...Object.keys(menuData)].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  category === cat
                    ? "text-cafe-gold border-b border-cafe-gold"
                    : "text-cafe-cream/40 hover:text-cafe-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div ref={menuRef} className="grid gap-12">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="menu-item group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-cafe-gold/10 hover:border-cafe-gold transition-all duration-500 cursor-default"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-serif group-hover:text-cafe-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-cafe-gold/50 px-2 py-1 border border-cafe-gold/20 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-cafe-cream/50 italic max-w-md">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-2xl font-serif text-cafe-gold">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
