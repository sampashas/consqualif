import React, { useState } from "react";
import { motion } from "framer-motion";
import { config, slidesData } from "../../../styles/global";

function Slides({ currentIndex }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {slidesData.map((slide, index) =>
        currentIndex === index ? (
          <div key={index} className="absolute z-[3] h-screen w-full">
            <div className="w-full h-full relative">
              {slide.elements.map((element, elementIndex) => (
                <div
                  key={elementIndex}
                  style={{ transform: element.translate }}
                  className="absolute hover:scale-150 animate-pulse top-1/2 left-1/2"
                  onClick={(elementIndex) => {
                    alert(`Вы нажали на элемент с индексом: ${elementIndex}`);
                  }}
                  onMouseEnter={() => {
                    setHoveredIndex(elementIndex),
                      console.log(elementIndex),
                      console.dir;
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.5 }}
                    transition={{
                      delay: 3,
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
                        delay: 2 + elementIndex,
                        duration: 2,
                        ease: config.animations.speed,
                      }}
                      className="animate-pulse bg-white w-3 h-3 rounded-full"
                    />
                  </motion.div>
                  {hoveredIndex === elementIndex && (
                    <div className="absolute top-full mt-2 w-max p-2 bg-white rounded-md shadow-lg">
                      <div className="w-full h-1 bg-black mb-2"></div>
                      <span className="text-black text-sm">
                        Hovered on element {elementIndex + 1}
                      </span>
                    </div>
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

export default Slides;
