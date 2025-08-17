"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { GiSteelwingEmblem } from "react-icons/gi";
import { TbFidgetSpinner } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

const items = [
  {
    id: 1,
    number: "01",
    title: "Custom Bracket",
    icon: <PiBracketsCurlyBold className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    number: "02",
    title: "Steel Adapter",
    icon: <GiSteelwingEmblem className="w-6 h-6" />,
    image:
      "https://plus.unsplash.com/premium_photo-1726769088808-dab11ed65177?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    number: "03",
    title: "Motor Mounts",
    icon: <TbFidgetSpinner className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1527383418406-f85a3b146499?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    number: "04",
    title: "Enclosures",
    icon: <FaUserCircle className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1603676554283-efe0116cbfa6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AboutSection() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-start gap-20">
        {/* Right: CEO info */}
        <div className="md:w-1/3 flex flex-col mt-8 md:mt-10">
          <div className="flex gap-2">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CEO"
              className="rounded-md mb-4 w-12 h-12 object-cover"
            />
            <div className="">
              <h3 className="text-xl font-semibold text-gray-800 ">
                Ayrton Senna
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                CEO & Senior Partner at Forge
              </p>
            </div>
          </div>
          <p className="text-gray-600 font-semibold mb-4">
            At Forge, we believe that getting custom CNC parts should be fast,
            reliable, and effortless. That's why we built a fully streamlined
            platform that turns your CAD files into production-ready
            parts—delivered in as fast as one day. Whether you're prototyping or
            scaling, we remove the friction from manufacturing so you can focus
            on building what matters.
          </p>
          <p className="text-gray-600 font-semibold mb-4">
            We operate high-performance CNC machines backed by in-house
            automation and a trusted network of suppliers. From one-off
            prototypes to small production runs, our system is built to deliver
            precise, high-quality parts with speed. You can also reserve your
            own dedicated CNC machine through our RM (Reserved Machines)
            offering—your own production line, without the overhead.
          </p>
          <p className="text-gray-800 font-semibold text-sm mt-48">
            Every detail matters—we craft each part with care, accuracy, and a
            finish that feels just right.
          </p>
        </div>

        {/* Left: About */}
        <div className="md:w-2/3 flex flex-col">
          <div className="flex mb-2">
            <h4 className="text-xs text-white uppercase px-3 py-1 bg-blue-500 rounded-md">
              • about •
            </h4>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing <br /> Manufacturing With <br />
            Speed And <span className="textured-text">Precision</span>
          </h2>

          {/* List */}
          <ul className="flex flex-col gap-4 mb-6">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex items-center justify-between cursor-pointer p-4 rounded-lg transition ${
                  selectedId === item.id
                    ? "bg-blue-100 text-blue-700"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  {selectedId === item.id && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-blue-700 font-bold"
                    >
                      ➔
                    </motion.span>
                  )}
                  {selectedId !== item.id && (
                    <span className="font-semibold">{item.number}</span>
                  )}
                  <span className="font-medium">{item.title}</span>
                </div>

                <div className="flex items-center gap-2">{item.icon}</div>
              </li>
            ))}
          </ul>

          {selectedItem && (
            <div className="w-full h-64 relative rounded-lg overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
