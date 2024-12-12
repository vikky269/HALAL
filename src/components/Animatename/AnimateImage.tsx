import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AnimatedImage = () => {
  const images = [
    '/hero/akin.png',
    '/hero/ibrahim.png',
    '/hero/chinyere.png',
    '/hero/chinedu.png',
    '/hero/everyone.png'
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]} // Unique key to trigger animation on image change
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="block h-[63%] md:h-[63%] lg:max-h-[850px] object-contain"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImage;