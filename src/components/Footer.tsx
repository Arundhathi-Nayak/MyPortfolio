import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <SocialLinks />
        <p className="footer__copy">
          © {year} {profile.name}
        </p>
        <a className="footer__top" href="#top">
          <ArrowUp size={16} aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  );
}