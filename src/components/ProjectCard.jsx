/* Node Modules */
import PropTypes from "prop-types";

const ProjectCard = ({ title, desc, tags, icon, color, link }) => {
  const hex = `#${color}`;

  return (
    <a
      href={link}
      target={link?.startsWith("http") ? "_blank" : undefined}
      rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-zinc-900 dark:border-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.9)] dark:hover:shadow-[6px_6px_0_0_rgba(255,255,255,0.85)]"
      style={{ backgroundColor: hex }}
    >
      {/* icon */}
      <div className="border-b-2 border-zinc-900/80 dark:border-zinc-50/70">
        
        <div className="flex h-28 items-center justify-center pb-3 text-6xl sm:h-32 sm:text-7xl">
          {icon}
        </div>

      </div>

      {/* Copy */}
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-extrabold leading-none tracking-tight text-zinc-900 sm:text-3xl">
            {title}
          </h3>
          <svg
            className="mt-1 h-5 w-5 flex-shrink-0 text-zinc-900/70 transition-colors group-hover:text-zinc-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>

        <p className="text-sm leading-6 text-zinc-900/80 sm:text-[15px]">
          {desc}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag, key) => (
            <span
              key={key}
              className="inline-flex h-7 items-center rounded-md bg-zinc-900 px-2.5 text-xs font-medium text-zinc-50 dark:bg-zinc-950"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  tags: PropTypes.array.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectCard;