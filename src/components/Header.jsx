/* Components */
import Navbar from "./Navbar"
import ThemeSelector from "./ThemeSelector";

/* Node */
import { useState } from "react";

const Header = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-b text-zinc-900 dark:text-zinc-50 transition-colors duration-300 backdrop-blur-sm header-font">
            <div className="w-full px-6 py-4">
                <div className="w-full flex items-center gap-6">

                    {/* Left: Logo + Name */}
                    <div className="flex items-center gap-4">
                        <a className="logo" onClick={() => setShowSubtitle(!showSubtitle)}>
                            <img src="/images/aronnSeal.png"
                                 width={40}
                                 height={40}
                                 className="w-10 h-10 md:w-[56px] md:h-[56px]"
                                 alt="Aronn Laurel"
                            />
                        </a>

                        <div className="text-left">
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-inherit transition-colors duration-300">
                                    {showSubtitle ? (
                                        <span className=" animate-fadeIn">洪梓洺</span>
                                    ) : (
                                        'Aronn Laurel'
                                    )}
                                </h1>
                            </div>
                            <p className="text-sm md:text-base text-[#3f3f46] dark:text-zinc-400 transition-colors duration-300">
                                Dev, design, & everything in between.
                            </p>
                        </div>
                    </div>

                    {/* Middle: Nav (center) */}
                    <div className="flex-1 flex justify-center">
                        <Navbar />
                    </div>

                    {/* Right: Theme / Icons */}
                    <div className="flex items-center justify-end gap-3">
                        <ThemeSelector />
                    </div>

                </div>

                {/* HL */}
                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 dark:from-zinc-700/0 dark:via-zinc-700/50 dark:to-zinc-700/0 mt-4 transition-colors duration-300"></div>
            </div>

        </header>
    )
}

export default Header