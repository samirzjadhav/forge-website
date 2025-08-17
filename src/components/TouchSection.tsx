import { motion } from "framer-motion";

export default function CenterSection() {
  return (
    <section id="get-in-touch" className="w-full bg-blue-600 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center text-white">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          {/* Replace with your desired icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto"
            viewBox="0 0 100 100"
          >
            {/* Outer Spikes */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 50 + Math.cos(angle) * 50;
              const y1 = 50 + Math.sin(angle) * 50;
              const x2 = 50 + Math.cos(angle) * 40;
              const y2 = 50 + Math.sin(angle) * 40;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}
            {/* Center Circle */}
            <circle cx="50" cy="50" r="15" fill="white" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-semibold mb-4"
        >
          Ready to bring your details to life?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          From prototypes to production runs, our CNC machining platform is
          built for speed, precision, and scale. Share your project with us, and
          we'll turn your ideas into real, production-ready details.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-100 font-semibold"
        >
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: -4 }} // arrow moves left on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            →
          </motion.span>
          <span>Get in Touch</span>
        </motion.button>
      </div>
    </section>
  );
}
