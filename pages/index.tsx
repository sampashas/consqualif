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
      <Title title={config.global.title} />
      <main
        data-scroll-section
        data-scroll-id
        ref={ref}
        id="main-container"
        className="will-change-scroll overflow-hidden"
      >
        <div className="absolute z-[1] bottom-0 left-0 right-0">
          <div className="flex pl-[60%] w-full gap-2 justify-center py-3 overflow-hidden">
            <span className=" p-2 text-[1em] ] whitespace-nowrap px-4 rounded-lg bg-wh15 border-[#fff2] backdrop-blur-3xl border-[1px]">
              Basement renovation, Extensions & permits
            </span>
            <span className="text-[#fff9] p-2 whitespace-nowrap px-4 rounded-lg bg-wh15 border-[#fff2] backdrop-blur-3xl border-[1px]">
              Bathroom renovation, Plumbing & french drains
            </span>
            <span className="text-[#fff9] p-2 whitespace-nowrap px-4 rounded-lg bg-wh15 border-[#fff2] backdrop-blur-3xl border-[1px]">
              Bedroom renovation, plastering & painting
            </span>
          </div>
        </div>
        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ ease: config.animations.speed, duration: 1.5 }}
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
