import React from "react";
import Image from "next/image";
import useMobile from "../hooks/useMobile";

function ContentBlock() {
  const mobile = useMobile();
  return (
    <div className="w-full h-screen bg-[#18181840] overflow-hidden">
      <div data-scroll data-scroll-speed="-0.5">
        <Image
          className="h-screen md:h-full w-full object-cover md:object-contain"
          width={1080}
          height={1080}
          quality={100}
          src="/sale/urbanism/st/grids_0.png"
          alt="Parallax"
          key="Parallax"
        />
      </div>
    </div>
  );
}

export { ContentBlock };
