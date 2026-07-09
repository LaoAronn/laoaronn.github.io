import { useState } from "react";

const allProjects = [
  {
    category: 'software',
    title: 'MyBinder',
    desc: 'A personal Pokemon binder to showcase and organize your card collection online',
    icon: '📱',
    link: 'https://my-binder.vercel.app',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Supabase', 'Web Scraping', 'TailwindCSS'],
    color: '8EC5E8'
  },
  {
    category: 'software',
    title: 'ScanAhead',
    desc: 'A medical triage prototype where patients submit symptoms via voice, images, and 3D scans to generate AI-structured case files for doctors',
    icon: '🩺',
    link: 'https://github.com/LaoAronn/ScanAhead',
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini API'],
    color: '9FD8B4'
  },
  {
    category: 'software',
    title: 'FreshTomatoes 🍅',
    desc: 'Inspired by RottenTomatoes, afull-stack platform for browsing, rating, and reviewing movies with user authentication and persistent storage',
    icon: '🍿',
    link: 'https://github.com/LaoAronn/Movie-Website',
    tags: ['Svelte', 'PHP', 'SQLite', 'JavaScript', 'Full-Stack'],
    color: 'BCA7EC'
  },
  {
    category: 'software',
    title: 'Game Platform Systems',
    desc: 'A collaborative database application for managing game metadata, third-party news, and user-generated reviews',
    icon: '🎮',
    link: 'https://github.com/LaoAronn/Game-Platform-Systems-',
    tags: ['Java', 'SQL', 'PostgreSQL', 'Database'],
    color: 'EAB6CC'
  },
  {
    category: 'software',
    title: 'CookAI',
    desc: 'An AI recipe generator that produces personalized meals from a photo of whatever ingredients you have left at home',
    icon: '🥘',
    link: 'https://devpost.com/software/cook-ai',
    tags: ['React', 'JavaScript', 'ChatGPT API', 'MongoDB', 'UI Design'],
    color: 'F2DE8C'
  },
  {
    category: 'software',
    title: 'Allyanna Art Portfolio 🎨',
    desc: 'A custom art portfolio website built for my sister, designed to showcase her work in a clean and personal way',
    icon: '🎨',
    link: 'https://allyhasawebsite.com/',
    tags: ['React', 'Design', 'Portfolio'],
    color: 'B7CCB0'
  },
  {
    category: 'software',
    title: 'Pac-Man Clone',
    desc: 'A browser-based Pac-Man remake with customizable ghost speed, dynamic obstacles, and difficulty settings',
    icon: '🕹️',
    link: 'https://github.com/LaoAronn/Bootleg-Pacman',
    tags: ['JavaScript', 'Game Dev', 'Canvas API'],
    color: '9EDDDC'
  },
  {
    category: 'software',
    title: 'UBC Basketball Roster Log',
    desc: 'Application managing team rosters',
    icon: '🏀',
    link: 'https://github.com/LaoAronn/UBC-mbb-log',
    tags: ['React', 'Sports', 'Web App'],
    color: 'D0B9EA'
  },
  {
    category: 'software',
    title: 'Digit Mastermind #',
    desc: 'A terminal strategy game where you crack a hidden number code using positional feedback each round',
    icon: '🔢',
    link: 'https://github.com/LaoAronn/Digit-Mastermind',
    tags: ['Game', 'Logic', 'Interactive'],
    color: 'EBAC9D'
  },
  {
    category: 'data',
    title: 'Predicting Precipitation Rates',
    desc: 'Using K-nearest neighbors regression for weather prediction',
    icon: '☂️',
    link: 'https://github.com/LaoAronn/Precipitation-Predictability-London-',
    tags: ['Python', 'KNN', 'Statistics'],
    color: 'EFB89B'
  },
  {
    category: 'data',
    title: 'Spotify Music Popularity Model',
    desc: 'Linear regression analysis of streaming success factors',
    icon: '🎵',
    link: 'https://github.com/LaoAronn/Spotify-Regression-Model',
    tags: ['Regression', 'Data Science', 'Analytics'],
    color: 'AEBBF3'
  },
  {
    category: 'data',
    title: 'Credit Card Default Classification',
    desc: 'Comparing supervised learning models for credit risk prediction',
    icon: '💳',
    link: 'https://github.com/LaoAronn/CC-Default-Classification',
    tags: ['Classification', 'ML', 'Risk Analysis'],
    color: 'C9D99F'
  },
  {
    category: 'data',
    title: 'Time Series Data Analysis',
    desc: 'ARIMA, GARCH, and spectral methods for forecasting',
    icon: '⏳',
    link: 'https://github.com/LaoAronn/tseries',
    tags: ['ARIMA', 'Forecasting', 'Statistics'],
    color: 'EFC7A5'
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('software');
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project) => {
    if (project.link && project.link !== '-') {
      window.open(project.link, '_blank');
    }
  };

  const handleMouseMove = (e, index) => {
    setHoveredCardIndex(index);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (
    <section id="all-projects" className="py-16 lg:py-24 px-4 sm:px-6">
      
      <div className="container">

        {/* Category Filter */}
        <div className="flex gap-2 sm:gap-3 justify-center mb-4 lg:mb-8">
          {['software', 'data'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#e53e3e] to-[#cf3a3a] text-white shadow-lg'
                  : 'bg-zinc-200 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700/60'
              }`}
            >
              {category === 'software' ? 'Software Development' : 'Data Analysis'}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              className={`group relative rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800/70 dark:to-zinc-900/70 border border-zinc-200 dark:border-zinc-700/40 dark:backdrop-blur-sm transition-all duration-300 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 ${
                project.link && project.link !== '-' 
                  ? 'cursor-pointer hover:border-sky-400 dark:hover:border-sky-400/50 hover:bg-gradient-to-br hover:from-zinc-200 hover:to-zinc-100 dark:hover:from-zinc-700/80 dark:hover:to-zinc-800/80 hover:shadow-lg dark:hover:shadow-lg hover:shadow-sky-300/20 dark:hover:shadow-sky-400/20' 
                  : 'opacity-75'
              }`}
            >
              
              {/* Icon/Preview - Left side */}
              <div className="flex-shrink-0 flex items-center justify-center w-full sm:w-24 lg:w-32 h-24 lg:h-32 bg-zinc-200 dark:bg-zinc-800/50 rounded-lg text-4xl lg:text-6xl">
                {project.icon}
              </div>

              {/* Content - Right side */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* Header with title and link icon */}
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-50 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400/60 group-hover:text-sky-400 transition-colors flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>

                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 mb-4 sm:mb-6 line-clamp-2 text-left">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-zinc-200 dark:bg-zinc-800/60 border border-zinc-300 dark:border-zinc-700/60 rounded-full text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-300 group-hover:bg-sky-200 dark:group-hover:bg-sky-500/20 group-hover:border-sky-400 dark:group-hover:border-sky-400/50 group-hover:text-sky-900 dark:group-hover:text-sky-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Global Tooltip */}
        {hoveredCardIndex !== null && (
          <div
            className="fixed bg-sky-500 dark:bg-sky-600 text-white text-xs sm:text-sm px-3 py-2 rounded-lg pointer-events-none z-50 whitespace-nowrap shadow-lg"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y + 20}px`,
            }}
          >
            Click to Open
          </div>
        )}

      </div>

    </section>
  );
};

export default Projects;
