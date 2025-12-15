import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-50 top-0" style={{ cursor: 'default' }}>
      <div className="mx-auto text-center flex w-5/6 justify-between">
        
        <div className="hidden sm:flex space-x-4 items-center text-m">
          <button onClick={() => scrollToSection('hero')} className="hover:text-yellow-200 transition-colors">Home</button>
          <button onClick={() => scrollToSection('tech-stack')} className="hover:text-yellow-200 transition-colors">Tech Stack</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-yellow-200 transition-colors">Projects</button>
        </div>
        <div className="text-3xl sm:text-2xl font-extrabold">
          <button onClick={() => scrollToSection('hero')} className="hover:text-yellow-200 transition-colors">Ujas Goti 🚀</button>
        </div>
        <div className="hidden sm:flex space-x-4 items-center text-m">
          <button onClick={() => scrollToSection('experience')} className="hover:text-yellow-200 transition-colors">Experience</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-yellow-200 transition-colors">About</button>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center z-50 ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button onClick={() => scrollToSection('tech-stack')}>Tech Stack</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
