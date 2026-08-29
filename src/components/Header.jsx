/* Components */
import Navbar from "./Navbar"
import ThemeSelector from "./ThemeSelector";

/* Node */
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [isCompactHeader, setIsCompactHeader] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const headerElement = headerRef.current;

        if (!headerElement) {
            return undefined;
        }

        const updateHeaderMode = () => {
            setIsCompactHeader(headerElement.offsetWidth < 1040);
        };

        updateHeaderMode();

        const observer = new ResizeObserver(updateHeaderMode);
        observer.observe(headerElement);

        return () => observer.disconnect();
    }, []);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 bg-gradient-to-b text-zinc-900 dark:text-zinc-50 transition-colors duration-300 backdrop-blur-sm header-font">
            <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
                <div className="w-full flex items-center gap-4 lg:gap-6">

                    {/* Left: Logo + Name */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 shrink-0">
                        <a className="logo" onClick={() => setShowSubtitle(!showSubtitle)}>
                            <img src="/images/aronnSeal.png"
                                 width={40}
                                 height={40}
                                 className="w-11 h-11 md:w-12 md:h-12"
                                 alt="Aronn Laurel"
                            />
                        </a>

                        <div className="text-left min-w-0">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <h1 className="truncate text-lg sm:text-xl md:text-2xl font-semibold text-inherit transition-colors duration-300">
                                    {showSubtitle ? (
                                        <span className=" animate-fadeIn">洪梓洺</span>
                                    ) : (
                                        'Aronn Laurel'
                                    )}
                                </h1>
                            </div>
                            <p className="hidden sm:block text-xs md:text-sm text-[#3f3f46] dark:text-zinc-400 transition-colors duration-300">
                                Dev, design, & everything in between.
                            </p>
                        </div>
                    </div>

                    {/* Middle: Nav (center) */}
                    <div className={`flex-1 flex min-w-0 ${isCompactHeader ? 'justify-end' : 'justify-center'}`}>
                        <Navbar
                            isCompact={isCompactHeader}
                            compactActions={<ThemeSelector compact />}
                        />
                    </div>

                    {/* Right: Theme / Icons */}
                    {isCompactHeader ? null : (
                        <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
                            <ThemeSelector />
                        </div>
                    )}

                </div>

                {/* HL */}
                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 dark:from-zinc-700/0 dark:via-zinc-700/50 dark:to-zinc-700/0 mt-4 transition-colors duration-300"></div>
            </div>

        </header>
    )
}

export default Header