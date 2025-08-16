"use client";
import React, { useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleSound = () => {
    setMuted((prev) => !prev);
  };

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
    <section className="relative w-full">
      {/* Top Buttons */}
      <div className="absolute top-10 left-0 right-0 flex justify-between px-6 z-10">
        <button
          onClick={toggleSound}
          className="px-4 py-2 bg-white text-gray-800 font-semibold flex items-center gap-2 rounded-sm shadow-md hover:shadow-lg transition"
        >
          <i>
            <BsSoundwave />
          </i>
          {muted ? "Sound Off" : "Sound On"}
        </button>

        <a
          href="https://www.youtube.com/watch?v=E1czmX6bjFA"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white flex items-center gap-2 text-gray-800 font-semibold rounded-sm shadow-md hover:shadow-lg transition"
        >
          Check on YouTube
          <i>
            <MdArrowOutward />
          </i>
        </a>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        src="/video.webm"
        autoPlay
        muted={muted}
        loop
        playsInline
        className="w-full h-auto rounded-md"
      />

      {/* Center Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {playing ? "❚❚" : "►"}
      </button>
    </section>
  );
}
