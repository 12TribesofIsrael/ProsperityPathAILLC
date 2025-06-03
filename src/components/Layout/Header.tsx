import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath, onClick }) => {
  const isActive = currentPath === to;
  
  const handleClick = () => {
    if (to === '/' && currentPath === '/') {
      // If we're on the home page and clicking Home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (onClick) onClick();
  };
  
  return (
    <Link
      to={to}
      className={`text-base font-medium transition-colors duration-200 ${
        isActive
          ? 'text-secondary-500 font-semibold'
          : 'text-white hover:text-secondary-300'
      }`}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerClass = isScrolled 
    ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg py-2 transition-all duration-300'
    : 'bg-primary-900/80 py-4 transition-all duration-300';

  return (
    <header className={`fixed w-full z-50 ${headerClass}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg)',
          opacity: '0.2'
        }}
      />
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img 
            src={`${basePath}images/logo.png`} 
            alt="Prosperity Path AI Logo" 
            className="h-16 w-auto object-contain rounded-full bg-white/10 p-1"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
          <NavLink to="/about" label="About" currentPath={location.pathname} onClick={closeMenu} />
          <a 
            href="#get-started"
            className="btn-secondary text-sm py-2 hover:bg-secondary-400"
            onClick={closeMenu}
          >
            Get Started Free
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-secondary-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-900/95 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
            <NavLink to="/about" label="About" currentPath={location.pathname} onClick={closeMenu} />
            <a 
              href="#get-started"
              className="btn-secondary text-center text-sm py-2 mt-2 hover:bg-secondary-400"
              onClick={closeMenu}
            >
              Get Started Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;