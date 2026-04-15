import { motion } from "motion/react";
import { useState } from "react";

interface SkillCardProps {
  emoji: string;
  title: string;
  description: string;
  accentColor: string;
  delay?: number;
}

export function SkillCard({ emoji, title, description, accentColor, delay = 0 }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl p-7 cursor-pointer overflow-hidden border border-white/50 transition-all duration-300"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${accentColor}22 0%, ${accentColor}11 100%)`
          : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(16px)",
        boxShadow: hovered
          ? `0 16px 48px ${accentColor}30, 0 0 0 1px ${accentColor}44`
          : "0 4px 24px rgba(0,0,0,0.06)",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
        style={{ background: accentColor }}
        animate={{ opacity: hovered ? 1 : 0.4 }}
        transition={{ duration: 0.3 }}
      />

      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
        style={{
          background: hovered ? `${accentColor}33` : `${accentColor}18`,
        }}
      >
        {emoji}
      </div>

      <h3
        className="mb-3"
        style={{ fontSize: "1.1rem", fontWeight: 700, color: "#2d3748" }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.88rem", color: "#718096", lineHeight: 1.6 }}>
        {description}
      </p>

      <motion.div
        className="absolute bottom-6 right-6 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: `${accentColor}22` }}
        animate={{ scale: hovered ? 1 : 0.8, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <span style={{ fontSize: "1rem" }}>→</span>
      </motion.div>
    </motion.div>
  );
}
