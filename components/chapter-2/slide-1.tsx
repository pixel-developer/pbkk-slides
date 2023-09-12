import { moveTo } from "@/lib/motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function Slide1() {
  return (
    <>
      <motion.div
        className="w-80 h-80 mx-auto"
        initial={moveTo("top")}
        animate={{
          x: 0,
          y: 0,
        }}
        exit={moveTo("top")}
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
      >
        <Player
          autoplay
          loop
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/lottie.json"
        />
      </motion.div>
      <motion.h1
        className="text-5xl mt-7 w-[500px] text-center font-display"
        initial={moveTo("bottom")}
        animate={{ x: 0, y: 0 }}
        exit={moveTo("bottom")}
        transition={{ duration: 0.75 }}
      >
        Chapter 3 — Laravel Route & Blade
      </motion.h1>
    </>
  );
}
