import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TEducation = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  session: string;
};

export type TExperience = {
  id: string;
  companyName: string;
  companyLogo: string;
  totalYears: string;
  designation: string;
  description: string;
  createdAt: string
};


export type TSkill = {
  name: string
  id: string;
  logo: string
}
export type TSkillTech = {
  technology: {
    name: string
    id: string;
    logo: string
  }
}


export type Technology = {
  id: string;
  name: string;
  logo: string;
};

type ProjectLink = {
  id: string;
  name: string;
  link: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  projectId: string;
};

export type TProject = {
  id?: string;
  name: string;
  images: string[]; 
  description: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  projectTechnology: TSkillTech[];
  projectLink: ProjectLink[];
};