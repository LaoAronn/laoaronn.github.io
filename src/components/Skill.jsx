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

    <h2 className='text-center headline-2 reveal-up mb-8 m-auto max-w-[75ch]'>
      Essential Tools I use
    </h2>

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