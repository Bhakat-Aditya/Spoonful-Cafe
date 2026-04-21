import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SensoryExperience = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      ".panel",
      { x: 0 },
      {
        x: "-200vw", // Move 2 panels across
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      },
    );
    return () => pin.kill();
  }, []);

  const data = [
    {
      title: "The Aroma",
      desc: "The scent of steaming Thukpa and fresh Himalayan herbs filling the air.",
      img: "https://images.unsplash.com/photo-1563245339-67652967912c?q=80&w=2070",
    },
    {
      title: "The Taste",
      desc: "Juicy, handmade momos that melt in your mouth, paired with our secret spicy chutney.",
      img: "https://images.unsplash.com/photo-1625220197328-67666e437855?q=80&w=2070",
    },
    {
      title: "The Soul",
      desc: "A cozy, open-kitchen atmosphere where you watch the craft of Himalayan cooking.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f27?q=80&w=2047",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div ref={triggerRef} className="h-screen flex items-center">
        <div ref={containerRef} className="flex w-[300vw] h-screen">
          {data.map((item, i) => (
            <div
              key={i}
              className="panel w-screen h-screen flex items-center justify-center px-10 md:px-20 gap-10"
            >
              <div className="w-1/2 h-[70vh] overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt={item.title}
                />
              </div>
              <div className="w-1/2 space-y-6">
                <h2 className="text-6xl md:text-8xl font-serif text-cafe-gold">
                  {item.title}
                </h2>
                <p className="text-2xl text-cafe-cream opacity-70 leading-relaxed max-w-lg">
                  {item.desc}
                </p>
                <div className="text-cafe-gold text-4xl font-serif italic">
                  0{i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SensoryExperience;
