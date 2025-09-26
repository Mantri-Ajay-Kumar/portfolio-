export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resume?: string;
  profileImage?: string;
}

export interface AboutData {
  description: string[];
  yearsOfExperience: number;
  projectsCompleted: number;
  technologies: number;
  certifications: number;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  technologies: string[];
  projects?: Project[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}
