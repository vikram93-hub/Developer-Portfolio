"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);

  }, []);


  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
        >

          <div className="text-center">

            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-black text-cyan-400"
            >
              Vikram
            </motion.h1>


            <p className="mt-4 text-slate-400">
              Full Stack Developer
            </p>


            <div className="mt-8 flex justify-center gap-2">

              <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400"></span>

              <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400 [animation-delay:150ms]"></span>

              <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400 [animation-delay:300ms]"></span>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}