import {useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AnimatedNames = () => {
  const names = ['AKINTAYO', 'IBRAHIM', 'CHINYERE', 'CHINEDU', 'EVERYONE']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length)
    }, 5000)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [names.length])

  const nameVariants = {
    enter: { y: "100%", opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <motion.h1
      className="text-xl md:text-3xl lg:text-6xl relative font-bold text-center rounded-sm text-white w-full py-2 lg:py-3 px-12 h-auto md:min-h-[80px] min-h-[60px] mb-6 bg-gradient-to-b from-[#0357ee] to-[#023288] flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={names[currentIndex]} // Key ensures the animation triggers on name change
          className="absolute"
          variants={nameVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
        >
          {names[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.h1>
  );
};

export default AnimatedNames;