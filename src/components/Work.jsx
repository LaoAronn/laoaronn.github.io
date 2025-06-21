/* Components */
import ProjectCard from "./ProjectCard"

const works = [
  {
    title: 'Movie Review Website 🍿',
    tags: ['Full-Stack Development', 'Web Server'],
    projectLink: 'https://github.com/LaoAronn/Movie-Website',
    desc: 'Movie review platform with user login, rating, and review system'
  },
  {
    title: 'Game Platform Systems 🎮',
    tags: ['Database', 'System Design'],
    projectLink: 'https://github.com/LaoAronn/Game-Platform-Systems-',
    desc: 'Database for organizing game info, player reviews, and news using relational schema'
  },
  {
    title: 'CookAI 🥘',
    tags: ['UI Development', 'API', 'AI/ML'],
    projectLink: 'https://devpost.com/software/cook-ai',
    desc: 'Generates recipes from ingredient photos with AI suggestions and responsive UI'
  },
  {
    title: 'Pac-Man Clone 🕹️',
    tags: ['Web Development', 'Game Development'],
    projectLink: 'https://github.com/LaoAronn/Bootleg-Pacman',
    desc: 'Interactive Pac-Man game with a twist of difficulty levels and obstacle mechanics'
  },
  {
    title: 'UBC Men’s Basketball Team Roster Log 🏀',
    tags: ['GUI Application'],
    projectLink: 'https://github.com/LaoAronn/UBC-mbb-log',
    desc: 'Application managing and saving basketball team rosters with file I/O support'
  },
  {
    title: 'Digit Mastermind #️⃣',
    tags: ['Game Development'],
    projectLink: 'https://github.com/LaoAronn/Digit-Mastermind',
    desc: 'Code-breaking game with real-time terminal input and feedback loop.'
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
          {works.map(({ title, tags, projectLink, desc }, key) => (
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