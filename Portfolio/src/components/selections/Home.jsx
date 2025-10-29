import { RevealOnScroll } from "../RevealOnScroll";
import me from "../../assets/profile.jpg";

export const Home = () => {
  return (
    <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center 
        md:justify-between px-6 md:px-20 pt-20 md:pt-32 
        bg-gradient-to-b from-[#0a0e1a] via-[#0b132b] to-[#09101a] text-blue-100 overflow-hidden"
        >   
        <div className="relative z-10 flex flex-col items-start text-left md:w-1/2 space-y-6 mb-16 md:mb-0">
            <h1
            className="text-5xl md:text-7xl font-extrabold 
            bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 
            bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]"
            >
            Hi, I’m Angelo Matavia
            </h1>

            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-md">
            I’m from the Philippines and currently an undergraduate student pursuing a
            Bachelor of Science in Computer Science. I love crafting creative and
            meaningful projects through logic and design.
            </p>

            <div className="flex space-x-4 mt-4 mb-10">
            <a
                href="#projects"
                className="relative bg-blue-500 text-white py-3 px-6 rounded font-medium
                transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                after:content-[''] after:absolute after:inset-0 after:bg-blue-400/20 after:blur-lg after:opacity-0 hover:after:opacity-100 after:transition"
            >
                Visit My Hobbies
            </a>
            <a
                href="#contact"
                className="relative border border-blue-400/50 text-blue-400 py-3 px-6 rounded font-medium
                transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/10
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
                Contact Me
            </a>
            </div>
        </div>

        {/* Right Image Side */}
        <div className="relative z-10 flex justify-center md:justify-end md:w-1/2  mb-10">
            <div className="w-64 h-96 md:w-80 md:h-[500px] overflow-hidden 
            rounded-2xl border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] 
            hover:scale-[1.02] transition-transform duration-300">
            <img
                src={me}
                alt="Profile"
                className="w-full h-full object-cover object-top"
            />
            </div>
        </div>
    </section>

  );
};
