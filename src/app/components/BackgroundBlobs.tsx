import { motion } from "motion/react";

export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Noise overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Blob 1 — teal top-right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(138,205,215,0.18) 0%, rgba(138,205,215,0) 70%)",
          filter: "blur(70px)",
          top: "-5%",
          left: "55%",
        }}
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 — pink middle-left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(255,192,217,0.14) 0%, rgba(255,192,217,0) 70%)",
          filter: "blur(90px)",
          top: "30%",
          right: "5%",
        }}
        animate={{ x: [0, -50, 0], y: [0, 80, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 3 — hot pink bottom */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,144,188,0.12) 0%, rgba(255,144,188,0) 70%)",
          filter: "blur(80px)",
          bottom: "10%",
          left: "5%",
        }}
        animate={{ x: [0, 60, 0], y: [0, -70, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 4 — teal center-left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          background: "radial-gradient(circle, rgba(138,205,215,0.1) 0%, rgba(138,205,215,0) 70%)",
          filter: "blur(100px)",
          top: "60%",
          left: "25%",
        }}
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 5 — light pink top-left accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          background: "radial-gradient(circle, rgba(255,192,217,0.16) 0%, rgba(255,192,217,0) 70%)",
          filter: "blur(60px)",
          top: "8%",
          left: "5%",
        }}
        animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 6 — center deep */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 400,
          background: "radial-gradient(ellipse, rgba(255,144,188,0.06) 0%, rgba(138,205,215,0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
          top: "45%",
          left: "30%",
        }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
