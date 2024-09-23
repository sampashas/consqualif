import { motion, AnimatePresence } from "framer-motion";
import Title from "../components/Title";
import { config, slides } from "../styles/global";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // Управляем состоянием для конкретного элемента по индексу

  const handleMouseEnter = (id) => {
    setHoveredItem(id); // При наведении запоминаем индекс элемента
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Сброс состояния при уходе мыши
  };

  return (
    <>
      <Title title={config.global.title} />
      <main
        data-scroll-section
        data-scroll-id
        id="main-container"
        className="will-change-scroll relative"
      >
        <div className="flex flex-row w-full">
          <div className="flex-none w-full h-screen grid grid-cols-2 grid-rows-2">
            {slides.map((obj, id) => (
              <div
                key={id}
                onMouseEnter={() => handleMouseEnter(id)} // Передаем индекс элемента
                onMouseLeave={handleMouseLeave}
                className="relative bg-black flex cursor-pointer justify-center items-center overflow-hidden"
              >
                {hoveredItem === id && ( // Проверяем, совпадает ли наведение с текущим элементом
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.75 }}
                    >
                      <motion.p
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.75 }}
                        transition={{
                          ease: config.animations.speed,
                          duration: 0.5,
                        }}
                        className="text-white w-full text-center z-[2] absolute"
                      >
                        {obj.map}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                )}
                <motion.img
                  initial={{ scale: 1.15 }}
                  animate={{
                    opacity: 0.75,
                    scale: hoveredItem === id ? 1.15 : 1,
                  }}
                  exit={{ scale: 1.15 }}
                  transition={{
                    ease: config.animations.speed,
                    duration: 0.5,
                  }}
                  className="w-full h-full object-cover"
                  src={obj.img}
                  alt={obj.name}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
