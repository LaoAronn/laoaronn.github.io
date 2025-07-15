
const aboutItems = [
  {
    label: 'User Engagement Improvement',
    number: 20
  },
  {
    label: 'Documentation',
    number: 10
  }
];

const workExperience = [
  {
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
        <div class="inline-flex items-center justify-center w-full reveal-up pb-15 ">
          <hr class="w-full h-1 my-8 bg-gray-100 border-0 rounded-sm dark:bg-zinc-800"/>

          <span class="absolute px-3 headline-2 -translate-x-1/2 left-1/2 dark:text-white dark:bg-zinc-900">
            My Experience
          </span>

        </div>

          <div className="text-left bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            
              {/** Work Experience List */}
              {workExperience.map(({ company, position, period, desc }, key) => (

                <div className=" -m-0.5px grid gap-1 p-1 md:grid-cols-[8fr_13fr] md:px-2 md:pb-2 lg:grid-cols-[auto_auto] lg:gap-2 lg:py-3 xl:gap-3 xl:pr-3">

                  <h2 class="font-body text-2xl leading-heading-2 font-bold normal-case md:text-3xl md:leading-heading lg:text-5xl lg:leading-heading-2">
                    {company}
                  </h2>

                  <div class="w-full">
                    <p class="text-md">
                      {desc}
                    </p>
                  </div>

                </div>  

              ))}
            

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number}, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">%</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            </div>


          </div>
      </div>

    </section>
  )
}

export default About

