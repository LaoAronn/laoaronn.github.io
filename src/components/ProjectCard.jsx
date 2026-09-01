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
        <div className={"relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-zinc-900/90 dark:text-zinc-50 " + classes}>
            <a
                className="group flex h-full flex-col gap-4 p-4 text-left transition-colors sm:p-5"
                href={projectLink}
                target={projectLink?.startsWith("http") ? "_blank" : undefined}
                rel={projectLink?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                <div className="flex items-start justify-between gap-4">
                    <h3 className="min-w-0 flex-1 text-lg font-semibold leading-snug text-[var(--text)] sm:text-xl">
                        {title}
                    </h3>

                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--secondary)] transition-colors group-hover:text-[var(--primary)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                    </svg>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((label, key) => (
                        <span key={key} className="inline-flex h-8 items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 text-sm text-[var(--text-muted)] transition-colors group-hover:border-[var(--secondary)] group-hover:bg-[rgba(117,173,230,0.16)] group-hover:text-[var(--primary)] dark:border-zinc-700/60 dark:bg-zinc-800/70 dark:text-zinc-300 dark:group-hover:border-sky-400/40 dark:group-hover:bg-sky-500/15 dark:group-hover:text-sky-100">
                            {label}
                        </span>
                    ))}
                </div>

                <p className="text-sm leading-6 text-[var(--text-muted)] dark:text-zinc-300 sm:text-[15px]">
                    {desc}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition-colors group-hover:text-[var(--accent)] dark:text-sky-300 dark:group-hover:text-sky-200">
                    <span>github</span>
                </div>
            </a>
        </div>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    desc: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard