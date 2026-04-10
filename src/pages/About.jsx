
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

        {/** Work Header */}
        <div className="inline-flex items-center justify-center w-full reveal-up pb-10 sm:pb-15">
          <hr className="w-full h-[1px] my-6 sm:my-8 bg-gray-100 border-0 rounded-sm dark:bg-zinc-800"/>

          <span className="absolute px-3 headline-2 text-sm sm:text-base md:text-lg 
            -translate-x-1/2 left-1/2 dark:text-white dark:bg-zinc-900">
            My Experience
          </span>
        </div>

        {/** Work Experience List */}
        {workExperience.map(({ workid, company, position, period, desc }, key) => {

          const relatedAboutItems = aboutItems.filter(item => item.workid === workid);

          return (
            <div 
              key={key} 
              className="text-left bg-zinc-800/50 
              p-4 sm:p-6 md:p-10 mb-4 sm:mb-5 
              rounded-xl sm:rounded-2xl reveal-up"
            >

              {/* Layout container */}
              <div className="grid gap-4 lg:grid-cols-[auto_1fr]">

                {/* Header Section */}
                <div className="flex flex-row items-center gap-4">

                  {/* Logo */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-neutral-200">
                    <img 
                      src="/images/verzena.png" 
                      alt="Verzena logo" 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Text Info */}
                  <div>
                    <p className="text-base sm:text-lg font-bold dark:text-white">
                      {position}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
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
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl">

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      {relatedAboutItems.map(({ label, number }, subKey) => (
                        <div key={subKey}>
                          <div className="flex items-center">
                            <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
                              {number}
                            </span>
                            <span className="text-sky-400 font-semibold text-lg sm:text-xl md:text-2xl">
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

