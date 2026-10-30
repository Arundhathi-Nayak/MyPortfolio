import { Brain, Code, Database, Layout, Server, Wrench, type LucideIcon } from 'lucide-react';
import { skillGroups } from '../data/skills';
import type { SkillIcon } from '../types';
import { EditableText } from './Editable';
import { Section } from './Sections';

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code,
  layout: Layout,
  server: Server,
  database: Database,
  brain: Brain,
  wrench: Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      description="The tools I work with, grouped by what they're used for."
    >
      <div className="glass skills">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div key={group.id} className="skills__row">
              <h3 className="skills__title">
                <Icon size={18} aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="tags" aria-label={group.title}>
                {group.skills.map((skill, index) => (
                  <li key={index} className={`tag ${typeof skill === 'string' ? '' : 'tag--todo'}`}>
                    <EditableText value={skill} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}