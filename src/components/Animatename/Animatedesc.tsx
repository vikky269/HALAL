import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AnimatedDesc = () => {
  const names = [
    'Akintayo, a 28-year-old Software Engineer, makes payments through HALAL.',
    'Ibrahim, a 32-year-old Civil Engineer, receives money through HALAL.',
    'Chinyere, a 27-year-old Fashion Designer, receives money from customers through HALAL.',
    'Chinedu, a 30-year-old Mechanic, pays through HALAL.',
    'Banking the Ethical way...',
  ]; // Add extra descriptions

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [names.length]);

  const nameVariants = {
    enter: { y: "100%", opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <motion.h3
     className="relative text-center text-lg font-medium rounded-sm text-[#444449] w-full py-3 h-auto min-h-[80px] mb-6 border-[0.2px] italic leading-4 border-black border-opacity-5 flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={names[currentIndex]} // Key ensures the animation triggers on name change
          className="absolute w-full text-center"
          variants={nameVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
        >
          {names[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.h3>
  );
};

export default AnimatedDesc;


//className="text-6xl relative font-bold text-center rounded-sm text-white w-full py-3 px-12 h-auto min-h-[80px] mb-6 bg-gradient-to-b from-[#0357ee] to-[#023288] flex items-center justify-center"



 //className="text-[#444449] mt-4 w-full text-md font-normal px-3 py-4 border-[0.2px] italic leading-4 border-black border-opacity-5 relative overflow-hidden h-[80px]"