import { AnimatePresence, motion } from "framer-motion";
import { config } from "../styles/global";
import Link from "next/link";
import Title from "../components/Title";

export default function Custom404() {
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="flex flex-col">
      <Title title={`404: ${config.global.title}`} />
      <main className="gap-4 relative flex-col flex justify-center items-center w-sceen h-screen">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                initial="toUp"
                animate="visible"
                exit="toDown"
                transition={{
                  ease: config.animations.speed,
                  duration: config.animations.duration,
                }}
                className="md:text-[50em] text-[10em] font-[000]"
              >
                404
              </motion.h2>
            </AnimatePresence>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="animate-pulse">Page not found</span>
            <div className="flex gap-4">
              <button
                aria-label="back"
                onClick={goBack}
                className="cursor-pointer"
              >
                <span className="hover mix-blend-difference">Back</span>
              </button>
              <Link href="/">
                <button aria-label="to main">
                  <span className="hover mix-blend-difference">Main</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
