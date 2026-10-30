import { Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { ExternalLink } from './ExternalLink';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <ul className={`social ${className}`.trim()} aria-label="Social links">
      <li>
        <ExternalLink className="social__link" href={profile.github} aria-label="GitHub profile">
          <GithubIcon width={20} height={20} />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="social__link" href={profile.linkedin} aria-label="LinkedIn profile">
          <LinkedinIcon width={20} height={20} />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="social__link" href={`mailto:${profile.email}`} aria-label="Send an email">
          <Mail size={20} aria-hidden="true" />
        </ExternalLink>
      </li>
    </ul>
  );
}