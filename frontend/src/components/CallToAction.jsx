import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.p
      className="text-base sm:text-lg text-slate-300/90 max-w-xl mx-auto font-light leading-relaxed tracking-wide"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
    >
      Wujudkan cenderamata kustom bernilai estetika tinggi bersama{" "}
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
        Diameter Souvenir.
      </span>
    </motion.p>
  );
};

export default CallToAction;
