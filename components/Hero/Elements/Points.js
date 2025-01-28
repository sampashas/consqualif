import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config, slidesData } from "../../../styles/global";

function Points({ currentIndex }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {slidesData.map((slide, index) =>
        currentIndex === index ? (
          <div
            key={index}
            className="absolute cursor-pointer z-[4] h-screen w-full"
          >
            <div className="relative w-full h-full">
              {slide.elements.map((element, elementIndex) => (
                <div
                  key={elementIndex}
                  style={{ transform: element.translate }}
                  className="absolute animate-pulse top-1/2 left-1/2"
                  onClick={() => {
                    alert(`Вы нажали на элемент с индексом: ${elementIndex}`);
                  }}
                  onMouseEnter={() => {
                    setHoveredIndex(elementIndex);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredIndex === elementIndex ? 1.5 : 1,
                      cursor:
                        hoveredIndex === elementIndex ? "pointer" : "none",
                    }}
                    exit={{ scale: 0.5 }}
                    transition={{
                      delay: hoveredIndex === elementIndex ? 0 : 3,
                      duration: 3,
                      ease: config.animations.speed,
                    }}
                    className="
                      w-12 h-12 bg-[#fff2] rounded-full flex justify-center items-center relative
                    "
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.5 }}
                      transition={{
                        delay:
                          hoveredIndex === elementIndex ? 0 : 2 + elementIndex,
                        duration:
                          hoveredIndex === elementIndex ? 0 : 2 + elementIndex,
                        ease: config.animations.speed,
                      }}
                      className="animate-pulse bg-white w-3 h-3 rounded-full"
                    />
                  </motion.div>
                  <AnimatePresence>
                    {hoveredIndex === elementIndex && (
                      <Tooltip
                        key={`tooltip-${elementIndex}-${hoveredIndex}`}
                        elementIndex={elementIndex}
                        isHovered={hoveredIndex === elementIndex}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </>
  );
}

function Tooltip({ elementIndex, isHovered }) {
  return (
    <motion.div
      key={`tooltip-motion-${elementIndex}`}
      initial={{ opacity: 0, y: -10 }}
      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={
        isHovered
          ? {
              delay: 0,
              duration: 0.3,
              ease: "easeOut",
            }
          : {
              delay: 0.3,
              duration: 0.5,
              ease: config.animations.speed,
            }
      }
      className="absolute z-[100] top-full mt-2 w-max p-2 rounded-md bg-wh50 backdrop:backdrop-blur-2xl backdrop-blur-xl"
    >
      <span className=" text-sm text-white">Element {elementIndex + 1}</span>
    </motion.div>
  );
}

export default Points;
