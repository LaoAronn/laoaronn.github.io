/* Node Modules */
import PropTypes from "prop-types";


const ProjectCard = ({
    title,
    tags,
    projectLink,
    classes
}) => {
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
            
            <div className="">
                
                <a className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/5 transition-all hover:bg-black/10 flex flex-col items-stretch justify-start gap-2" href={projectLink}>
                    <h3 className="title-1 text-left mb-4">
                        {title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                                {label}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between ml-5">
                        Content

                        <div className="text-right pr-2">
                            <span className="material-symbols-rounded" aria-hidden="true">
                                arrow_outward
                            </span>
                        </div>

                    </div>
                    
                </a>
                    
            


                

            </div>

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