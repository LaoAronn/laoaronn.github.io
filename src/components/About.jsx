
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

      <div className="container">

        {/** Work Header */}
        <div className="inline-flex items-center justify-center w-full reveal-up pb-15 ">
          <hr className="w-full h-1 my-8 bg-gray-100 border-0 rounded-sm dark:bg-zinc-800"/>

          <span className="absolute px-3 headline-2 -translate-x-1/2 left-1/2 dark:text-white dark:bg-zinc-900">
            My Experience
          </span>

        </div>

        
        {/** Work Experience List */}
        {workExperience.map(({ workid, company, position, period, desc }, key) => {
          {/** Tag work outcome*/}
          const relatedAboutItems = aboutItems.filter(item => item.workid === workid);

          return (
            <div key={key} className="text-left bg-zinc-800/50 p-7 mb-5 rounded-2xl md:p-12 reveal-up">

              <div className="-m-0.5px grid gap-1 p-1 md:px-2 md:pb-2 lg:grid-cols-[auto_auto] lg:gap-2 lg:py-3 xl:gap-3 xl:pr-3">
                <div className="grid grid-cols-2">

                  <div className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <div className="flex-shrink-0 w-12 h-12 mr-4 rounded-full overflow-hidden border border-neutral-200">
                        <img src="/images/verzena.png" alt="Verzena logo" className="w-full h-full object-cover" />
                      </div>

                      <div>
                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                          {position}
                        </a>
                        <p className="text-base text-gray-500 dark:text-gray-400">{company}</p>
                        <p className="text-base text-gray-500 dark:text-gray-400">{period}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="text-md">{desc}</p>

                    <div className="text-left p-4 rounded-2xl reveal-up">

                    <div className="flex justify-left flex-wrap items-center gap-4 md:gap-7">
                      {relatedAboutItems.map(({ label, number }, subKey) => (
                        <div key={subKey}>
                          <div className="flex items-center">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">%</span>
                          </div>
                          <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                      ))}
                    </div>

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

