"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.25, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.25, duration: 0.25, ease: "easeIn" },
          }}
          className="w-[298px] h-[298px] lg:h-[498px] lg:w-[498px] mix-blend-lighten"
        >
          <Image
            src="https://res.cloudinary.com/dy3pcsuui/image/upload/v1742902154/82518521759_an3zrx.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
