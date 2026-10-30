import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import type { Project } from '../types';
import { isPlaceholderUrl } from '../utils/links';
import { ExternalLink } from './ExternalLink';
import { GithubIcon } from './BrandIcons';

/** A missing or placeholder link renders as a disabled button, so visitors never hit a dead page. */
export function LinkButtons({ project }: { project: Pick<Project, 'title' | 'github' | 'liveDemo'> }) {
  const { title, github, liveDemo } = project;
  const githubReady = !isPlaceholderUrl(github);
  const demoReady = !isPlaceholderUrl(liveDemo);

  return (
    <div className="project__links">
      {githubReady && github ? (
        <ExternalLink className="btn btn--ghost btn--small" href={github} aria-label={`${title} source code on GitHub`}>
          <GithubIcon width={16} height={16} />
          GitHub
        </ExternalLink>
      ) : (
        <span className="btn btn--ghost btn--small btn--disabled" aria-disabled="true" title="Add the GitHub link in src/data/projects.ts">
          <GithubIcon width={16} height={16} />
          GitHub link coming soon
        </span>
      )}

      {demoReady && liveDemo ? (
        <ExternalLink className="btn btn--primary btn--small" href={liveDemo} aria-label={`${title} live demo`}>
          <ExternalLinkIcon size={16} aria-hidden="true" />
          Live demo
        </ExternalLink>
      ) : (
        <span className="btn btn--ghost btn--small btn--disabled" aria-disabled="true" title="Add the live-demo link in src/data/projects.ts">
          <ExternalLinkIcon size={16} aria-hidden="true" />
          Live demo coming soon
        </span>
      )}
    </div>
  );
}