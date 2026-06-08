"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(11, 31, 58, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(79, 195, 247, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(79, 195, 247, ${(1 - dist / 150) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [prefersReducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleScroll = () => {
    document
      .querySelector("#about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: "none" }}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-display font-display font-bold mb-4 leading-tight">
            <span className="text-gradient">Secure.</span>
            <br />
            <span className="text-gradient">Scalable.</span>
            <br />
            <span className="text-white">Mission-Driven.</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-body text-text-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-90"
        >
          Delivering intelligent, modernized IT solutions to federal, state, and
          local government agencies, built for mission-critical outcomes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              document
                .querySelector("#capabilities")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Our Capabilities
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={handleScroll}
        aria-label="Scroll to next section"
      >
        <div className="w-10 h-16 border-2 border-blue-accent rounded-full flex items-center justify-center">
          <ArrowDown
            size={20}
            className="text-blue-accent animate-pulse"
          />
        </div>
      </motion.button>
    </section>
  );
};
