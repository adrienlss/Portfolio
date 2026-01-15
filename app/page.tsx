"use client";

import { useState, useEffect } from "react";
import TerminalAnimation from "@/components/ui/TerminalAnimation";
import HeroSection from "@/components/sections/HeroSection";
import NavigationHub from "@/components/sections/NavigationHub";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenAnimation = localStorage.getItem("hasSeenTerminalAnimation");
    
    if (!hasSeenAnimation) {
      setShowTerminal(true);
      localStorage.setItem("hasSeenTerminalAnimation", "true");
    }
  }, []);

  useEffect(() => {
    if (showTerminal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showTerminal]);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen pt-16">
      {showTerminal && (
        <TerminalAnimation onComplete={() => setShowTerminal(false)} />
      )}
      {!showTerminal && (
        <>
          <HeroSection />
          <NavigationHub />
          <ContactFooter />
        </>
      )}
    </main>
  );
}
