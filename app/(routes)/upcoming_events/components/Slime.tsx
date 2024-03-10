"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Slime = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div className="absolute w-full h-[48rem] sm:h-[60rem] top-0 mt-[-200px] flex items-center text-center justify-center">
      <Image
        src="/assets/slime.svg"
        alt="slime"
        fill
        className="object-cover"
        quality={100}
      />
      {children}
    </div>
  );
};
export default Slime;
