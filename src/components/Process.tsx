"use client";
import { FiUpload, FiTool, FiSettings, FiPackage } from "react-icons/fi";

const processSteps = [
  {
    id: 1,
    title: "Upload Step Files",
    icon: <FiUpload className="w-6 h-6 text-blue-600" />,
    description:
      "Select from a wide range of materials, precision tolerance and custom threads to match your exact needs.",
    image: "./image2.jpeg",
  },
  {
    id: 2,
    title: "Get a quote & checkout",
    icon: <FiTool className="w-6 h-6 text-blue-600" />,
    description:
      "no waiting--just fastm transparent pricing and control over how soon you want your part delivered",
    image: "./image1.jpeg",
  },
  {
    id: 3,
    title: "We make your parts",
    icon: <FiSettings className="w-6 h-6 text-blue-600" />,
    description:
      "once you place and order, our machines get to work immediately no delay, no bottlenecks",
    image: "./image3.jpeg",
  },
  {
    id: 4,
    title: "Parts are shipped",
    icon: <FiPackage className="w-6 h-6 text-blue-600" />,
    description:
      "Finalized parts are out the door quickly, with delivery typically completed within 48 hour",
    image: "./image4.jpeg",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex mb-2">
          <h4 className="text-xs text-white uppercase px-3 py-1 bg-blue-500 rounded-md">
            • portfolio •
          </h4>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-10 ">
          CNC Machining
          <br /> Made <span className="textured-text">Easy</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
          {processSteps.map((step) => (
            <div key={step.id} className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <i>{step.icon}</i>
                <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-80 object-cover rounded-sm mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
