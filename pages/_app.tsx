import { useRef, useState } from "react";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/fonts.scss";
import Header from "../components/Base/Header";
import SContext from "../contexts/SContext";
import useLocoscroll from "../hooks/useLocoscroll";
import Cookie from "../components/Base/Cookie";
import Preloader from "../components/Extra/Preloader";
import Preview from "../components/Extra/Preview";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [state, setState] = useState("Some initial state");
  // Loader
  const [loading, setLoading] = useState<boolean>(true);

  // Scroll
  const ref = useRef<HTMLDivElement>(null);
  const { locomotiveScrollRef } = useLocoscroll();

  const values = {
    state,
    setState,
    ref,
    locomotiveScrollRef,
    loading,
    setLoading,
  };
  return (
    <SContext.Provider value={values}>
      <Header />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Preview />
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className="will-change-transform">
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </>
      )}
      <Cookie consentCookieName="userConsent" expires={365} />
    </SContext.Provider>
  );
}

export default MyApp;
