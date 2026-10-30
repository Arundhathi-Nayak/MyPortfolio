import { experience, education, certifications, achievements } from '../data/experience';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
import { isPlaceholderUrl } from './links';

export function findPlaceholders(): string[] {
  const todo: string[] = [];

  if (isPlaceholderUrl(profile.email)) todo.push('profile.email');
  if (isPlaceholderUrl(profile.github)) todo.push('profile.github');
  if (isPlaceholderUrl(profile.linkedin)) todo.push('profile.linkedin');

  const countTodos = (items: unknown[]) =>
    items.filter((item) => typeof item === 'object' && item !== null && 'todo' in item).length;

  skillGroups.forEach((g) => {
    const n = countTodos(g.skills);
    if (n) todo.push(`skills: ${g.title} (${n} placeholder)`);
  });
  projects.forEach((p) => {
    const n =
      countTodos([p.tagline]) +
      countTodos(p.problem) +
      countTodos(p.solution) +
      countTodos(p.features) +
      countTodos(p.technologies) +
      countTodos(p.contributions);
    if (n) todo.push(`projects: ${p.title} (${n} placeholder)`);
    if (p.github !== undefined && isPlaceholderUrl(p.github)) todo.push(`projects: ${p.title} GitHub link`);
    if (p.liveDemo !== undefined && isPlaceholderUrl(p.liveDemo)) todo.push(`projects: ${p.title} live demo link`);
  });
  [...experience, ...education].forEach((i) => i.placeholder && todo.push(`experience/education: ${i.title}`));
  [...certifications, ...achievements].forEach((i) => i.placeholder && todo.push(`credentials: ${i.title}`));

  return todo;
}