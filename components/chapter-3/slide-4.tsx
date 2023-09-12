import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

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
        <Terminal />
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">Laravel installation</p>
          <p className="text-sm mt-0.5">
            composer create-project laravel/laravel{" "}
            <span className="font-semibold">example-app</span>
          </p>
        </div>
      </motion.div>
    </>
  );
}
