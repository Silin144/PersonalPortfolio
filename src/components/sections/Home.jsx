import { RevealOnScroll } from "../RevealOnScroll";
import SilinResume from "../../assets/Silin.pdf";
import LetterGlitch from "../decrypt";
import SplashCursor from "../SplashCursor";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        CAPTURE_RESOLUTION={512}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        PRESSURE_ITERATIONS={20}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        SHADING={true}
        COLOR_UPDATE_SPEED={10}
        BACK_COLOR={{ r: 0.5, g: 0, b: 0 }}
        TRANSPARENT={true}
      />
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Silin
          </h1>

          {/* Animated paragraph with LetterGlitch */}
          <div className="max-w-4xl mx-auto mb-12">
            <LetterGlitch
              text="I'm a Computer Science student at the University of Waterloo, deeply passionate about developing AI-driven solutions and scalable web applications, with a focus on leveraging Python, machine learning, and modern tools to craft innovative systems that prioritize performance, usability, and impactful real-world outcomes."
              glitchColors={['#60a5fa', '#06b6d4', '#3b82f6', '#0ea5e9']}
              glitchSpeed={30}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
              style={{ 
                transitionDelay: '2000ms',
                height: '250px',
                fontSize: '1.25rem',
                lineHeight: '2rem',
                padding: '2rem 0'
              }}
              className="font-medium"
            />
          </div>
          <div className="flex justify-center space-x-4">
            {/* View Projects */}
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>

            {/* Resume (Download) */}
            <a
              href={SilinResume}
              download="Silin_Resume.pdf"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
