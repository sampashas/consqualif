import { useContext, useRef } from "react";
import Title from "../components/Title";
import useMobile from "../hooks/useMobile";
import SContext from "../contexts/SContext";
import { motion } from "framer-motion";
import { config } from "../styles/global";

const Home = () => {
  const { ref } = useContext(SContext);

  const mobie = useMobile();
  return (
    <>
      <Title title="Template - Zemliansky.com" />
      <main
        data-scroll-section
        data-scroll-id
        ref={ref}
        id="main-container"
        className="will-change-scroll overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ ease: config.animations.speed, duration: 1 }}
          className="w-full h-screen"
        >
          <div className="bg-black opacity-50 absolute h-screen w-full"></div>
          <img
            className="h-screen object-cover"
            src="/slider/1.png"
            alt=""
          ></img>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
