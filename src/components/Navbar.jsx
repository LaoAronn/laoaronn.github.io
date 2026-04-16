/* Node Modules */
import { useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const lastActiveLink = useRef();
  const location = useLocation();

  useEffect(() => {
    // Update active link when route changes
    const activeLink = document.querySelector(`a[href="${location.pathname}"]`);
    if (activeLink) {
      document.querySelectorAll('.nav-link, .nav-link-contact').forEach(link => {
        link.classList.remove('active');
      });
      activeLink.classList.add('active');
      lastActiveLink.current = activeLink;
    }
  }, [location.pathname]);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
  }

  const navItems = [
    {
      label: 'Projects',
      link: '/',
      className: 'nav-link'
    },
        {
      label: 'Work',
      link: '/works',
      className: 'nav-link',
    },
    {
      label: 'About',
      link: '/about',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '/contact',
      className: 'nav-link'
    }
  ];

  return (
    <nav className="flex items-center justify-start gap-0">
      {navItems.map(({ label, link, className }, key) => (
        <Link
          to={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </Link>
      ))}
    </nav>
  )

}

Navbar.propTypes = {
}

export default Navbar