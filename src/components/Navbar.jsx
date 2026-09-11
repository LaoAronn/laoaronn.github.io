/* Node Modules */
import { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ compact, isMobile, menuOpen, onToggleMenu, onCloseMenu, onMeasureNavWidth }) => {

  const lastActiveLink = useRef(null);
  const location = useLocation();

  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const measureRowRef = useRef(null);

  const navItems = [
    {
      label: "About",
      link: "/about",
      icon: "home",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "/projects",
      icon: "folder",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "/works",
      icon: "briefcase",
      className: "nav-link",
    },
    {
      label: "Resume",
      link: "/images/resume.pdf",
      icon: "resume",
      className: "nav-link",
      external: true,
    },
  ];


  useEffect(() => {
    const activeLink = document.querySelector(`a[href="${location.pathname}"]`);

    if (activeLink) {
      document.querySelectorAll(".nav-link, .nav-link-mobile").forEach((link) => {
        link.classList.remove("active");
      });

      activeLink.classList.add("active");
      lastActiveLink.current = activeLink;
    }
  }, [location.pathname]);

  // Closes the mobile dropdown when the user clicks outside it or presses Escape.
  // Only attaches these listeners while the menu is actually open
  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const menuElement = menuPanelRef.current;
      const buttonElement = menuButtonRef.current;
      const target = event.target;

      // Ignore clicks on the menu itself or the toggle button
      if (menuElement?.contains(target) || buttonElement?.contains(target)) {
        return;
      }

      onCloseMenu();
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onCloseMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [menuOpen, onCloseMenu]);

  // Measurement for Compact mode
  useLayoutEffect(() => {
    const measureElement = measureRowRef.current;

    if (!measureElement) {
      return undefined;
    }

    const reportWidth = () => {
      onMeasureNavWidth(Math.ceil(measureElement.scrollWidth));
    };

    reportWidth();

    if (typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      reportWidth();
    });

    observer.observe(measureElement);

    return () => observer.disconnect();
  }, [location.pathname, onMeasureNavWidth, compact, isMobile]);

  // Click handler for nav links
  const activeCurrentLink = (event) => {
    const currentLink = event.currentTarget;
    lastActiveLink.current?.classList.remove("active");
    currentLink.classList.add("active");
    lastActiveLink.current = currentLink;
    onCloseMenu();
  };

  const iconMap = {
    home: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V20h14V9.5" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    folder: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true">
        <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h3l1.4 1.8H18a2.5 2.5 0 0 1 2.5 2.5v6.2A2.5 2.5 0 0 1 18 17.5H6A2.5 2.5 0 0 1 3.5 15V7.5Z" />
        <path d="M3.5 9.5h17" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true">
        <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
        <path d="M4 9.5A2.5 2.5 0 0 1 6.5 7h11A2.5 2.5 0 0 1 20 9.5v6A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-6Z" />
        <path d="M8 12h8" />
      </svg>
    ),
    resume: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" aria-hidden="true">
        <path d="M7 4.5h7l4 4V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" />
        <path d="M14 4.5V9h4" />
        <path d="M8 13h8M8 16h6" />
      </svg>
    ),
  };

  const renderNavItems = (isMobileMenu = false) => (
    <>
      {navItems.map(({ label, link, className, external, icon }, key) => {
        const itemClasses = isMobileMenu
          ? `${className} nav-link-mobile !h-auto !min-h-[44px] !w-full !justify-start !px-3 !py-2 !text-base !tracking-normal`
          : `${className} nav-link-desktop`;

        const content = (
          <>
            <span className="nav-icon-wrap">{iconMap[icon]}</span>
            <span>{label}</span>
          </>
        );

        if (external) {
          return (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={key}
              className={itemClasses}
              onClick={isMobileMenu ? onCloseMenu : undefined}
            >
              {content}
            </a>
          );
        }

        return (
          <Link
            to={link}
            key={key}
            className={itemClasses}
            onClick={activeCurrentLink}
          >
            {content}
          </Link>
        );
      })}
    </>
  );

  // Full-width layout: just the nav row and a hidden duplicate used
  // for measuring (see useLayoutEffect above)
  if (!compact) {
    return (
      <>
        <nav className="navbar flex items-center justify-center gap-8 whitespace-nowrap">
          {renderNavItems(false)}
        </nav>

        <div ref={measureRowRef} className="pointer-events-none absolute left-0 top-0 -z-10 flex w-full max-w-full items-center gap-8 overflow-hidden whitespace-nowrap opacity-0" aria-hidden="true">
          {renderNavItems(false)}
        </div>
      </>
    );
  }

  // Compact layout
  const mobileMenuClasses = isMobile
    ? "left-0 right-0 w-full"
    : "left-1/2 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2";

  return (
    <div className="relative flex w-full min-w-0 items-center justify-end"> {/* Hamburger toggle button */}
      
      <button
        ref={menuButtonRef}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={onToggleMenu}
        className="nav-menu-toggle group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between">
          <span className={`block h-0.5 w-full rounded-full bg-current transition duration-300 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full bg-current transition duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full bg-current transition duration-300 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </span>
      </button>

      {/* Dropdown panel */}
      <div
        ref={menuPanelRef}
        id="site-navigation"
        className={`nav-menu-panel absolute top-full z-50 w-full overflow-hidden shadow-lg backdrop-blur-md transition-[max-height,opacity,transform] duration-300 ${mobileMenuClasses} ${menuOpen ? "max-h-96 translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}
      >
        <nav className="flex flex-col py-2 whitespace-nowrap">
          {renderNavItems(true)}
        </nav>
      </div>

      {/* Same hidden measuring row as the non-compact branch, kept here too so width reporting still works while compact. */}
      <div ref={measureRowRef} className="pointer-events-none absolute left-0 top-0 -z-10 flex w-full max-w-full items-center gap-8 overflow-hidden whitespace-nowrap opacity-0" aria-hidden="true">
        {renderNavItems(false)}
      </div>
    </div>
  );
};

export default Navbar;