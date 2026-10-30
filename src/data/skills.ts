import type { SkillGroup } from '../types';

/**
 * EDIT ME: list only technologies you are comfortable with.
 * Replace each { todo } with a real skill, e.g. 'Python'.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming languages',
    icon: 'code',
    skills: ['TypeScript', { todo: 'Add a language you know' }],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Vite', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    skills: [{ todo: 'Add backend technologies' }],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: [{ todo: 'Add databases you have used' }],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    icon: 'brain',
    skills: [{ todo: 'Add AI / ML tools or libraries' }],
  },
  {
    id: 'tools',
    title: 'Developer tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Vercel'],
  },
];