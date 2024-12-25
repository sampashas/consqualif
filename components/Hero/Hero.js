import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { config, slides } from "../../styles/global";
import gsap from "gsap";
import Slides from "./Elements/Slides";
import Pagination from "./Pagination";

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
      <Locate />
      <div className="absolute flex-col z-[3] opacity-100 h-screen w-full flex justify-center items-center">
        <Title />
      </div>

      <Slides currentIndex={currentIndex} />
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
  const title = "Last projects";
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
      <SliderSides
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

function SliderSides({ setCurrentIndex, setDirection, arr }) {
  const nextSlide = () => {
    setDirection(1); // Направление вправо
    setCurrentIndex((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setDirection(-1); // Направление влево
    setCurrentIndex((prev) => (prev - 1 + arr.length) % arr.length);
  };
  return (
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
  );
}

export default Hero;
