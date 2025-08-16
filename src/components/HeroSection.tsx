"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

function EngineModel() {
  const { scene } = useGLTF("/landing_page_motor.glb");
  return <primitive object={scene} scale={1} />;
}

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-between bg-gray-50 px-6 py-12">
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-medium text-center text-gray-900 max-w-4xl capitalize"
      >
        Precision{" "}
        <span className="text-red-700 italic font-bold text-7xl">CNC</span>{" "}
        parts <br /> shipped as fast as <br /> tomorrow
      </motion.h1>

      {/* U Shape 3D Slider */}
      <div className="w-full max-w-full mt-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          slidesPerView={5} // wider curve
          spaceBetween={0}
          className="mySwiper"
          onSetTranslate={(swiper) => {
            swiper.slides.forEach((slideEl: any) => {
              const slideProgress = slideEl.progress;
              const yOffset = Math.pow(slideProgress, 2) * 80; // curve depth
              const scale = 1 - Math.abs(slideProgress) * 0.15;
              slideEl.style.transform = `translateY(${yOffset}px) scale(${scale})`;
              slideEl.style.transition = "transform 0.5s ease";
            });
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-[300px] flex items-center justify-center">
                <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} />
                  <EngineModel />
                  <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={2}
                  />
                </Canvas>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full mt-12">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <div className="text-sm font-medium text-gray-700">
            12+ years of delivering <br /> perfect details
          </div>
        </div>

        {/* Center */}
        <div className="text-center">
          <p className="mt-6 text-md font-semibold text-gray-600 leading-relaxed">
            Upload your CAD file, and we'll take care of machining, <br />
            finishing, and shipping — accurate <br /> parts delivered fast, no
            stress.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Upload your design
          </motion.button>
        </div>

        {/* Right Side */}
        <div className="text-sm font-medium text-gray-800">
          Over 100,000 parts <br /> manufactured annually
        </div>
      </div>
    </section>
  );
}
