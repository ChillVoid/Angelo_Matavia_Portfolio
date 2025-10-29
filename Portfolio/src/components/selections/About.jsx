import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React.js", "TailwindCSS", "HTML5", "CSS3", "JavaScript"];
  const backendSkills = ["PHP", "MySQL", "MongoDB"];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center 
      py-20 px-6 bg-gradient-to-b from-[#0a0e1a] via-[#0b132b] to-[#09101a] text-blue-100 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="relative z-10 max-w-5xl w-full text-center">
          {/* Title */}
          <h2
            className="text-5xl md:text-6xl font-extrabold mb-12 
            bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 
            bg-clip-text text-transparent tracking-tight 
            drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] uppercase"
          >
            About Me
          </h2>

          {/* About Card */}
          <div className="rounded-2xl p-10 border border-blue-400/30 bg-[#0b1220]/60 
            shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] 
            transition-all duration-300 backdrop-blur-lg mb-14">
            <p className="text-blue-200 leading-relaxed mb-6 text-lg md:text-xl">
              I’m a strategic gamer and curious developer — passionate about crafting
              futuristic interfaces that merge logic and imagination.  
              My journey in tech reflects my creativity, discipline, and love for design.
              <br /><br />
              I grew up in a humble family, and this college journey is my path toward success.
              <span className="md:italic block mt-4 text-blue-400">
                “If you’re going to change the world, don’t ask for permission.”
              </span>
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Frontend */}
              <div className="rounded-xl p-6 bg-[#0d1325]/80 border border-blue-400/20 
                hover:scale-[1.02] transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wide">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-400/10 text-blue-300 py-1 px-3 rounded-full text-sm 
                      border border-blue-400/30 hover:bg-blue-400/20 hover:text-white
                      hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 bg-[#0d1325]/80 border border-blue-400/20 
                hover:scale-[1.02] transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wide">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-400/10 text-blue-300 py-1 px-3 rounded-full text-sm 
                      border border-blue-400/30 hover:bg-blue-400/20 hover:text-white
                      hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Games & School Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Games */}
              <div className="p-6 rounded-xl border border-blue-500/30 bg-[#0b1224]/60 
                hover:-translate-y-1 transition-all duration-300 text-center
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wide">
                  🕹️ Accomplished Games
                </h3>
                <ul className="list-disc list-inside text-blue-100 space-y-2 text-left">
                  <li><strong className="text-blue-300">Dead Island, L4D2</strong></li>
                  <li><strong className="text-cyan-300">Valorant, Apex Legends</strong></li>
                  <li><strong className="text-indigo-300">League of Legends, Mobile Legends</strong></li>
                </ul>
              </div>

              {/* School */}
              <div className="p-6 rounded-xl border border-blue-500/30 bg-[#0b1224]/60 
                hover:-translate-y-1 transition-all duration-300 text-center
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wide">
                  🏫 School
                </h3>
                <ul className="list-disc list-inside text-blue-100 space-y-2 text-left">
                  <li>
                    <strong>
                      B.S. in Computer Science —{" "}
                      <span className="italic text-blue-300">Undergraduate</span>
                    </strong>{" "}
                    <span className="text-cyan-300">
                      Cavite State University (Bacoor Campus)
                    </span>
                  </li>
                  <li>
                    <strong>
                      Related Studies:{" "}
                      <span className="text-blue-300">Web Development</span>,{" "}
                      <span className="text-cyan-400">Data Structuring</span>
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
