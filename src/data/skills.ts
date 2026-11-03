import type { SkillGroup } from '../types';

/**
 * EDIT ME: list only technologies you are comfortable with.
 * Replace each { todco } with a real skill, e.g. 'Python'.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming languages',
    icon: 'code',
    skills: ['C#', 'Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frameworks & Technologies',
    icon: 'layout',
    skills: ['.NET', 'ASP.NET Core', 'Spring Boot', 'FastAPI', 'REST APIs', 'React JS',' Angular', 'Entity Framework (EF) Core'],
  },
  {
    id: 'backend',
    title: 'Testing & Software Engineering',
    icon: 'server',
    skills: ['xUnit','SDLC', 'Agile/Scrum', 'OOP'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'SQL Server', 'PostgreSQL'],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    icon: 'brain',
    skills: ['RAG', 'LLM', 'Vector Embeddings', 'Generative AI (GenAI)'],
  },
  {
    id: 'tools',
    title: 'DevOps & Tooling',
    icon: 'wrench',
    skills: ['Microsoft Azure', 'Git', 'Docker', 'CI/CD', 'Jira', 'TFS', 'Postman', 'Swagger', 'ServiceNow'],
  },
];