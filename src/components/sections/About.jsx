import { RevealOnScroll } from "../RevealOnScroll";
import Timeline from "../Timeline/Timeline";
import modulusLogo from "../../assets/modulus.png";
import shopifyLogo from "../../assets/shopify.png";
import waterlooLogo from "../../assets/waterloo.png";
import modernSchoolLogo from "../../assets/modern.jpg";

export const About = () => {
  const frontendSkills = ["React.js", "HTML", "CSS", "JavaScript", "Flask"];
  const backendSkills = ["Python", "SQL", "MySQL", "MongoDB", "Pandas"];

  const educationData = [
    {
      date: "Sep 2024 - Present",
      title: "University of Waterloo",
      description: [
        "Bachelor of Computer Science",
        "Relevant Coursework:",
        "Designing Functional Programs (Advanced)",
        "Linear Algebra & Calculus",
        "bject-Oriented Programming",
        "Data Structures & Algorithms",
        "Awards:",
        "    President's Scholarship of Distinction"
      ].join('\n'),
      logo: waterlooLogo,
    },
    {
      date: "2020 - 2024",
      title: "Modern School",
      description: [
        "High School Diploma, PCM-CS",
        "Grade: 12th - 96.2%",
        "Activities and Societies:",
        "    Bits n' Bytes (CS Club)",
        "    Science Club"
      ].join('\n'),
      logo: modernSchoolLogo,
    },
  ];

  const experienceData = [
    {
      date: "Nov 2022 - Dec 2022",
      title: "Technical Intern at Modulus Systems",
      description: [
        "Contributed to an AI-based project predicting consumer behavior",
        "Reduced churn rates by 20% through predictive analytics",
        "Designed Python algorithms for machine learning pipelines",
        "Integrated TensorFlow and Scikit-learn frameworks",
        "Improved model training speed by 30%",
        "Enhanced prediction accuracy by 10%"
      ].join('\n'),
      logo: modulusLogo,
    },
    {
      date: "Apr 2021 - Jun 2021",
      title: "Intern at Modulus Systems",
      description: [
        "Enhanced digital campaigns using data-driven strategies",
        "Increased monthly visitors by 75% (1,000 to 4,000)",
        "Utilized Google Analytics for visitor insights",
        "Optimized social media engagement metrics",
        "Collaborated on promotional material design",
        "Improved overall online user engagement"
      ].join('\n'),
      logo: modulusLogo,
    },
    {
      date: "Jun 2019 - Dec 2019",
      title: "Founder, Dropshipping Online Store",
      description: [
        "Built and managed a successful Shopify store",
        "Generated $20,000 revenue over six months",
        "Operated across USA, Canada, NZ, and UK",
        "Achieved 5% conversion rate through FB/IG ads",
        "Implemented automated email campaigns",
        "Increased customer retention by 10%"
      ].join('\n'),
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
