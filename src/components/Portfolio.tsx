"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiBellFill } from "react-icons/ri";

const portfolioItems = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1715779332226-13fdfe35b907?w=400&auto=format&fit=crop&q=60",
    works: [{ title: "Electric Bicycle", type: "Motor Mount" }],
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1288&auto=format&fit=crop",
    works: [{ title: "Custom Drone", type: "Propeller Mount" }],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1673453071000-8620d5f9dbae?q=80&w=870&auto=format&fit=crop",
    works: [{ title: "Mechanical Watch", type: "Matal components" }],
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1714675572532-3153b016ac48?q=80&w=1457&auto=format&fit=crop",
    works: [{ title: "3D Printer", type: "Threaded adapters" }],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1626145790046-a282bc666b69?q=80&w=1470&auto=format&fit=crop",
    works: [{ title: "Motorcycle", type: "custom brackets" }],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1667204711181-3680b1eaeb38?w=400&auto=format&fit=crop",
    works: [{ title: "Electric Skateboard", type: "Mounts" }],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1551501419-cb31cdd588d6?w=400&auto=format&fit=crop",
    works: [{ title: "Race Cars", type: "Mounting Plates" }],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1496&auto=format&fit=crop",
    works: [{ title: "Wind Turbine", type: "mounting brackets" }],
  },
  {
    id: 9,
    image:
      "https://plus.unsplash.com/premium_photo-1671439135739-96bbe677c38c?w=400&auto=format&fit=crop",
    works: [{ title: "PC with water cooling", type: "cooling plates" }],
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=400&auto=format&fit=crop",
    works: [{ title: "electric scoooter", type: "threaded inserts" }],
  },
];

export default function PortfolioSection() {
  const [selectedId, setSelectedId] = useState(portfolioItems[0].id);
  const selectedItem = portfolioItems.find((item) => item.id === selectedId);

  return (
    <section id="tool-library" className="w-full bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex mb-2"
        >
          <h4 className="text-xs text-white uppercase px-3 py-1 bg-blue-500 rounded-md">
            • portfolio •
          </h4>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2"
        >
          Check Our <br /> Latest <span className="textured-text">Works</span>
        </motion.h2>

        <div className="border-b-2 border-gray-700 mb-12"></div>

        {/* Main Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 lg:gap-40"
        >
          {/* Left: Selected Image */}
          <div className="md:w-1/2">
            {selectedItem && (
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                src={selectedItem.image}
                alt={`Portfolio ${selectedItem.id}`}
                className="w-full h-full max-h-[400px] object-cover rounded-lg"
              />
            )}
          </div>

          {/* Right: Work Titles */}
          <div className="md:w-1/2 flex flex-col gap-4">
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`cursor-pointer rounded-lg transition ${
                  selectedId === item.id
                    ? "text-white"
                    : "bg-black text-gray-300"
                }`}
                onClick={() => setSelectedId(item.id)}
              >
                {item.works.map((work, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-white py-2 "
                  >
                    <div className="flex items-center gap-2">
                      {selectedId === item.id && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="font-bold"
                        >
                          ➔
                        </motion.span>
                      )}
                      <span className="text-lg font-semibold">
                        {work.title}
                      </span>
                    </div>
                    <span className="text-gray-200">{work.type}</span>
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Bottom Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col border-white py-2 px-2"
            >
              <h4 className="text-white text-lg font-semibold">
                More in the Vault. <br /> Take a look
              </h4>
              <button className="flex items-center justify-between mt-4 px-4 py-2 bg-white rounded-md text-black hover:text-blue-500 font-bold w-full">
                <div className="flex items-center gap-2">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="font-bold"
                  >
                    ➔
                  </motion.span>
                  <span className="uppercase">see more</span>
                </div>
                <RiBellFill className="text-xl" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
