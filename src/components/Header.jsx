/* Components */
import Navbar from "./Navbar"
import ThemeSelector from "./ThemeSelector";

/* Node */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerWidth, setHeaderWidth] = useState(0);
    const [leftGroupWidth, setLeftGroupWidth] = useState(0);
    const [rightGroupWidth, setRightGroupWidth] = useState(0);
    const [navWidth, setNavWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(true);
    const [isCompact, setIsCompact] = useState(true);
    const headerRef = useRef(null);
    const leftGroupRef = useRef(null);
    const rightGroupRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useLayoutEffect(() => {
        const headerElement = headerRef.current;
        const leftElement = leftGroupRef.current;
        const rightElement = rightGroupRef.current;

        if (!headerElement || typeof ResizeObserver === "undefined") {
            return undefined;
        }

        const updateMeasurements = () => {
            const nextHeaderWidth = headerElement.getBoundingClientRect().width;
            const nextLeftWidth = leftElement ? leftElement.getBoundingClientRect().width : 0;
            const nextRightWidth = rightElement ? rightElement.getBoundingClientRect().width : 0;

            setHeaderWidth(nextHeaderWidth);
            setLeftGroupWidth(nextLeftWidth);
            setRightGroupWidth(nextRightWidth);
            setIsMobile(nextHeaderWidth < 768);
        };

        updateMeasurements();

        const resizeObserver = new ResizeObserver(() => {
            updateMeasurements();
        });

        resizeObserver.observe(headerElement);

        if (leftElement) {
            resizeObserver.observe(leftElement);
        }

        if (rightElement) {
            resizeObserver.observe(rightElement);
        }

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const availableSpace = Math.max(0, headerWidth - leftGroupWidth - rightGroupWidth - 48);
        const nextCompactState = isMobile || (navWidth > 0 && navWidth > availableSpace);

        setIsCompact(nextCompactState);

        if (!nextCompactState) {
            setMenuOpen(false);
        }
    }, [headerWidth, leftGroupWidth, rightGroupWidth, navWidth, isMobile]);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 bg-gradient-to-b text-[var(--text)] transition-colors duration-300 backdrop-blur-sm header-font">
            <div className="w-full px-4 py-3 sm:px-6">
                <div className="flex w-full items-center gap-4">

                    {/* Left: Logo + Name */}
                    <div ref={leftGroupRef} className="flex shrink-0 items-center gap-3 whitespace-nowrap">
                        <button
                            type="button"
                            aria-label="Toggle site name"
                            className="shrink-0"
                            onClick={() => setShowSubtitle((current) => !current)}
                        >
                            <img
                                src="/images/aronnSeal.png"
                                width={40}
                                height={40}
                                className="w-10 h-10 md:w-[56px] md:h-[56px] shrink-0"
                                alt="Aronn Laurel"
                            />
                        </button>

                        <div className="flex shrink-0 flex-col whitespace-nowrap text-left">
                            <h1 className="relative inline-grid shrink-0 whitespace-nowrap text-xl md:text-3xl lg:text-4xl font-semibold text-inherit transition-colors duration-300">
                                <span className="invisible col-start-1 row-start-1 select-none">Aronn Laurel</span>
                                <a href="/about"  className="col-start-1 row-start-1">
                                    {showSubtitle ? (
                                        <a href="/about" className="animate-fadeIn text-[#e41010]">洪梓洺</a>
                                    ) : (
                                        "Aronn Laurel"
                                    )}
                                </a>
                            </h1>
                            <p className="hidden sm:block text-xs md:text-sm text-[var(--text)] transition-colors duration-300">
                                Dev, design, & everything in between.
                            </p>
                        </div>
                    </div>

                    {/* Middle: Nav */}
                    <div className={`flex min-w-0 flex-1 ${isCompact ? "justify-end" : "justify-center"}`}>
                        <Navbar
                            compact={isCompact}
                            isMobile={isMobile}
                            menuOpen={menuOpen}
                            onToggleMenu={() => setMenuOpen((current) => !current)}
                            onCloseMenu={() => setMenuOpen(false)}
                            onMeasureNavWidth={setNavWidth}
                        />
                    </div>

                    {/* Right: Theme / Icons */}
                    <div ref={rightGroupRef} className="hidden shrink-0 items-center justify-end gap-3 whitespace-nowrap md:flex">
                        <ThemeSelector />
                    </div>

                </div>

                {/* HL */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 transition-colors duration-300 "></div>
                
            </div>

        </header>
    )
}

export default Header