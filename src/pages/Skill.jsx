import React from 'react';

/* Components */
import SkillCard from "../components/SkillCard"

const skillGroups = {
  Tools: [
    {
      label: 'Figma',
      desc: 'Design Tool',
    },
    {
      label: 'MongoDB',
      desc: 'Database',
    },
    {
      label: 'MariaDB',
      desc: 'Database',
    },
    {
      label: 'PostgreSQL',
      desc: 'Database',
    },
  ],
  Languages: [
    {
      label: 'JavaScript',
      desc: '',
    },
    {
      label: 'CSS',
      desc: '',
    },
    {
      label: 'HTML',
      desc: '',
    },
    {
      label: 'PHP',
      desc: '',
    },
    {
      label: 'Python',
      desc: '',
    },
    {
      label: 'C++',
      desc: '',
    },
    {
      label: 'R',
      desc: 'Statistical Computing',
    },

  ],
  Frameworks: [
    {
      label: 'TailwindCSS',
      desc: 'CSS Framework',
    },
    {
      label: 'React',
      desc: 'Frontend Framework',
    },
    {
      label: 'ExpressJS',
      desc: 'Backend Framework',
    },
    {
      label: 'NodeJS',
      desc: 'Runtime / Backend',
    }
    
  ],
};


const Skill = () => {
  return (
    <section className='section text-left'>
      <div className='container'>

        {/** Work Header */}
        <div class="inline-flex items-center justify-center w-full reveal-up pb-15 ">
          <hr class="w-full h-1 my-8 bg-gray-100 border-0 rounded-sm dark:bg-zinc-800"/>

          <span class="absolute px-3 headline-2 -translate-x-1/2 left-1/2 dark:text-white dark:bg-zinc-900">
            What I Work With
          </span>
        </div>

        {/* Flex container for side-by-side sections */}
        <div className="flex flex-col lg:flex-row gap-8">
          {Object.entries(skillGroups).map(([category, items]) => (
            <div key={category} className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
                {items.map(({ label, desc }, key) => (
                  <SkillCard
                    key={key}
                    label={label}
                    desc={desc}
                    classes="reveal-up"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </section>


  )
}

export default Skill