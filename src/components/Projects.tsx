import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectShowcase } from './ProjectShowcase';
import { Section } from './Sections';

export function Projects() {
  const [featured, ...others] = projects;

  return (
    <Section
      id="projects"
      title="Featured projects"
      description="Work I've built, with what it's for, how it's put together and what I did."
    >
      {featured && <ProjectShowcase project={featured} />}

      {others.length > 0 && (
        <div className="project-grid">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}