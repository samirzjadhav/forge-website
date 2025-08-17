"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const manufactureCards = [
  {
    id: 1,
    title: "Spherical Joint",
    material: "Steel, Stainless Steel",
    load: "Up to 10000N",
    thread: "M8 to M30",
    bearing: "Ball or Plain",
    image:
      "https://plus.unsplash.com/premium_photo-1715779332226-13fdfe35b907?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Spherical Joint",
    material: "Steel, Stainless Steel",
    load: "Up to 10000N",
    thread: "M8 to M30",
    bearing: "Ball or Plain",
    image:
      "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1288&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Spherical Joint",
    material: "Steel, Stainless Steel",
    load: "Up to 10000N",
    thread: "M8 to M30",
    bearing: "Ball or Plain",
    image:
      "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1288&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Spherical Joint",
    material: "Steel, Stainless Steel",
    load: "Up to 10000N",
    thread: "M8 to M30",
    bearing: "Ball or Plain",
    image:
      "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1288&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Spherical Joint",
    material: "Steel, Stainless Steel",
    load: "Up to 10000N",
    thread: "M8 to M30",
    bearing: "Ball or Plain",
    image:
      "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1288&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Spherical Joint",
    material: "Steel, Stainless Steel",
    load: "Up to 10000N",
    thread: "M8 to M30",
    bearing: "Ball or Plain",
    image:
      "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1288&auto=format&fit=crop",
  },
];

export default function ManufactureSection() {
  const sectionRef = useRef(null);
  const [showSecondBatch, setShowSecondBatch] = useState(false);

  // Detect when user reaches bottom of the section
  const handleScroll = () => {
    if (!sectionRef.current) return;
    const { top, bottom } = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // When bottom of section is visible, show batch 2
    if (bottom <= windowHeight) setShowSecondBatch(true);
    else setShowSecondBatch(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayedCards = showSecondBatch
    ? manufactureCards.slice(3, 6)
    : manufactureCards.slice(0, 3);

  return (
    <section ref={sectionRef} id="manufacture" className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Subtitle & Title */}
        <h4 className="text-sm text-white uppercase mb-2 px-4 py-2 bg-blue-500 rounded-md">
          • Manufacture •
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          The Most Popular <br /> <span className="textured-text">Details</span>{" "}
          We Produce
        </h2>

        <div className="relative flex justify-between gap-8 h-[500px] w-full">
          <AnimatePresence mode="wait">
            {displayedCards.map((card, idx) => (
              <motion.div
                key={card.id}
                className="border border-gray-300 rounded-sm p-4 bg-sky-100 flex flex-col gap-2 hover:shadow-lg transition-shadow absolute top-0 w-[33%]"
                style={{ left: `${idx * 33.33}%` }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 3, delay: idx * 0.5, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <span className="text-2xl">→</span>
                </div>
                <div className="border-b-2 border-black"></div>
                <p className="text-gray-600 text-[14px]">
                  <span className="font-semibold">Material: </span>
                  {card.material}
                </p>
                <p className="text-gray-600 text-[14px]">
                  <span className="font-semibold">Load Capacity: </span>
                  {card.load}
                </p>
                <p className="text-gray-600 text-[14px]">
                  <span className="font-semibold">Thread: </span>
                  {card.thread}
                </p>
                <p className="text-gray-600 text-[14px]">
                  <span className="font-semibold">Bearing Type: </span>
                  {card.bearing}
                </p>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-60 object-cover rounded-md"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
