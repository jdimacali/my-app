"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface TitleProps {
  title: string;
  subtitle: string;
  button: string;
}

const Title = ({ title, subtitle, button }: TitleProps) => {
  const router = useRouter();
  return (
    <div className="max-sm:mb-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "backOut",
          duration: 1,
        }}
        className="break-words xl:text-7xl text-5xl tracking-[0.4rem] font-bold text-[#8b46c4] font-mania antialiased drop-shadow-2xl underline-offset-[16px] underline decoration-from-font text-shadow-white"
      >
        {title}
      </motion.h2>
      <h2 className="text-4xl tracking-[0.30rem] font-bold text-white font-mania antialiased mt-5 text-shadow-purple">
        {subtitle}
      </h2>
      <div>
        <Button
          onClick={() => router.push("/shop/search")}
          className="bg-gray-950 p-6 rounded-xl max-sm:w-[90vw] transition-all hover:bg-gray-900 hover:opacity-80 mt-8"
        >
          <h3 className="text-md font-bold text-white m-3">{button}</h3>
        </Button>
      </div>
    </div>
  );
};

export default Title;
