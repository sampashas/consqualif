import React, { useContext, useEffect, useState } from "react";
import { contentItems, moreBlockItems } from "../../assets/assets";
import SContext from "../../contexts/SContext";
import { motion } from "framer-motion";
import { config } from "../../styles/global";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(1);

  const allAssets = [...contentItems, ...moreBlockItems];
  const { loading, setLoading } = useContext(SContext);

  useEffect(() => {
    let loadedAssets = 0;
    const totalAssets = allAssets.length;
    const stageMax = 100 / 3;

    const updateProgress = () => {
      loadedAssets++;
      const newProgress = (loadedAssets / totalAssets) * 100;
      setProgress(newProgress);

      if (newProgress >= stage * stageMax && stage < 3) {
        setStage(stage + 1);
      }

      if (loadedAssets === totalAssets) {
        setLoading(false);
        setStage(3);
        setProgress(100);
      }
    };

    allAssets.forEach((asset) => {
      switch (asset.type) {
        case "image":
          const imageMedia = new Image();
          imageMedia.onload = updateProgress;
          imageMedia.onerror = updateProgress;
          imageMedia.src = asset.url; // TypeScript knows asset.url exists here
          break;
        case "video":
          const videoMedia = document.createElement("video");
          videoMedia.onloadedmetadata = updateProgress;
          videoMedia.onerror = updateProgress;
          videoMedia.src = asset.url; // TypeScript knows asset.url exists here
          videoMedia.load();
          break;
        case "block":
          updateProgress(); // Maybe do something with asset.content?
          break;
      }
    });
  }, []);

  const displayedProgress = Math.min(progress, stage * (100 / 3)).toFixed(0);

  return (
    <div className="w-full relative h-screen flex justify-center flex-col items-center">
      <Content displayedProgress={displayedProgress} />
    </div>
  );
};

function Content({ displayedProgress }) {
  const { loading } = useContext(SContext);
  return (
    <div className="flex h-full justify-end gap-3 flex-col items-start pl-12 pb-12 w-full">
      <div className="flex overflow-hidden w-fit justify-center items-center">
        <motion.h2
          initial={{ y: "10%" }}
          animate={{ y: loading ? "-100%" : 0 }}
          exit={{ y: "10%" }}
          transition={{
            ease: config.animations.speed,
            duration: 1,
          }}
        >
          <b>{displayedProgress}</b>
        </motion.h2>
      </div>
    </div>
  );
}

export default Preloader;
