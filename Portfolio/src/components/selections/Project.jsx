import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import valorantImg from "../../assets/Valorant_KDA.png";
import aatroxImg from "../../assets/Aatrox.jpg";

export const Projects = () => {
  const [isAatrox, setIsAatrox] = useState(false);
  const [isCypher, setIsCypher] = useState(false);

  // 🕐 Automatically shrink after 3 seconds
  useEffect(() => {
    let timer;
    if (isAatrox) {
      timer = setTimeout(() => setIsAatrox(false), 3000); // 3s delay
    }
    return () => clearTimeout(timer);
  }, [isAatrox]);

  useEffect(() => {
    let timer;
    if (isCypher) {
      timer = setTimeout(() => setIsCypher(false), 3000); // 3s delay
    }
    return () => clearTimeout(timer);
  }, [isCypher]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-linear-to-r 
          from-blue-500 to-red-400 bg-clip-text text-transparent text-center"
          >
            Featured My Hobbys
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aatrox */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Aatrox - General Commander of Shurima</h3>
              <p className="text-white mb-4">
                A Legendary Warrior and one of the Ascendants. Ultimately
                betrayed and imprisoned within his own blade, he waited millennia
                corrupting and transforming mortals into a vessel for his
                vengeance.
                <br></br><br></br>
                from League Of Legends.
              </p>

              <div
                className="cursor-pointer flex justify-center"
                onClick={() => setIsAatrox(true)}
              >
                <img
                  src={aatroxImg}
                  alt="My Main"
                  className={`rounded-lg shadow-lg transition-all duration-700 ${
                    isAatrox ? "scale-200" : "scale-100"
                  }`}
                  width="300"
                />
              </div>
              <p className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-center">
                {isAatrox
                  ? "Auto shrink in 3 seconds..."
                  : "Click image to expand"}
              </p>
            </div>

            {/* Cypher */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-black/40"
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                Cypher From Valorant
              </h3>
              <p className="text-white/80 mb-4">
                "My eye is everywhere" — a one-man surveillance network who keeps
                tabs on the enemy's every move, ensuring no secret remains safe
                and no maneuver goes unseen.
              </p>

              <div
                className="cursor-pointer flex justify-center"
                onClick={() => setIsCypher(true)}
              >
                <img
                  src={valorantImg}
                  alt="My Record"
                  className={`rounded-lg shadow-lg transition-all duration-700 ${
                    isCypher ? "scale-200" : "scale-100"
                  }`}
                  width="300"
                />
              </div>
              <p className="text-blue-400 hover:text-blue-300 transition-colors my-4 text-center">
                {isCypher
                  ? "Auto shrink in 3 seconds..."
                  : "Click image to expand"}
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
