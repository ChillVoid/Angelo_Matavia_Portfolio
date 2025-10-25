import { useState } from 'react';
import { LoadingScreen } from "./components/LoadingSreen";  
import { Navbar } from './components/selections/Navbar';
import { MobileMenu } from './components/selections/MobileMenu';
import { Home } from './components/selections/Home';
import { About } from './components/selections/About';
import {Projects} from './components/selections/Project'
import { Contact } from './components/selections/Contact';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className={`min-h-screen transition-opacity duration-700
            ${isLoaded 
            ? 'opacity-100' 
            : 'opacity-0' }
              bg-black text-gray-100}`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
