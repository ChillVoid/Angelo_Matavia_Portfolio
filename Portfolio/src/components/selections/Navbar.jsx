import { useEffect } from "react";

export const Navbar = ( {menuOpen, setMenuOpen}) => {

    useEffect(() => {
            document.body.style.overflow = menuOpen ? 'hidden' : '';
        }, [menuOpen]);


    return (<nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold"> 
                    <span className="text-blue-500">Chill</span> Void Project
                </a>  {/* Here is the icon but i dont used it so just Gamer named */}

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                {/* this is the burger menu  */}
                <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    );
}