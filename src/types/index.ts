export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}