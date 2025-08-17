"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// EngineModel with dynamic scaling
function EngineModel({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const ref = useRef<THREE.Group>(null);
  const [scaleFactor, setScaleFactor] = useState(3);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) setScaleFactor(4); // mobile
      else if (window.innerWidth < 1024) setScaleFactor(3.5); // tablet
      else setScaleFactor(3); // desktop
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const clonedScene = scene.clone();
    ref.current.add(clonedScene);

    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const scale = scaleFactor / Math.max(size.x, size.y, size.z);
    clonedScene.scale.set(scale, scale, scale);
    clonedScene.position.set(0, (-size.y * scale) / 2, 0);
  }, [scene, scaleFactor]);

  return <group ref={ref} />;
}

export default function Hero() {
  const models = Array(6).fill("/landing_page_motor.glb");

  return (
    <section className="w-full mt-[60px] md:min-h-screen flex flex-col items-center justify-between bg-gray-50 px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl capitalize leading-snug sm:leading-snug md:leading-tight"
      >
        Precision <span className="textured-text">CNC</span> parts
        <br className="hidden sm:block" /> shipped as fast as{" "}
        <br className="" />
        tomorrow
      </motion.h1>

      {/* Responsive U Shape Slider */}
      <div className="w-full max-w-full mt-8 sm:mt-12">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1} // default for small devices
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 30 }, // tablet
            1024: { slidesPerView: 3, spaceBetween: 50 }, // large screens
          }}
          onSetTranslate={(swiper) => {
            swiper.slides.forEach((slideEl: any) => {
              const progress = slideEl.progress;
              const curveDepth = 120;
              const yOffset = -Math.pow(progress, 2) * curveDepth + curveDepth;
              const scale = 1 - Math.abs(progress) * 0.25;
              slideEl.style.transform = `translateY(${yOffset}px) scale(${scale})`;
              slideEl.style.transition = "transform 0.5s ease";
            });
          }}
        >
          {models.map((modelPath, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] flex items-center justify-center max-w-[450px] mx-auto">
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8 w-full mt-8 sm:mt-12">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xl">
          <div className="text-sm sm:text-base font-medium text-gray-700">
            12+ years of delivering <br /> perfect details
          </div>
        </div>

        <div className="text-center sm:text-left">
          <p className="mt-4 sm:mt-6 text-sm sm:text-md font-semibold text-gray-600 leading-relaxed">
            Upload your CAD file, and we'll take care of machining, <br />
            finishing, and shipping — accurate <br /> parts delivered fast, no
            stress.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Upload your design
          </motion.button>
        </div>

        <div className="text-sm sm:text-base font-medium text-gray-800 text-center sm:text-right">
          Over 100,000 parts <br /> manufactured annually
        </div>
      </div>
    </section>
  );
}
