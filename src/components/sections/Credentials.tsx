"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

interface Credential {
  title: string;
  items: string[];
}

const CREDENTIALS: Credential[] = [
  {
    title: "Certifications",
    items: [
      "ISO 9001 (Quality Management System)",
      "ISO 20000 (IT Service Management System)",
      "ISO 27001 (Information Security Management)",
      "CMMC (Cybersecurity Maturity Model Certification)",
    ],
  },
  {
    title: "Contract Vehicles",
    items: [
      "GSA Schedule (Multiple Award Schedule)",
      "OASIS+ (One Acquisition Solution for Integrated Services+)",
      "POLARIS",
    ],
  },
  {
    title: "Partnerships",
    items: ["ServiceNow"],
  },
  {
    title: "Set Asides",
    items: [
      "HUBZone (U.S. Small Business Administration)",
      "Certified DBE (Florida Department of Transportation)",
    ],
  },
];

export const Credentials = () => {
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
    <section id="credentials" className="py-section bg-navy-900 relative overflow-hidden">
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
              TRUSTED. CERTIFIED. CONTRACT READY.
            </span>
            <div className="h-1 w-12 bg-blue-accent" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-h2 font-display font-bold text-text-light mb-6"
          >
            Trusted Credentials & Partnerships
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-text-light max-w-2xl mx-auto leading-relaxed"
          >
            Our certifications, contract vehicles, and strategic partnerships
            demonstrate our commitment to quality, compliance, and mission-driven
            outcomes.
          </motion.p>
        </motion.div>

        {/* Credential Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {CREDENTIALS.map((credential, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variant="glass" hoverable className="h-full p-8">
                <h3 className="text-h3 font-bold text-blue-accent mb-6">
                  {credential.title}
                </h3>
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-accent/10 rounded-lg">
                  <div className="text-2xl">📋</div>
                </div>
                <ul className="space-y-3">
                  {credential.items.map((item, idx) => (
                    <li key={idx} className="text-small text-text-light/90 flex gap-2">
                      <span className="text-blue-accent flex-shrink-0">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-accent/10 to-blue-light/10 border border-blue-accent/20 rounded-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <p className="text-body text-text-light leading-relaxed">
            These credentials reflect our unwavering commitment to{" "}
            <span className="font-semibold text-blue-accent">excellence</span>,{" "}
            <span className="font-semibold text-blue-accent">compliance</span>,
            and delivering secure, reliable solutions for the{" "}
            <span className="font-semibold text-blue-accent">public sector</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
