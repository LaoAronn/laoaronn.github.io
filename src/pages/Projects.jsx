import { useState, useRef, useEffect } from "react";

const allProjects = [
  {
    category: 'software',
    title: 'MyBinder',
    desc: 'Online Pokemon Binder showcase',
    icon: '📱',
    link: '-'
  },
  {
    category: 'software',
    title: 'ScanAhead',
    desc: 'medical triage platform',
    icon: '🩺',
    link: 'https://github.com/LaoAronn/ScanAhead'
  },
  {
    category: 'software',
    title: 'Movie Review Website',
    desc: 'Full-Stack Development project on a Movie review platform',
    icon: '🍿',
    link: 'https://github.com/LaoAronn/Movie-Website'
  },
  {
    category: 'software',
    title: 'Game Platform Systems',
    desc: 'Database for organizing game info and reviews',
    icon: '🎮',
    link: 'https://github.com/LaoAronn/Game-Platform-Systems-'
  },
  {
    category: 'software',
    title: 'CookAI',
    desc: 'Generates recipes from ingredient photos',
    icon: '🥘',
    link: 'https://devpost.com/software/cook-ai'
  },
  {
    category: 'software',
    title: 'Allyanna Art Portfolio 🎨',
    desc: 'Portfolio showcase made by her brother.',
    icon: '🎨',
    link: 'https://allyhasawebsite.com/'
  },
  {
    category: 'software',
    title: 'Pac-Man Clone',
    desc: 'Interactive game with difficulty levels',
    icon: '🕹️',
    link: 'https://github.com/LaoAronn/Bootleg-Pacman'
  },
  {
    category: 'software',
    title: 'UBC Basketball Roster Log',
    desc: 'Application managing team rosters',
    icon: '🏀',
    link: 'https://github.com/LaoAronn/UBC-mbb-log'
  },
  {
    category: 'software',
    title: 'Digit Mastermind #',
    desc: 'Code-breaking game with real-time feedback',
    icon: '🔢',
    link: 'https://github.com/LaoAronn/Digit-Mastermind'
  },
  {
    category: 'data',
    title: 'Predicting Precipitation Rates',
    desc: 'Using K-nearest neighbors regression for weather prediction',
    icon: '☂️',
    link: 'https://github.com/LaoAronn/Precipitation-Predictability-London-'
  },
  {
    category: 'data',
    title: 'Spotify Music Popularity Model',
    desc: 'Linear regression analysis of streaming success factors',
    icon: '🎵',
    link: 'https://github.com/LaoAronn/Spotify-Regression-Model'
  },
  {
    category: 'data',
    title: 'Credit Card Default Classification',
    desc: 'Comparing supervised learning models for credit risk prediction',
    icon: '💳',
    link: 'https://github.com/LaoAronn/CC-Default-Classification'
  },
  {
    category: 'data',
    title: 'Time Series Data Analysis',
    desc: 'ARIMA, GARCH, and spectral methods for forecasting',
    icon: '⏳',
    link: 'https://github.com/LaoAronn/tseries'
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('software');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCardsHovered, setIsCardsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const carouselRef = useRef(null);

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentProjectIndex(0);
  };

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
    setIsTouchDevice(true);
  };

  const handleMouseEnter = () => {
    setIsTouchDevice(false);
    setIsCardsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardsHovered(false);
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;
    
    // Swipe down (diff is negative means touch moved down)
    if (diff < -50) {
      nextProject();
    }
  };

  const handleWheel = (e) => {
    if (isTransitioning || !isCardsHovered) return;
    // Prevent default scrolling behavior
    e.preventDefault();
    // Scroll down to go to next project
    if (e.deltaY > 0) {
      nextProject();
    }
  };

  const currentProject = filteredProjects[currentProjectIndex];

  useEffect(() => {
    if (isCardsHovered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCardsHovered]);

  useEffect(() => {
    const wheelHandler = (e) => {
      if (isTransitioning || !isCardsHovered) return;
      // Prevent default scrolling behavior
      e.preventDefault();
      // Scroll down to go to next project
      if (e.deltaY > 0) {
        nextProject();
      }
    };

    const element = carouselRef.current;
    if (element) {
      element.addEventListener('wheel', wheelHandler, { passive: false });
      return () => {
        element.removeEventListener('wheel', wheelHandler);
      };
    }
  }, [isCardsHovered, isTransitioning]);

  return (
    <section id="all-projects" className="relative w-full h-screen overflow-hidden flex flex-col">
      
      <div className="w-full h-full flex flex-col items-center justify-center px-4">
        
        {/* Category Filter Buttons */}
        <div className="sticky top-0 z-20 flex gap-1.5 sm:gap-2 md:gap-3 justify-center bg-gradient-to-b from-zinc-900 to-transparent py-1.5 sm:py-2 md:py-3 px-2">
          {['software', 'data'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 sm:px-4 md:px-6 py-0.5 sm:py-1 md:py-2 rounded-md sm:rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-[10px] sm:text-xs md:text-sm whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/20'
              }`}
            >
              {category === 'software' ? 'Software Development' : 'Data Analytics'}
            </button>
          ))}
        </div>

        {/* Flashcard Display */}
        <div 
          className="flex flex-col items-center justify-center gap-2 flex-1 relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{ overscrollBehavior: 'contain' }}
          ref={carouselRef}
        >
          
          {/* Stacked Cards Container */}
          <div className="relative w-full max-w-[240px] sm:max-w-[320px] md:max-w-2xl lg:max-w-4xl h-auto aspect-video">
            {/* Render 3 cards for stacked effect */}
            {[0, 1, 2].map((offset) => {
              const cardIndex = (currentProjectIndex + offset) % filteredProjects.length;
              const project = filteredProjects[cardIndex];
              
              return (
                <div
                  key={offset}
                  className="absolute w-full bg-white/5 border-2 border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-4 md:p-8 lg:p-12 h-full flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-500 ease-out"
                  style={{
                    transform: `translateY(${offset * 20}px) scale(${1 - offset * 0.035})`,
                    zIndex: 100 - offset,
                    opacity: offset === 0 ? 1 : 0.65 - offset * 0.05,
                    boxShadow: offset > 0 ? `0 ${8 + offset * 4}px ${16 + offset * 8}px rgba(0,0,0,0.3)` : 'none'
                  }}
                >
                  {/* Icon */}
                  <div className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl mb-1 sm:mb-2 md:mb-4 lg:mb-8 flex-shrink-0">
                    {project.icon}
                  </div>

                  {/* Title with description */}
                  <div className="text-center mb-1 sm:mb-2 md:mb-4 lg:mb-8 flex-1 flex flex-col justify-center min-w-0">
                    <h3 className="text-sm sm:text-lg md:text-3xl lg:text-5xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2 lg:mb-4 leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-base lg:text-xl text-zinc-300 max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-xl line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  {/* Link button - only show on top card */}
                  {offset === 0 && project.link && project.link !== '-' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 sm:mt-2 md:mt-4 lg:mt-6 px-3 sm:px-4 md:px-6 lg:px-8 py-0.5 sm:py-1 md:py-2 lg:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md sm:rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap"
                    >
                      View Project
                    </a>
                  )}

                  {/* Project counter - only on top card */}
                  {offset === 0 && (
                    <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-8 text-zinc-500 text-[10px] sm:text-xs">
                      {currentProjectIndex + 1} / {filteredProjects.length}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Swipe hint */}
          <div className="text-zinc-500 text-[10px] sm:text-xs mt-1 animate-bounce px-2 text-center">
            Swipe or scroll to view next project
          </div>

          {/* Cursor-following tooltip - only on non-touch devices and desktop */}
          {isCardsHovered && !isTouchDevice && (typeof window !== 'undefined' && window.innerWidth >= 1024) && (
            <div
              className="fixed bg-zinc-900 border border-sky-400/50 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg backdrop-blur-sm z-40 pointer-events-none"
              style={{
                left: `${mousePos.x + 12}px`,
                top: `${mousePos.y + 12}px`,
              }}
            >
              Click to Open
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;
