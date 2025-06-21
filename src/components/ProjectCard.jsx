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
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
            
            <a className="rounded-lg p-4 transition-all flex flex-col items-stretch justify-start gap-4" href={projectLink}>
                <h3 className="font-mono font-bold text-lg title-1">
                    {title}
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-2">
                    {tags.map((label, key) => (
                        <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                            {label}
                        </span>
                    ))}
                </div>

                <div className="mb-2">
                    {desc}
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