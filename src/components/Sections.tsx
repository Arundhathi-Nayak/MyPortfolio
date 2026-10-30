import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section__header">
          <h2 id={`${id}-title`}>{title}</h2>
          {description && <p className="section__lede">{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}