import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { config, slides } from "../../styles/global";

function Pagination({ arr, currentIndex, setCurrentIndex }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Рассчитываем смещение для того, чтобы текущий элемент оказался по центру
  useEffect(() => {
    if (containerRef.current && itemRefs.current[currentIndex]) {
      const containerWidth = containerRef.current.offsetWidth;
      const activeItem = itemRefs.current[currentIndex];
      const activeItemOffset =
        activeItem.offsetLeft + activeItem.offsetWidth / 2;
      const offset = containerWidth / 2 - activeItemOffset;

      containerRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, arr.length]);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{
        ease: config.animations.speed,
        duration: 1.5,
        delay: 1,
      }}
      className="absolute z-[21] bottom-0 left-0 right-0"
    >
      <div className="relative">
        <motion.div
          ref={containerRef}
          className="
          transition-transform duration-[1.75s] 
          w-full h-full flex justify-center items-center py-[.25em] whitespace-nowrap"
        >
          {arr.map((slide, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                ease: config.animations.speed,
                duration: 1,
                delay: 2 + index / 2.5,
              }}
              key={slide.id}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer duration-500 hover:text-[#fff] py-3 px-[2em] rounded-sm 
                ${index === currentIndex ? "" : "text-wh75"}
                `}
            >
              {slide.name}
            </motion.span>
          ))}
        </motion.div>
        <Podlojka currentIndex={currentIndex} />
      </div>
    </motion.div>
  );
}

function Podlojka({ currentIndex }) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        ease: config.animations.speed,
        duration: 1,
        delay: 0.5,
      }}
      className="absolute flex h-[4em] justify-center items-end z-[-1] w-full top-0 right-0 delay-[1.1s] duration-[1s] -translate-x-1/2"
    >
      <div
        style={{
          borderRadius: "8px 8px 0px 0px",
          width: currentIndex === 1 ? "23.75em" : "",
        }}
        className="w-[19.5em] duration-500 delay-300 h-full bg-[#fff1] backdrop:backdrop-blur-2xl backdrop-blur-xl"
      ></div>
    </motion.div>
  );
}

export default Pagination;
