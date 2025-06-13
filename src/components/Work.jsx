/* Components */
import ProjectCard from "./ProjectCard"

const works = [
  {
    title: 'Movie Review Website',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://github.com/LaoAronn/Movie-Website'
  },
  {
    title: 'Game Platform Systems',
    tags: ['API', 'SPA'],
    projectLink: ''
  },
  {
    title: 'CookAI',
    tags: ['Development', 'API'],
    projectLink: 'https://devpost.com/software/cook-ai'
  },
  {
    title: 'Pacman Game',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/LaoAronn/Bootleg-Pacman'
  },
  {
    title: 'UBC Men’s Basketball Team Roster Log',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/LaoAronn/UBC-mbb-log'
  },
  {
    title: 'Digit Mastermind',
    tags: ['Web-design', 'Development'],
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

        <div className="grid gap-x-4 gap-y-5 grid-cols-1">
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