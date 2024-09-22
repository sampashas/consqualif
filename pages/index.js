import { config } from "../styles/global";
import Title from "../components/Title";
import Hero from "../components/Blocks/Hero";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Title title={config.global.title} />
      <main ref={containerRef} className="relative h-[200vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const translateY = useTransform(scrollYProgress, [0, 1], [1, -200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <motion.div
      style={{ translateY, opacity }}
      className="h-screen sticky top-0"
    >
      <Hero />
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const translateY = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      style={{ translateY }}
      className="relative h-screen overflow-hidden
    z-[4] bg-primary w-full flex flex-col justify-end items-center"
    >
      <div className="flex translate-y-[25%] gap-6 items-center flex-col">
        <h2>What we offer</h2>
        <img className="w-fit" src="/about/bg-2.png" alt="" />
      </div>
    </motion.div>
  );
};
