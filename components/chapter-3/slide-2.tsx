"use client";

import { moveTo } from "@/lib/motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import {
  DoorClosed,
  GanttChartSquare,
  Github,
  Sun,
  Terminal,
} from "lucide-react";

const overviews = [
  {
    title: "An Overview of Composer, XAMPP, and Laravel",
    icon: <GanttChartSquare />,
  },
  {
    title: "Laravel installation",
    icon: <Terminal />,
  },
  {
    title: "Push your laravel project to GitHub",
    icon: <Github />,
  },
  {
    title: "Laravel Route",
    icon: <DoorClosed />,
  },
  {
    title: "Laravel Blade",
    icon: <Sun />,
  },
];

export default function Slide2() {
  return (
    <>
      <motion.div
        className="w-40 h-40 mx-auto"
        initial={moveTo("top")}
        animate={{
          x: 0,
          y: 0,
        }}
        exit={moveTo("top")}
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
        }}
      >
        <Player
          autoplay
          loop
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f63a/lottie.json"
        />
      </motion.div>
      <div>
        <motion.h2
          className="text-5xl mt-7 w-[700px] text-center font-display mb-10"
          initial={moveTo("left")}
          animate={{ x: 0 }}
          exit={moveTo("left")}
          transition={{ duration: 0.5 }}
        >
          Today&apos;s Lesson Overview
        </motion.h2>
      </div>
      <div className="flex justify-center">
        <ul className="space-y-3">
          {overviews.map((item, i) => (
            <motion.li
              variants={{
                hidden: {
                  opacity: 0,
                  y: -50,
                },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.5,
                  },
                }),
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={i}
              className="flex items-center space-x-4 rounded-md border p-4 shadow"
              key={i}
            >
              {item.icon}
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
