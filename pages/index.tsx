import { useContext, useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import SContext from "../contexts/SContext";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "../styles/global";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { ref } = useContext(SContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const arr: Slide[] = [
    {
      id: uuidv4(),
      img: "/slider/1.png",
      name: "Basement, Extensions & permits",
    },
    {
      id: uuidv4(),
      img: "/slider/2.png",
      name: "Bathroom, Plumbing & french drains",
    },
    {
      id: uuidv4(),
      img: "/slider/3.png",
      name: "Bedroom, plastering & painting",
    },
  ];

  return (
    <>
      <Title title={config.global.title} />
      <main
        data-scroll-section
        data-scroll-id
        ref={ref}
        id="main-container"
        className="will-change-scroll overflow-hidden relative"
      >
        {/* Pagination */}
        <Pagination
          arr={arr}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {/* TextLine */}
        <TextLine />
        {/* Slider */}
        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ ease: config.animations.speed, duration: 1.5 }}
          className="w-full h-screen"
        >
          <div className="absolute bg-black z-[2] opacity-50  h-screen w-full"></div>
          <Slider
            arr={arr}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </motion.div>
      </main>
    </>
  );
};

function TextLine() {
  return (
    <motion.div
      initial={{ y: 100, rotateZ: 10 }}
      animate={{ y: 0, rotateZ: 0 }}
      transition={{ ease: config.animations.speed, duration: 1.5, delay: 1 }}
      className="absolute w-full h-screen z-[3] flex items-center"
    >
      <div className="flex gap-6 animate-runner w-full h-48">
        <h2 className="whitespace-nowrap">
          Experience luxurious construction & quality with us –
        </h2>
        <h2 className="whitespace-nowrap">
          Experience luxurious construction & quality with us
        </h2>
      </div>
    </motion.div>
  );
}

function Slider({
  arr,
  currentIndex,
  setCurrentIndex,
}: {
  arr: Slide[];
  currentIndex: number;
  setCurrentIndex: (index: number | ((index: number) => number)) => void;
}) {
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev + arr.length - 1) % arr.length);
  };

  // const variants = {
  //   enter: (direction: number) => ({
  //     x: direction > 0 ? 1000 : -1000,
  //     opacity: 0,
  //   }),
  //   center: {
  //     zIndex: 1,
  //     x: 0,
  //     opacity: 1,
  //   },
  //   exit: (direction: number) => ({
  //     zIndex: 0,
  //     x: direction < 0 ? 1000 : -1000,
  //     opacity: 0,
  //   }),
  // };
  const offset = (currentIndex * 80) / arr.length;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <AnimatePresence initial={false} custom={currentIndex}>
        <div className="flex gap-12 absolute z-[20] left-0 right-0">
          <div onClick={prevSlide} className="w-full h-screen cursor-pointer" />
          <div
            onClick={nextSlide}
            className="w-full h-screen absolute cursor-pointer"
          />
        </div>
        <motion.img
          key={currentIndex}
          src={arr[currentIndex].img}
          custom={currentIndex}
          initial={{ x: 0 }}
          animate={{ x: `-${offset}%` }}
          transition={{
            ease: config.animations.speed,
            duration: 1,
          }}
          className="overflow-hidden h-screen object-cover animate-zoom"
          alt=""
        />
      </AnimatePresence>
    </div>
  );
}

function Pagination({
  arr,
  currentIndex,
  setCurrentIndex,
}: {
  arr: Slide[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) {
  // Calculating the percentage offset of the current index
  const offset = (currentIndex * 80) / arr.length;

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{
        ease: config.animations.speed,
        duration: 1.25,
        delay: 1,
      }}
      className="absolute overflow-hidden border-t-[1px] border-[#fff2] z-[4] bottom-0 left-0 right-0"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: `-${offset}%` }}
        transition={{
          ease: config.animations.speed,
          duration: 1,
        }}
        className="w-full h-full flex  gap-3 justify-center items-center py-[.5em]"
      >
        {arr.map((slide, index) => (
          <span
            key={slide.id}
            onClick={() => setCurrentIndex(index)} // Correctly using the index from the map function
            className={`cursor-pointer duration-300 p-2 whitespace-nowrap px-4 rounded-lg ${
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

type Slide = {
  id: string;
  img: string;
  name: string;
};

export default Home;
