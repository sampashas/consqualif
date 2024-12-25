import React, { useState } from "react";
import { motion } from "framer-motion";
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
                    alert(`Вы нажали на элемент с индексом: `);
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
                      delay: hoveredIndex === elementIndex ? 0 : 3, // Убираем задержку при ховере
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
                          hoveredIndex === elementIndex ? 0 : 2 + elementIndex, // Убираем задержку при ховере
                        duration:
                          hoveredIndex === elementIndex ? 0 : 2 + elementIndex,
                        ease: config.animations.speed,
                      }}
                      className="animate-pulse bg-white w-3 h-3 rounded-full"
                    />
                  </motion.div>
                  {hoveredIndex === elementIndex && (
                    <Tooltip elementIndex={elementIndex} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </>
  );
}

function Tooltip({ elementIndex }) {
  return (
    <div className="absolute top-full mt-2 w-max p-2 bg-white rounded-md shadow-lg">
      <span className="text-black text-sm">
        Hovered on element {elementIndex + 1}
      </span>
    </div>
  );
}

export default Points;
