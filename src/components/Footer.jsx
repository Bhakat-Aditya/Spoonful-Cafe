import React from "react";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cafe-dark pt-32 pb-12 px-6 border-t border-cafe-gold/10">
      <div className="max-w-7xl mx-auto">
        {/* Big Footer Title */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-[10rem] font-serif font-bold text-cafe-gold leading-none mb-8 opacity-20">
            Spoonful
          </h2>
          <p className="text-xl md:text-2xl text-cafe-cream font-light tracking-widest uppercase">
            Ready for a Taste of the Himalayas?
          </p>
          <div className="mt-10">
            <button className="px-12 py-5 bg-white text-cafe-dark font-bold uppercase tracking-tighter rounded-full hover:bg-cafe-gold transition-colors duration-500">
              Book a Table Now
            </button>
          </div>
        </div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-cafe-cream/60 mb-24">
          <div className="space-y-6">
            <h4 className="text-cafe-gold text-lg uppercase tracking-widest font-bold">
              Visit Us
            </h4>
            <p className="leading-relaxed">
              14/B, Maharaj Nanda Kumar Rd,
              <br />
              Lake Market, Kalighat,
              <br />
              Kolkata, West Bengal 700029
            </p>
            <div className="flex gap-4 pt-4">
              <Instagram className="hover:text-cafe-gold cursor-pointer transition-colors" />
              <Facebook className="hover:text-cafe-gold cursor-pointer transition-colors" />
              <Twitter className="hover:text-cafe-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-cafe-gold text-lg uppercase tracking-widest font-bold">
              Hours
            </h4>
            <p className="flex justify-between border-b border-white/10 py-2">
              <span>Mon - Fri</span> <span>12 PM - 9 PM</span>
            </p>
            <p className="flex justify-between border-b border-white/10 py-2">
              <span>Sat - Sun</span> <span>11 AM - 10 PM</span>
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-cafe-gold text-lg uppercase tracking-widest font-bold">
              Contact
            </h4>
            <div className="flex items-center gap-3 text-cafe-cream">
              <Phone size={18} className="text-cafe-gold" />
              <span>098301 67093</span>
            </div>
            <div className="flex items-center gap-3 text-cafe-cream">
              <Mail size={18} className="text-cafe-gold" />
              <span>hello@spoonfulcafe.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-xs uppercase tracking-widest opacity-40">
          <p>© 2026 Spoonful Cafe. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
