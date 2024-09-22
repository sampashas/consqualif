import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { config, slides } from "../../styles/global";

function Hero() {
  return (
    <div className="h-screen overflow-hidden relative">
      <Content />
    </div>
  );
}

function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Pagination
        arr={slides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Locate />
      <TextLine currentIndex={currentIndex} />
      <div className="absolute bg-black z-[2] opacity-40 h-screen w-full"></div>
      <Slides currentIndex={currentIndex} />
      <Slider
        arr={slides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}

function Slides({ currentIndex }) {
  return (
    <>
      {currentIndex === 1 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 3, ease: config.animations.speed }}
          className="absolute z-[2] opacity-100 h-screen w-full"
        >
          <div className="w-full h-full relative">
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-15em] -translate-y-[5em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-5em] -translate-y-[7em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
      {currentIndex === 2 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 3, ease: config.animations.speed }}
          className="absolute z-[2] opacity-100 h-screen w-full"
        >
          <div className="w-full h-full relative">
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-40em] -translate-y-[0em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-5em] -translate-y-[7em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
      {currentIndex === 3 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 3, ease: config.animations.speed }}
          className="absolute z-[2] opacity-100 h-screen w-full"
        >
          <div className="w-full h-full relative">
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-40em] -translate-y-[0em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-5em] -translate-y-[7em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

// Menu
// Menu
// Menu

function TextLine({ currentIndex }) {
  return (
    <div className="absolute w-full h-screen z-[3] flex items-center">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: currentIndex >= 1 ? 0 : 1 }}
        transition={{
          scale: { ease: config.animations.speed, duration: 1.5, delay: 1 },
          opacity: { ease: config.animations.speed, duration: 1.5, delay: 2 },
        }}
        className="overflow-hidden"
      >
        <motion.div
          initial={{ y: 100, x: 100 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            ease: config.animations.speed,
            duration: 1.5,
            delay: 1,
          }}
          className="flex gap-6 animate-runner w-full h-48"
        >
          <h2 className="whitespace-nowrap">
            Experience luxurious construction & quality with us –
          </h2>
          <h2 className="whitespace-nowrap">
            Experience luxurious construction & quality with us
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Locate({ currentIndex }) {
  return (
    <>
      {slides.map((obj, id) => (
        <motion.p
          key={obj.id}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: id === currentIndex ? 1 : 0,
          }}
          transition={{
            ease: config.animations.speed,
            duration: 1.5,
          }}
          className="absolute opacity-75 bottom-[5em] right-[2.5em] text-white z-[3]"
        >
          {obj.map}
        </motion.p>
      ))}
    </>
  );
}

// Slider
// Slider
// Slider

function Slider({ arr, currentIndex, setCurrentIndex }) {
  const [initialZoom, setInitialZoom] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + arr.length) % arr.length); // Здесь исправляем на -1
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialZoom(false);
    }, 1000); // Длительность совпадает с анимацией слайдов
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center h-screen justify-center">
      <AnimatePresence mode="sync" custom={currentIndex}>
        <div className="flex gap-12 absolute z-[20] left-0 top-0 bottom-0 right-0">
          <div
            onClick={prevSlide} // Кликаем на левую часть экрана для переключения назад
            className="w-1/2 h-screen cursor-pointer"
          />
          <div
            onClick={nextSlide} // Кликаем на правую часть экрана для переключения вперед
            className="w-1/2 h-screen cursor-pointer absolute right-0"
          />
        </div>
        <motion.div
          initial={
            initialZoom
              ? { opacity: 1, scale: 1.15, x: "0%" }
              : { opacity: 0.5, scale: 1, x: "100%" }
          }
          animate={
            initialZoom
              ? { opacity: 1, scale: 1, x: "0%" }
              : { opacity: 1, scale: 1.35, x: "0%" }
          }
          exit={{ opacity: 0.5, scale: 1, x: "-100%" }}
          transition={{
            ease: config.animations.speed,
            duration: 1.75,
            delay: initialZoom ? 0 : 0, // Добавлен delay для начального зума
          }}
          className="absolute w-full h-screen"
          key={currentIndex}
        >
          <img
            src={arr[currentIndex].img}
            className="object-cover animate-zoom h-screen w-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

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
      transition={{
        ease: config.animations.speed,
        duration: 1.25,
        delay: 1,
      }}
      className="absolute overflow-hidden backdrop-blur-2xl z-[3] bottom-0 left-0 right-0"
    >
      <motion.div
        ref={containerRef}
        transition={{ ease: config.animations.speed }}
        className="w-full h-full flex gap-3 justify-center items-center py-[.5em] whitespace-nowrap ease-smooth-ease transition-transform duration-[1.75s]"
      >
        {arr.map((slide, index) => (
          <span
            key={slide.id}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer duration-300 p-2 px-4 rounded-lg ${
              index === currentIndex ? "bg-[#fff2]" : "text-[#fff7]"
            }`}
          >
            {slide.name}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Hero;
