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
          w-full h-full flex justify-center items-center whitespace-nowrap"
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
              className={`
              hover:text-[#fff] 
              duration-300 cursor-pointer
              border hover:border-b-wh50 border-wh15
              py-[1.5em] px-[3em] bg-wh
              flex justify-center rounded-sm 
                ${index === currentIndex ? "bg-wh" : "text-wh75"}
                `}
            >
              {slide.name}
              {currentIndex === index && (
                <div className="w-[47px] translate-y-8 opacity-50  absolute h-[47px] blur-xl bg-white" />
              )}
            </motion.span>
          ))}
        </motion.div>
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
          width: currentIndex === 1 ? "23.75em" : "",
        }}
        className="
        w-full delay-300 h-full
        duration-300
        border hover:border-b-wh50 border-wh15
        py-[1.1em] flex justify-center
        "
      ></div>
    </motion.div>
  );
}

export default Pagination;
