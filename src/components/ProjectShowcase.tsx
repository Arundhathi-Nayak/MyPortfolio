import { useState } from 'react';
import type { Editable, Project } from '../types';
import { EditableText } from './Editable';
import { LinkButtons } from './LinkButtons';
import { ProjectImage } from './ProjectImage';

function Paragraphs({ items }: { items: Editable[] }) {
  return (
    <>
      {items.map((item, index) => (
        <p key={index}>
          <EditableText value={item} />
        </p>
      ))}
    </>
  );
}

function Bullets({ items }: { items: Editable[] }) {
  return (
    <ul className="bullets">
      {items.map((item, index) => (
        <li key={index}>
          <EditableText value={item} />
        </li>
      ))}
    </ul>
  );
}

/** The large featured-project layout: gallery, story, then features / tech / contributions. */
export function ProjectShowcase({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);
  const shots = project.screenshots;
  const shot = shots[current];

  return (
    <article className="glass showcase" aria-labelledby={`${project.id}-title`}>
      <header className="showcase__head">
        <div>
          <h3 id={`${project.id}-title`} className="showcase__title">
            {project.title}
          </h3>
          <p className="showcase__tagline">
            <EditableText value={project.tagline} />
          </p>
        </div>
        <LinkButtons project={project} />
      </header>

      <div className="showcase__main">
        {shot && (
          <div className="showcase__gallery">
            <ProjectImage key={shot.src} src={shot.src} alt={shot.alt} />
            {shots.length > 1 && (
              <div className="showcase__thumbs" role="group" aria-label={`${project.title} screenshots`}>
                {shots.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    className="thumb"
                    aria-pressed={index === current}
                    onClick={() => setCurrent(index)}
                  >
                    {item.caption}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="showcase__story">
          <div>
            <h4>The problem</h4>
            <Paragraphs items={project.problem} />
          </div>
          <div>
            <h4>The solution</h4>
            <Paragraphs items={project.solution} />
          </div>
        </div>
      </div>

      <div className="showcase__details">
        <div>
          <h4>Key features</h4>
          <Bullets items={project.features} />
        </div>
        <div>
          <h4>Technologies</h4>
          <ul className="tags">
            {project.technologies.map((tech, index) => (
              <li key={index} className={`tag ${typeof tech === 'string' ? '' : 'tag--todo'}`}>
                <EditableText value={tech} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>My contributions</h4>
          <Bullets items={project.contributions} />
        </div>
      </div>
    </article>
  );
}