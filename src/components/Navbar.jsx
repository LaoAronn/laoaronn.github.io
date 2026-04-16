/* Node Modules */
import { useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const location = useLocation();
  
  const initActiveBox = () => {
    if (!activeBox.current || !lastActiveLink.current) return;

    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  }

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
    if (!activeBox.current) return;

    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  }

  const navItems = [
    {
      label: 'Home',
      link: '/',
      className: 'nav-link',
    },
    {
      label: 'About',
      link: '/about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '/works',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '/contact',
      className: 'nav-link'
    }
  ];


  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {
        navItems.map(({ label, link, className, ref}, key) => (
            <Link
              to={link}
              key={key}
              ref={ref}
              className={className}
              onClick={activeCurrentLink}
            > 
              {label}
            </Link>
          ))
      }
      
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar