"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { CAPABILITIES } from "@/data/capabilities";
import { X } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Capabilities = () => {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // For mobile, show as accordion
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="capabilities" className="py-section bg-navy-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 gradient-mesh opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-blue-accent" />
            <span className="text-blue-accent text-small font-semibold">
              OUR EXPERTISE
            </span>
            <div className="h-1 w-12 bg-blue-accent" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-h2 font-display font-bold text-text-light mb-6"
          >
            Our Capabilities
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-text-light max-w-2xl mx-auto leading-relaxed"
          >
            Six core capabilities. One integrated approach. Delivering secure,
            scalable, and mission-driven solutions for government agencies.
          </motion.p>
        </motion.div>

        {/* Desktop: Orbit/Hub View */}
        {!isMobile ? (
          <motion.div
            ref={containerRef}
            className="relative w-full flex items-center justify-center py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Central Hub */}
            <motion.div
              variants={itemVariants}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-blue-accent to-blue-light flex items-center justify-center shadow-glow z-20 cursor-pointer hover:shadow-[0_0_40px_rgba(46,111,214,0.6)]"
              onHoverStart={() => setSelectedCapability(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900">AFT</div>
              </div>
            </motion.div>

            {/* Orbiting Capability Nodes */}
            <div className="w-full h-96 flex items-center justify-center">
              {CAPABILITIES.map((capability, index) => {
                const angle = (index / CAPABILITIES.length) * Math.PI * 2;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={capability.id}
                    className="absolute"
                    animate={
                      !prefersReducedMotion
                        ? {
                            x: x,
                            y: y,
                          }
                        : {}
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.button
                      onClick={() => setSelectedCapability(capability.id)}
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-center text-xs font-semibold transition-all duration-300 ${
                        selectedCapability === capability.id
                          ? "bg-blue-primary shadow-glow scale-110 text-white"
                          : "bg-navy-800 border-2 border-blue-accent/50 text-blue-accent hover:bg-blue-primary hover:text-white hover:shadow-glow"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="px-2 leading-tight">
                        {capability.title
                          .split(" ")
                          .slice(0, 2)
                          .join("\n")}
                      </span>
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : null}

        {/* Mobile: Accordion View */}
        {isMobile ? (
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {CAPABILITIES.map((capability) => (
              <motion.div
                key={capability.id}
                variants={itemVariants}
                className="bg-navy-800 border border-blue-accent/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedId(
                      expandedId === capability.id ? null : capability.id
                    )
                  }
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-navy-700 transition-colors"
                >
                  <h3 className="font-semibold text-text-light">
                    {capability.title}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: expandedId === capability.id ? 180 : 0,
                    }}
                  >
                    <X
                      size={20}
                      className="text-blue-accent transform rotate-45"
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedId === capability.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-blue-accent/20"
                    >
                      <div className="p-4 space-y-3">
                        <p className="text-text-light text-small">
                          {capability.description}
                        </p>
                        <ul className="space-y-2">
                          {capability.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="text-text-light/80 text-small flex gap-2"
                            >
                              <span className="text-blue-accent flex-shrink-0">
                                •
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        ) : null}

        {/* Detail Panel for Desktop */}
        <AnimatePresence>
          {selectedCapability && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16"
            >
              <Card variant="glass" className="p-8">
                {CAPABILITIES.map((capability) => {
                  if (capability.id !== selectedCapability) return null;
                  return (
                    <div key={capability.id}>
                      <h3 className="text-h3 font-bold text-text-light mb-4">
                        {capability.title}
                      </h3>
                      <p className="text-body text-text-light/90 mb-6">
                        {capability.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {capability.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="text-text-light flex gap-3 items-start"
                          >
                            <span className="text-blue-accent flex-shrink-0 mt-1">
                              ✓
                            </span>
                            <span className="text-small">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
