/* Components */
import {ButtonPrimary} from "../components/Button";
import { useState, useRef } from "react";

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    const carouselImages = [
        { src: "/images/gallery/baskethound.JPG", caption: "My last year with BasketHounds (2023 - 2026)" },
        { src: "/images/gallery/cypress2025.JPG", caption: "Cypress Mountains with friends (2026)" },

        { src: "/images/gallery/dtview.png", caption: "A walk around Kitsilano with my Buddy Eli (Oct 2025)" },
        { src: "/images/gallery/LEBRON.png", caption: "Seeing Lebron James @ Portland (Jan 17 2026)" },
        { src: "/images/gallery/hk_reunion26.JPG", caption: "Highschool Teacher Student Reunion (Dec 2025)" },
        { src: "/images/gallery/pokemon.MOV", caption: "Pulling a shiny pikachu!" },
        { src: "/images/gallery/hk_tswf.JPG", caption: "Hangout with my friends Percy and TSWF (2026)" },
        { src: "/images/gallery/trout.JPG", caption: "Trout lake with good company (Aug 2025)" },
        { src: "-", caption: "Blank" },
    ];

    return (
        <section id="home" className="pt-8 lg:pt-12">

            <div className="container flex flex-col items-center">

                {/* Portrait */}
                <div className="w-full max-w-[400px] mb-8 lg:mb-12">
                    <figure className="w-full overflow-hidden">
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

                    {/* Location + Education + Job Status */}
                    <div className="flex flex-col items-start gap-2 text-base tracking-[0.005em] text-gray-400">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>Vancouver, Canada</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                            <span>Statistics B.S.&nbsp;&nbsp;/&nbsp;&nbsp;University of British Columbia</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <span> Seeking Internships & Full time positions </span>
                        </div>

                    </div>

                    <p className="text-zinc-300 text-left md:text-lg leading-relaxed">
                        I'm an aspiring software developer with a great passion for programming. I dream to combine art, business, and technology to create products meant to reach the world 🌎
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

                        , a Vancouver-based digital consultancy startup where I worked directly with the founders from day one - shaping their brand identity and shipping responsive web pages, directly contributing to landing their first two clients.
                    </p>

                    <p className="text-zinc-300 text-left md:text-lg leading-relaxed">
                        Outside of work, you can find me hunting for Pokemon cards and Lego sets, competing in Vancouver basketball leagues, or just making the most of every sunny day the city offers.
                    </p>

                    {/* Image Carousel */}
                    <div className="w-full mt-8 lg:mt-12">
                        <div className="relative w-full overflow-hidden rounded-lg">
                            
                            {/* Container */}
                            <div 
                                ref={carouselRef}
                                className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-4"
                                onScroll={(e) => {
                                    const scrollLeft = e.currentTarget.scrollLeft;
                                    const itemWidth = 264; // 256px width + 8px gap
                                    const index = Math.round(scrollLeft / itemWidth);
                                    setCurrentSlide(Math.max(0, Math.min(index, carouselImages.length - 1)));
                                }}
                            >
                                {carouselImages.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-64 h-64 snap-center rounded-lg overflow-hidden"
                                    >
                                        {item.src.toLowerCase().endsWith('.mov') || item.src.toLowerCase().endsWith('.mp4') ? (
                                            <video
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                        ) : (
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Caption */}
                        <p className="text-center text-gray-400 text-sm mt-4">
                            {carouselImages[currentSlide].caption}
                        </p>

                        {/* Dot Slider */}
                        <div className="flex justify-center gap-2 mt-3">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (carouselRef.current) {
                                            carouselRef.current.scrollTo({
                                                left: index * 264, // 256px width + 8px gap
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                        index === currentSlide ? 'bg-red-500' : 'bg-gray-600'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>


                </div>

            </div>

        </section>
    )
}

export default About