import type { Project } from '../types';

/**
 * EDIT ME: the first project is the featured one.
 * Plain strings are real content. { todo: "..." } shows a dashed placeholder.
 * Only add features, results and numbers that are true.
 */
export const projects: Project[] = [
  {
    id: 'healthgrid-ai',
    title: 'HealthGrid AI',
    tagline: "A healthcare-resource and supply-chain platform for India's Primary Health Centres.",
    problem: [
      // Please review this sentence for accuracy and edit it in your own words.
      "Primary Health Centres (PHCs) are often a community's first contact with the public health system in India. They rely on a steady supply of medicines, equipment and other resources to serve patients.",
      { todo: 'Add the specific problem you set out to solve, in your own words.' },
    ],
    solution: [
      "HealthGrid AI is a healthcare-resource and supply-chain platform built for India's Primary Health Centres.",
      { todo: 'Explain how HealthGrid AI works and what it helps people do.' },
    ],
    features: [
      { todo: 'Add a key feature you built' },
      { todo: 'Add another key feature' },
      { todo: 'Add a third key feature' },
    ],
    technologies: [{ todo: 'Add the technologies you used' }],
    contributions: [{ todo: 'Describe what you personally designed and built' }],
    screenshots: [
      {
        src: '/projects/healthgrid-1.png',
        alt: 'Describe what this HealthGrid AI screenshot shows.',
        caption: 'Screenshot 1',
      },
      {
        src: '/projects/healthgrid-2.png',
        alt: 'Describe what this HealthGrid AI screenshot shows.',
        caption: 'Screenshot 2',
      },
    ],
    // TODO: replace with real links (buttons stay disabled until you do)
    github: 'https://github.com/your-username/healthgrid-ai',
    liveDemo: 'https://your-healthgrid-demo.vercel.app',
  },
  {
    id: 'project-two',
    title: 'Project two',
    tagline: { todo: 'Add a one-line summary once you have real details.' },
    problem: [],
    solution: [],
    features: [],
    technologies: [{ todo: 'Add technologies' }],
    contributions: [],
    screenshots: [],
  },
  {
    id: 'project-three',
    title: 'Project three',
    tagline: { todo: 'Add a one-line summary once you have real details.' },
    problem: [],
    solution: [],
    features: [],
    technologies: [{ todo: 'Add technologies' }],
    contributions: [],
    screenshots: [],
  },
];