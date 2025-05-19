
/* Components */
import {ButtonPrimary, ButtonOutline} from "./Button";

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">

            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

                <div className="">
                    <div className="flex flex-col items-start gap-3">

                        {/** Portrait for Mobile / Small screen */}
                        <div className="block lg:hidden">
                            <figure className="w-full max-w-[450px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-70% rounded-[50px] overflow-hidden">

                                <img src="/images/hero-banner.png"
                                    width={656}
                                    height={800}
                                    alt="Aronn"
                                    className="w-full"
                                />

                            </figure>
                        </div>
                

                        <h2 className="headline-1 text-left max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 reveal-up">
                            Aronn Grant Laurel Y.
                        </h2>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-md tracking-wide">
                                <span className="relative w-3 h-3 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                                </span>
                                Available For Work
                        </div>

                        <div className="text-left text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up">
                            Hello World! I'm Aronn, an aspiring software developer and a Statistics major at UBC with a great passion for programming. I am hoping to achieve my goals one code at a time!
                        </div>


                        <div className="flex items-center gap-3">
                            <ButtonPrimary 
                                label = "Download CV"
                                icon = "download"
                            />

                            <ButtonOutline
                                href="#about"
                                label="More"
                                icon="arrow_downward"
                            />

                        </div>

                    </div>


                </div>

                {/** Portrait for Window Size */}
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[450px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-70% rounded-[50px] overflow-hidden">

                        <img src="/images/hero-banner.png"
                             width={656}
                             height={800}
                             alt="Aronn"
                             className="w-full"
                        />

                    </figure>
                </div>

            </div>

        </section>
    )
}

export default Hero 