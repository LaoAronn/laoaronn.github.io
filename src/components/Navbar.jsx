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
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "/",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "/works",
      className: "nav-link",
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

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const menuElement = menuPanelRef.current;
      const buttonElement = menuButtonRef.current;
      const target = event.target;

      if (menuElement?.contains(target) || buttonElement?.contains(target)) {
        return;
      }

      onCloseMenu();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [menuOpen, onCloseMenu]);

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

  const activeCurrentLink = (event) => {
    const currentLink = event.currentTarget;
    lastActiveLink.current?.classList.remove("active");
    currentLink.classList.add("active");
    lastActiveLink.current = currentLink;
    onCloseMenu();
  };

  const renderNavItems = (isMobileMenu = false) => (
    <>
      {navItems.map(({ label, link, className }, key) => {
        const itemClasses = isMobileMenu
          ? `${className} nav-link-mobile !h-auto !min-h-[44px] !w-full !justify-start !px-4 !py-3 !text-base !tracking-normal hover:bg-zinc-100 dark:hover:bg-zinc-800`
          : className;

        return (
          <Link
            to={link}
            key={key}
            className={itemClasses}
            onClick={activeCurrentLink}
          >
            {label}
          </Link>
        );
      })}

      <a
        href="/images/resume.pdf"
        className={isMobileMenu
          ? "nav-link nav-link-mobile !h-auto !min-h-[44px] !w-full !justify-start !px-4 !py-3 !text-base !tracking-normal hover:bg-zinc-100 dark:hover:bg-zinc-800"
          : "nav-link"
        }
        target="_blank"
        rel="noopener noreferrer"
        onClick={isMobileMenu ? onCloseMenu : undefined}
      >
        Resume
      </a>
    </>
  );

  if (!compact) {
    return (
      <>
        <nav className="navbar flex items-center justify-center gap-8 whitespace-nowrap">
          {renderNavItems(false)}
        </nav>

        <div ref={measureRowRef} className="pointer-events-none absolute left-0 top-0 -z-10 flex w-max items-center gap-8 whitespace-nowrap opacity-0" aria-hidden="true">
          {renderNavItems(false)}
        </div>
      </>
    );
  }

  const mobileMenuClasses = isMobile
    ? "left-0 right-0 w-full"
    : "left-1/2 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2";

  return (
    <div className="relative flex items-center justify-end">
      <button
        ref={menuButtonRef}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={onToggleMenu}
        className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-white/70 text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white dark:border-zinc-700/70 dark:bg-zinc-900/70 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:focus:ring-offset-zinc-900"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between">
          <span className={`block h-0.5 w-full rounded-full bg-current transition duration-300 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full bg-current transition duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full bg-current transition duration-300 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </span>
      </button>

      <div
        ref={menuPanelRef}
        id="site-navigation"
        className={`absolute top-full z-50 overflow-hidden border-b border-zinc-200 bg-white/95 backdrop-blur-md transition-[max-height,opacity,transform] duration-300 dark:border-zinc-700 dark:bg-zinc-900/95 ${mobileMenuClasses} ${menuOpen ? "max-h-96 translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}
      >
        <nav className="flex flex-col py-2 whitespace-nowrap">
          {renderNavItems(true)}
        </nav>
      </div>

      <div ref={measureRowRef} className="pointer-events-none absolute left-0 top-0 -z-10 flex w-max items-center gap-8 whitespace-nowrap opacity-0" aria-hidden="true">
        {renderNavItems(false)}
      </div>
    </div>
  );
};

export default Navbar