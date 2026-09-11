import { useRef, useEffect } from 'react';

const workExperience = [
  {
    workid: 1,
    company: 'Verzena',
    position: 'Software Engineering Intern',
    period: 'Aug 2024 – Dec 2024',
    current: false,
    desc: 'Launching a client-facing website for a Vancouver-based digital consultancy startup from the ground up.',
    logo: '/images/verzena.png',
    video: '/images/work/verzena_showcase.mp4',
    link: 'https://verzena.com/',
  },
  {
    workid: 2,
    company: 'mile',
    position: 'Junior Developer',
    period: 'September 2026 – Present',
    current: true,
    desc: 'Building a wellness center system — booking, memberships, and the site that carries the brand.',
    logo: '/images/mile.png',
    video: '',
    link: '',
  },
];

// Deterministic placeholder gradient for entries without a video, so the
// rail never breaks and each brand still gets a distinct field of color.
const fallbackTint = (seed) => {
  const hues = [204, 172, 26, 340, 92];
  const h = hues[seed % hues.length];
  return `linear-gradient(135deg, hsl(${h} 45% 92%) 0%, hsl(${h} 55% 82%) 100%)`;
};

const About = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(() => {});
      }
    });
  }, []);

  return (
    <section id="about" className="section text-[var(--text)] bg-[var(--background)]">
      <div className="container px-4 sm:px-6 max-w-3xl mx-auto py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-10">
          Work Experience
        </h2>

        <div className="relative">
          {/* Rail */}
          <div
            className="absolute left-[23px] sm:left-[27px] top-2 bottom-2 w-px bg-[var(--border)]"
            aria-hidden="true"
          />

          {workExperience.map((role, index) => {
            const {
              company,
              position,
              period,
              current,
              desc,
              logo,
              video,
              link,
            } = role;

            const hasVideo = Boolean(video);
            const hasLink = Boolean(link);
            const mediaFirst = index % 2 === 0;

            const Wrapper = hasLink ? 'a' : 'div';
            const wrapperProps = hasLink
              ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <div key={role.workid} className="relative pl-16 sm:pl-20 pb-12 last:pb-0">
                
                {/* Node */}
                <div
                  className={`absolute left-0 top-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full
                    flex items-center justify-center bg-[var(--surface)]
                    border-2 z-10
                    ${current ? 'border-[var(--primary)]' : 'border-[var(--border)]'}`}
                >
                  <img
                    src={logo}
                    alt=""
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                  />
                </div>

                <Wrapper
                  {...wrapperProps}
                  className={`group block rounded-xl sm:rounded-2xl border border-[var(--border)]
                    overflow-hidden bg-[var(--surface)]
                    transition-shadow duration-300
                    ${hasLink ? 'hover:shadow-lg hover:shadow-[rgba(15,76,138,0.10)] hover:border-[var(--primary)]/30 cursor-pointer' : 'cursor-default'}
                    grid grid-cols-1 md:grid-cols-2`}
                >
                  {/* Media */}
                  <div
                    className={`relative min-h-40 sm:min-h-48 md:min-h-0
                      ${mediaFirst ? 'md:order-1' : 'md:order-2'}`}
                    style={!hasVideo ? { background: fallbackTint(role.workid) } : undefined}
                  >
                    {hasVideo ? (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover
                          transition-transform duration-500 group-hover:scale-[1.03]"
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface-soft)]/60">
                        <span className="text-sm text-[var(--text)]/60">In progress</span>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div
                    className={`p-5 sm:p-7 flex flex-col justify-center gap-2
                      ${mediaFirst ? 'md:order-2' : 'md:order-1'}`}
                  >

                    {/* Currently working on */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm text-[var(--text)]/50">
                        {period}
                      </span>
                      {current && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--primary)] dark:text-sky-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] dark:bg-sky-400 animate-pulse" />
                          Currently working
                        </span>
                      )}

                    </div>

                    <p className="text-lg sm:text-xl font-bold text-[var(--primary)]">
                      {company}
                    </p>
                    <p className="text-sm font-medium text-[var(--text)]/80">
                      {position}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text)]/70 leading-relaxed max-w-md">
                      {desc}
                    </p>
                  </div>
                </Wrapper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;