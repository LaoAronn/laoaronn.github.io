/* Components */
import Navbar from "./Navbar"
import { Link } from "react-router-dom";

/* Node */
import { useState } from "react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center gap-8">

                <h1>
                    <Link to="/" className="logo">
                        <img src="/images/aronnSeal.png"
                             width = {40}
                             height = {40}
                             alt="Aronn Laurel"
                        />
                    </Link>
                </h1>

                <div className="flex-1 flex justify-center">
                    <Navbar navOpen={navOpen} />
                </div>

            </div>

        </header>
    )
}

export default Header