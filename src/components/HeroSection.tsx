"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// EngineModel with cloning and auto-scaling
function EngineModel({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;

    const clonedScene = scene.clone();
    ref.current.add(clonedScene);

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Bigger scale for better visibility
    const scale = 3 / Math.max(size.x, size.y, size.z);
    clonedScene.scale.set(scale, scale, scale);

    // Center vertically
    clonedScene.position.set(0, (-size.y * scale) / 2, 0);
  }, [scene]);

  return <group ref={ref} />;
}

export default function Hero() {
  const models = Array(6).fill("/landing_page_motor.glb");

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-between bg-gray-50 px-6 py-12">
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-medium text-center text-gray-900 max-w-4xl capitalize"
      >
        Precision <span className="textured-text">CNC</span> parts <br />
        shipped as fast as <br /> tomorrow
      </motion.h1>

      {/* U Shape 3D Slider */}
      <div className="w-full max-w-full mt-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={40}
          className="mySwiper"
          onSetTranslate={(swiper) => {
            swiper.slides.forEach((slideEl: any) => {
              const progress = slideEl.progress; // -2, -1, 0, 1, 2

              // Bigger U-shape
              const curveDepth = 180; // increase for deeper curve
              const yOffset = -Math.pow(progress, 2) * curveDepth + curveDepth;

              // Scale slides dynamically
              const scale = 1 - Math.abs(progress) * 0.3;

              slideEl.style.transform = `translateY(${yOffset}px) scale(${scale})`;
              slideEl.style.transition = "transform 0.5s ease";
            });
          }}
        >
          {models.map((modelPath, i) => (
            <SwiperSlide key={i}>
              <div className="w-full max-w-[450px] h-[450px] flex items-center justify-center">
                <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                  <ambientLight intensity={0.9} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} />
                  <EngineModel path={modelPath} />
                  <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={2.5}
                  />
                </Canvas>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full mt-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <div className="text-sm font-medium text-gray-700">
            12+ years of delivering <br /> perfect details
          </div>
        </div>

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

        <div className="text-sm font-medium text-gray-800">
          Over 100,000 parts <br /> manufactured annually
        </div>
      </div>
    </section>
  );
}
