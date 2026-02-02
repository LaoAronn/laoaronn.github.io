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
    desc: ' - '
  },
  {
    category: 'data',
    title: 'Time Series Data Analysis ⏳',
    tags: ['R', 'LaTeX'],
    projectLink: 'https://github.com/LaoAronn/tseries',
    desc: ' - '
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
        
        
        <div className="flex justify-center">
          <nav className="flex overflow-x-auto items-center p-1 space-x-1 text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">

            <button
              role="tab"
              type="button"
              onClick={() => setActiveTab("software")}
              className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none transition-all
                ${activeTab === "software"
                  ? "bg-sky-500 text-white shadow"
                  : "dark:text-white hover:dark:text-sky-400 dark:bg-gray-500/20"}
              `}
            >
              Software Development
            </button>

            <button
              role="tab"
              type="button"
              onClick={() => setActiveTab("data")}
              className={`flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none transition-all
                ${activeTab === "data"
                  ? "bg-sky-500 text-white shadow"
                  : "dark:text-white hover:dark:text-sky-400 dark:bg-gray-500/20"}
              `}
            >
              Data Analytics
            </button>

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