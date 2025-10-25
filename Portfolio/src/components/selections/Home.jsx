import { RevealOnScroll } from "../RevealOnScroll";
import me from "../../assets/profile.jpg"

export const Home = () => {

    return (
     <section 
        id="home"
         className="min-h-screen flex items-center justify-center relative pt-20"
    >      
    <RevealOnScroll> 
        <div className="text-center z-10 px-4 flex flex-col items-center justify-center">
            <div className="w-32 h-32 md:w-50 md:h-50 rounded-full flex  overflow-hidden border-4 border-blue-500 shadow-[0_0_20px_#3b82f6] mb-8">
                <img
                src={me}
                alt="Profile"
                className="w-full h-full object-cover"
                />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6
             bg-linear-to-r from-blue-500 to-red-400
             bg-clip-text text-transparent leading-right">
                Hi, I'm Angelo Matavia
            </h1>
            <p className="text-white text-lg mb-8 max-w-lg mx-auto">
            I'm from Philippines and a Undergraduate from course 
                of Bachelor of Science in Computer Science. 
            </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium
                        transition relative overflow-hidden 
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                           Visit My Hobbies
                    </a>
                    <a href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 
                        px-6 rounded  font-medium transition-all duration-200 
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10">
                            Contact Me
                    </a>
                </div>
        </div>
    </RevealOnScroll>
     </section>
    );
};