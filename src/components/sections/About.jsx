import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React.js", "HTML", "CSS", "JavaScript", "Flask"];
  const backendSkills = ["Python", "SQL", "MySQL", "MongoDB", "Pandas"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I’m a Computer Science student at the University of Waterloo, deeply passionate about developing AI-driven solutions and scalable web applications, with a focus on leveraging Python, machine learning, and modern tools to craft innovative systems that prioritize performance, usability, and impactful real-world outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-gray-800/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
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
                <h3 className="text-xl font-bold mb-4">Backend</h3>
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
            <h3 className="text-2xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </h3>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute w-1 bg-gradient-to-b from-blue-500/30 to-cyan-400/30 h-full left-1/2 transform -translate-x-1/2 z-0"></div>

              {/* Experience Section */}
              <h4 className="text-xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </h4>
              <div className="mb-12 relative group hover:bg-gray-800/20 rounded-lg p-6 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-200"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg mr-6 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-shadow duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-200">Technical Intern</h4>
                    <p className="text-gray-400">Modulus Systems<br />London, UK</p>
                    <span className="text-sm text-gray-400 block mt-1">Nov 2022 - Dec 2022</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Contributed to an AI-based project predicting consumer behavior, reducing churn rates by 20%. Designed Python algorithms and integrated them into machine learning pipelines using TensorFlow and Scikit-learn, boosting model training speed by 30% and prediction accuracy by 10%.
                </p>
              </div>

              <div className="mb-12 relative group hover:bg-gray-800/20 rounded-lg p-6 transition-all duration-300">
                <div className="flex items-center mb-4 flex-row-reverse">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-200"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg ml-6 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-shadow duration-300"></div>
                  <div className="flex-1 text-right">
                    <h4 className="text-lg font-semibold text-gray-200">Intern</h4>
                    <p className="text-gray-400">Modulus Systems<br />London, UK</p>
                    <span className="text-sm text-gray-400 block mt-1">Apr 2021 - Jun 2021</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-right">
                  Enhanced digital campaigns, increasing monthly visitors by 75% (from 1,000 to 4,000) using Google Analytics and social media insights. Collaborated with teams to design promotional materials and improve online user engagement.
                </p>
              </div>

              <div className="mb-12 relative group hover:bg-gray-800/20 rounded-lg p-6 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-200"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg mr-6 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-shadow duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-200">Founder</h4>
                    <p className="text-gray-400">Dropshipping Online Store<br />Remote</p>
                    <span className="text-sm text-gray-400 block mt-1">Jun 2019 - Dec 2019</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Built and managed a Shopify store generating $20,000 in revenue over six months across the USA, Canada, New Zealand, and the UK. Leveraged Facebook and Instagram ads for a 5% conversion rate and automated email campaigns to boost retention by 10%.
                </p>
              </div>

              {/* Education Section */}
              <h4 className="text-xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Education
              </h4>
              <div className="mb-12 relative group hover:bg-gray-800/20 rounded-lg p-6 transition-all duration-300">
                <div className="flex items-center mb-4 flex-row-reverse">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-200"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg ml-6 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-shadow duration-300"></div>
                  <div className="flex-1 text-right">
                    <h4 className="text-lg font-semibold text-gray-200">Bachelor of Computer Science</h4>
                    <p className="text-gray-400">University of Waterloo<br />Waterloo, ON, Canada</p>
                    <span className="text-sm text-gray-400 block mt-1">Sep 2024 - Present</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-right">
                  Relevant Coursework: Designing Functional Programs, Linear Algebra, Calculus, Object-Oriented Programming, Data Structures, Algorithms. Awards: President's Scholarship of Distinction.
                </p>
              </div>

              <div className="mb-12 relative group hover:bg-gray-800/20 rounded-lg p-6 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-200"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg mr-6 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-shadow duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-200">High School Diploma, PCM-CS</h4>
                    <p className="text-gray-400">Modern School<br />New Delhi, India</p>
                    <span className="text-sm text-gray-400 block mt-1">2020 - 2024</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Grade: 12th - 96.2%. Activities and societies: Bits n' Bytes (CS Club), Science Club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};