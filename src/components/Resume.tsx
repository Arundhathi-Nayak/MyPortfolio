import { Download, FileText } from 'lucide-react';
import { profile, resumeHref } from '../data/profile';
import { useFileAvailable } from '../hooks/useFileAvailable';
import { Section } from './Sections';

export function Resume() {
  const status = useFileAvailable(resumeHref);
  const missing = status === 'missing';

  return (
    <Section id="resume" title="Resume" description="My background and experience in one document, to read online or keep.">
      <div className="glass resume">
        <div className="resume__file" aria-hidden="true">
          <FileText size={30} />
          <span>{profile.resumeFile}</span>
        </div>

        <div className="resume__body">
          <p>View my resume in a new tab, or download a PDF copy.</p>

          {missing ? (
            <p className="notice" role="status">
              The resume file isn't available right now. Please email me and I'll send it over.
            </p>
          ) : (
            <div className="resume__actions">
              <a className="btn btn--primary" href={resumeHref} target="_blank" rel="noopener noreferrer">
                <FileText size={18} aria-hidden="true" />
                View resume
              </a>
              <a className="btn btn--ghost" href={resumeHref} download={profile.resumeDownloadName}>
                <Download size={18} aria-hidden="true" />
                Download PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}