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

// Grid
// Grid
// Grid

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
      {currentIndex === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, ease: config.animations.speed }}
          className="absolute z-[2] opacity-100 h-screen w-full"
        >
          <div className="w-full h-full relative">
            <div className="absolute -translate-x-[-40em] -translate-y-[20em] animate-pulse top-1/2 left-1/2 w-12 h-12 bg-[#fff2] rounded-full flex justify-center items-center ">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="animate-pulse bg-white w-3 h-3 rounded-full" />
              </div>
            </div>
            <div className="absolute -translate-x-[44em] -translate-y-[-12.5em] animate-pulse top-1/2 left-1/2 w-12 h-12 bg-[#fff2] rounded-full flex justify-center items-center ">
              <div className="animate-pulse w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
      {currentIndex === 1 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.25, ease: config.animations.speed }}
          className="absolute z-[2] opacity-100 h-screen w-full"
        >
          <div className="w-full h-full relative">
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-10em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[30em] -translate-y-[-4em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
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
          transition={{ delay: 1, ease: config.animations.speed }}
          className="absolute z-[2] opacity-100 h-screen w-full"
        >
          <div className="w-full h-full relative">
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[30em] -translate-y-[-12.5em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: config.animations.speed,
              }}
            >
              <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-35em] -translate-y-[5em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
                <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
              </div>
            </motion.div>
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
          transition={{ delay: 1, ease: config.animations.speed }}
          className="absolute z-[2] opacity-100 h-screen w-full"
        >
          <div className="w-full h-full relative">
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[-20em] -translate-y-[-7.5em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
              <div className="w-3 animate-pulse h-3 bg-white rounded-full" />
            </div>
            <div className="animate-pulse top-1/2 left-1/2 transform -translate-x-[35em] -translate-y-[0em] w-12 h-12 bg-[#fff2]  rounded-full absolute flex justify-center items-center ">
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
        initial={{ scale: 1.5, opacity: 0 }}
        exit={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: currentIndex >= 1 ? 0 : 1 }}
        transition={{
          scale: { ease: config.animations.speed, duration: 1.5, delay: 1.1 },
          opacity: { ease: config.animations.speed, duration: 1.5, delay: 1.1 },
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
  const [direction, setDirection] = useState(1); // 1 - вправо, -1 - влево

  const nextSlide = () => {
    setDirection(1); // Направление вправо
    setCurrentIndex((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setDirection(-1); // Направление влево
    setCurrentIndex((prev) => (prev - 1 + arr.length) % arr.length);
  };

  const calculateTranslateX = () => {
    // Расчет смещения контейнера в зависимости от текущего индекса
    return `-${currentIndex * 100}%`;
  };

  return (
    <div className="relative flex items-center h-screen justify-center overflow-hidden">
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
        className="flex w-full h-screen"
        initial={false} // Убираем начальную анимацию, так как управляем перемещением всего блока
        animate={{ x: calculateTranslateX() }} // Двигаем блок изображений
        transition={{
          ease: config.animations.speed,
          duration: 1.5, // Длительность анимации
        }}
      >
        {arr.map((item, index) => (
          <div
            key={index}
            className="w-full h-screen overflow-hidden flex-shrink-0"
          >
            <motion.div
              initial={{ scale: 1.25 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.25 }}
              transition={{
                ease: config.animations.speed,
                duration: 1.5,
                delay: 1,
              }}
            >
              <img
                src={item.img}
                className={`object-cover h-screen w-full 
              ${index === currentIndex ? "animate-zoom" : ""}
              `}
                alt={`Slide ${index}`}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
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
        duration: 1.5,
        delay: 1,
      }}
      className="absolute overflow-hidden z-[3] bottom-2 left-0 right-0"
    >
      <div className="relative">
        <motion.div
          ref={containerRef}
          className="
        transition-transform duration-[1.75s]
        w-full h-full flex gap-4 justify-center items-center py-[.25em] whitespace-nowrap"
        >
          {arr.map((slide, index) => (
            <span
              key={slide.id}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer duration-300  p-[.4em] py-4 px-[.75em] rounded-lg ${
                index === currentIndex ? "" : "text-[#fff7]"
              }`}
            >
              {slide.name}
            </span>
          ))}
        </motion.div>
        <div
          style={{ width: currentIndex === 1 ? "22.5em" : "" }}
          className="w-[20em] h-[3.25em] delay-[1.1s] duration-[1s] rounded-lg absolute bg-black z-[-1] bottom-0 right-0 left-1/2 -translate-x-1/2"
        ></div>
      </div>
    </motion.div>
  );
}

export default Hero;
