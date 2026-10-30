import { achievements, certifications, education, experience } from '../data/experience';
import type { CredentialItem, TimelineItem } from '../types';
import { Section } from './Sections';

function Timeline({ items, label }: { items: TimelineItem[]; label: string }) {
  if (items.length === 0) return <p className="empty">Nothing added yet.</p>;
  return (
    <ol className="timeline" aria-label={label}>
      {items.map((item, index) => (
        <li key={index} className={`timeline__item ${item.placeholder ? 'is-todo' : ''}`}>
          <span className="timeline__dot" aria-hidden="true" />
          <p className="timeline__period">{item.period}</p>
          <h4 className="timeline__title">{item.title}</h4>
          <p className="timeline__org">{item.organization}</p>
          {item.description && <p className="timeline__desc">{item.description}</p>}
        </li>
      ))}
    </ol>
  );
}

function Credentials({ items, label }: { items: CredentialItem[]; label: string }) {
  if (items.length === 0) return <p className="empty">Nothing added yet.</p>;
  return (
    <ul className="credentials" aria-label={label}>
      {items.map((item, index) => (
        <li key={index} className={`credential ${item.placeholder ? 'is-todo' : ''}`}>
          <h4>{item.title}</h4>
          <p>{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience and education"
      description="Where I've worked and studied, plus certifications and achievements."
    >
      <div className="exp">
        <div>
          <h3 className="exp__heading">Experience</h3>
          <Timeline items={experience} label="Experience" />
        </div>
        <div>
          <h3 className="exp__heading">Education</h3>
          <Timeline items={education} label="Education" />
        </div>
        <div>
          <h3 className="exp__heading">Certifications</h3>
          <Credentials items={certifications} label="Certifications" />
        </div>
        <div>
          <h3 className="exp__heading">Achievements</h3>
          <Credentials items={achievements} label="Achievements" />
        </div>
      </div>
    </Section>
  );
}