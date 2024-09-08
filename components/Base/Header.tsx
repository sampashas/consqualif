import React from "react";
import useMobile from "../../hooks/useMobile";

function Header() {
  const mobile = useMobile();

  return (
    <div className="z-[3] fixed overflow-hidden myes pxes w-full">Header</div>
  );
}

export default Header;
