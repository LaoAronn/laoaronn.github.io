/* Components */
import { ButtonPrimary } from "../components/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Pages
*/
import About from "../pages/About";
import Works from "../pages/Works";
import Projects from "../pages/Projects";

const Footer = () => {
  const [vancouverTime, setVancouverTime] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const vancouverTimeString = now.toLocaleString('en-US', {
        timeZone: 'America/Vancouver',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setVancouverTime(vancouverTimeString);

      // Determine if it's daytime (6 AM - 6 PM)
      const vancouverHour = now.toLocaleString('en-US', {
        timeZone: 'America/Vancouver',
        hour: '2-digit',
        hour12: false
      });
      const hour = parseInt(vancouverHour);
      setIsDaytime(hour >= 6 && hour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-16 lg:py-20 text-zinc-900 transition-colors duration-300">

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 dark:from-zinc-700/0 dark:via-zinc-700/50 dark:to-zinc-700/0 mb-8 transition-colors duration-300"></div>


      <div className="container">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Left Section - Logo & Location */}
          <div className="flex flex-col items-start gap-4">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/images/aronnSeal.png"
                width={32}
                height={32}
                alt="Logo"
              />
              <span className="text-2xl font-bold text-inherit transition-colors duration-300"> Aronn Laurel </span>
            </a>

            <p className="text-sm text-[#3f3f46] flex items-center gap-2 transition-colors duration-300">
              {isDaytime ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
              {vancouverTime}, Vancouver, Canada
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-start md:items-center gap-4">
            <nav className="flex flex-col md:flex-row gap-6 text-sm text-[#3f3f46] transition-colors duration-300">
              <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Project</Link>
              <Link to="/works" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Work</Link>
              <Link to="/about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</Link>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex flex-col items-start md:items-end gap-2">
              
              <p className="text-sm text-[#3f3f46] transition-colors duration-300">Want to collaborate? HMU</p>

              {/* Socials */}
              <div className="flex gap-4 mt-2">
                
                <a href="https://www.instagram.com/aronn1of1/" target="_blank" rel="noopener noreferrer" 
                  className="text-[#3f3f46] hover:text-[#18181b] dark:hover:text-zinc-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <circle cx="12" cy="12" r="3.095"/>
                    <circle cx="18.338" cy="5.676" r="0.749"/>
                  </svg>
                </a>

                <a href="https://linkedin.com/in/aronn-laurel-7861aa207/" target="_blank" rel="noopener noreferrer" 
                  className="text-[#3f3f46] hover:text-[#18181b] dark:hover:text-zinc-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>

                <a href="https://github.com/LaoAronn" target="_blank" rel="noopener noreferrer" 
                  className="text-[#3f3f46] hover:text-[#18181b] dark:hover:text-zinc-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

              </div>
              
            </div>
            
            
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#52525b]  gap-4 transition-colors duration-300">
          <p>Built with React & Copilot Magic ~</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer