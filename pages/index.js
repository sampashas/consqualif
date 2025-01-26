import { config } from "../styles/global";
import Title from "../components/Base/Title";
import Hero from "../components/Hero/Hero";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Home() {
  const containerRef = useRef();
  const imageRef = useRef(); // Реф для изображения

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Timeline for sequential animations
    const timeline = gsap.timeline({ paused: true });

    // First section animation
    timeline.to(".section-1", { y: -200, opacity: 0.25, duration: 1 });

    // Second section remains fixed as a background
    timeline.to(".section-2", { opacity: 1, duration: 1 }, "-=0.5");

    // Image animation
    timeline.to(imageRef.current, { y: -200, duration: 1 }, "-=0.5");

    // Trigger timeline on scroll
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;
      const progress = scrollTop / maxScroll;
      timeline.progress(progress);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Title title={config.global.title} />
      <main ref={containerRef} className="relative h-[300vh]">
        <Section1 />
        <Section2 imageRef={imageRef} />
      </main>
    </>
  );
}

const Section1 = () => {
  return (
    <motion.div className="section-1 h-screen sticky top-0 flex justify-center items-center">
      <Hero />
    </motion.div>
  );
};

const Section2 = ({ imageRef }) => {
  return (
    <motion.div className="section-2 h-screen sticky top-0 overflow-hidden z-[4] bg-primary w-full flex flex-col justify-end items-center">
      <div className="flex translate-y-[35%] gap-6 items-center flex-col">
        <h2>What we offer</h2>
        <img
          ref={imageRef} // Реф для изображения
          className="w-fit"
          src="/we/1-team.png"
          alt="Team"
        />
      </div>
    </motion.div>
  );
};
