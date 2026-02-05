/* Components */
import ProjectCard from "./ProjectCard"
import {useState} from "react";

const works = [
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

const Work = () => {

  const[activeTab, setActiveTab] = useState("software");

  const filteredWorks = works.filter(
    project => project.category === activeTab
  );

  return (
    <section id="work" className="section">
      <div className="container">

        {/** Project Header */}
        <div class="inline-flex items-center justify-center w-full reveal-up pb-15 ">
          <hr class="w-full h-1 my-8 bg-gray-100 border-0 rounded-sm dark:bg-zinc-800"/>

          <span class="absolute px-3 headline-2 -translate-x-1/2 left-1/2 dark:text-white dark:bg-zinc-900">
            My Projects
          </span>
        </div>
        
        
        <div className="flex justify-center pb-15  reveal-up">
          <nav className="flex overflow-x-auto items-center p-1 space-x-1 md:text-sm text-xs backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl shadow-lg">

            {["software", "data"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center h-9 px-6 font-medium rounded-xl transition-all duration-300
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

      
        <div className="grid grid-cols-1">
          {filteredWorks.map(({ title, tags, projectLink, desc }, key) => (
            <ProjectCard 
              key={key}
              title={title}
              tags={tags}
              projectLink={projectLink}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work