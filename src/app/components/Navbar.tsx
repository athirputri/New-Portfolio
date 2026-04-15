import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto"
    >
      {/* Desktop Navbar */}
      <div
        className="hidden md:flex items-center rounded-full px-6 py-3 border border-white/40"
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(255, 144, 188, 0.12)",
        }}
      >
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative block px-4 py-2 rounded-full"
                  onClick={() => setActiveSection(item.href.substring(1))}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "linear-gradient(135deg, #FF90BC, #FFC0D9)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <motion.span
                    className="relative z-10 transition-colors"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "white" : "#2d3748",
                    }}
                    animate={{ scale: isActive ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/40"
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 24px rgba(255, 144, 188, 0.15)",
          }}
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-[#FF90BC]" />
          ) : (
            <Menu className="w-5 h-5 text-[#FF90BC]" />
          )}
          <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d3748" }}>Menu</span>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-14 left-1/2 -translate-x-1/2 w-48 rounded-2xl p-2 border border-white/40"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(255, 144, 188, 0.2)",
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 rounded-xl mb-1 last:mb-0 transition-all"
                    style={{
                      background: isActive ? "linear-gradient(135deg, #FF90BC, #FFC0D9)" : "transparent",
                      color: isActive ? "white" : "#2d3748",
                      fontSize: "0.875rem",
                      fontWeight: isActive ? 600 : 500,
                    }}
                    onClick={() => {
                      setActiveSection(item.href.substring(1));
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
