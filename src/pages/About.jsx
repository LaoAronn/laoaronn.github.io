/* Components */
import {ButtonPrimary} from "../components/Button";
import SpotifyCard from "../components/SpotifyCard";
import { useState, useRef } from "react";

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    const carouselImages = [
        { src: "/images/gallery/baskethound.JPG", caption: "My last year with BasketHounds (2023 - 2026)" },
        { src: "/images/gallery/cypress2025.JPG", caption: "Cypress Mountains with friends (2026)" },
        { src: "/images/gallery/roundball.mp4", caption: "Season Highlights in Summer 2026" },
        { src: "/images/gallery/dtview.png", caption: "A walk around Kitsilano with my Buddy Eli (Oct 2025)" },
        { src: "/images/gallery/LEBRON.png", caption: "Seeing Lebron James @ Portland (Jan 17 2026)" },
        { src: "/images/gallery/hk_reunion26.JPG", caption: "Highschool Teacher Student Reunion (Dec 2025)" },
        { src: "/images/gallery/pokemon.MOV", caption: "Pulling a shiny Jigglypuff!" },
        { src: "/images/gallery/hk_tswf.JPG", caption: "Hangout with my friends Percy and TSWF (2026)" },
        { src: "/images/gallery/trout.JPG", caption: "Trout lake with good company (Aug 2025)" },
    ];

    return (
        <section id="home" className="py-8 lg:py-16 px-4 sm:px-6 text-[var(--text)]">

            <div className="container flex flex-col items-center max-w-2xl mx-auto">

                {/* Portrait */}
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-8 lg:mb-12">
                    <figure className="w-full overflow-hidden rounded-lg">
                        <img
                            src="/images/hero.png"
                            width={456}
                            height={600}
                            alt="Aronn"
                            className="w-full h-auto"
                        />
                    </figure>
                </div>

                {/* About Content */}
                <div className="flex flex-col items-center w-full gap-6 lg:gap-8">

                    <h2 className="headline-2 text-inherit text-center transition-colors duration-300">
                        Hello, World! I'm Aronn!
                    </h2>

                    {/* Location + Education + Job Status */}
                    <div className="flex flex-col items-start gap-3 sm:gap-4 text-left text-sm sm:text-base tracking-[0.005em] text-[var(--text-muted)] zinc-400 w-full transition-colors duration-300">
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
                            <span>Statistics B.S. / University of British Columbia</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <span>Seeking Internships & Full time positions</span>
                        </div>

                    </div>

                    <p className="text-[var(--text)] zinc-100 text-left text-sm sm:text-base lg:text-lg leading-relaxed w-full">
                        I'm an aspiring software developer with a great passion for programming. I dream to combine art, business, and technology to create products meant to reach the world 🌎
                    </p>

                    <p className="text-[var(--text)] zinc-100 text-left text-sm sm:text-base lg:text-lg w-full transition-colors duration-300">
                        Recently interned at {" "}
                        
                        <a
                            href="https://verzena.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--primary)] sky-300 underline underline-offset-4 hover:text-[var(--accent)] dark:hover:text-sky-200 transition-colors"
                        >
                            Verzena
                        </a>

                        , a Vancouver-based digital consultancy startup where I worked directly with the founders from day one - shaping their brand identity and shipping responsive web pages, directly contributing to landing their first two clients.
                    </p>

                    <p className="text-[var(--text)] zinc-100 text-left text-sm sm:text-base lg:text-lg leading-relaxed w-full">
                        Outside of work, you can find me hunting for Pokemon cards and Lego sets, competing in Vancouver basketball leagues, or just making the most of every sunny day the city offers.
                    </p>

                    {/* Image Carousel */}
                    <div className="w-full mt-8 lg:mt-12">
                        <div className="relative w-full">
                            
                            {/* Navigation Buttons */}
                            <button
                                onClick={() => {
                                    if (carouselRef.current) {
                                        const items = carouselRef.current.querySelectorAll('.carousel-item');
                                        const newIndex = (currentSlide - 1 + items.length) % items.length;
                                        items[newIndex]?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'nearest',
                                            inline: 'center'
                                        });
                                    }
                                }}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 z-20 p-2 text-zinc-500 zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                                aria-label="Previous slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button
                                onClick={() => {
                                    if (carouselRef.current) {
                                        const items = carouselRef.current.querySelectorAll('.carousel-item');
                                        const newIndex = (currentSlide + 1) % items.length;
                                        items[newIndex]?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'nearest',
                                            inline: 'center'
                                        });
                                    }
                                }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 z-20 p-2 text-zinc-500 zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
                                </svg>
                            </button>

                            {/* Carousel Container */}
                            <div className="overflow-hidden rounded-lg">
                                <div 
                                    ref={carouselRef}
                                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[calc(50vw-160px)] sm:px-[calc(50vw-192px)]"
                                    style={{
                                        scrollPaddingLeft: 'calc(50vw - 160px)',
                                        scrollPaddingRight: 'calc(50vw - 160px)'
                                    }}
                                    onScroll={(e) => {
                                        const container = e.currentTarget;
                                        const items = container.querySelectorAll('.carousel-item');
                                        if (items.length === 0) return;
                                        
                                        const containerCenter = container.scrollLeft + container.clientWidth / 2;
                                        let closestIndex = 0;
                                        let closestDistance = Infinity;
                                        
                                        items.forEach((item, i) => {
                                            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
                                            const distance = Math.abs(containerCenter - itemCenter);
                                            if (distance < closestDistance) {
                                                closestDistance = distance;
                                                closestIndex = i;
                                            }
                                        });
                                        
                                        setCurrentSlide(closestIndex);
                                    }}
                                >
                                    {carouselImages.map((item, index) => (
                                        <div
                                            key={index}
                                            className="carousel-item flex-shrink-0 w-80 h-80 sm:w-96 sm:h-96 snap-center rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        >
                                            {item.src.toLowerCase().endsWith('.mov') || item.src.toLowerCase().endsWith('.mp4') ? (
                                                <video
                                                    src={item.src}
                                                    className="w-full h-full object-cover"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={item.src}
                                                    alt={item.caption}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Caption */}
                        <p className="text-center text-[var(--text-muted)] text-sm sm:text-base mt-6 px-2 min-h-[3rem] flex items-center justify-center font-medium transition-colors duration-300">
                            {carouselImages[currentSlide].caption}
                        </p>

                        {/* Dot Indicators */}
                        <div className="flex justify-center gap-3 mt-6">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (carouselRef.current) {
                                            const items = carouselRef.current.querySelectorAll('.carousel-item');
                                            if (items[index]) {
                                                items[index].scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'nearest',
                                                    inline: 'center'
                                                });
                                            }
                                        }
                                    }}
                                            className={`transition-all duration-300 rounded-full ${
                                        index === currentSlide 
                                            ? 'w-3 h-3 bg-[var(--accent)] shadow-lg shadow-[rgba(59,130,206,0.35)]' 
                                            : 'w-2 h-2 bg-[var(--secondary)]/70 hover:bg-[var(--secondary)]'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>

                    {/* Spotify Widget */}
                    <div className="w-full mt-12 lg:mt-16">
                        <SpotifyCard playlistId="0DttMhMT04xjw4F4An8ass" />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About