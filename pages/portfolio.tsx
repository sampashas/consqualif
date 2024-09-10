import Title from "../components/Title";
import { motion } from "framer-motion";
import { config } from "../styles/global";

const Portfolio = () => {
  return (
    <>
      <Title title={config.global.title} />
      <main
        data-scroll-section
        data-scroll-id
        id="main-container"
        className="will-change-scroll overflow-hidden relative"
      >
        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ ease: config.animations.speed, duration: 1.5 }}
          className="w-full h-screen bg-black"
        ></motion.div>
      </main>
    </>
  );
};

export default Portfolio;
