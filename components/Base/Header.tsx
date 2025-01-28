import React, { useEffect, useState } from "react";
import useMobile from "../../hooks/useMobile";
import Link from "next/link";
import { motion } from "framer-motion";
import { config } from "../../styles/global";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

function Header() {
  return (
    <div className="z-[3] fixed pxes w-full">
      <nav className="w-full flex justify-between gap-4 items-center">
        <LeftNav />
        <Link href="/">
          <Logo />
        </Link>
        <MobileMenu />
        <RightNav />
      </nav>
    </div>
  );
}

function MobileMenu() {
  return (
    <svg
      className="md:hidden"
      width="56"
      height="16"
      viewBox="0 0 56 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.5283 0.225952H0.52832V2.22595H55.5283V0.225952ZM55.5283 13.6487H0.52832V15.6487H55.5283V13.6487Z"
        fill="white"
      />
    </svg>
  );
}
function LeftNav() {
  const leftSide = [
    { name: "Intro", link: "/", id: uuidv4() },
    { name: "Cases", link: "/case", id: uuidv4() },
  ];

  const route = useRouter();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = route.asPath;

    const active = leftSide.find((obj) => obj.link === currentPath);
    if (active) {
      setActiveLink(active.link);
    } else {
      setActiveLink("");
    }
  }, [route.asPath]);

  return (
    <ul className="mn:hidden md:flex flex-1 gap-1">
      {leftSide.map((obj, id) => (
        <li
          key={id}
          className="
            duration-300
            border hover:border-b-wh50 border-wh15
            py-[1.1em] flex justify-center
            overflow-hidden w-full"
        >
          <Link href={obj.link}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                ease: config.animations.speed,
                duration: 1,
                delay: 1.7 + id * -0.1,
              }}
            >
              <span>{obj.name}</span>
              {activeLink === obj.link && (
                <div className="w-[47px] absolute h-[47px] blur-xl bg-white" />
              )}
            </motion.div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
function RightNav() {
  const rightSide = [
    { name: "We are", link: "/case", id: uuidv4() },
    { name: "Contacts", link: "/contacts", id: uuidv4() },
  ];

  const route = useRouter();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = route.asPath;

    const active = rightSide.find((obj) => obj.link === currentPath);
    if (active) {
      setActiveLink(active.link);
    } else {
      setActiveLink("");
    }
  }, [route.asPath]);

  return (
    <ul className="mn:hidden md:flex flex-1 gap-1 justify-end">
      {rightSide.map((obj, id) => (
        <li
          key={id}
          className="
          duration-300
          border hover:border-b-wh50 border-wh15
          py-[1.1em] flex justify-center
          overflow-hidden w-full"
        >
          <Link href={obj.link}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                ease: config.animations.speed,
                duration: 1,
                delay: 1.7 + id * -0.1,
              }}
            >
              <span>{obj.name}</span>
              {activeLink === obj.link && (
                <div className="w-full translate-y-[-.1em] h-[1px] bg-white" />
              )}
            </motion.div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
function Logo() {
  const mobile = useMobile();
  return (
    <motion.svg
      initial={{ y: "-200%" }}
      animate={{ y: 4 }}
      exit={{ y: "-200%" }}
      transition={{
        ease: config.animations.speed,
        duration: 1,
        delay: 2.5,
      }}
      width={mobile ? "13em" : "18em"}
      viewBox="0 0 255 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="261"
        viewBox="0 0 261 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_119_18492)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.50848 25.3695C8.5912 26.5211 11.0731 27.0969 13.9542 27.0969C16.5055 27.0969 18.7444 26.7361 20.6709 26.0146C22.6148 25.2932 24.1248 24.2665 25.2008 22.9345C26.2769 21.5887 26.8149 19.9793 26.8149 18.1062H22.3892C22.3892 19.9099 21.6255 21.3667 20.0982 22.4767C18.5882 23.5866 16.5402 24.1416 13.9542 24.1416C11.802 24.1416 10.0144 23.6768 8.5912 22.7472C7.18536 21.8176 6.12665 20.5412 5.41506 18.9179C4.72082 17.2945 4.3737 15.4423 4.3737 13.3611C4.3737 11.0718 4.81628 9.15022 5.70143 7.59628C6.58658 6.04234 7.74943 4.87688 9.18998 4.09991C10.6479 3.30907 12.2359 2.91364 13.9542 2.91364C15.9328 2.91364 17.6597 3.39925 19.1349 4.37046C20.6276 5.3278 21.7123 6.61813 22.3892 8.24144L26.7629 7.53384C25.9645 5.30005 24.4979 3.48943 22.3631 2.10199C20.2457 0.700662 17.4427 0 13.9542 0C11.3161 0 8.93832 0.513356 6.82089 1.54007C4.72082 2.55291 3.05465 4.05135 1.82237 6.0354C0.607458 8.01945 0 10.4614 0 13.3611C0 16.0805 0.564068 18.4739 1.69221 20.5412C2.82034 22.5946 4.42577 24.204 6.50848 25.3695ZM43.868 27.0969C41.1604 27.0969 38.7393 26.5974 36.6045 25.5984C34.4697 24.5995 32.7862 23.101 31.5539 21.1031C30.3216 19.0913 29.7055 16.58 29.7055 13.5692C29.7055 10.5169 30.3216 7.9917 31.5539 5.99378C32.7862 3.98198 34.4697 2.48353 36.6045 1.49845C38.7393 0.499482 41.1604 0 43.868 0C46.5755 0 48.9966 0.499482 51.1314 1.49845C53.2662 2.49741 54.9497 4.00279 56.182 6.01459C57.4143 8.02639 58.0304 10.5446 58.0304 13.5692C58.0304 16.6078 57.4143 19.1329 56.182 21.1447C54.9497 23.1426 53.2662 24.6341 51.1314 25.6192C48.9966 26.6043 46.5755 27.0969 43.868 27.0969ZM43.868 24.1C46.94 24.1 49.3611 23.2051 51.1314 21.4153C52.9191 19.6255 53.8129 16.9962 53.8129 13.5276C53.8129 10.1284 52.9191 7.51303 51.1314 5.6816C49.3611 3.8363 46.94 2.91364 43.868 2.91364C40.8307 2.91364 38.4095 3.8363 36.6045 5.6816C34.8168 7.52691 33.923 10.1561 33.923 13.5692C33.923 17.024 34.8168 19.6463 36.6045 21.4361C38.4095 23.212 40.8307 24.1 43.868 24.1ZM102.762 27.0969C100.575 27.0969 98.5701 26.7847 96.7477 26.1603C94.9253 25.5221 93.4587 24.5856 92.348 23.3508C91.2372 22.1159 90.6644 20.5897 90.6297 18.7722H94.5869C94.5869 19.9931 94.96 20.999 95.7063 21.7899C96.4526 22.5668 97.4419 23.1496 98.6742 23.5381C99.9065 23.9127 101.252 24.1 102.709 24.1C104.289 24.1 105.66 23.8988 106.823 23.4964C107.986 23.0941 108.88 22.5668 109.504 21.9147C110.146 21.2488 110.468 20.5204 110.468 19.7295C110.468 18.6195 110.042 17.7246 109.192 17.0448C108.341 16.3511 107.083 15.7892 105.417 15.359L99.6375 13.7357C96.9299 12.9588 94.8819 12.0708 93.4935 11.0718C92.105 10.0729 91.4107 8.67155 91.4107 6.86787C91.4107 4.84219 92.3827 3.19113 94.3265 1.91468C96.2878 0.638226 99.0647 0 102.657 0C105.99 0 108.593 0.617416 110.468 1.85225C112.342 3.0732 113.418 4.71732 113.696 6.78462H109.687C109.426 5.57754 108.715 4.64102 107.552 3.97504C106.406 3.29519 104.775 2.95527 102.657 2.95527C100.505 2.95527 98.8304 3.33681 97.6329 4.09991C96.4353 4.86301 95.8365 5.82728 95.8365 6.99274C95.8365 7.95008 96.2097 8.71317 96.956 9.28203C97.7196 9.83701 98.9085 10.3365 100.523 10.7805L107.291 12.6535C109.635 13.2779 111.483 14.152 112.837 15.2758C114.208 16.3996 114.893 17.8565 114.893 19.6463C114.893 21.0337 114.425 22.2894 113.488 23.4132C112.568 24.537 111.205 25.4319 109.4 26.0979C107.595 26.7639 105.382 27.0969 102.762 27.0969ZM150.668 0.457832H154.729V17.1488C154.729 19.6046 155.502 21.3805 157.046 22.4766C158.591 23.5588 160.613 24.0999 163.112 24.0999C165.594 24.0999 167.599 23.5588 169.126 22.4766C170.671 21.3805 171.443 19.6046 171.443 17.1488V0.457832H175.504V17.1488C175.504 19.341 174.992 21.1794 173.968 22.6639C172.962 24.1346 171.53 25.2446 169.673 25.9938C167.816 26.7292 165.629 27.0968 163.112 27.0968C160.596 27.0968 158.4 26.7292 156.526 25.9938C154.669 25.2446 153.228 24.1346 152.204 22.6639C151.18 21.1794 150.668 19.341 150.668 17.1488V0.457832ZM188.777 0.457832L177.53 26.5973H181.8L184.664 19.896H197.681L200.44 26.5973H204.71L193.723 0.457832H188.777ZM196.639 17.3569H185.705L191.172 4.41206L196.639 17.3569ZM212.49 0.457832V23.767H227.07V26.5973H208.429V0.457832H212.49ZM231.628 0.457832V26.5973H235.689V0.457832H231.628ZM240.498 0.457832V26.5973H244.559V14.7347H259.294V11.9459H244.559V3.2466H260.388V0.457832H240.498ZM67.432 0.457832H62.5897V26.5973H66.651V5.17869L83.2085 26.5973H87.7384V0.457832H83.6771V21.5049L67.432 0.457832Z"
            fill="white"
          />
          <g clip-path="url(#clip1_119_18492)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M132.729 24.619C138.743 24.619 143.619 19.7433 143.619 13.7288C143.619 7.71439 138.743 2.83872 132.729 2.83872C126.714 2.83872 121.839 7.71439 121.839 13.7288C121.839 19.7433 126.714 24.619 132.729 24.619ZM132.729 27.4577C140.311 27.4577 146.458 21.3111 146.458 13.7288C146.458 6.14661 140.311 0 132.729 0C125.147 0 119 6.14661 119 13.7288C119 21.3111 125.147 27.4577 132.729 27.4577Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M120 25.7422H120.258V36H145V36.2285H120V25.7422Z"
              fill="white"
            />
            <path
              d="M142.669 14.6258L138.939 11.5156V17.8014L142.669 20.5308V14.6258Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M114.09 27.3566L130.116 14.8516L130.275 15.055L114.249 27.5601L114.09 27.3566Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M150.075 27.8723L131.797 14.018L132.42 13.1953L150.699 27.0496L150.075 27.8723Z"
              fill="white"
            />
            <rect x="120" y="36" width="25" height="3" fill="white" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_119_18492">
            <rect width="260.388" height="39" fill="white" />
          </clipPath>
          <clipPath id="clip1_119_18492">
            <rect
              width="36.609"
              height="39"
              fill="white"
              transform="translate(114.09)"
            />
          </clipPath>
        </defs>
      </svg>
    </motion.svg>
  );
}

export default Header;
