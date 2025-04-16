export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* UW CS Webring */}
          <div className="flex items-center gap-2">
            <a href="https://cs.uwatering.com/#silin.ca?nav=prev" className="text-gray-400 hover:text-white transition-colors">←</a>
            <a href="https://cs.uwatering.com/#silin.ca" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cs.uwatering.com/icon.white.svg"
                alt="CS Webring"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <a href="https://cs.uwatering.com/#silin.ca?nav=next" className="text-gray-400 hover:text-white transition-colors">→</a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Silin Raj Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 