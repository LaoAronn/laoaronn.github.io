/* Components */
import ProjectCard from "../components/ProjectCard"
import {useState, useRef, useEffect} from "react";

const works = [
  {
    category: 'software',
    title: 'ScanAhead 👨‍⚕️',
    tags: ['React', 'Gemini AI', 'ElevenLabs (Speech AI)', 'KIRIEngine (3D Modelling)', 'PostGreSQL'],
    projectLink: 'https://github.com/LaoAronn/ScanAhead',
    desc: '-'
  },
  {
    category: 'software',
    title: 'Movie Review Website 🍿',
    tags: ['Svelte', 'SQLite', 'Php', 'XAMPP', 'HTML & CSS', 'JavaScript'],
    projectLink: 'https://github.com/LaoAronn/Movie-Website',
    desc: 'Full-Stack Development project on a Movie review platform with a database for user login, rating, and review system.'
  },
  {
    category: 'software',
    title: 'Game Platform Systems 🎮',
    tags: ['PostgreSQL', 'UML Diagram'],
    projectLink: 'https://github.com/LaoAronn/Game-Platform-Systems-',
    desc: 'Database for organizing game info, player reviews, and news using relational schema'
  },
  {
    category: 'software',
    title: 'CookAI 🥘',
    tags: ['React', 'JavaScript', 'MongoDB', 'AI/ML'],
    projectLink: 'https://devpost.com/software/cook-ai',
    desc: 'Generates recipes from ingredient photos with AI suggestions and responsive UI'
  },
  {
    category: 'software',
    title: 'Pac-Man Clone 🕹️',
    tags: ['Web/Game Development', 'JavaScript', 'HTML & CSS'],
    projectLink: 'https://github.com/LaoAronn/Bootleg-Pacman',
    desc: 'Interactive Pac-Man game with a twist of difficulty levels and obstacle mechanics'
  },
  {
    category: 'software',
    title: 'UBC Men’s Basketball Team Roster Log 🏀',
    tags: ['GUI Application', 'Java'],
    projectLink: 'https://github.com/LaoAronn/UBC-mbb-log',
    desc: 'Application managing and saving basketball team rosters with file I/O support'
  },
  {
    category: 'software',
    title: 'Digit Mastermind #️⃣',
    tags: ['Game Development', 'Java'],
    projectLink: 'https://github.com/LaoAronn/Digit-Mastermind',
    desc: 'Code-breaking game with real-time terminal input and feedback loop'
  },
  {
    category: 'software',
    title: 'My Sister Art Portfolio 🎨',
    tags: ['Web Development', 'React'],
    projectLink: 'https://github.com/LaoAronn/Digit-Mastermind',
    desc: ' - '
  },
  {
    category: 'data',
    title: 'Predicting Percipitation Rates ☂️',
    tags: ['R', 'Jupyter Notebook'],
    projectLink: 'https://github.com/LaoAronn/Precipitation-Predictability-London-',
    desc: ' Using percipiation data from London ranging from 1979 to 2020, my project aims to find the best given factors to predict precipitation rates in London using K-nearest neighbors regression. '
  },
  {
    category: 'data',
    title: 'Modeling Music Popularity - Factors influencing Spotify Streams 🎵',
    tags: ['R', 'R Studio'],
    projectLink: 'https://github.com/LaoAronn/Spotify-Regression-Model',
    desc: ' An exploratory study analuzing Spotify data from 2023 using a linear regression model to identify factors influencing streaming success. The findings aim to inform broader understanding of music industry trends and consumption patterns. '
  },
  {
    category: 'data',
    title: 'Credit Card Default Classification 💳',
    tags: ['R', 'Jupyter Notebook'],
    projectLink: 'https://github.com/LaoAronn/CC-Default-Classification',
    desc: ' A study comparing supervised learning models (Logistic Regression, Random Forests, Gradient Boosted Trees, SVM) to assess their effectiveness in predicting credit default risk. '
  },
  {
    category: 'data',
    title: 'Time Series Data Analysis ⏳',
    tags: ['R', 'LaTeX'],
    projectLink: 'https://github.com/LaoAronn/tseries',
    desc: ' A study of stochastic modeling (ARIMA, GARCH), optimizing model parameters for forecasting, evaluating predictive performance with RMSE and MSE, and employing spectral and frequency-domain methods to examine periodic and cyclical patterns in time series data.'
  },
];

