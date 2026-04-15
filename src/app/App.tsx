import { motion } from "motion/react";
import { FlipCard } from "./components/FlipCard";
import { BackgroundBlobs } from "./components/BackgroundBlobs";
import { FloatingObjects } from "./components/FloatingObjects";
import { RotatingRole } from "./components/RotatingRole";
import { Navbar } from "./components/Navbar";
import { SkillCard } from "./components/SkillCard";
import { Mail, Linkedin, Star, Award, Users, Code2, ChevronDown } from "lucide-react";

export default function App() {
  const projects = [
    {
      emoji: "📚",
      title: "Smart Learning App",
      subtitle: "Making studying feel less boring.",
      description:
        "Designed a modern learning platform focused on user engagement and simplicity. Built with accessibility and delight in mind.",
      tools: ["Figma", "FigJam"],
      focus: ["UI/UX", "User Flow", "Prototyping"],
      cta: "View Case Study",
      ctaHref: "#",
      accentColor: "#8ACDD7",
    },
    {
      emoji: "🛍️",
      title: "E-Commerce Website",
      subtitle: "Clean design. Better shopping experience.",
      description:
        "Built a responsive web design with a focus on usability and conversion. Every micro-interaction was crafted intentionally.",
      tools: ["Figma", "HTML", "CSS"],
      focus: ["Web Design", "Frontend"],
      cta: "Live Preview",
      ctaHref: "#",
      accentColor: "#FF90BC",
    },
    {
      emoji: "🌟",
      title: "Portfolio Website",
      subtitle: "Personal branding, but make it impactful.",
      description:
        "Designed and developed a personal portfolio with interactive elements like flip cards, animated backgrounds, and smooth transitions.",
      tools: ["Figma", "HTML", "CSS", "JS"],
      focus: ["UI/UX", "Development"],
      cta: "Explore Project",
      ctaHref: "#",
      accentColor: "#FFC0D9",
    },
  ];

  const skills = [
    {
      emoji: "🎨",
      title: "UI/UX Design",
      description:
        "Crafting intuitive and user-centered designs that solve real problems with clarity and elegance.",
      accentColor: "#FF90BC",
    },
    {
      emoji: "⚡",
      title: "Figma",
      description:
        "Creating wireframes, prototypes, and high-fidelity designs efficiently with a systematic design approach.",
      accentColor: "#8ACDD7",
    },
    {
      emoji: "🌐",
      title: "Web Design",
      description:
        "Designing modern, responsive, and visually engaging websites that look great on every screen.",
      accentColor: "#FFC0D9",
    },
    {
      emoji: "💻",
      title: "Frontend Coding",
      description:
        "Turning designs into real websites using HTML, CSS, and JavaScript — bridging design and dev.",
      accentColor: "#FF90BC",
    },
  ];

  const experiences = [
    {
      role: "Ms. Favorite Ambassador",
      organization: "Ambassador Program",
      period: "2024 – 2025",
      description:
        "Representing the organization at various events, managing social media presence, and building meaningful community engagement.",
      icon: <Star className="w-5 h-5 text-white" />,
      accentColor: "#FF90BC",
      tags: ["Community", "Social Media", "Events"],
    },
    {
      role: "Intern — UI/UX Designer",
      organization: "Lunar Interactive",
      period: "2025",
      description:
        "Internship at Lunar Interactive working on interactive web projects, collaborating with the design and dev team to deliver pixel-perfect interfaces.",
      icon: <Code2 className="w-5 h-5 text-white" />,
      accentColor: "#8ACDD7",
      tags: ["UI/UX", "Figma", "Adobe Illustrator", "Collaboration"],
    },
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, label: "Projects Completed", value: "10+" },
    { icon: <Users className="w-6 h-6" />, label: "Collaborations", value: "5+" },
    { icon: <Star className="w-6 h-6" />, label: "Case Studies", value: "8+" },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9E0] relative">
      <BackgroundBlobs />
      <FloatingObjects />
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section
        id="home"
        className="min-h-screen flex items-center relative z-10 pt-24 pb-16"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Greeting chip */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#FF90BC]/30"
                style={{ background: "rgba(255,144,188,0.1)" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-base">👋</span>
                <span style={{ fontSize: "0.85rem", color: "#FF90BC", fontWeight: 600 }}>
                  Hi, there! I am,
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="mb-3"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  background: "linear-gradient(135deg, #FF90BC 0%, #FFC0D9 50%, #8ACDD7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                PUTRI ATHIRA
                <br />
                ZAHRA
              </motion.h1>

              {/* Rotating role */}
              <motion.div
                className="mb-6"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "#718096" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <RotatingRole />
              </motion.div>

              {/* Headline */}
              <motion.p
                className="mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#2d3748",
                  lineHeight: 1.3,
                  maxWidth: "560px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Designing Digital Experiences That Actually Work 🚀
              </motion.p>

              {/* Subheadline */}
              <motion.p
                className="mb-8"
                style={{
                  fontSize: "1rem",
                  color: "#718096",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                I turn ideas into clean, modern, and user-friendly digital products
                using Figma and code — not just beautiful, but{" "}
                <em style={{ color: "#FF90BC", fontStyle: "normal", fontWeight: 600 }}>
                  actually usable
                </em>
                .
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <a
                  href="#projects"
                  className="px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #FF90BC, #FFC0D9)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    boxShadow: "0 8px 24px rgba(255,144,188,0.4)",
                  }}
                >
                  View My Work ✨
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-full border-2 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                  style={{
                    borderColor: "#FF90BC",
                    color: "#FF90BC",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    background: "transparent",
                  }}
                >
                  Hire Me 💼
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="flex flex-col items-center mt-20"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span style={{ fontSize: "0.75rem", color: "#718096", marginBottom: "6px" }}>
              Scroll to explore
            </span>
            <ChevronDown className="w-5 h-5 text-[#FF90BC]" />
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ME SECTION ─── */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            {/* Left decorative column */}
            <div className="flex-shrink-0 relative w-full lg:w-[380px]">
              <div
                className="relative rounded-3xl overflow-hidden p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(255,144,188,0.15) 0%, rgba(138,205,215,0.15) 100%)",
                  border: "1px solid rgba(255,144,188,0.25)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {achievements.map((item, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.6)" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                    >
                      <div className="flex justify-center mb-1 text-[#FF90BC]">{item.icon}</div>
                      <p style={{ fontSize: "1.4rem", fontWeight: 800, color: "#FF90BC" }}>
                        {item.value}
                      </p>
                      <p style={{ fontSize: "0.68rem", color: "#718096", lineHeight: 1.3 }}>
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,144,188,0.2)" }}
                >
                  <p style={{ fontSize: "0.85rem", color: "#2d3748", lineHeight: 1.6, fontStyle: "italic" }}>
                    "Design is not just what it looks like — design is how it works."
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#FF90BC", fontWeight: 600, marginTop: "8px" }}>
                    — Steve Jobs
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Text */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
                  style={{ background: "rgba(255,144,188,0.12)", border: "1px solid rgba(255,144,188,0.25)" }}
                >
                  <span style={{ fontSize: "0.78rem", color: "#FF90BC", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    About Me
                  </span>
                </div>

                <h2
                  className="mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "#2d3748",
                    lineHeight: 1.2,
                  }}
                >
                  Passionate about{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #FF90BC, #8ACDD7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    design & code
                  </span>
                </h2>

                <p className="mb-4" style={{ fontSize: "1rem", color: "#4a5568", lineHeight: 1.8 }}>
                  Hi! I'm a passionate{" "}
                  <strong style={{ color: "#FF90BC" }}>UI/UX Designer</strong> and aspiring{" "}
                  <strong style={{ color: "#8ACDD7" }}>Frontend Developer</strong> who loves
                  turning ideas into interactive digital experiences.
                </p>

                <p className="mb-4" style={{ fontSize: "1rem", color: "#4a5568", lineHeight: 1.8 }}>
                  I'm comfortable designing with Figma, understanding user flows, and turning
                  designs into clean, responsive web interfaces. My focus isn't just
                  "looks good" — it needs to{" "}
                  <span style={{ color: "#FF90BC", fontWeight: 600 }}>feel good to use</span>.
                </p>

                <p style={{ fontSize: "1rem", color: "#4a5568", lineHeight: 1.8 }}>
                  Currently exploring the intersection between design and code — because{" "}
                  <span style={{ fontWeight: 600, color: "#2d3748" }}>
                    great products need both
                  </span>
                  .
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["Figma", "User Research", "Prototyping", "HTML/CSS", "React", "Creative"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full"
                        style={{
                          background: "rgba(138,205,215,0.15)",
                          border: "1px solid rgba(138,205,215,0.35)",
                          color: "#2d3748",
                          fontSize: "0.82rem",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SKILLS SECTION ─── */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(255,192,217,0.08) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(138,205,215,0.12)", border: "1px solid rgba(138,205,215,0.3)" }}
            >
              <span style={{ fontSize: "0.78rem", color: "#8ACDD7", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                What I Do Best
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#2d3748",
              }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8ACDD7, #FF90BC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Core Skills
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <SkillCard key={skill.title} {...skill} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS SECTION ─── */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(255,144,188,0.12)", border: "1px solid rgba(255,144,188,0.25)" }}
            >
              <span style={{ fontSize: "0.78rem", color: "#FF90BC", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Selected Projects
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#2d3748",
              }}
            >
              Things I've{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF90BC, #FFC0D9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built & Designed
              </span>
            </h2>
            <p className="mt-3" style={{ fontSize: "0.95rem", color: "#718096" }}>
              Hover or tap the cards to see project details
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FlipCard key={project.title} {...project} delay={index * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE SECTION ─── */}
      <section id="experience" className="py-24 px-6 relative z-10">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(138,205,215,0.07) 50%, transparent 100%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(255,192,217,0.15)", border: "1px solid rgba(255,192,217,0.4)" }}
            >
              <span style={{ fontSize: "0.78rem", color: "#FF90BC", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Experience & Achievements
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#2d3748",
              }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFC0D9, #FF90BC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Journey
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, #FF90BC44, #8ACDD744)" }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.organization}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white z-10 top-6 md:top-8"
                    style={{ background: exp.accentColor }}
                  />

                  <div className="hidden md:block flex-1" />

                  <div className="flex-1 pl-14 md:pl-0">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-3xl p-7 border border-white/50"
                      style={{
                        background: "rgba(255,255,255,0.65)",
                        backdropFilter: "blur(16px)",
                        boxShadow: `0 8px 32px ${exp.accentColor}18`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${exp.accentColor}, ${exp.accentColor}cc)` }}
                        >
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h3
                            style={{ fontSize: "1.05rem", fontWeight: 700, color: "#2d3748" }}
                            className="mb-0.5"
                          >
                            {exp.role}
                          </h3>
                          <p style={{ fontSize: "0.9rem", color: exp.accentColor, fontWeight: 600 }}>
                            {exp.organization}
                          </p>
                          <p className="mt-1 mb-3" style={{ fontSize: "0.8rem", color: "#a0aec0" }}>
                            {exp.period}
                          </p>
                          <p style={{ fontSize: "0.9rem", color: "#4a5568", lineHeight: 1.6 }}>
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full"
                                style={{
                                  background: `${exp.accentColor}18`,
                                  color: exp.accentColor,
                                  fontSize: "0.75rem",
                                  fontWeight: 600,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {[
              { emoji: "🤝", text: "Collaborated in design and development projects within a team environment" },
              { emoji: "📐", text: "Created multiple UI/UX case studies and responsive web designs" },
              { emoji: "🚀", text: "Actively improving skills in both design tools and frontend development" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5 flex items-start gap-3 border border-white/50"
                style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)" }}
              >
                <span style={{ fontSize: "1.5rem" }}>{item.emoji}</span>
                <p style={{ fontSize: "0.88rem", color: "#4a5568", lineHeight: 1.6 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA SECTION ─── */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden border border-white/40"
              style={{
                background: "linear-gradient(135deg, rgba(255,144,188,0.18) 0%, rgba(138,205,215,0.15) 100%)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 24px 80px rgba(255,144,188,0.2)",
              }}
            >
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,144,188,0.25) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <div
                className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(138,205,215,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                  style={{ background: "rgba(255,144,188,0.15)", border: "1px solid rgba(255,144,188,0.3)" }}
                >
                  <span style={{ fontSize: "0.78rem", color: "#FF90BC", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Open to Opportunities
                  </span>
                </div>

                <h2
                  className="mb-4"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 800,
                    color: "#2d3748",
                    lineHeight: 1.2,
                  }}
                >
                  Let's Work Together ✨
                </h2>

                <p style={{ fontSize: "1rem", color: "#4a5568", maxWidth: "480px", margin: "0 auto 12px" }}>
                  Got an idea, project, or opportunity? Let's build something amazing together.
                </p>

                <p style={{ fontSize: "0.92rem", color: "#718096", maxWidth: "400px", margin: "0 auto 40px" }}>
                  I'm open to internships, freelance, or full-time opportunities.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="mailto:putriathiraaww@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #FF90BC, #FFC0D9)",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      boxShadow: "0 12px 32px rgba(255,144,188,0.4)",
                    }}
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </a>
                  <a
                    href="https://www.linkedin.com/in/putri-athira-zahra-15835a32b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:scale-105 active:scale-95"
                    style={{
                      borderColor: "#8ACDD7",
                      color: "#8ACDD7",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>

                <p className="mt-6" style={{ fontSize: "0.85rem", color: "#a0aec0" }}>
                  Or just say hi 👋
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-6 px-6 relative z-10" style={{ background: "#F9F9E0" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p style={{ fontSize: "0.82rem", color: "#a0aec0" }}>
            © 2026{" "}
            <span style={{ color: "#FF90BC", fontWeight: 600 }}>Putri Athira Zahra</span>
            . All rights reserved.
          </p>
          <p style={{ fontSize: "0.82rem", color: "#a0aec0" }}>
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
