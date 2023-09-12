import { moveTo } from "@/lib/motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { GanttChartSquare } from "lucide-react";

export default function Slide3() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0,
            duration: 0.001,
          },
        }}
        transition={{
          delay: 1,
        }}
        className="flex items-center space-x-4 rounded-md border p-4 shadow"
      >
        <GanttChartSquare />
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            An Overview of Composer, XAMPP, and Laravel
          </p>
        </div>
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
