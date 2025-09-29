import { motion } from 'framer-motion';
import { useState } from 'react';
import './DownloadResume.css';
import resumePdf from '../../assets/Silin.pdf';

const DownloadResume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [particles, setParticles] = useState([]);

  // Create particles on download
  const createParticles = () => {
    const particleCount = 12;
    const newParticles = [...Array(particleCount)].map((_, i) => ({
      id: i,
      angle: (i * 360) / particleCount,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    createParticles();
    
    // Open PDF in a new tab instead of downloading
    window.open(resumePdf, '_blank');

    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className="relative inline-block">
      {/* Particle Effects */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-blue-500 rounded-full particle"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 0],
            x: [0, Math.cos(particle.angle * (Math.PI / 180)) * 100],
            y: [0, Math.sin(particle.angle * (Math.PI / 180)) * 100],
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Download Button */}
      <motion.button
        onClick={handleDownload}
        className={`relative px-6 py-3 border border-blue-500/50 text-blue-500 rounded font-medium transition-all duration-200 ${
          isDownloading ? 'download-success' : ''
        }`}
        whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 15px rgba(59,130,246,0.2)', backgroundColor: 'rgba(59,130,246,0.1)' }}
        whileTap={{ scale: 0.95 }}
        disabled={isDownloading}
      >
        <motion.div
          className="flex items-center gap-2"
          animate={isDownloading ? { y: [-20, 0] } : {}}
        >
          {isDownloading ? (
            <>
              <DownloadIcon className="animate-bounce" />
              Downloading...
            </>
          ) : (
            <>
              <DownloadIcon />
              Resume
            </>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

// Download Icon Component
const DownloadIcon = ({ className = "" }) => (
  <svg 
    className={`w-5 h-5 ${className}`}
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

export default DownloadResume;