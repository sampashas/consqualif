import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const currentPath = router.asPath;
  const localPath = "/"; // Замените на ваш локальный путь

  return (
    <div
      className="items-center mix-blend-difference text-white fixed pxes py-1 flex justify-between bottom-0 right-0 left-0
    z-10 bg-white bg-opacity-5 backdrop-blur-xl will-change-transform duration-500
    max-[600px]:hidden w-full"
    >
      Footer
    </div>
  );
}

export default Footer;
