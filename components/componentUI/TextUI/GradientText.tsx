"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "inline-block bg-gradient-to-br from-blue-400 via-[#254A76] to-[#254A76] bg-clip-text text-transparent h-16 ",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
