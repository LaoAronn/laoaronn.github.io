import { useState } from "react";

const allProjects = [
  {
    category: 'software',
    title: 'MyBinder',
    desc: 'A personal Pokemon binder to showcase and organize your card collection online',
    icon: '📱',
    link: '-',
    tags: ['React', 'JavaScript', 'UI Design']
  },
  {
    category: 'software',
    title: 'ScanAhead',
    desc: 'A medical triage prototype where patients submit symptoms via voice, images, and 3D scans to generate AI-structured case files for doctors',
    icon: '🩺',
    link: 'https://github.com/LaoAronn/ScanAhead',
    tags: ['Python', 'Healthcare', 'Machine Learning']
  },
  {
    category: 'software',
    title: 'Movie Review Website',
    desc: 'A full-stack platform for browsing, rating, and reviewing movies with user authentication and persistent storage',
    icon: '🍿',
    link: 'https://github.com/LaoAronn/Movie-Website',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    category: 'software',
    title: 'Game Platform Systems',
    desc: 'A collaborative database application for managing game metadata, third-party news, and user-generated reviews',
    icon: '🎮',
    link: 'https://github.com/LaoAronn/Game-Platform-Systems-',
    tags: ['Database', 'SQL', 'Backend']
  },
  {
    category: 'software',
    title: 'CookAI',
    desc: 'An AI recipe generator that produces personalized meals from a photo of whatever ingredients you have left at home',
    icon: '🥘',
    link: 'https://devpost.com/software/cook-ai',
    tags: ['Python', 'AI', 'Computer Vision']
  },
  {
    category: 'software',
    title: 'Allyanna Art Portfolio 🎨',
    desc: 'A custom art portfolio website built for my sister, designed to showcase her work in a clean and personal way',
    icon: '🎨',
    link: 'https://allyhasawebsite.com/',
    tags: ['React', 'Design', 'Portfolio']
  },
  {
    category: 'software',
    title: 'Pac-Man Clone',
    desc: 'A browser-based Pac-Man remake with customizable ghost speed, dynamic obstacles, and difficulty settings',
    icon: '🕹️',
    link: 'https://github.com/LaoAronn/Bootleg-Pacman',
    tags: ['JavaScript', 'Game Dev', 'Canvas API']
  },
  {
    category: 'software',
    title: 'UBC Basketball Roster Log',
    desc: 'Application managing team rosters',
    icon: '🏀',
    link: 'https://github.com/LaoAronn/UBC-mbb-log',
    tags: ['React', 'Sports', 'Web App']
  },
  {
    category: 'software',
    title: 'Digit Mastermind #',
    desc: 'A terminal strategy game where you crack a hidden number code using positional feedback each round',
    icon: '🔢',
    link: 'https://github.com/LaoAronn/Digit-Mastermind',
    tags: ['Game', 'Logic', 'Interactive']
  },
  {
    category: 'data',
    title: 'Predicting Precipitation Rates',
    desc: 'Using K-nearest neighbors regression for weather prediction',
    icon: '☂️',
    link: 'https://github.com/LaoAronn/Precipitation-Predictability-London-',
    tags: ['Python', 'KNN', 'Statistics']
  },
  {
    category: 'data',
    title: 'Spotify Music Popularity Model',
    desc: 'Linear regression analysis of streaming success factors',
    icon: '🎵',
    link: 'https://github.com/LaoAronn/Spotify-Regression-Model',
    tags: ['Regression', 'Data Science', 'Analytics']
  },
  {
    category: 'data',
    title: 'Credit Card Default Classification',
    desc: 'Comparing supervised learning models for credit risk prediction',
    icon: '💳',
    link: 'https://github.com/LaoAronn/CC-Default-Classification',
    tags: ['Classification', 'ML', 'Risk Analysis']
  },
  {
    category: 'data',
    title: 'Time Series Data Analysis',
    desc: 'ARIMA, GARCH, and spectral methods for forecasting',
    icon: '⏳',
    link: 'https://github.com/LaoAronn/tseries',
    tags: ['ARIMA', 'Forecasting', 'Statistics']
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project) => {
    if (project.link && project.link !== '-') {
      window.open(project.link, '_blank');
    }
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
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/20'
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
              className={`group relative rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm transition-all duration-300 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 ${
                project.link && project.link !== '-' 
                  ? 'cursor-pointer hover:border-sky-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 hover:shadow-lg hover:shadow-sky-400/20' 
                  : 'opacity-75'
              }`}
            >
              
              {/* Icon/Preview - Left side */}
              <div className="flex-shrink-0 flex items-center justify-center w-full sm:w-24 lg:w-32 h-24 lg:h-32 bg-white/5 rounded-lg text-4xl lg:text-6xl">
                {project.icon}
              </div>

              {/* Content - Right side */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* Header with title and link icon */}
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400/60 group-hover:text-sky-400 transition-colors flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>

                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 mb-4 sm:mb-6 line-clamp-2 text-left">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 border border-white/20 rounded-full text-[11px] sm:text-xs text-zinc-300 group-hover:bg-sky-500/20 group-hover:border-sky-400/50 group-hover:text-sky-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Projects;
