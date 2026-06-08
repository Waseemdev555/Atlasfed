import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-accent disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-primary hover:bg-blue-accent text-white shadow-glow hover:shadow-[0_0_30px_rgba(46,111,214,0.5)]",
        secondary:
          "bg-transparent border-2 border-text-light text-text-light hover:border-blue-accent hover:text-blue-accent",
        ghost:
          "text-text-light hover:text-blue-accent transition-colors",
      },
      size: {
        sm: "px-6 py-2 text-small",
        md: "px-8 py-3 text-body",
        lg: "px-10 py-4 text-body",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
