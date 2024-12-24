import React from "react";
import { motion } from "framer-motion";
import { config, slidesData } from "../../styles/global";

function Slides({ currentIndex }) {
  return (
    <>
      {slidesData.map(
        (slide, index) =>
          currentIndex === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: slide.delay,
                ease: config.animations.speed,
              }}
              className="absolute z-[2] opacity-100 h-screen w-full"
            >
              <div className="w-full h-full relative">
                {slide.elements.map((element, elementIndex) => (
                  <div
                    key={elementIndex}
                    style={{ transform: element.translate }}
                    className="absolute animate-pulse top-1/2 left-1/2 w-12 h-12 bg-[#fff2] rounded-full flex justify-center items-center"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="animate-pulse bg-white w-3 h-3 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
      )}
    </>
  );
}

export default Slides;
