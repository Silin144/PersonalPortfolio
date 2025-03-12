import { RevealOnScroll } from "../RevealOnScroll";
import modulusLogo from "../../assets/modulus.png";
import shopifyLogo from "../../assets/shopify.png";
import waterlooLogo from "../../assets/waterloo.png";
import modernSchoolLogo from "../../assets/modern.jpg";

export const About = () => {
  const frontendSkills = ["React.js", "HTML", "CSS", "JavaScript", "Flask"];
  const backendSkills = ["Python", "SQL", "MySQL", "MongoDB", "Pandas"];

  // Timeline data for dynamic rendering
  const timelineData = [
    {
      id: 1,
      logo: modulusLogo,
      company: "Modulus Systems",
      title: "Technical Intern",
      location: "London, UK",
      duration: "Nov 2022 - Dec 2022",
      description:
        "Contributed to an AI-based project predicting consumer behavior, reducing churn rates by 20%. Designed Python algorithms and integrated them into machine learning pipelines using TensorFlow and Scikit-learn, boosting model training speed by 30% and prediction accuracy by 10%.",
      category: "Experience",
    },
    {
      id: 2,
      logo: modulusLogo,
      company: "Modulus Systems",
      title: "Intern",
      location: "London, UK",
      duration: "Apr 2021 - Jun 2021",
      description:
        "Enhanced digital campaigns, increasing monthly visitors by 75% (from 1,000 to 4,000) using Google Analytics and social media insights. Collaborated with teams to design promotional materials and improve online user engagement.",
      category: "Experience",
    },
    {
      id: 3,
      logo: shopifyLogo,
      company: "Dropshipping Online Store",
      title: "Founder",
      location: "Remote",
      duration: "Jun 2019 - Dec 2019",
      description:
        "Built and managed a Shopify store generating $20,000 in revenue over six months across the USA, Canada, New Zealand, and the UK. Leveraged Facebook and Instagram ads for a 5% conversion rate and automated email campaigns to boost retention by 10%.",
      category: "Experience",
    },
    {
      id: 4,
      logo: waterlooLogo,
      company: "University of Waterloo",
      title: "Bachelor of Computer Science",
      location: "Waterloo, ON, Canada",
      duration: "Sep 2024 - Present",
      description:
        "Relevant Coursework: Designing Functional Programs, Linear Algebra, Calculus, Object-Oriented Programming, Data Structures, Algorithms. Awards: President's Scholarship of Distinction.",
      category: "Education",
    },
    {
      id: 5,
      logo: modernSchoolLogo,
      company: "Modern School",
      title: "High School Diploma, PCM-CS",
      location: "New Delhi, India",
      duration: "2020 - 2024",
      description:
        "Grade: 12th - 96.2%. Activities and societies: Bits n' Bytes (CS Club), Science Club.",
      category: "Education",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[#0a0a0a]"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I am a Computer Science student at the University of Waterloo, deeply
              passionate about developing AI-driven solutions and scalable web
              applications, with a focus on leveraging Python, machine learning, and
              modern tools to craft innovative systems that prioritize performance,
              usability, and impactful real-world outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-gray-800/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-gray-800/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              My Journey
            </h3>
            <div className="relative">
              <style>
                {`
                  .timeline-line {
                    position: absolute;
                    width: 1px;
                    height: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(59, 130, 246, 0.2); /* Solid color, no fade */
                    z-index: 0;
                  }
                  .timeline-item {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: flex-start;
                    width: 100%;
                    margin-bottom: 3rem;
                  }
                  .timeline-content {
                    width: 45%;
                    background: #0a0a0a; /* Match website background */
                    padding: 1rem;
                    border-radius: 0.75rem; /* Rounded corners */
                    text-align: left;
                  }
                  .left-align .timeline-content {
                    margin-right: auto;
                  }
                  .right-align .timeline-content {
                    margin-left: auto;
                  }
                  .timeline-bullet {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                  }
                `}
              </style>
              <div className="timeline-line"></div>

              {timelineData.map((item, index) => (
                <div key={item.id}>
                  {/* Add "Experience" heading before the first Experience item */}
                  {item.category === "Experience" && index === 0 && (
                    <h4 className="text-xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                      Experience
                    </h4>
                  )}
                  {/* Add "Education" heading before the first Education item */}
                  {item.category === "Education" && timelineData[index - 1]?.category === "Experience" && (
                    <h4 className="text-xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                      Education
                    </h4>
                  )}
                  <div
                    className={`timeline-item ${
                      index % 2 === 0 ? "left-align" : "right-align"
                    }`}
                  >
                    <div className="timeline-content">
                      <img
                        src={item.logo}
                        alt={`${item.company} Logo`}
                        className="w-20 h-20 rounded-lg mb-4"
                      />
                      <p className="text-gray-300">
                        {item.title}
                        <br />
                        {item.company}
                        <br />
                        {item.location}
                        <br />
                        {item.duration}
                      </p>
                      <p className="text-gray-300 mt-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="timeline-bullet">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full z-10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};