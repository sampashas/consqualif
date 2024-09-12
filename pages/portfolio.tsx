import { motion } from "framer-motion";
import Title from "../components/Title";
import { config, slides } from "../styles/global";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = ({ id }: any) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
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
        <div className="bg-black z-[2] opacity-40 absolute h-screen w-full" />
        <div className="flex flex-row w-full">
          <div className="flex-none w-full h-screen grid grid-cols-2 grid-rows-2">
            {slides.map((obj, id) => (
              <div
                key={id} // Always use keys when rendering lists of elements in React
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden"
              >
                <p
                  style={{ opacity: hoveredItem === id ? 1 : 0 }}
                  className="absolute z-[2] bottom-[2em] left-[2em]"
                >
                  {obj.name}
                </p>
                <motion.img
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{
                    ease: config.animations.speed,
                    duration: 1.25,
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
