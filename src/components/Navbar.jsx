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
    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      initActiveBox();
    }, 100);
    
    window.addEventListener('resize', initActiveBox);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', initActiveBox);
    };
  }, []);

  useEffect(() => {
    // Update active link when location changes
    const activeLink = document.querySelector(`a[href="${location.pathname}"]`);
    if (activeLink) {
      document.querySelectorAll('.nav-link, .nav-link-contact').forEach(link => {
        link.classList.remove('active');
      });
      activeLink.classList.add('active');
      lastActiveLink.current = activeLink;
      
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        initActiveBox();
      }, 0);
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
      ref: lastActiveLink
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
      label: 'Photography',
      link: '/photography',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '/contact',
      className: 'nav-link-contact'
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

      <a
        href="/images/resume.pdf"
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>

      <div className='active-box' ref={activeBox}>

      </div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar