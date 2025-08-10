import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [loadedGifs, setLoadedGifs] = useState({});

  // Preload GIFs on component mount
  useEffect(() => {
    const preloadGif = (src, key) => {
      const img = new Image();
      img.onload = () => {
        setLoadedGifs(prev => ({ ...prev, [key]: true }));
      };
      img.src = src;
    };

    // Start preloading immediately
    preloadGif("/viq.gif", "viq");
    preloadGif("/Moosic.gif", "moosic");
  }, []);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CompareIQ - Insurance Comparison Tool */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">CompareIQ - Insurance Comparison Tool</h3>
              <p className="text-gray-400 mb-4">
                Next.js/Python platform that cut quote comparison by hours; AI document processing with Gemini reached 99%+ accuracy across providers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "React", "TypeScript", "Python", "Google Gemini API", "AI Automation"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="text-xs text-gray-400/80 italic mt-2">
                Internal company tool — no public demo available.
              </div>
            </div>

            {/* AI Appointment Scheduling System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">AI Appointment Scheduling System</h3>
              <p className="text-gray-400 mb-4">
                Automated booking via AI chatbots, calendar sync, and SMS notifications, reducing manual scheduling by 90%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["AI Automation", "API Integration", "Workflow Orchestration"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-xs text-gray-400/80 italic mt-2">
                Internal company tool — no public demo available.
              </div>
            </div>

            {/* Insurance Platform Development */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Insurance Platform Development</h3>
              <p className="text-gray-400 mb-4">
                Rebuilt a multi-provider insurance comparison experience with caching/error handling; recognized as most complex intern-led project.
              </p>
              
              {/* Demo GIF */}
              <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
                {!loadedGifs.viq ? (
                  <div className="w-full h-48 bg-gray-800/50 flex items-center justify-center animate-pulse">
                    <div className="text-gray-400 text-sm">Loading demo...</div>
                  </div>
                ) : (
                  <img 
                    src="/viq.gif" 
                    alt="Insurance Platform Demo" 
                    className="w-full h-auto"
                  />
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "React", "TypeScript", "API Integration"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://visitorinsurancequotes.ca"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Moosic Playlist Generator */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Moosic Playlist Generator
              </h3>
              <p className="text-gray-400 mb-4">
                Built a web app using React.js and Tailwind CSS, enabling Spotify-authenticated users to generate playlists from text prompts via OpenAI API.
              </p>
              
              {/* Demo GIF */}
              <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
                {!loadedGifs.moosic ? (
                  <div className="w-full h-48 bg-gray-800/50 flex items-center justify-center animate-pulse">
                    <div className="text-gray-400 text-sm">Loading demo...</div>
                  </div>
                ) : (
                  <img 
                    src="/Moosic.gif" 
                    alt="Moosic Demo" 
                    className="w-full h-auto"
                  />
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "TypeScript", "Python", "Spotify API", "OpenAI API", "Tailwind CSS", "Vercel"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <a
                    href="https://moosic-liart.vercel.app/"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href="https://github.com/Silin144/Moosic"
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Personal Portfolio Website */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Personal Portfolio Website
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a personal portfolio website using React.js to showcase projects, skills, and professional experience.
              </p>
              
              {/* Demo Image */}
              <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="/PersonalPortfolio.png" 
                  alt="Personal Portfolio Demo" 
                  className="w-full h-auto"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "React.js", "Framer Motion", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <a
                    href="https://silin.ca"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Live Site →
                  </a>
                  <a
                    href="https://github.com/Silin144/PersonalPortfolio"
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Rock-Paper-Scissors Hand Gesture Game */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Rock-Paper-Scissors Hand Gesture Game
              </h3>
              <p className="text-gray-400 mb-4">
                Developed an interactive, gesture-based game using Python, OpenCV, and MediaPipe for real-time play with 95% recognition accuracy.
              </p>
              
              {/* Demo Image */}
              <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="/rps.png" 
                  alt="Rock Paper Scissors Demo" 
                  className="w-full h-auto"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV", "MediaPipe", "Computer Vision"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Silin144/Rock-Paper-Scissor-Using-Hand-Gestures"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Removed Telemedicine and Chatbot projects as requested */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
