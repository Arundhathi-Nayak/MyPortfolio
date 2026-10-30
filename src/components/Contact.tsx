import { Check, Copy, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { ExternalLink } from './ExternalLink';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Section } from './Sections';

type CopyState = 'idle' | 'copied' | 'failed';

export function Contact() {
  const [copy, setCopy] = useState<CopyState>('idle');

  useEffect(() => {
    if (copy === 'idle') return;
    const timer = window.setTimeout(() => setCopy('idle'), 2200);
    return () => window.clearTimeout(timer);
  }, [copy]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopy('copied');
    } catch {
      setCopy('failed');
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="glass contact">
        <div className="contact__intro">
          <p className="contact__lead">I'm looking for my next software developer role.</p>
          <p>
            If you're hiring, or you have a project that could use another pair of hands, I'd be glad to hear from
            you. Email is the quickest way to reach me.
          </p>
        </div>

        <div className="contact__actions">
          <ExternalLink className="contact__email" href={`mailto:${profile.email}`}>
            <Mail size={22} aria-hidden="true" />
            {profile.email}
          </ExternalLink>

          <div className="contact__buttons">
            <button type="button" className="btn btn--ghost btn--small" onClick={copyEmail}>
              {copy === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              Copy email
            </button>
            <ExternalLink className="btn btn--ghost btn--small" href={profile.github}>
              <GithubIcon width={16} height={16} />
              GitHub
            </ExternalLink>
            <ExternalLink className="btn btn--ghost btn--small" href={profile.linkedin}>
              <LinkedinIcon width={16} height={16} />
              LinkedIn
            </ExternalLink>
          </div>

          <p className="contact__status" role="status" aria-live="polite">
            {copy === 'copied' && 'Email address copied.'}
            {copy === 'failed' && `Couldn't copy automatically. My email is ${profile.email}.`}
          </p>
        </div>
      </div>
    </Section>
  );
}