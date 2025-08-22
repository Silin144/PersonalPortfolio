import { RevealOnScroll } from "../RevealOnScroll";
import Timeline from "../Timeline/Timeline";
import modulusLogo from "../../assets/modulus.png";
import shopifyLogo from "../../assets/shopify.png";
import waterlooLogo from "../../assets/waterloo.png";
import modernSchoolLogo from "../../assets/modern.jpg";
import methicareLogo from "../../assets/methicare.jpeg";
import policyAdvisorLogo from "../../assets/PolicyAdvisor.jpeg";
import DownloadResume from "../DownloadResume/DownloadResume";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS"
  ];
  const backendSkills = [
    "Python",
    "C/C++",
    "SQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Flask",
    "Django",
    "FastAPI",
    "LangChain",
    "Hugging Face",
    "OpenAI API",
    "Google Gemini API"
  ];

  const educationData = [
    {
      date: "Sep 2024 - May 2029",
      title: "University of Waterloo",
      description: [
        "Honours Bachelor of Computer Science, Co-op"
      ].join('\n'),
      logo: waterlooLogo,
    },
  ];

  const experienceData = [
    {
      date: "May 2025 - Aug 2025",
      title: "Software Developer Intern at PolicyAdvisor",
      description:
        "🤖 Automated insurance workflows with AI",
      logo: policyAdvisorLogo,
    },
    {
      date: "Apr 2024 - Jun 2024",
      title: "Software Developer Intern at Modulus Systems UK",
      description:
        "📊 Streamlined analytics for teams with ML",
      logo: modulusLogo,
    },
    {
      date: "May 2023 - Aug 2023",
      title: "Software Developer Intern at Mentors Ethicare",
      description:
        "🌐 Enabled secure, multilingual telemedicine",
      logo: methicareLogo,
    },
    {
      date: "Jun 2019 - Dec 2019",
      title: "Founder, Dropshipping Online Store",
      description:
        "🚀 Scaled Shopify sales to $20K",
      logo: shopifyLogo,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative z-10"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border bg-black/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I am a Computer Science student at the University of Waterloo,
              deeply passionate about developing AI-driven solutions and
              scalable web applications, with a focus on leveraging Python,
              machine learning, and modern tools to craft innovative systems
              that prioritize performance, usability, and impactful real-world
              outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-black/20 backdrop-blur-sm border border-white/10 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-black/20 backdrop-blur-sm border border-white/10 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Professional Experience
            </h3>
            <Timeline data={experienceData} />
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Education
            </h3>
            <Timeline data={educationData} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
