import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl w-full px-6">
          <h2
            className="text-3xl font-bold mb-12 bg-linear-to-r 
            from-blue-500 to-red-400 bg-clip-text text-transparent text-center"
          >
            Contact
          </h2>

          {/* Grid layout (2 per row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-gray-800 p-6 rounded-lg border border-white/10 hover:border-blue-400/40 transition">
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-300">zacking2309@gmail.com</p>
            </div>

            {/* GitHub */}
            <div className="bg-gray-800 p-6 rounded-lg border border-white/10 hover:border-blue-400/40 transition">
              <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
              <p className="text-gray-300">github.com/ChillVoid</p>
            </div>

            {/* Discord */}
            <div className="bg-gray-800 p-6 rounded-lg border border-white/10 hover:border-blue-400/40 transition">
              <h3 className="text-lg font-semibold text-white mb-1">Discord</h3>
              <p className="text-gray-300">ChillVoid</p>
            </div>

            {/* Facebook */}
            <div className="bg-gray-800 p-6 rounded-lg border border-white/10 hover:border-blue-400/40 transition">
              <h3 className="text-lg font-semibold text-white mb-1">Facebook</h3>
              <p className="text-gray-300">
                facebook.com/angelo.matavia.54
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
