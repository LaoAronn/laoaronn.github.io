/* Components */
import Navbar from "./Navbar"
import { Link } from "react-router-dom";

/* Node */
import { useState } from "react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);

    return (
        <header className="relative w-full z-40 bg-gradient-to-b from-[#f8f7ed] to-[#f8f7ed]/0 dark:from-zinc-900 dark:to-zinc-900/0 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
            
            <div className="w-full px-6 flex flex-col items-start gap-3 py-6">

                {/* Logo + Name side by side */}
                <div className="flex items-center gap-4">

                    {/* Logo */}
                    <a className="logo" onClick={() => setShowSubtitle(!showSubtitle)}>
                        <img src="/images/aronnSeal.png"
                             width={36}
                             height={36}
                             className="md:w-[50px] md:h-[50px]"
                             alt="Aronn Laurel"
                        />
                    </a>

                    {/* Name and Subtitle */}
                    <div className="text-left">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl md:text-4xl font-semibold text-inherit transition-colors duration-300">
                                Aronn Laurel
                            </h1>
                            {showSubtitle && (
                                <h1 className="text-xl md:text-3xl text-[#e53e3e] animate-fadeIn">
                                    洪梓洺
                                </h1>
                            )}
                        </div>
                        <p className="text-xs md:text-sm text-[#3f3f46] dark:text-zinc-400 transition-colors duration-300">
                            Dev, design, & everything in between.
                        </p>
                    </div>

                </div>

                {/* Navigation */}
                <Navbar navOpen={navOpen} />

                {/* HL */}
                <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 dark:from-zinc-700/0 dark:via-zinc-700/50 dark:to-zinc-700/0 mt-4 transition-colors duration-300"></div>

            </div>

        </header>
    )
}

export default Header