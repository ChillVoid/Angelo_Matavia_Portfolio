import {RevealOnScroll} from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React.js", "TailwindCSS", "HTML5", "CSS3", "Javascript"];
  const backendSkills = ["PHP", "MySQL", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
    <RevealOnScroll>
      <div className="max-w-4xl w-full">
       
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r 
          from-blue-500 to-red-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        
        <div className="rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all mb-10">
          <p className="text-gray-300 mb-6">
            I’m a strategic gamer and curious developer,
            I like exploring creative ways to build and design.
            My goal is to combine logic and ideas 
            through code — crafting projects that reflect who I am. 
            <br></br><br></br>
            I grow up in a poor family and this collage life 
            will be the path of me to become
            a successful person some day.       
            <span className="md:italic tracking-tighter block mt-4">
              “If you’re going to change the world, don’t ask for permission.”
            </span>
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                     hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all text-center">
                    <h3 className="text-xl font-bold mb-4">🕹️ Accomplished Games</h3>
                        <ul className="list-disc list-inside text-white space-y-2 text-left">
                            <li>
                                <strong><span className="bg-linear-to-l from-red-600 to-gray-400/50  bg-clip-text text-transparent ">Dead-Island, L4D2</span></strong>
                            </li>
                            <li>
                                 <strong><span className="bg-linear-to-r from-orange-400 to-purple-600  bg-clip-text text-transparent ">Valorant, Apex</span></strong>
                            </li>
                            <li>
                                <strong><span className="bg-linear-to-r from-blue-700/90 to-yellow-400  bg-clip-text text-transparent ">League Of Legends, Mobile Legends</span></strong>
                            </li>
                        </ul>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all text-center">
                    <h3 className="text-xl font-bold mb-4">🏫 School</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 text-left">
                            <li>
                                <strong>B.S. in Computer Science - <span className="md:italic text-blue-500">Undergraduate</span></strong>
                                <span className="text-green-600">  Cavite State University in Bacoor City</span>
                            </li>
                            <li>
                               <strong>Relative Studies: 
                                <span className="bg-linear-to-r from-cyan-300 to-green-600  bg-clip-text text-transparent"> Web Development,</span><br></br>
                                <span className="bg-linear-to-r from-blue-700/90 to-yellow-400  bg-clip-text text-transparent">  Data Structuring,</span>  
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
