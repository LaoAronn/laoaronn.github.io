
const aboutItems = [
  {
    workid: 1,
    label: 'User Engagement Improvement',
    number: 90
  },
  {
    workid: 1,
    label: 'Bounce Rate Reduction',
    number: 80
  }
];

const workExperience = [
  {
    workid: 1,
    company: 'Verzena',
    position: 'Software Engineering Intern',
    period: 'August - December 2024',
    desc: 'Collaborated closely with 2 team members at a startup, contributing to UI and logo design using Figma and built responsive web pages with JSX and Tailwind CSS. Maintained code quality through version control, documentation, and collaborative development workflows.',
  },
];

const About = () => {
  return (
    <section id="about" className="section">

      <div className="container px-4 sm:px-6">

        {/** Work Experience List */}
        {workExperience.map(({ workid, company, position, period, desc }, key) => {

          const relatedAboutItems = aboutItems.filter(item => item.workid === workid);

          return (
            <div 
              key={key} 
              className="text-left bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 
              hover:from-zinc-800/60 hover:to-zinc-900/60
              p-4 sm:p-6 md:p-10 mb-4 sm:mb-5 
              rounded-xl sm:rounded-2xl reveal-up
              border border-zinc-700/30 hover:border-sky-400/30
              transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10"
            >

              {/* Layout container */}
              <div className="grid gap-4 lg:grid-cols-[auto_1fr]">

                {/* Header Section */}
                <div className="flex flex-row items-center gap-4">

                  {/* Logo */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-sky-400/50 hover:border-sky-400 transition-colors duration-300 shadow-lg shadow-sky-400/20">
                    <img 
                      src="/images/verzena.png" 
                      alt="Verzena logo" 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Text Info */}
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-bold dark:text-white">
                      {position}
                    </p>
                    <p className="text-xs sm:text-sm text-sky-400 font-semibold">
                      {company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {period}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="mt-3 sm:mt-4">
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {desc}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-700/50">

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      {relatedAboutItems.map(({ label, number }, subKey) => (
                        <div key={subKey} className="hover:scale-105 transition-transform duration-200">
                          <div className="flex items-center">
                            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
                              {number}
                            </span>
                            <span className="text-sky-400 font-bold text-lg sm:text-xl md:text-2xl ml-0.5">
                              %
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-400">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>


    </section>
  )
}

export default About

