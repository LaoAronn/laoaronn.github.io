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
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'Utility CSS Framework',
    },
  ],
};


const Skill = () => {
  return (
    <section className='section text-left'>
  <div className='container'>

    <h2 className='headline-2 reveal-up'>
      Essential Tools I use
    </h2>

    <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
      Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
    </p>

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