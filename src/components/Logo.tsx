import { profile } from '../data/profile';

interface LogoProps {
  href?: string;
}

export function Logo({ href = '#top' }: LogoProps) {
  return (
    <a className="logo" href={href} aria-label={`${profile.name}, back to top`}>
      <span className="logo__mark" aria-hidden="true">
        {profile.initials}
      </span>
    </a>
  );
}