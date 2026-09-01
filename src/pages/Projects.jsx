/* Node Modules */
import { useState } from "react";

/* Components */
import ProjectCard from "../components/ProjectCard";

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
    desc: 'Inspired by RottenTomatoes, a full-stack platform for browsing, rating, and reviewing movies with user authentication and persistent storage',
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

const categories = [
  { key: 'software', label: 'Software Development' },
  { key: 'data', label: 'Data Analysis' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  const filteredProjects = allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="all-projects" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="container">

        {/* Category Filter */}
        <div className="mb-8 flex justify-center gap-2 sm:gap-3 lg:mb-12">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`rounded-lg border-2 px-4 py-2 text-xs font-semibold transition-colors sm:px-6 sm:py-2.5 sm:text-sm ${
                activeCategory === key
                  ? 'border-zinc-900 bg-zinc-900 text-zinc-50 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900'
                  : 'border-zinc-900/30 bg-transparent text-zinc-700 hover:border-zinc-900 dark:border-zinc-50/30 dark:text-zinc-300 dark:hover:border-zinc-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              desc={project.desc}
              tags={project.tags}
              icon={project.icon}
              color={project.color}
              link={project.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;