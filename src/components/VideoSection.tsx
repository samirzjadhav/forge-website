"use client";
import React, { useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleSound = () => setMuted((prev) => !prev);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-12 lg:p-0">
      {/* Top Buttons */}
      <div className="absolute top-4 sm:top-6 md:top-10 left-0 right-0 flex flex-row justify-between items-center gap-2 sm:gap-0 px-8 sm:px-10 md:px-14 z-10">
        <button
          onClick={toggleSound}
          className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-gray-800 font-semibold flex items-center gap-2 rounded-sm shadow-md hover:shadow-lg transition text-sm sm:text-base"
        >
          <BsSoundwave />
          {muted ? "Sound Off" : "Sound On"}
        </button>

        <a
          href="https://www.youtube.com/watch?v=E1czmX6bjFA"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-4 py-1 sm:py-2 bg-white flex items-center gap-2 text-gray-800 font-semibold rounded-sm shadow-md hover:shadow-lg transition text-sm sm:text-base"
        >
          Check on YouTube
          <MdArrowOutward />
        </a>
      </div>

      {/* Video */}
      <div className="w-full flex justify-center mt-12 sm:mt-16 md:mt-20">
        <video
          ref={videoRef}
          src="/video.webm"
          autoPlay
          muted={muted}
          loop
          playsInline
          className="w-full sm:w-full md:w-full lg:w-full h-auto rounded-md lg:rounded-none object-cover"
        />
      </div>

      {/* Center Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition text-lg sm:text-2xl md:text-3xl"
      >
        {playing ? "❚❚" : "►"}
      </button>
    </section>
  );
}
