import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-24 px-6
                 bg-linear-to-b from-[#030712] via-[#0a1a33] to-[#020617] text-white"
    >
      <RevealOnScroll>
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-linear-to-r 
                         from-blue-400 to-blue-600 bg-clip-text text-transparent 
                         drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
            Contact & Socials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 p-6 rounded-2xl border border-blue-500/30
                         hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                         transition-all duration-300 backdrop-blur-sm text-left"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-1">Email</h3>
              <p className="text-gray-300 group-hover:text-white transition">
                zacking2309@gmail.com
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ChillVoid"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 p-6 rounded-2xl border border-blue-500/30
                         hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                         transition-all duration-300 backdrop-blur-sm text-left"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-1">GitHub</h3>
              <p className="text-gray-300 group-hover:text-white transition">
                github.com/ChillVoid
              </p>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/ChillVoid"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 p-6 rounded-2xl border border-blue-500/30
                         hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                         transition-all duration-300 backdrop-blur-sm text-left"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-1">Discord</h3>
              <p className="text-gray-300 group-hover:text-white transition">
                ChillVoid
              </p>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/angelo.matavia.54"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 p-6 rounded-2xl border border-blue-500/30
                         hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                         transition-all duration-300 backdrop-blur-sm text-left"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-1">Facebook</h3>
              <p className="text-gray-300 group-hover:text-white transition">
                facebook.com/angelo.matavia.54
              </p>
            </a>
          </div>

          <p className="mt-12 text-gray-400 text-sm">
            © {new Date().getFullYear()} Angelo Matavia — All Rights Reserved
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
