import type { Project } from '../types';
import { EditableText } from './Editable';

/** Compact card for projects that are not featured yet. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass project-card project-card--empty">
      <h3>{project.title}</h3>
      <p>
        <EditableText value={project.tagline} />
      </p>
      <ul className="tags">
        {project.technologies.map((tech, index) => (
          <li key={index} className={`tag ${typeof tech === 'string' ? '' : 'tag--todo'}`}>
            <EditableText value={tech} />
          </li>
        ))}
      </ul>
    </article>
  );
}