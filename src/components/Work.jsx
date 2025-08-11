/* Components */
import ProjectCard from "./ProjectCard"

const works = [
  {
    title: 'Movie Review Website 🍿',
    tags: ['Svelte', 'SQLite', 'Php', 'XAMPP', 'HTML & CSS', 'JavaScript'],
    projectLink: 'https://github.com/LaoAronn/Movie-Website',
    desc: 'Full-Stack Development project on a Movie review platform with a database for user login, rating, and review system.'
  },
  {
    title: 'Game Platform Systems 🎮',
    tags: ['PostgreSQL', 'UML Diagram'],
    projectLink: 'https://github.com/LaoAronn/Game-Platform-Systems-',
    desc: 'Database for organizing game info, player reviews, and news using relational schema'
  },
  {
    title: 'CookAI 🥘',
    tags: ['React', 'JavaScript', 'MongoDB', 'AI/ML'],
    projectLink: 'https://devpost.com/software/cook-ai',
    desc: 'Generates recipes from ingredient photos with AI suggestions and responsive UI'
  },
  {
    title: 'Pac-Man Clone 🕹️',
    tags: ['Web/Game Development', 'JavaScript', 'HTML & CSS'],
    projectLink: 'https://github.com/LaoAronn/Bootleg-Pacman',
    desc: 'Interactive Pac-Man game with a twist of difficulty levels and obstacle mechanics'
  },
  {
    title: 'UBC Men’s Basketball Team Roster Log 🏀',
    tags: ['GUI Application', 'Java'],
    projectLink: 'https://github.com/LaoAronn/UBC-mbb-log',
    desc: 'Application managing and saving basketball team rosters with file I/O support'
  },
  {
    title: 'Digit Mastermind #️⃣',
    tags: ['Game Development', 'Java'],
    projectLink: 'https://github.com/LaoAronn/Digit-Mastermind',
    desc: 'Code-breaking game with real-time terminal input and feedback loop'
  },
  {
    title: 'My Sister Art Portfolio 🎨',
    tags: ['Web Development', 'React'],
    projectLink: 'https://github.com/LaoAronn/Digit-Mastermind',
    desc: ' - '
  },
];

const Work = () => {
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
        

        <div className="grid grid-cols-1">
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