"use client";
import { motion } from "framer-motion";

const LoadingSpinner = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-black/80">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <motion.div
            className="h-16 w-16 rounded-full border-4 border-gray-200 dark:border-gray-700"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-t-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-medium text-gray-600 dark:text-gray-300"
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  );
};

// Simple inline spinner for smaller components
export const InlineSpinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <div className={`${sizeClasses[size]} rounded-full border-2 border-gray-200 dark:border-gray-700`} />
      <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-2 border-transparent border-t-primary`} />
    </motion.div>
  );
};

export default LoadingSpinner;
