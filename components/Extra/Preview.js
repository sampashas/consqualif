import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "../../styles/global";
import gsap from "gsap";

function Preview() {
  const mDelay = 2;
  const nDelay = 2;
  const tDelay = 1.5;

  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{
        ease: config.animations.speed,
        duration: 1.25,
        delay: mDelay,
      }}
      className="absolute overflow-hidden w-full h-screen z-[3] bg-primary top-0 bottom-0 flex justify-center items-center"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 533 }}
        transition={{
          ease: config.animations.speed,
          duration: 1.25,
          delay: nDelay,
        }}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0.2525 }}
          className="flex justify-center items-center"
          transition={{
            ease: config.animations.speed,
            duration: 1.25,
            delay: tDelay,
          }}
        >
          <Content />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Content() {
  const delay = 0;
  const duration = 2;
  return (
    <>
      <LeftSide delay={delay} duration={duration} />
      <AnimatedSvg />
      <RightSide delay={delay} duration={duration} />
    </>
  );
}

const AnimatedSvg = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    // Анимация обводки для каждого элемента
    gsap
      .timeline()
      .fromTo(
        svg.querySelector("circle"),
        { strokeDasharray: "0, 1000", strokeDashoffset: 0 },
        {
          strokeDasharray: "1000, 1000",
          duration: 2,
          ease: "power2.inOut",
        }
      )
      .fromTo(
        svg.querySelectorAll("path"),
        { strokeDasharray: "0, 1000", strokeDashoffset: 0 },
        {
          strokeDasharray: "1000, 1000",
          duration: 2.5,
          ease: "power4.inOut",
          stagger: 0.1,
        },
        "-=1.5"
      );
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 263 277"
      fill="none"
      className="w-[10em] h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="132.768" cy="113.747" r="113.247" stroke="white" />
      <path
        inf="pipe"
        d="M205.703 120.56L178.917 98.2212V143.37L205.703 162.974V120.56Z"
        fill="white"
      />
      <path inf="roof" d="M116.108 122.91L1.00006 212.729" stroke="white" />
      <path
        inf="rightSide"
        d="M129.86 113.219L261.147 212.729"
        stroke="white"
        strokeWidth="4"
      />
      <path
        inf="homeSide"
        d="M42.1396 200.432V275.695H219.121"
        stroke="white"
      />
    </svg>
  );
};

function LeftSide({ delay, duration }) {
  return (
    <div className="flex overflow-hidden">
      {Array.from("CONS").map((char, index) => (
        <motion.h2
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          className="font-[400]"
          transition={{
            duration: duration,
            delay: delay + -index * 0.15, // Задержка для последовательной анимации
            ease: config.animations.speed,
          }}
        >
          {char}
        </motion.h2>
      ))}
    </div>
  );
}

function RightSide({ delay, duration }) {
  return (
    <div className="flex overflow-hidden">
      {Array.from("UALIF").map((char, index) => (
        <motion.h2
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: duration,
            delay: delay + index * 0.15, // Задержка для последовательной анимации
            ease: config.animations.speed,
          }}
          className="font-[400]"
        >
          {char}
        </motion.h2>
      ))}
    </div>
  );
}

export default Preview;
