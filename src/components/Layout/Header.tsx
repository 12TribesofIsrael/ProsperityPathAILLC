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
  return (
    <Link
      to={to}
      className={`text-base font-medium transition-colors duration-200 ${
        isActive
          ? 'text-primary-500 font-semibold'
          : 'text-white hover:text-primary-200'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    ? 'bg-primary-900/95 backdrop-blur-sm shadow-md py-2 transition-all duration-300'
    : 'bg-transparent py-4 transition-all duration-300';

  return (
    <header className={`fixed w-full z-50 ${headerClass}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/images/prosperity-path-ai-logo.png" 
            alt="Prosperity Path AI Logo" 
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
          <NavLink to="/about" label="About" currentPath={location.pathname} onClick={closeMenu} />
          <NavLink to="/opt-in" label="Get Started" currentPath={location.pathname} onClick={closeMenu} />
          <Link 
            to="/opt-in"
            className="btn-secondary text-sm py-2"
            onClick={closeMenu}
          >
            Get Started Free
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary-200 focus:outline-none"
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
            <NavLink to="/opt-in" label="Get Started" currentPath={location.pathname} onClick={closeMenu} />
            <Link 
              to="/opt-in"
              className="btn-secondary text-center text-sm py-2 mt-2"
              onClick={closeMenu}
            >
              Get Started Free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;