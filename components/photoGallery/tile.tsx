'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CampusTileProps {
  images: string[];
  interval: number;
}

export default function CampusTile({
  images,
  interval,
}: CampusTileProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const randomizedInterval =
      interval + Math.floor(Math.random() * 1500);

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, randomizedInterval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl group">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentImage]}
          src={images[currentImage]}
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div
        className="
          absolute inset-0
          bg-black/10
          transition-all duration-500
          group-hover:bg-black/25
        "
      />

      <div
        className="
          absolute inset-0
          border border-white/0
          transition-all duration-500
          group-hover:border-white/40
        "
      />
    </div>
  );
}