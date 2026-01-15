import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50",
    secondary: "bg-gray-700 text-white hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-700/50",
    outline: "border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white",
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    return <Link href={href}>{buttonContent}</Link>;
  }

  return (
    <button onClick={onClick} className="border-none bg-transparent p-0">
      {buttonContent}
    </button>
  );
}
