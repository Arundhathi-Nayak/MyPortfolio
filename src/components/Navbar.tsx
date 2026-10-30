import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, resumeHref, sectionIds } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { Logo } from './Logo';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__bar">
        <Logo />

        <nav aria-label="Primary" className="nav__desktop">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="nav__link"
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--ghost btn--small nav__resume" href={resumeHref} target="_blank" rel="noopener noreferrer">
          <FileText size={16} aria-hidden="true" />
          Resume
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="nav__panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className="nav__panel-link"
                    href={`#${item.id}`}
                    onClick={close}
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="btn btn--primary nav__panel-resume"
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  <FileText size={18} aria-hidden="true" />
                  View resume
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}