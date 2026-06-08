import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "gradient";
  hoverable?: boolean;
}

export const Card = ({
  children,
  className,
  variant = "glass",
  hoverable = false,
}: CardProps) => {
  const baseStyles =
    "rounded-lg p-6 transition-all duration-300 border";

  const variantStyles = {
    glass: "glass bg-white/5 border-white/10",
    solid: "bg-navy-800 border-white/10",
    gradient: "gradient-mesh border-blue-accent/20",
  };

  const hoverStyles = hoverable
    ? "hover:shadow-glow hover:border-blue-accent/50 hover:scale-105"
    : "";

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        className
      )}
    >
      {children}
    </div>
  );
};
