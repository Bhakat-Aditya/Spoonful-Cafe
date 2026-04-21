const Menu = () => {
  const categories = {
    "Himalayan Special": [
      { name: "Chicken Steam Momo", price: "₹180", desc: "Juicy, handmade, served with spicy chutney" },
      { name: "Egg Thukpa", price: "₹220", desc: "Hearty Tibetan noodle soup with organic veggies" },
      { name: "Chicken Shapta", price: "₹320", desc: "Authentic Himalayan stir-fry meat" },
    ],
    "Sides & Breads": [
      { name: "Tingmo", price: "₹120", desc: "Traditional steamed fluffy bread" },
      { name: "Clear Soup", price: "₹150", desc: "Light and refreshing Himalayan broth" },
    ]
  };

  return (
    <div className="bg-cafe-dark min-h-screen text-cafe-cream py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-24">
          <h1 className="text-7xl font-serif font-bold text-cafe-gold mb-4">The Menu</h1>
          <p className="text-gray-500 uppercase tracking-widest">Curated flavors from the East</p>
        </header>

        {Object.entries(categories).map(([cat, items]) => (
          <div key={cat} className="mb-20">
            <h3 className="text-2xl font-serif italic text-cafe-gold mb-8 border-b border-cafe-gray pb-2">{cat}</h3>
            <div className="grid gap-8">
              {items.map((item, i) => (
                <div key={i} className="group flex justify-between items-end border-b border-cafe-gray pb-4 hover:border-cafe-gold transition-colors cursor-pointer">
                  <div className="max-w-md">
                    <h4 className="text-2xl font-medium group-hover:text-cafe-gold transition-colors">{item.name}</h4>
                    <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  </div>
                  <span className="text-xl font-serif text-cafe-gold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Menu;