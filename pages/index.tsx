import { useContext, useRef } from "react";
import Title from "../components/Title";
import useMobile from "../hooks/useMobile";
import SContext from "../contexts/SContext";

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
        className="will-change-scroll"
      >
        Content
      </main>
    </>
  );
};

export default Home;
