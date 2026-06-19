'use client';

import { easeOut, motion } from 'motion/react';
import * as React from 'react';

export interface FlipCardData {
  name: string;
  image: string;
  flipName: string;
  description: string;
}

interface FlipCardProps {
  data: FlipCardData;
}

export function FlipCard({ data }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <div
      /* Changed w-78 to w-full max-w-[19.5rem] (equal to 312px / w-78). 
        Added responsive aspect ratio and dynamic mobile heights (h-80 sm:h-96) 
        so the bounds match desktop perfectly while folding beautifully on small devices.
      */
      className="relative w-full max-w-[19.5rem] h-80 sm:h-96 perspective-1000 cursor-pointer mx-auto"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT SIDE */}
      <motion.div
        className="absolute inset-0 rounded-xl overflow-hidden border-2 border-foreground/20 backface-hidden"
        animate={isFlipped ? 'back' : 'front'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-3 px-2">
          <h2 className="text-white text-xl font-bold text-center">
            {data.name}
          </h2>
        </div>
      </motion.div>

      {/* BACK SIDE */}
      <motion.div
        className="
          absolute inset-0
          rounded-xl
          border-2 border-foreground/20
          bg-gradient-to-tr from-muted via-background to-muted
          p-4
          flex flex-col
          overflow-hidden
          backface-hidden
        "
        initial={{ rotateY: 180 }}
        animate={isFlipped ? 'front' : 'back'}
        variants={cardVariants}
        style={{
          transformStyle: 'preserve-3d',
          rotateY: 180,
        }}
      >
        <h3 className="text-xl font-bold text-center mb-4">
          {data.flipName}
        </h3>

        <div className="flex-1 overflow-y-auto pr-2">
          <p className="text-sm leading-relaxed text-center">
            {data.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}