import { useContext } from "react";
import Title from "../components/Title";
import SContext from "../contexts/SContext";
import { motion } from "framer-motion";
import { config } from "../styles/global";

const Home = () => {
  const { ref } = useContext(SContext);

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
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{
            ease: config.animations.speed,
            duration: 1,
          }}
          className="absolute z-[1] bottom-0 left-0 right-0"
        >
          <div className="w-full trans h-full flex border-t-[1px] border-[#fff2] pl-[55%] gap-3 justify-center items-center py-3 overflow-hidden">
            <div className="h-full border opacity-50" />
            <span className=" whitespace-nowrap px-4 rounded-lg ">
              Basement renovation, Extensions & permits
            </span>
            <div className="h-full border opacity-50" />
            <span className="text-[#fff9] p-2 whitespace-nowrap px-4 rounded-lg ">
              Bathroom renovation, Plumbing & french drains
            </span>
            <div className="h-full border opacity-50" />
            <span className="text-[#fff9] p-2 whitespace-nowrap px-4 rounded-lg ">
              Bedroom renovation, plastering & painting
            </span>
          </div>
        </motion.div>
        <div className="w-full h-screen z-[2] flex items-center absolute">
          <div className="flex gap-6 animate-runner w-full h-48">
            <h2 className="whitespace-nowrap">
              Experience luxurious construction & quality with us –
            </h2>
            <h2 className="whitespace-nowrap">
              Experience luxurious construction & quality with us
            </h2>
          </div>
        </div>
        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ ease: config.animations.speed, duration: 1.5 }}
          className="w-full h-screen"
        >
          <div className="bg-black z-[1] opacity-50 absolute h-screen w-full"></div>
          <img
            className="h-screen object-cover animate-zoom"
            src="/slider/1.png"
            alt=""
          ></img>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
