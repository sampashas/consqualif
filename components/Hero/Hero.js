import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { config, slides } from "../../styles/global";
import gsap from "gsap";
import Points from "./Elements/Points";
import Pagination from "./Pagination";
import Sides from "./Sides";

function Hero() {
  return (
    <div className="h-screen overflow-hidden relative">
      <Content />
    </div>
  );
}
// Grid
function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Points currentIndex={currentIndex} />
      <div className="absolute flex-col z-[3] opacity-100 h-screen w-full flex justify-center items-center">
        <Title />
      </div>

      <Pagination
        arr={slides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <div className="absolute bg-black z-[2] opacity-40 h-screen w-full"></div>
      <Slider
        arr={slides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}

// Last projects
function Title({ sliderIndex }) {
  const title = "Our projects";
  const lettersRef = useRef([]);
  const animationRef = useRef(null); // Для хранения GSAP анимации

  useEffect(() => {
    // Создание анимации при монтировании
    animationRef.current = gsap.timeline({ paused: true });
    animationRef.current.fromTo(
      lettersRef.current,
      { opacity: 0, y: 50 }, // Начальное состояние
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2.5,
        stagger: 0.05,
        ease: "power3.out",
      }
    );

    animationRef.current.to(
      lettersRef.current,
      {
        opacity: 0,
        y: -50, // Увод вверх
        duration: 1,
        stagger: 0.05,
        ease: "power3.in",
      },
      "+=0.5" // Задержка перед обратной анимацией
    );
  }, []);

  useEffect(() => {
    // Контролируем направление анимации в зависимости от sliderIndex
    if (sliderIndex === 1 || sliderIndex > 1) {
      animationRef.current.reverse(); // Обратное воспроизведение
    } else {
      animationRef.current.play(); // Воспроизведение вперёд
    }
  }, [sliderIndex]);

  return (
    <motion.div
      className="whitespace-nowrap w-fit text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {title.split("").map((char, index) => (
        <h2
          key={index}
          className="inline-block"
          ref={(el) => (lettersRef.current[index] = el)} // Сохраняем ссылки на буквы
        >
          {char === " " ? "\u00A0" : char}
        </h2>
      ))}
    </motion.div>
  );
}

// Menu
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
function Slider({ arr, currentIndex, setCurrentIndex }) {
  const [direction, setDirection] = useState(1); // 1 - вправо, -1 - влево

  const calculateTranslateX = () => {
    // Расчет смещения контейнера в зависимости от текущего индекса
    return `-${currentIndex * 100}%`;
  };

  return (
    <div className="relative flex items-center h-screen justify-center overflow-hidden">
      <Sides
        setCurrentIndex={setCurrentIndex}
        setDirection={setDirection}
        arr={arr}
      />
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
              className="section-1"
              transition={{
                ease: config.animations.speed,
                duration: 1.5,
                delay: 2.5,
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

export default Hero;
