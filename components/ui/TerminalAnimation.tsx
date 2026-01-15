"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalAnimationProps {
  onComplete: () => void;
}

export default function TerminalAnimation({ onComplete }: TerminalAnimationProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    { text: "$ cd /home", delay: 300 },
    { text: "$ cd /home/adrien", delay: 250 },
    { text: "$ cd /home/adrien/Documents", delay: 300 },
    { text: "$ cd /home/adrien/Documents/Portfolio_Adrien_Lassus", delay: 400 },
    { text: "$ ls -la", delay: 300 },
    { text: "Initializing portfolio...", delay: 400 },
  ];

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(() => {
        onComplete();
      }, 500);
      return;
    }

    const line = lines[currentLine];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < line.text.length) {
        setCurrentText(line.text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentText("");
          setCurrentLine(currentLine + 1);
        }, line.delay);
      }
    }, 25); // Plus rapide : 25ms au lieu de 50ms

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        <div className="w-full max-w-4xl mx-4">
          <div className="bg-black border border-gray-700 rounded-lg p-6 font-mono">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2">
              {lines.slice(0, currentLine).map((line, index) => (
                <div key={index} className="text-green-400">
                  <span className="text-white">adrien@debian</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-gray-400">$ </span>
                  <span className="text-white">{line.text}</span>
                </div>
              ))}
              {currentLine < lines.length && (
                <div className="text-green-400">
                  <span className="text-white">adrien@debian</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-gray-400">$ </span>
                  <span className="text-white">{currentText}</span>
                  <span className={showCursor ? "opacity-100 text-green-400" : "opacity-0"}>▊</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
