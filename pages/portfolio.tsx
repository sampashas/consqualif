import { motion } from "framer-motion";
import Title from "../components/Title";
import { config, slides } from "../styles/global";

const Portfolio = () => {
  return (
    <>
      <Title title={config.global.title} />
      <main
        data-scroll-section
        data-scroll-id
        id="main-container"
        className="will-change-scroll relative"
      >
        <div className="bg-black z-[2] opacity-40 overflow-scroll absolute top-0 h-screen w-full" />
        <div className="flex flex-row overflow-x-scroll w-full">
          <div className="flex-none w-screen h-screen grid grid-cols-2 grid-rows-2">
            {slides.map((obj, id) => (
              <div className="overflow-hidden">
                <motion.img
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{
                    ease: config.animations.speed,
                    duration: 1.25,
                  }}
                  key={id} // Always use keys when rendering lists of elements in React
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
