import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-[rgba(10,10,10,0.95)] shadow-lg backdrop-blur-lg" : "bg-transparent"} ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="font-mono text-xl font-bold text-white relative group overflow-hidden"
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">
              Silin<span className="text-blue-500">.ca</span>
            </span>
            <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0 text-blue-400">
              Silin<span className="text-white">.ca</span>
            </span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section);
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative px-2 py-1 uppercase text-sm font-medium tracking-wider transition-all duration-300 ${activeSection === section ? "text-blue-400" : "text-gray-300 hover:text-white"}`}
              >
                <span className="relative z-10">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-gradient bg-gradient-to-r from-blue-400 to-purple-500"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
