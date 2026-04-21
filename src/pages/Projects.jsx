import { useState, useRef } from "react";

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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [indexHovered, setIndexHovered] = useState(false);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const carouselRef = useRef(null);

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="all-projects" className="relative w-full py-16 md:py-24">
      
      <div className="max-w-screen-2xl mx-auto px-4">
        
        {/* Category Filter Buttons */}
        <div className="flex gap-3 mb-12 justify-center">
          {['software', 'data'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/20'
              }`}
            >
              {category === 'software' ? 'Software Development' : 'Data Analytics'}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory relative"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-full sm:w-96 group cursor-pointer snap-start"
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 h-80 flex flex-col justify-between overflow-hidden relative transition-transform duration-300 hover:scale-105 shadow-xl border border-zinc-700/50">
                
                {/* GitHub Link - appears on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="flex items-center gap-2 bg-sky-500/90 px-3 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-sm font-semibold text-white">&lt;/&gt;</span>
                  </div>
                </div>

                {/* Icon/Image Area */}
                <div className="flex justify-center items-center flex-1 relative z-10">
                  <div className="text-6xl md:text-8xl">{project.icon}</div>
                </div>

                {/* Title & Description */}
                <div className="relative z-10">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    {project.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Cursor-following tooltip */}
        {isCarouselHovered && (
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

        {/* Footer Link with Interactive Index */}
        <div className="flex justify-center items-center gap-4 mt-12">
          
          {/* Interactive Overlapping Icons */}
          <div
            className="relative flex items-center px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm cursor-pointer hover:border-white/40 transition-colors"
            onMouseEnter={() => setIndexHovered(true)}
            onMouseLeave={() => {
              setIndexHovered(false);
              setHoveredProjectIndex(null);
            }}
          >
            <div className="flex items-center">
              {filteredProjects.map((project, index) => (
                <div key={index} className="relative group" style={{ zIndex: filteredProjects.length - index }}>
                  <button
                    className={`cursor-pointer transition-all duration-300 border-3 border-zinc-900 flex items-center justify-center shadow-lg hover:shadow-xl ${
                      indexHovered ? '-mr-2 md:-mr-3 text-2xl md:text-3xl p-2 md:p-3 rounded-lg' : '-mr-8 md:-mr-10 text-3xl md:text-4xl p-3 md:p-4 rounded-full'
                    }`}
                    style={{
                      backgroundColor: '#C60C30'
                    }}
                  >
                    {project.icon}
                  </button>
                </div>
              ))}
            </div>

            {/* Expanded Variant */}
            {indexHovered && (
              <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
                <div className="bg-zinc-950/95 border-2 border-white/30 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-md pointer-events-auto w-11/12 md:w-auto max-w-2xl max-h-[90vh] overflow-y-auto">
                  
                  {/* Icons Grid */}
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
                    {filteredProjects.map((project, index) => (
                      <div key={index} className="flex flex-col items-center gap-1 relative">
                        {/* Tooltip on icon hover - appears above */}
                        {hoveredProjectIndex === index && (
                          <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                            <div className="bg-zinc-900 border border-sky-400/50 text-white px-1.5 py-0.5 rounded text-xs font-semibold whitespace-nowrap shadow-lg backdrop-blur-sm">
                              {project.title}
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                                <div className="border-3 border-transparent border-t-zinc-900"></div>
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          onMouseEnter={() => setHoveredProjectIndex(index)}
                          onMouseLeave={() => setHoveredProjectIndex(null)}
                          onClick={() => {
                            if (project.link && project.link !== '-') {
                              window.open(project.link, '_blank');
                            }
                          }}
                          className="text-lg md:text-xl p-1.5 md:p-2 rounded-md border-2 border-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-full aspect-square cursor-pointer"
                          style={{
                            backgroundColor: '#C60C30'
                          }}
                        >
                          {project.icon}
                        </button>

                        {/* Project title below icon */}
                        <p className="text-zinc-400 text-xs text-center line-clamp-2 leading-tight">
                          {project.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
