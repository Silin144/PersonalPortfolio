import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import Particles from "./components/Particles/Particles";
// Import for Tempo routes
import routes from "./tempo-routes";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add Tempo routes if in Tempo environment
  const tempoRoutes = import.meta.env.VITE_TEMPO ? routes : [];

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 relative overflow-hidden animate-cosmic-background`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(21, 21, 21, 1) 0%, rgba(10, 10, 10, 1) 90%), radial-gradient(circle at 90% 80%, rgba(13, 13, 34, 0.8) 0%, rgba(10, 10, 10, 0) 70%)",
        }}
      >
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
          <Particles
            particleColors={['#ffffff', '#0088ff', '#00aaff']}
            particleCount={500}
            particleSpread={20}
            speed={0.15}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
            sizeRandomness={0.8}
            cameraDistance={25}
          />
        </div>
        <div className="relative" style={{ zIndex: 1 }}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ zIndex: -1 }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse-glow"
                style={{
                  width: Math.random() * 4 + 1 + "px",
                  height: Math.random() * 4 + 1 + "px",
                  backgroundColor: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.5})`,
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 5 + "s",
                  animationDuration: Math.random() * 10 + 10 + "s",
                }}
              />
            ))}
          </div>
          {/* Tempo routes would be used here if we had a router */}
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
