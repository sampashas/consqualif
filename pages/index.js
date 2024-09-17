import { config } from "../styles/global";
import Title from "../components/Title";
import Hero from "../components/Blocks/Hero";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
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
      <main className="relative h-[200vh]">
        <Section1 />
        <Section2 />
      </main>
    </>
  );
}

const Section1 = () => {
  return (
    <div className="h-screen sticky top-0">
      <Hero />
    </div>
  );
};

const Section2 = () => {
  return (
    <div
      className="relative h-screen overflow-hidden
    z-[4] bg-primary w-full flex flex-col justify-end items-center"
    >
      <div className="flex translate-y-[25%] gap-6 items-center flex-col">
        <h2>What we offer</h2>
        <img className="w-fit" src="/about/bg-2.png" alt="" />
      </div>
    </div>
  );
};
