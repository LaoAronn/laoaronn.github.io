import React from 'react';

/* Components */
import SkillCard from "./SkillCard"

const skillGroups = {
  Tools: [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design Tool',
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database',
    },
  ],
  Languages: [
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Programming Language',
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'Styling Language',
    },
  ],
  Frameworks: [
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework (This website was designed with Tailwind)',
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Frontend Framework',
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Backend Framework',
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Runtime / Backend',
    }
    
  ],
};


const Skill = () => {
  return (
    <section className='section text-left'>
  <div className='container'>

    {/** Skill Header */}
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
            {items.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
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