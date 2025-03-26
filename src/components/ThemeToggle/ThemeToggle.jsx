import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle = ({ isDark, toggleTheme }) => {

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-opacity-20 backdrop-blur-sm z-50 border border-[rgba(255,255,255,0.1)]"
      whileHover={{ 
        scale: 1.1,
        boxShadow: isDark 
          ? "0 0 20px rgba(0, 216, 255, 0.3)"
          : "0 0 20px rgba(255, 191, 0, 0.3)"
      }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: isDark 
          ? "rgba(0, 0, 0, 0.3)"
          : "rgba(255, 255, 255, 0.3)"
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <svg 
              className="w-6 h-6 text-[#00d8ff]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
              />
            </svg>
          ) : (
            <svg 
              className="w-6 h-6 text-yellow-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;