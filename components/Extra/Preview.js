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
        className=""
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
          <LeftSide />
          <AnimatedSvg />
          <RightSide />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function LeftSide() {
  return (
    <svg
      width="320"
      height="76"
      viewBox="0 0 320 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.8034 75.3501C30.7917 75.3501 23.8901 73.749 18.0986 70.5467C12.307 67.3058 7.84272 62.8303 4.70563 57.1203C1.56854 51.3716 0 44.7162 0 37.1542C0 29.0906 1.6892 22.3002 5.0676 16.7831C8.49427 11.2659 13.1275 7.09904 18.9673 4.28257C24.8554 1.42752 31.4674 0 38.8034 0C48.5042 0 56.2987 1.94838 62.1868 5.84514C68.1231 9.70331 72.2013 14.7382 74.4214 20.9499L62.2592 22.9176C60.3769 18.4035 57.3605 14.8154 53.2099 12.1532C49.1075 9.45253 44.3054 8.10217 38.8034 8.10217C34.0253 8.10217 29.6093 9.20175 25.5552 11.4009C21.5494 13.5615 18.3158 16.8023 15.8544 21.1235C13.393 25.4447 12.1623 30.7882 12.1623 37.1542C12.1623 42.9415 13.1275 48.0921 15.058 52.6062C17.0368 57.1203 19.9808 60.6698 23.8901 63.2547C27.8477 65.8397 32.8188 67.1322 38.8034 67.1322C45.9946 67.1322 51.6896 65.5889 55.8885 62.5024C60.1356 59.4159 62.2592 55.3648 62.2592 50.3492H74.5662C74.5662 55.5577 73.07 60.0332 70.0777 63.7756C67.0854 67.4794 62.8866 70.3345 57.4811 72.3407C52.1239 74.347 45.898 75.3501 38.8034 75.3501ZM101.789 71.1833C107.725 73.9612 114.458 75.3501 121.987 75.3501C129.516 75.3501 136.248 73.9805 142.185 71.2412C148.121 68.5019 152.803 64.3543 156.229 58.7986C159.656 53.2042 161.369 46.1823 161.369 37.7329C161.369 29.3221 159.656 22.3195 156.229 16.7252C152.803 11.1308 148.121 6.94472 142.185 4.16683C136.248 1.38895 129.516 0 121.987 0C114.458 0 107.725 1.38895 101.789 4.16683C95.8523 6.90613 91.1708 11.073 87.7441 16.6673C84.3175 22.2231 82.6042 29.245 82.6042 37.7329C82.6042 46.1052 84.3175 53.0885 87.7441 58.6828C91.1708 64.2386 95.8523 68.4054 101.789 71.1833ZM285.756 75.3501C279.675 75.3501 274.101 74.482 269.033 72.7458C263.965 70.9711 259.887 68.3668 256.798 64.9331C253.71 61.4993 252.117 57.2553 252.02 52.2011H263.024C263.024 55.5963 264.062 58.3935 266.137 60.5926C268.213 62.7532 270.964 64.3736 274.39 65.4539C277.817 66.4956 281.557 67.0165 285.611 67.0165C290.003 67.0165 293.816 66.457 297.05 65.3382C300.283 64.2193 302.769 62.7532 304.506 60.9398C306.292 59.0879 307.185 57.0624 307.185 54.8632C307.185 51.7767 306.002 49.2882 303.638 47.3977C301.273 45.4686 297.774 43.906 293.14 42.71L277.069 38.1959C269.54 36.0353 263.845 33.5661 259.984 30.7882C256.123 28.0103 254.192 24.1136 254.192 19.098C254.192 13.465 256.895 8.8738 262.3 5.32428C267.754 1.77476 275.476 0 285.467 0C294.733 0 301.973 1.71689 307.185 5.15067C312.397 8.54586 315.39 13.1178 316.162 18.8665H305.013C304.289 15.5099 302.31 12.9056 299.077 11.0537C295.891 9.16317 291.355 8.21791 285.467 8.21791C279.482 8.21791 274.825 9.27891 271.494 11.4009C268.164 13.5229 266.499 16.2043 266.499 19.4452C266.499 22.1073 267.537 24.2293 269.612 25.8112C271.736 27.3545 275.042 28.7434 279.53 29.978L298.353 35.1865C304.868 36.9227 310.008 39.3534 313.773 42.4785C317.586 45.6036 319.492 49.6547 319.492 54.6317C319.492 58.4899 318.189 61.9816 315.583 65.1067C313.025 68.2318 309.236 70.7203 304.217 72.5722C299.197 74.4242 293.044 75.3501 285.756 75.3501ZM174.047 1.27313H187.513L232.687 59.8003V1.27313H243.98V73.9611H231.384L185.341 14.4008V73.9611H174.047V1.27313ZM142.185 59.5508C137.262 64.5278 130.529 67.0164 121.987 67.0164C113.541 67.0164 106.808 64.5471 101.789 59.6087C96.8176 54.6316 94.332 47.3397 94.332 37.7328C94.332 28.2417 96.8176 20.9305 101.789 15.7991C106.808 10.6677 113.541 8.10205 121.987 8.10205C130.529 8.10205 137.262 10.6677 142.185 15.7991C147.156 20.8919 149.641 28.1646 149.641 37.6171C149.641 47.2625 147.156 54.5737 142.185 59.5508Z"
        fill="white"
      />
    </svg>
  );
}

function RightSide() {
  return (
    <svg
      width="307"
      height="75"
      viewBox="0 0 307 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.973145 0.273193H12.2667V46.687C12.2667 53.516 14.4144 58.4544 18.7098 61.5024C23.0052 64.5118 28.6278 66.0164 35.5776 66.0164C42.4792 66.0164 48.0536 64.5118 52.3008 61.5024C56.5962 58.4544 58.7439 53.516 58.7439 46.687V0.273193H70.0373V46.687C70.0373 52.7829 68.6136 57.895 65.7661 62.0232C62.9669 66.1129 58.9852 69.1994 53.821 71.2829C48.6569 73.3277 42.5757 74.3501 35.5776 74.3501C28.5795 74.3501 22.4743 73.3277 17.2619 71.2829C12.0977 69.1994 8.09196 66.1129 5.24445 62.0232C2.39694 57.895 0.973145 52.7829 0.973145 46.687V0.273193ZM106.945 0.273193L75.6709 72.9612H87.5435L95.5069 54.3262H131.704L139.378 72.9612H151.251L120.7 0.273193H106.945ZM128.808 47.2657H98.4027L113.605 11.269L128.808 47.2657ZM172.887 0.273193V65.0905H213.428V72.9612H161.594V0.273193H172.887ZM226.104 0.273193V72.9612H237.398V0.273193H226.104ZM250.77 0.273193V72.9612H262.063V39.9738H303.038V32.2189H262.063V8.02812H306.079V0.273193H250.77Z"
        fill="white"
      />
    </svg>
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
      className="w-[10em]"
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

export default Preview;
