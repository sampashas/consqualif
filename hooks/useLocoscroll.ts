import { useRef, useState, useEffect } from "react";

const useLocoscroll = () => {
  const locomotiveScrollRef = useRef<any | null>(null);

  useEffect(() => {
    let locomotiveScroll;

    import("locomotive-scroll").then((locomotiveModule) => {
      locomotiveScroll = new locomotiveModule.default({
        el: locomotiveScrollRef.current,
        inertia: 0.25,
        lerp: 0.5,
        multiplier: 2,
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
      } as any);
    });
  }, []);

  return { locomotiveScrollRef };
};

export default useLocoscroll;
