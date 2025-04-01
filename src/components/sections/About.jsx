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
        "Technical Skills:",
        "Languages & Web: Python, C/C++, SQL, R, Racket, JavaScript, Node.js, HTML, CSS",
        "APIs/Frameworks: Shopify API, Flask, OpenCV, MediaPipe, React.js, REST API",
        "Technologies: TensorFlow, Scikit-learn, Git, Pandas, MySQL, MongoDB, Docker, Power BI",
        "Google Analytics, Maven, MS Office Suite, Canva, Klaviyo, NumPy"
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
      date: "Apr 2024 - Jun 2024",
      title: "Technical/Digital Marketing Intern at Modulus Systems UK",
      description: [
        "Developed AI systems with Python, TensorFlow, and Scikit-learn, reducing churn by 20%",
        "Engineered tailored ML algorithms optimizing data processing workflows for 20+ analysts",
        "Executed digital campaigns using Google Analytics, driving 1,000 additional monthly visitors with 33% increase",
        "Analyzed consumer behavior with statistical methods, improving model reliability by 15%",
        "Promoted social media channels via targeted ads, growing follower base by 30%",
        "Presented data-driven insights using Power BI, increasing strategic decision adoption by 15%"
      ].join('\n'),
      logo: modulusLogo,
    },
    {
      date: "May 2023 - Aug 2023",
      title: "Telemedicine Systems Intern at Mentors Ethicare",
      description: [
        "Spearheaded Python/Flask-based telemedicine portal development, improving satisfaction by 20%",
        "Integrated MySQL medical records system, reducing access time by 40% for 500+ daily records",
        "Enhanced user accessibility with multilingual support, increasing platform adoption by 10%",
        "Added local healthcare provider access via APIs, enabling 1,500 additional consultations annually",
        "Connected 50+ providers, increasing consultation coverage by 30%"
      ].join('\n'),
      logo: modulusLogo,
    },
    {
      date: "Jun 2019 - Dec 2019",
      title: "Founder, Dropshipping Online Store",
      description: [
        "Launched a Shopify store targeting four markets, generating $20,000 in revenue within six months",
        "Optimized Facebook and Instagram ads with A/B testing, achieving 5% conversion rate",
        "Implemented Klaviyo automated emails for cart recovery, reducing abandonment by 15%",
        "Managed supply chain logistics with vendor negotiations, reducing costs by 15%",
        "Conducted product research using market analysis, boosting sales margins by 12%"
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
