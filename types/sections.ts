export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  generateResume?: boolean;
};

// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
  color?: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

// * EDUCATION SECTION

export type EducationType = {
  schoolName: string;
  course: string;
  duration: string;
  desc: string;
};

// * EXPERIENCE SECTION

export type ExperienceType = {
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
};

// * PROJECT SECTION

export type ProjectType = {
  logo?: string;
  name: string;
  tagline?: string;
  desc: string;
  github?: string;
  link?: string;
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  feedback: string;
};
