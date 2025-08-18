"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const manufactureCards = [
  {
    id: 1,
    title: "Spherical Joint",
    Material: "Steel, Stainless Steel",
    Load: "Up to 10000N",
    Thread: "M8 to M30",
    Bearing: "Ball or Plain",
    image: "https://m.media-amazon.com/images/I/61Tpnx-jSYL.jpg",
  },
  {
    id: 2,
    title: "Mount Plate",
    Material: "Steel, aluminum",
    HoleDimeter: "6mm to 12mm",
    VibrationDamping: "Rubber inserts",
    MountingStyle: "horizontal,vertical",
    image:
      "https://www.ace-ace.com/media/msimages/resized/600/ACE_All-Attitude-Mounts_AAM5220_GT_IMG_Single-01_RGB-L.jpg",
  },
  {
    id: 3,
    title: "Multi-pin Enclosure",
    Material: "plastic, metal",
    PinCount: "2 to 50+ pins",
    WaterProofrating: "IP65/IP67",
    Locking: "screw or clip",
    image: "https://m.media-amazon.com/images/I/61lnkFL9ndL.jpg",
  },
  {
    id: 4,
    title: "Spherical Joint",
    Material: "Steel, Stainless Steel",
    Load: "Up to 10000N",
    Thread: "M8 to M30",
    Bearing: "Ball or Plain",
    image: "https://m.media-amazon.com/images/I/61Tpnx-jSYL.jpg",
  },
  {
    id: 5,
    title: "Protective Cap",
    Material: "Steel, Rubber",
    FitType: "Snap-on, Threaded",
    WaterRegistance: "IP54",
    ImpactRegistance: "10 J",
    image:
      "https://m.media-amazon.com/images/I/513hSip5cbL._UF1000%2C1000_QL80_.jpg",
  },
  {
    id: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1681487927178-ebfd0888a940?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ManufactureSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [showSecondBatch, setShowSecondBatch] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Detect scroll for batch
  const handleScroll = () => {
    if (!sectionRef.current) return;
    const { bottom } = sectionRef.current.getBoundingClientRect();
    if (bottom <= window.innerHeight) setShowSecondBatch(true);
    else setShowSecondBatch(false);
  };

  // Detect screen size to determine how many cards to show
  const handleResize = () => {
    if (window.innerWidth < 640) setCardsToShow(1); // mobile
    else if (window.innerWidth < 768) setCardsToShow(2); // tablet
    else setCardsToShow(3); // desktop/large
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedCards = showSecondBatch
    ? manufactureCards.slice(3, 3 + cardsToShow)
    : manufactureCards.slice(0, cardsToShow);

  return (
    <section ref={sectionRef} id="manufacture" className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Subtitle & Title */}
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-sm text-white uppercase mb-2 px-4 py-2 bg-blue-500 rounded-md"
        >
          • Manufacture •
        </motion.h4>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center"
        >
          The Most Popular <br /> <span className="textured-text">Details</span>{" "}
          We Produce
        </motion.h2>

        {/* Cards container */}
        <div className="relative w-full flex flex-col sm:flex-row md:flex-row md:justify-between gap-8 h-auto md:h-[500px]">
          <AnimatePresence mode="wait">
            {displayedCards.map((card, idx) => (
              <motion.div
                key={card.id || idx}
                className={`rounded-sm h-[440px] p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow
      w-full sm:w-[48%] md:w-[33%] lg:absolute md:static
      ${
        card.title
          ? "border border-gray-300 bg-[#e3f4fd]"
          : "relative bg-blue-600 overflow-hidden text-white"
      }
    `}
                style={{ left: `${idx * 33.33}%` }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 3, delay: idx * 0.5, ease: "easeOut" }}
              >
                {/* Special last card (blue with image + overlay text) */}
                {!card.title ? (
                  <div className="relative w-full h-60 md:h-full flex items-center justify-center">
                    <img
                      src={card.image}
                      alt="3D Design"
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                    <h3 className="relative text-xl md:text-2xl font-bold text-center px-4">
                      Drag & Drop <br /> Your 3D Design
                    </h3>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-lg font-semibold"
                        dangerouslySetInnerHTML={{ __html: card.title }}
                      />
                      <span className="text-2xl">→</span>
                    </div>
                    <div className="border-b border-black"></div>

                    {/* Render props dynamically */}
                    {Object.entries(card).map(([key, value]) => {
                      if (["id", "title", "image"].includes(key)) return null;
                      return (
                        <p key={key} className="text-gray-600 text-[14px]">
                          <span className="font-medium">
                            {key.replace(/([A-Z])/g, " $1")}:
                          </span>{" "}
                          <span className="font-bold">{value}</span>
                        </p>
                      );
                    })}

                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-60 object-cover rounded-md"
                    />
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile scroll hint */}
        <p className="mt-8 text-gray-500 text-sm md:hidden">
          Scroll to see more cards
        </p>
      </div>
    </section>
  );
}
