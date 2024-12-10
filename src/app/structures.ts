interface Portfolio {
  name: string;
  about: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  contact: Contact;
}

interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
}
interface Experience {
  title: string;
  company: string;
  duration: string;
  technologies: string[];
  tasks: string[];
  description: string;
}
interface Education {
  institution: string;
  degree: string;
  duration: string;
  achievements: string[];
  description: string;
}
interface Contact {
  email: string;
  github: string;
  linkedin: string;
}