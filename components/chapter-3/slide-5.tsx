import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Slide4() {
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
          delay: 0.5,
        }}
        className="flex items-center space-x-4 rounded-md border p-4 shadow flex-shrink-0"
      >
        <Github />
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            Push your laravel project to GitHub
          </p>
          <p className="text-sm mt-0.5">
            Refer to{" "}
            <Link href="" className="font-semibold">
              this link
            </Link>{" "}
            for GitHub project push instructions
          </p>
        </div>
      </motion.div>
    </>
  );
}
