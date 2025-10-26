import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';

const SCROLL_OFFSET = 90;

const routes = [
  { name: 'Home', path: '/', section: null },
  { name: 'Projects', path: '/#projects', section: 'projects' },
  { name: 'About', path: '/#about-me-comprehensive', section: 'about-me-comprehensive' },
  { name: 'Contact', path: '/#contact', section: 'contact' },
];

const useScrollOnRouteChange = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    window.history.replaceState({}, '', pathname);
    window.history.pushState({}, '', hash);
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [pathname, hash]);
};

const useActiveSection = () => {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const sections = routes.map(r => r.section).filter(Boolean) as string[];
      let found: string | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET + 10) found = id;
      }
      if (found !== active) {
        setActive(found);
        window.history.replaceState({}, '', found ? `#${found}` : '/');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [active]);
  return active;
};

export default function Header() {
  useScrollOnRouteChange();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection();

  useEffect(() => setMobileOpen(false), [location.pathname, location.hash]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleNavClick = (route: typeof routes[0]) => {
    if (route.section) {
      if (location.pathname !== '/') navigate(`/#${route.section}`);
      else {
        window.history.replaceState({}, '', `/#${route.section}`);
        scrollToSection(route.section);
      }
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const headerClasses =
    'fixed top-0 left-0 right-0 z-50 header-background shadow-sm py-4';

  const DesktopNav = () => (
    <div className="hidden md:flex items-center space-x-6">
      {routes.map(route => {
        const isActive =
          location.pathname === '/' &&
          (route.section ? activeSection === route.section : !activeSection);
        return (
          <span
            key={route.name}
            onClick={() => handleNavClick(route)}
            className={`nav-item cursor-pointer px-2 py-1 text-sm font-medium transition-colors ${
              isActive ? 'active' : ''
            }`}
          >
            {route.name}
          </span>
        );
      })}
      <ThemeToggle className="theme-toggle-outline" />
    </div>
  );

  const MobileNav = () => (
    <div className="flex md:hidden items-center gap-2">
      <ThemeToggle className="theme-toggle-outline" />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Menu"
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[var(--bg)] dark:bg-[var(--bg-soft)] overflow-auto p-8 flex flex-col gap-4">
          {routes.map(route => {
            const isActive =
              location.pathname === '/' &&
              (route.section ? activeSection === route.section : !activeSection);
            return (
              <span
                key={route.name}
                onClick={() => handleNavClick(route)}
                className={`nav-item text-xl cursor-pointer ${isActive ? 'active' : ''}`}
              >
                {route.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => handleNavClick(routes[0])}
          className="flex items-center gap-2"
        >
          <span className="font-bold text-xl text-[var(--text)] hover:text-[var(--accent)] transition-colors underline-offset-4">
            Data Analytics Portfolio
          </span>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
