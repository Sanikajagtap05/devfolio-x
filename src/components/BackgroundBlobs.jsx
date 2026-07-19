import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "#4F46E5",
          opacity: 0.25,
          filter: "blur(100px)",
          top: "5%",
          left: "5%",
        }}
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#06B6D4",
          opacity: 0.25,
          filter: "blur(120px)",
          bottom: "5%",
          right: "5%",
        }}
      />
    </>
  );
}