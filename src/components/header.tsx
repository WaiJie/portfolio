import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';

// Define a consistent scroll offset for fixed header
const SCROLL_OFFSET = 90; // This value accounts for the header's height when scrolled + desired padding

const routes = [
  { name: 'Home', path: '/', section: null },
  { name: 'Projects', path: '/#projects', section: 'projects' },
  { name: 'About', path: '/#about-me-comprehensive', section: 'about-me-comprehensive' },
  { name: 'Contact', path: '/#contact', section: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null); // Ref to get header height

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]); // Close mobile menu on path or hash change

  // Custom scroll function to account for fixed header
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (element) {
      // Fallback if element is found but for some reason SCROLL_OFFSET logic fails
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle hash navigation on page load or hash change
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const sectionId = location.hash.substring(1);
      // Use a timeout to ensure the DOM is ready and the element exists
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else if (location.pathname === '/' && !location.hash) {
      // If on home page with no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (e: React.MouseEvent, route: typeof routes[0]) => {
    e.preventDefault(); // Prevent default link behavior
    setIsOpen(false); // Close mobile menu

    if (route.section) {
      // For Projects, About, Contact: navigate to home with the specific hash
      navigate(`/#${route.section}`);
      // The useEffect above will handle the actual scrolling
    } else {
      // For Home button or "Data Analytics Portfolio" title: navigate to home without a hash
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure scroll to top for home
    }
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled 
      ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
      : 'bg-transparent py-6'
  }`;

  return (
    <header ref={headerRef} className={headerClass}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Make name clickable to go to homepage */}
          <Link 
            to="/" 
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick(e, routes[0])} // Use Home route logic
          >
            <span className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Data Analytics Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {routes.map((route) => {
              let isActive = false;
              if (location.pathname === '/') {
                if (route.section) {
                  isActive = location.hash === `#${route.section}`;
                } else {
                  isActive = !location.hash; // Home is active if no hash
                }
              }
              // If not on home page, isActive remains false, which is correct.

              return (
                <button
                  key={route.path}
                  onClick={(e) => handleNavClick(e, route)}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 rounded-lg ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {route.name}
                </button>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {routes.map((route) => {
              let isActive = false;
              if (location.pathname === '/') {
                if (route.section) {
                  isActive = location.hash === `#${route.section}`;
                } else {
                  isActive = !location.hash;
                }
              }

              return (
                <button
                  key={route.path}
                  onClick={(e) => handleNavClick(e, route)}
                  className={`text-xl font-medium py-2 border-b border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left rounded-lg px-4 ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {route.name}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
