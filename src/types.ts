/**
 * "Editable" text is either a normal string (real content) or { todo: "..." },
 * which is shown on the site with a dashed placeholder style.
 */
export type Editable = string | { todo: string };

export interface Profile {
  name: string;
  initials: string;
  role: string;
  headline: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
  resumeFile: string;
  resumeDownloadName: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export type SkillIcon = 'code' | 'layout' | 'server' | 'database' | 'brain' | 'wrench';

export interface SkillGroup {
  id: string;
  title: string;
  icon: SkillIcon;
  skills: Editable[];
}

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: Editable;
  problem: Editable[];
  solution: Editable[];
  features: Editable[];
  technologies: Editable[];
  contributions: Editable[];
  screenshots: Screenshot[];
  github?: string;
  liveDemo?: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
  placeholder?: boolean;
}

export interface CredentialItem {
  title: string;
  detail: string;
  placeholder?: boolean;
}