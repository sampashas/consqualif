import { config } from "../styles/global";
import Title from "../components/Title";
import Hero from "../components/Blocks/Hero";

const Home = () => {
  return (
    <>
      <Title title={config.global.title} />
      <main
        data-scroll-section
        data-scroll-id
        id="main-container"
        className="will-change-scroll flex flex-col relative h-[200vh]"
      >
        <HeroPage />
        <Scroll />
      </main>
    </>
  );
};

function HeroPage() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
    </div>
  );
}

function Scroll() {
  return (
    <div className="z-[4] h-screen bg-primary w-full flex flex-col justify-end items-center">
      <div className="flex translate-y-[25%] gap-6 items-center flex-col">
        <h2>What we offer</h2>
        <img className="w-fit" src="/about/bg-2.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
