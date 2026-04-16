import { useState, useRef } from "react";

const allProjects = [
  {
    category: 'software',
    title: 'ScanAhead 👨‍⚕️',
    desc: 'AI-powered medical imaging analysis platform',
    icon: '🏥',
    link: 'https://github.com/LaoAronn/ScanAhead'
  },
  {
    category: 'software',
    title: 'Movie Review Website 🍿',
    desc: 'Full-Stack Development project on a Movie review platform',
    icon: '🎬',
    link: 'https://github.com/LaoAronn/Movie-Website'
  },
  {
    category: 'software',
    title: 'Game Platform Systems 🎮',
    desc: 'Database for organizing game info and reviews',
    icon: '🎮',
    link: 'https://github.com/LaoAronn/Game-Platform-Systems-'
  },
  {
    category: 'software',
    title: 'CookAI 🥘',
    desc: 'Generates recipes from ingredient photos',
    icon: '🍳',
    link: 'https://devpost.com/software/cook-ai'
  },
  {
    category: 'software',
    title: 'Pac-Man Clone 🕹️',
    desc: 'Interactive game with difficulty levels',
    icon: '👾',
    link: 'https://github.com/LaoAronn/Bootleg-Pacman'
  },
  {
    category: 'software',
    title: 'UBC Basketball Roster Log 🏀',
    desc: 'Application managing team rosters',
    icon: '🏀',
    link: 'https://github.com/LaoAronn/UBC-mbb-log'
  },
  {
    category: 'software',
    title: 'Digit Mastermind #️⃣',
    desc: 'Code-breaking game with real-time feedback',
    icon: '🔢',
    link: 'https://github.com/LaoAronn/Digit-Mastermind'
  },
  {
    category: 'software',
    title: 'Sister Art Portfolio 🎨',
    desc: 'Elegant portfolio showcase website',
    icon: '🎨',
    link: 'https://allyhasawebsite.com/'
  },
  {
    category: 'data',
    title: 'Predicting Precipitation Rates ☂️',
    desc: 'Using K-nearest neighbors regression for weather prediction',
    icon: '☔',
    link: 'https://github.com/LaoAronn/Precipitation-Predictability-London-'
  },
  {
    category: 'data',
    title: 'Spotify Music Popularity Model 🎵',
    desc: 'Linear regression analysis of streaming success factors',
    icon: '🎶',
    link: 'https://github.com/LaoAronn/Spotify-Regression-Model'
  },
  {
    category: 'data',
    title: 'Credit Card Default Classification 💳',
    desc: 'Comparing supervised learning models for credit risk prediction',
    icon: '💰',
    link: 'https://github.com/LaoAronn/CC-Default-Classification'
  },
  {
    category: 'data',
    title: 'Time Series Data Analysis ⏳',
    desc: 'ARIMA, GARCH, and spectral methods for forecasting',
    icon: '📈',
    link: 'https://github.com/LaoAronn/tseries'
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('software');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [indexHovered, setIndexHovered] = useState(false);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);
  const carouselRef = useRef(null);

  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <section id="all-projects" className="relative w-full py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">All Projects</h2> */}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex gap-3 mb-12">
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
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
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

        {/* Footer Link with Interactive Index */}
        <div className="flex justify-end items-center gap-4 mt-12">
          {/* Interactive Overlapping Icons */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setIndexHovered(true)}
            onMouseLeave={() => {
              setIndexHovered(false);
              setHoveredProjectIndex(null);
            }}
          >
            <div className="flex items-center">
              {filteredProjects.map((project, index) => (
                <div key={index} className="relative group">
                  <button
                    onMouseEnter={() => setHoveredProjectIndex(index)}
                    onMouseLeave={() => setHoveredProjectIndex(null)}
                    className={`text-3xl md:text-4xl cursor-pointer transition-all duration-300 rounded-full p-2 hover:scale-125 hover:bg-zinc-700/50 ${
                      indexHovered ? '-mr-2' : '-mr-6'
                    }`}
                  >
                    {project.icon}
                  </button>
                  
                  {/* Tooltip on icon hover */}
                  {hoveredProjectIndex === index && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-sky-500/90 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap z-50 pointer-events-none">
                      {project.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-zinc-400 text-sm md:text-base">
            Total: {filteredProjects.length} {activeCategory === 'software' ? 'software' : 'data'} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
