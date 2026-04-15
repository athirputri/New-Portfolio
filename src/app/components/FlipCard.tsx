import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface FlipCardProps {
  emoji?: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  focus: string[];
  cta: string;
  ctaHref?: string;
  accentColor: string;
  delay?: number;
}

export function FlipCard({
  emoji = "✨",
  title,
  subtitle,
  description,
  tools,
  focus,
  cta,
  ctaHref = "#",
  accentColor,
  delay = 0,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="h-[340px] w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full backface-hidden rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/40"
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(16px)",
            boxShadow: `0 8px 32px ${accentColor}22`,
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: accentColor }}
          />

          <div>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
              style={{ background: `${accentColor}22` }}
            >
              {emoji}
            </div>
            <h3
              className="mb-2"
              style={{ fontSize: "1.2rem", fontWeight: 700, color: "#2d3748" }}
            >
              {title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#718096", fontStyle: "italic" }}>
              "{subtitle}"
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: accentColor }}
            />
            <span style={{ fontSize: "0.8rem", color: "#718096" }}>
              Hover to explore
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden rounded-3xl p-8 flex flex-col justify-between overflow-hidden"
          style={{
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, ${accentColor}ee 0%, ${accentColor}bb 100%)`,
          }}
        >
          <div>
            <h3 className="mb-3 text-white" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
              {title}
            </h3>
            <p className="text-white/90 mb-5" style={{ fontSize: "0.85rem" }}>
              {description}
            </p>

            <div className="mb-3">
              <p className="text-white/70 mb-2" style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-white"
                    style={{ background: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/70 mb-2" style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focus.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 rounded-full text-white"
                    style={{ background: "rgba(255,255,255,0.15)", fontSize: "0.75rem" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            style={{
              background: "white",
              color: accentColor,
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
            {cta}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
