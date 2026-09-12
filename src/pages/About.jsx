/* Components */
import {ButtonPrimary} from "../components/Button";
import SpotifyCard from "../components/SpotifyCard";
import { useState, useRef } from "react";

const About = () => {
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

    const total = carouselImages.length;
    const [index, setIndex] = useState(0);
    const [dragX, setDragX] = useState(0);
    const [dragging, setDragging] = useState(false);
    const startXRef = useRef(0);
    const dragXRef = useRef(0);

    const next = () => setIndex((i) => (i + 1) % total);
    const prev = () => setIndex((i) => (i - 1 + total) % total);

    const isVideo = (src) =>
        src.toLowerCase().endsWith('.mov') || src.toLowerCase().endsWith('.mp4');

    const handlePointerDown = (e) => {
        startXRef.current = e.clientX;
        dragXRef.current = 0;
        setDragX(0);
        setDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!dragging) return;
        const nextDragX = e.clientX - startXRef.current;
        dragXRef.current = nextDragX;
        setDragX(nextDragX);
    };

    const handlePointerUp = () => {
        const threshold = 60;
        const releasedDragX = dragXRef.current;

        if (Math.abs(releasedDragX) < 10) {
            next(); // treat as a tap on the top photo
        } else if (releasedDragX <= -threshold) {
            next();
        } else if (releasedDragX >= threshold) {
            prev();
        }
        setDragging(false);
        dragXRef.current = 0;
        setDragX(0);
    };

    const handlePointerCancel = () => {
        setDragging(false);
        dragXRef.current = 0;
        setDragX(0);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    };

    // Fixed fan geometry for the two cards sitting behind the top photo.
    const layerStyle = [
        { rotate: 0, x: 0, y: 0, scale: 1, opacity: 1, z: 30 },
        { rotate: 8, x: 200, y: 14, scale: 0.94, opacity: 1, z: 20 },
        { rotate: -8, x: -200, y: 20, scale: 0.88, opacity: 0.95, z: 10 },
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

                    {/* Photo Stack */}
                    <div className="w-full mt-8 lg:mt-12 flex flex-col items-center">

                        <div className="relative w-full flex items-center justify-center px-10 sm:px-0">

                            {/* Prev */}
                            <button
                                onClick={prev}
                                className="absolute left-0 sm:-left-10 top-1/2 -translate-y-1/2 z-40 p-2 text-zinc-500 zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                                aria-label="Previous photo"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            {/* Stage */}
                            <div
                                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 outline-none rounded-2xl
                                    focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                                style={{ touchAction: 'pan-y' }}
                                tabIndex={0}
                                role="group"
                                aria-label="Photo gallery, use arrow keys to browse"
                                onKeyDown={handleKeyDown}
                            >
                                {layerStyle.map((layer, k) => {
                                    const photo = carouselImages[(index + k) % total];
                                    const isTop = k === 0;
                                    const liveRotate = isTop ? layer.rotate + dragX / 12 : layer.rotate;
                                    const liveX = isTop ? layer.x + dragX : layer.x;

                                    return (
                                        <div
                                            key={`${photo.src}-${k}`}
                                            className={`absolute inset-0 rounded-2xl overflow-hidden shadow-xl
                                                border-4 border-white dark:border-zinc-900 select-none
                                                motion-reduce:transition-none
                                                ${isTop && !dragging ? 'transition-transform duration-300 ease-out' : ''}
                                                ${isTop ? 'cursor-grab active:cursor-grabbing' : ''}`}
                                            style={{
                                                transform: `translate(${liveX}px, ${layer.y}px) rotate(${liveRotate}deg) scale(${layer.scale})`,
                                                zIndex: layer.z,
                                                opacity: layer.opacity,
                                            }}
                                            onPointerDown={isTop ? handlePointerDown : undefined}
                                            onPointerMove={isTop ? handlePointerMove : undefined}
                                            onPointerUp={isTop ? handlePointerUp : undefined}
                                            onPointerCancel={isTop ? handlePointerCancel : undefined}
                                        >
                                            {isVideo(photo.src) ? (
                                                <video
                                                    src={photo.src}
                                                    className="w-full h-full object-cover pointer-events-none"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={photo.src}
                                                    alt={photo.caption}
                                                    className="w-full h-full object-cover pointer-events-none"
                                                    draggable={false}
                                                />
                                            )}

                                            {isTop && (
                                                <span
                                                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5
                                                        bg-white/70 dark:bg-zinc-200/60 rotate-[-3deg] shadow-sm"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Next */}
                            <button
                                onClick={next}
                                className="absolute right-0 sm:-right-10 top-1/2 -translate-y-1/2 z-40 p-2 text-zinc-500 zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                                aria-label="Next photo"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
                                </svg>
                            </button>
                        </div>

                        {/* Caption */}
                        <p
                            className="headline-2 text-center text-[var(--text-muted)] text-base sm:text-lg mt-8 px-4 min-h-[2rem] transition-colors duration-300"
                        >
                            {carouselImages[index].caption}
                        </p>

                        {/* Progress */}
                        <div className="flex items-center justify-center gap-3 mt-3">
                            <span className="text-xs text-[var(--text-muted)] tabular-nums">
                                {index + 1} / {total}
                            </span>
                            <div className="w-24 h-1 rounded-full bg-[var(--secondary)]/30 overflow-hidden">
                                <div
                                    className="h-full bg-[var(--primary)] transition-all duration-300"
                                    style={{ width: `${((index + 1) / total) * 100}%` }}
                                />
                            </div>
                        </div>

                    </div>

                    
                    {/* Spotify Widget */}
                    <div
                        className="
                            mt-10 relative z-10 w-full rounded-2xl p-5 sm:p-7
                            border border-white/20 dark:border-white/10
                            bg-white/20 dark:bg-white/[0.06]
                            backdrop-blur-xl
                            shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                            dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                        "
                    >
                        <h2 className="headline-2 mb-5 text-base sm:text-lg font-medium text-[var(--text)]">
                            Aronn's Picks ♫⋆｡♪ ₊˚♬ ﾟ.
                        </h2>

                        <div className="w-full">
                            <SpotifyCard playlistId="0DttMhMT04xjw4F4An8ass" />
                        </div>
                    </div>

                

                </div>

            </div>

        </section>
    )
}

export default About