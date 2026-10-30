import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { isExternalUrl } from '../utils/links';

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
}

/** Opens http(s) links in a new tab with safe attributes. mailto: links are left alone. */
export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  const external = isExternalUrl(href);
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}