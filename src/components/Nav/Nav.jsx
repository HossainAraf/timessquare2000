// IMPORTS
import { useState } from 'react';
import AnimatedText from './AnimatedText';
import '../../styles/nav.css';

// COMPONENT
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // RETURN USING TAILWIND CLASSES
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <AnimatedText />
        {/* HAMBURGER MENU */}
        <div>
          <button onClick={toggleMenu} type="button" className="text-white focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* LINK VISIBLE WHEN MENU IS OPEN */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:w-auto mt-4 md:mt-0`}
        >
          <a href="/" className="block text-white hover:text-gray-300 py-2 px-4">Home Page</a>
          <a href="/sufism" className="block text-white hover:text-gray-300 py-2 px-4">Sufism</a>
          <a href="/timessquare" className="block text-white hover:text-gray-300 py-2 px-4">Times Square</a>
          <a href="/tourism" className="block text-white hover:text-gray-300 py-2 px-4">tourism</a>
          <a href="/contact-us" className="block text-white hover:text-gray-300 py-2 px-4">Contact Us</a>
          <a href="/about" className="block text-white hover:text-gray-300 py-2 px-4">About  Us</a>
          <a href="/disclaimer" className="block text-white hover:text-gray-300 py-2 px-4">Disclaimer</a>
          <a href="/add-content" className="block text-white hover:text-gray-300 py-2 px-4">Add / Update Data </a>
        </div>
      </div>
    </nav>
  );
}

// EXPORT
export default Nav;
