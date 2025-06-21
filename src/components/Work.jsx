/* Components */
import ProjectCard from "./ProjectCard"

const works = [
  {
    title: 'Movie Review Website 🍿',
    tags: ['Full-Stack Development', 'Web Server'],
    projectLink: 'https://github.com/LaoAronn/Movie-Website'
  },
  {
    title: 'Game Platform Systems 🎮',
    tags: ['Database', 'System Design'],
    projectLink: 'https://github.com/LaoAronn/Game-Platform-Systems-'
  },
  {
    title: 'CookAI 🥘',
    tags: ['UI Development', 'API', 'AI/ML'],
    projectLink: 'https://devpost.com/software/cook-ai'
  },
  {
    title: 'Pacman Game 🕹️',
    tags: ['Web Development', 'Game Development'],
    projectLink: 'https://github.com/LaoAronn/Bootleg-Pacman'
  },
  {
    title: 'UBC Men’s Basketball Team Roster Log 🏀',
    tags: ['GUI Application'],
    projectLink: 'https://github.com/LaoAronn/UBC-mbb-log'
  },
  {
    title: 'Digit Mastermind #️⃣',
    tags: ['Game Development'],
    projectLink: 'https://github.com/LaoAronn/Digit-Mastermind'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 gap-x-4 gap-y-5">
          {works.map(({ title, tags, projectLink }, key) => (
            <ProjectCard 
              key={key}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work