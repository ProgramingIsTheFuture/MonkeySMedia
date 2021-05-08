import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <motion.div
        style={{
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "space-around",
        }}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={{
            display: "block",
            width: "1rem",
            height: "1rem",
            backgroundColor: "black",
            borderRadius: "0.25rem",
          }}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={{
            display: "block",
            width: "1rem",
            height: "1rem",
            backgroundColor: "black",
            borderRadius: "0.25rem",
          }}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={{
            display: "block",
            width: "1rem",
            height: "1rem",
            backgroundColor: "black",
            borderRadius: "0.25rem",
          }}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
