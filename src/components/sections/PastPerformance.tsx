"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { CASE_STUDIES } from "@/data/case-studies";

const AnimatedCounter = ({
  from,
  to,
  label,
}: {
  from: number;
  to: number;
  label: string;
}) => {
  const [count, setCount] = useState(from);

  motion.useMotionValueEvent = motion.useMotionValueEvent || (() => {});

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => {
          let current = from;
          const interval = setInterval(() => {
            if (current < to) {
              current += Math.ceil((to - from) / 60);
              setCount(Math.min(current, to));
            } else {
              clearInterval(interval);
            }
          }, 30);
        }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-accent mb-2"
      >
        {count}%
      </motion.div>
      <p className="text-small text-text-light">{label}</p>
    </div>
  );
};

export const PastPerformance = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(
    CASE_STUDIES[0].id
  );

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

  const selectedStudy = CASE_STUDIES.find((c) => c.id === selectedCase);

  return (
    <section id="performance" className="py-section bg-navy-800 relative overflow-hidden">
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
              PROVEN IMPACT
            </span>
            <div className="h-1 w-12 bg-blue-accent" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-h2 font-display font-bold text-text-light mb-6"
          >
            Proven Results. Trusted Missions.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-text-light max-w-2xl mx-auto leading-relaxed"
          >
            ATLAS Federal Technologies delivers measurable mission outcomes across
            federal agencies through modernization, automation, cybersecurity, and
            enterprise platform transformation.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {CASE_STUDIES.map((caseStudy) => (
            <motion.button
              key={caseStudy.id}
              variants={itemVariants}
              onClick={() => setSelectedCase(caseStudy.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                selectedCase === caseStudy.id
                  ? "bg-blue-primary border-blue-accent shadow-glow"
                  : "bg-navy-900 border-white/10 hover:border-blue-accent"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-bold text-text-light mb-1">
                {caseStudy.shortName}
              </h3>
              <p className="text-small text-text-light/80">
                {caseStudy.agency}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Case Study Detail */}
        <AnimatePresence mode="wait">
          {selectedStudy && (
            <motion.div
              key={selectedStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Challenge */}
              <Card variant="glass" className="p-8">
                <h3 className="text-h3 font-bold text-blue-accent mb-4">
                  Challenge
                </h3>
                <p className="text-body text-text-light leading-relaxed">
                  {selectedStudy.challenge}
                </p>
              </Card>

              {/* Solution */}
              <Card variant="glass" className="p-8">
                <h3 className="text-h3 font-bold text-blue-accent mb-4">
                  Solution
                </h3>
                <p className="text-body text-text-light leading-relaxed">
                  {selectedStudy.solution}
                </p>
              </Card>

              {/* Impact */}
              <Card variant="glass" className="p-8 flex flex-col">
                <h3 className="text-h3 font-bold text-blue-accent mb-8">
                  Impact
                </h3>
                <p className="text-body text-text-light leading-relaxed flex-1">
                  {selectedStudy.impact}
                </p>
                {selectedStudy.metrics && (
                  <motion.div
                    className="mt-8 pt-6 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <AnimatedCounter
                      from={selectedStudy.metrics.before}
                      to={selectedStudy.metrics.after}
                      label={selectedStudy.metrics.label}
                    />
                  </motion.div>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
