const workExperience = [
  {
    workid: 1,
    company: 'Verzena',
    position: 'Software Engineering Intern',
    period: 'August - December 2024',
    desc: 'Launching a client-facing website for a Vancouver-based digital consultancy startup from the ground up',
    video: '/images/work/verzena_showcase.mp4',
  },
];

const About = () => {
  return (
    <section id="about" className="section">

      <div className="container px-4 sm:px-6">

        {/** Work Experience List */}
        {workExperience.map(({ workid, company, position, period, desc, video }, key) => {

          return (
            <div 
              key={key} 
              className="text-left relative overflow-hidden mx-auto
              hover:from-zinc-800/60 hover:to-zinc-900/60
              p-4 sm:p-6 md:p-10 mb-4 sm:mb-5 
              rounded-xl sm:rounded-2xl reveal-up
              border border-zinc-700/30 hover:border-sky-400/30
              transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10
              flex flex-col justify-end min-h-64 sm:min-h-80
              w-full max-w-xl sm:max-w-2xl"
            >
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10 rounded-xl sm:rounded-2xl"
              >
                <source src={video} type="video/mp4" />
              </video>

              {/* Shadow overlay */}
              <div className="absolute inset-0 bg-black/60 -z-10 rounded-xl sm:rounded-2xl"></div>

              {/* Content (bottom left) */}
              <div className="relative z-10 flex flex-col gap-3">
                
                {/* Logo and Company */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sky-400/50 hover:border-sky-400 transition-colors duration-300 shadow-lg shadow-sky-400/20">
                    <img 
                      src="/images/verzena.png" 
                      alt="Verzena logo" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <p className="text-sm sm:text-base font-bold text-sky-400">
                    {company}
                  </p>
                </div>

                {/* Job Description */}
                <p className="text-xs sm:text-sm text-zinc-100 leading-relaxed max-w-md">
                  {desc}
                </p>

              </div>
            </div>
          );
        })}
      </div>


    </section>
  )
}

export default About

