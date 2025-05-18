
/* Components */
import {ButtonPrimary, ButtonOutline} from "./Button";

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">

            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

                <div className="">
                    <div className="flex flex-col items-start gap-3">
                        

                        <div className="flex items-center gap-4">

                            <figure className="w-15 h-15 rounded-lg overflow-hidden">
                                <img 
                                src="/images/avatar-1.jpg"
                                width={50}
                                height={50}
                                alt="Aronn Portrait"
                                className="img-cover"
                                />
                            </figure>

                            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                                </span>
                                Available for work
                            </div>
                        </div>


                        <h2 className="headline-1 text-left max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                            Aronn Grant Laurel Y.
                        </h2>

                        <h4 className="headline-2 text-left max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                            Aronn Grant Laurel Y.
                        </h4>


                        <div className="flex items-center gap-3">
                            <ButtonPrimary 
                                label = "Download CV"
                                icon = "download"
                            />

                            <ButtonOutline
                                href="#about"
                                label="Scroll down"
                                icon="arrow_downward"
                            />

                        </div>

                    </div>


                </div>

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