"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Shield, Zap, Target } from "lucide-react";
import aboutImage from "../../../images/Built for the Mission.png";

const FEATURES = [
  {
    icon: Shield,
    title: "Secure",
    description: "Protecting what matters most.",
  },
  {
    icon: Zap,
    title: "Scalable",
    description: "Built to grow with your mission.",
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Focused on delivering measurable impact.",
  },
];

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="py-section bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Image Card */}
          <motion.div variants={itemVariants}>
            <Card variant="glass" hoverable className="overflow-hidden">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-glow border border-white/10">
                <div className="absolute inset-0 bg-blue-accent/10" />
                <Image
                  src={aboutImage}
                  alt="Atlas Federal Technologies team working on a mission"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-left">
                  <p className="text-small uppercase tracking-[0.35em] text-blue-accent/90 mb-2">
                    Built for the Mission
                  </p>
                  <p className="text-text-light max-w-xs leading-relaxed">
                    Secure transformation work for public sector operations.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants}>
            {/* Heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-blue-accent" />
                <span className="text-blue-accent text-small font-semibold">
                  ABOUT US
                </span>
              </div>
              <h2 className="text-h2 font-display font-bold text-text-light mb-6">
                Built for the Mission
              </h2>
            </motion.div>

            {/* Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 mb-10">
              <p className="text-body text-text-light leading-relaxed">
                Atlas Federal Technologies is an IT consulting firm headquartered
                in Miami, Florida, dedicated to supporting federal, state, and
                local government agencies nationwide. We deliver secure, scalable,
                and mission-driven technology solutions that enhance public sector
                operations and streamline organizational workflows, laying the
                foundation for building trusted, long-term partnerships.
              </p>
              <p className="text-body text-text-light leading-relaxed">
                We are committed to driving economic growth in underserved communities
                while supporting critical government missions. Our team excels at
                solving complex challenges by streamlining processes, increasing
                efficiency, and reducing costs through intelligent automation and
                modern technology.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              className="grid grid-cols-1 gap-4"
              variants={containerVariants}
            >
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-accent/10 flex items-center justify-center">
                      <Icon className="text-blue-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-small text-text-light/80">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
