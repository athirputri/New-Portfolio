import { motion } from "motion/react";

const shapes = [
  { size: 36, color: "#8ACDD7", top: "12%", left: "8%", duration: 14, delay: 0, type: "circle" },
  { size: 24, color: "#FF90BC", top: "22%", left: "78%", duration: 17, delay: 1.5, type: "blob1" },
  { size: 44, color: "#FFC0D9", top: "48%", left: "6%", duration: 19, delay: 0.8, type: "blob2" },
  { size: 30, color: "#8ACDD7", top: "68%", left: "88%", duration: 15, delay: 2.5, type: "circle" },
  { size: 52, color: "#FF90BC", top: "82%", left: "18%", duration: 21, delay: 1.2, type: "star" },
  { size: 22, color: "#8ACDD7", top: "38%", left: "55%", duration: 16, delay: 3.0, type: "blob1" },
  { size: 40, color: "#FFC0D9", top: "58%", left: "70%", duration: 20, delay: 0.3, type: "blob2" },
  { size: 28, color: "#FF90BC", top: "18%", left: "93%", duration: 18, delay: 2.0, type: "circle" },
  { size: 18, color: "#8ACDD7", top: "75%", left: "45%", duration: 23, delay: 0.6, type: "star" },
  { size: 34, color: "#FFC0D9", top: "5%", left: "40%", duration: 13, delay: 1.8, type: "blob1" },
];

function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L13.8 8.6H21L15.1 12.9L17.2 19.5L12 15.6L6.8 19.5L8.9 12.9L3 8.6H10.2L12 2Z"
        fill={color}
        opacity="0.25"
      />
    </svg>
  );
}

export function FloatingObjects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -28, 0, 10, 0],
            x: [0, 15, 0, -10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="w-full h-full rounded-full"
              style={{ backgroundColor: shape.color, opacity: 0.18 }}
            />
          )}
          {shape.type === "blob1" && (
            <div
              className="w-full h-full"
              style={{
                backgroundColor: shape.color,
                opacity: 0.16,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            />
          )}
          {shape.type === "blob2" && (
            <div
              className="w-full h-full"
              style={{
                backgroundColor: shape.color,
                opacity: 0.15,
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            />
          )}
          {shape.type === "star" && (
            <Star size={shape.size} color={shape.color} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
