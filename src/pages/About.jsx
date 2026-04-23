/* Components */
import {ButtonPrimary} from "../components/Button";

const About = () => {
    return (
        <section id="home" className="pt-8 lg:pt-12">

            <div className="container flex flex-col items-center">

                {/* Portrait */}
                <div className="w-full max-w-[400px] mb-8 lg:mb-12">
                    <figure className="w-full bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-70% overflow-hidden">
                        <img
                            src="/images/hero.png"
                            width={456}
                            height={600}
                            alt="Aronn"
                            className="w-full"
                        />
                    </figure>
                </div>

                {/* About Content */}
                <div className="flex flex-col items-center text-center max-w-[400px] gap-6 lg:gap-8">

                    <h2 className="headline-2 text-black dark:text-white">
                        Hello, World! I'm Aronn!
                    </h2>

                    {/* Location + Education - Stacked */}
                    <div className="flex flex-col items-start gap-2 text-base tracking-[0.005em] text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>Vancouver, Canada</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                            <span>Statistics B.S.&nbsp;&nbsp;/&nbsp;&nbsp;University of British Columbia</span>
                        </div>
                    </div>

                    <p className="text-zinc-300 text-left md:text-lg leading-relaxed">
                        I'm an aspiring software developer with a great passion for programming. I am hoping to achieve my goals one code at a time! I dream to combine art, business, and technology to create products meant to reach the world 🌎
                    </p>

                    <p className="text-zinc-300 text-left md:text-lg">
                        Recently interned at {" "}
                        
                        <a
                            href="https://verzena.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline underline-offset-4 hover:text-zinc-400 transition-colors"
                        >
                            Verzena
                        </a>

                        , a Vancouver-based digital consultancy startup, I worked directly with the founders from day one — shaping their brand identity and shipping responsive web pages, directly contributing to landing their first two clients.
                        </p>

                    <div className="flex items-center gap-3">
                        <a href="/images/resume.pdf" download="resume.pdf">
                            <ButtonPrimary
                                label="Download CV"
                                icon="download"
                            />
                        </a>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About