const Works = () => {

  const[activeTab, setActiveTab] = useState("software");
  const[cardIndex, setCardIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const lastWheelTime = useRef(0);

  const filteredWorks = works.filter(
    project => project.category === activeTab
  );

  const handleCardChange = (direction) => {
    if (direction === "next") {
      setCardIndex((prev) => (prev + 1) % filteredWorks.length);
    } else if (direction === "prev") {
      setCardIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length);
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  // Flash Card swiping
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (diff > 100) {
      handleCardChange("next");
    } else if (diff < -200) {
      handleCardChange("prev");
    }
  };

  const handleWheel = (e) => {
    const now = Date.now();
    
    // Throttle wheel events to 300ms
    if (now - lastWheelTime.current < 300) return;

    // Allow scrolling past the section if at the end/beginning
    const isAtEnd = cardIndex === filteredWorks.length - 1 && e.deltaY > 0;
    const isAtStart = cardIndex === 0 && e.deltaY < 0;
    
    if (isAtEnd || isAtStart) {
      return; // Allow default scroll behavior
    }

    e.preventDefault();
    lastWheelTime.current = now;

    if (e.deltaY > 0) {
      handleCardChange("next");
    } else if (e.deltaY < 0) {
      handleCardChange("prev");
    }
  };

  useEffect(() => {
    setCardIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [filteredWorks.length]);

  return (
    <section id="work" className="relative w-full py-8 md:py-12">
      <div className="w-full flex flex-col">

        {/** Project Categories */}
        <div className="flex justify-center pb-8 md:pb-10 px-4">
          <nav className="flex overflow-x-auto items-center p-1 space-x-1 text-xs md:text-sm backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl shadow-lg">
            {["software", "data"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center h-8 md:h-9 px-4 md:px-6 font-medium rounded-xl transition-all duration-300 whitespace-nowrap
                  ${activeTab === tab
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md scale-[1.02]"
                    : "text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-white/10"}
                `}
              >
                {tab === "software" ? "Software Development" : "Data Analytics"}
              </button>
            ))}
          </nav>
        </div>

        {/* Sticky Cards Container */}
        <div 
          ref={containerRef}
          className="sticky top-0 md:top-4 h-screen md:h-auto flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 z-30"
          style={{ minHeight: "clamp(400px, 100vh, 800px)" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full relative" style={{ maxWidth: "clamp(280px, 90vw, 600px)", aspectRatio: "1 / 1", height: "clamp(280px, 70vh, 500px)" }}>
            {filteredWorks.map((work, index) => {
              const offset = index - cardIndex;
              const isVisible = offset >= 0 && offset < 3;
              
              return (
                isVisible && (
                  <div
                    key={index}
                    className="absolute w-full h-full transition-all duration-500 ease-out rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-sky-50 to-blue-100 dark:from-zinc-800 dark:to-zinc-700"
                    style={{
                      transform: `translateY(${offset * 20}px) scale(${1 - offset * 0.05}) rotateZ(${offset * 2}deg)`,
                      zIndex: 100 - offset,
                      opacity: offset === 0 ? 1 : 0.6,
                    }}
                  >
                    <ProjectCard 
                      title={work.title}
                      tags={work.tags}
                      projectLink={work.projectLink}
                      desc={work.desc}
                      classes=""
                    />
                  </div>
                )
              );
            })}
          </div>

          {/* Card Navigation Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 md:mt-12 flex-wrap">
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              {cardIndex + 1} / {filteredWorks.length}
            </span>
            <div className="flex gap-1 flex-wrap justify-center">
              {filteredWorks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCardIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === cardIndex
                      ? "w-4 md:w-6 bg-sky-500"
                      : "w-2 bg-gray-400 dark:bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Spacer for scrolling */}
        <div className="h-screen md:h-96" />
      </div>
    </section>
  )
}

export default Works