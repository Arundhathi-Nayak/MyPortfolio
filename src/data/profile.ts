import type { NavItem, Profile } from '../types';

/** EDIT ME: anything containing "your-" or "example.com" is a placeholder. */
export const profile: Profile = {
  name: 'Arundhathi Nayak',
  initials: 'AN',
  role: 'Software Developer',
  headline: 'Software Developer crafting thoughtful digital experiences.',
  intro:
    'I build web applications and AI-powered solutions, and I enjoy turning real problems into software people can actually use. I learn by building, and I am currently looking for software developer opportunities.',

  // TODO: replace with your real links
  email: 'your.email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',

  // Put your PDF in the /public folder and keep this file name (or change it here).
  resumeFile: 'resume.pdf',
  resumeDownloadName: 'Arundhathi-Nayak-Resume.pdf',
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'];

export const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`;