import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import valorantImg from "../../assets/Valorant_KDA.png";
import aatroxImg from "../../assets/Aatrox.jpg";
import cncImg from "../../assets/Queing_system.png";
import gmuImg from "../../assets/gym.jpg";

export const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  useEffect(() => {
    if (!expanded) return;
    const timer = setTimeout(() => setExpanded(null), 3000);
    return () => clearTimeout(timer);
  }, [expanded]);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden
                 bg-gradient-to-b from-[#030712] via-[#0a1a33] to-[#020617]"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-white">
          
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center 
                         bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent 
                         drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
            My Projects + Hobbies
          </h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* 🩸 Aatrox */}
            <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/30 
                            backdrop-blur-sm transition-all duration-300
                            hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">Aatrox – The Darkin Blade</h3>
              <p className="text-gray-300 mb-6">
                A cursed warrior trapped in his own weapon — a symbol of power and rage.
                <br />
                <span className="text-sm text-gray-400">From League of Legends</span>
              </p>
              <div className="cursor-pointer flex justify-center" onClick={() => handleClick("Aatrox")}>
                <img
                  src={aatroxImg}
                  alt="Aatrox"
                  className={`rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                              transition-all duration-700 ${
                                expanded === "Aatrox" ? "scale-150" : "scale-100"
                              }`}
                  width="320"
                />
              </div>
              <p className="text-center mt-4 text-blue-400/80 text-sm">
                {expanded === "Aatrox" ? "Auto shrink in 3 seconds..." : "Click image to expand"}
              </p>
            </div>

            {/* 🕶 Cypher */}
            <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/30 
                            backdrop-blur-sm transition-all duration-300
                            hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">Cypher – The All-Seeing Eye</h3>
              <p className="text-gray-300 mb-6">
                A master of surveillance and information control — always one step ahead.
                <br />
                <span className="text-sm text-gray-400">From Valorant</span>
              </p>
              <div className="cursor-pointer flex justify-center" onClick={() => handleClick("Cypher")}>
                <img
                  src={valorantImg}
                  alt="Cypher"
                  className={`rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                              transition-all duration-700 ${
                                expanded === "Cypher" ? "scale-150" : "scale-100"
                              }`}
                  width="320"
                />
              </div>
              <p className="text-center mt-4 text-blue-400/80 text-sm">
                {expanded === "Cypher" ? "Auto shrink in 3 seconds..." : "Click image to expand"}
              </p>
            </div>

            {/* ⚙️ GMU Commerce System */}
            <a
              href="https://github.com/ChillVoid/gym_management"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-white/5 border border-blue-500/30 
                         backdrop-blur-sm transition-all duration-300
                         hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">GMU Commerce System</h3>
              <p className="text-gray-300 mb-6">
                A full-stack PHP & MySQL system for gym management — track memberships, utilities, and payments 
                with a clean modern dashboard.
                <br />
                <span className="text-sm text-gray-400">Student-built project</span>
              </p>
              <div className="flex justify-center">
                <img
                  src={gmuImg}
                  alt="GMU Project"
                  className="rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-700"
                  width="320"
                />
              </div>
              <p className="text-center mt-4 text-blue-400/80 text-sm">
                Click to view GitHub repository
              </p>
            </a>

            {/* 🖥️ Queuing System */}
            <a
              href="https://github.com/ChillVoid/Queueing-System"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-white/5 border border-blue-500/30 
                         backdrop-blur-sm transition-all duration-300
                         hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">Queuing System</h3>
              <p className="text-gray-300 mb-6">
                A smart web-based queuing solution to handle appointment scheduling efficiently.
                <br />
                <span className="text-sm text-gray-400">Built with PHP and MySQL</span>
              </p>
              <div className="flex justify-center">
                <img
                  src={cncImg}
                  alt="Queuing System"
                  className="rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-700"
                  width="320"
                />
              </div>
              <p className="text-center mt-4 text-blue-400/80 text-sm">
                Click to view GitHub repository
              </p>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
