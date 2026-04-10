/* Node Modules */
import PropTypes from "prop-types";


const ProjectCard = ({
    title,
    tags,
    projectLink,
    desc,
    classes
}) => {
    return (
        <div className={"relative bg-white active:bg-zinc-700/60 border-b-2 border-zinc-50/5 transition-colors " + classes}>
            
            <a className="group rounded-lg p-4 gap-4 transition-all flex flex-col items-stretch justify-start text-black dark:text-black" href={projectLink}>
                
                <h3 className="font-bold text-left text-lg title-1">
                    {title}
                </h3>

                <div className="relative z-10 flex items-left text-sm">            

                    <div className="flex flex-wrap justify-center items-center gap-2">
                        {tags.map((label, key) => (
                            <span key={key} className="h-8 text-sm text-black dark:text-black bg-zinc-50/5 grid items-center px-3">
                                {label}
                            </span>
                        ))}
                    </div>
                    
                </div>

                <div className="text-left mb-2">
                    {desc}
                </div>

                <div className="text-left mb-2 flex items-center gap-1">

                    <svg className="w-[20px] h-[20px] text-gray-800 group-hover:text-sky-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                    </svg>

                    <span className="group-hover:text-sky-400">
                        github
                    </span>
                    
                </div>

                

                
            </a>
    

        </div>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard