import type { ProfileVariantKey } from "@/lib/variant";
import type { VCardInfo } from "@/lib/vcard";

export interface InstitutionLogo {
  name: string;
  src: string;
  widthClass: string;
}

export interface SkillTag {
  label: string;
  highlighted?: boolean;
}

export interface ProofMetric {
  value: string;
  label: string;
}

export interface CurrentRoleHighlight {
  title: string;
  summary: string;
}

export interface ActionLinkItem {
  id: "resume" | "linkedin" | "about" | "portfolio";
  title: string;
  subtitle: string;
  href: string;
  downloadName?: string;
}

export interface QuickContactItem {
  id: "github" | "whatsapp" | "email" | "website";
  label: string;
  href: string;
}

export interface ProfileVariant {
  pageTitle: string;
  role: string;
  locationLine: string;
  bio: string;
  fellowshipBadge: string;
  skills: SkillTag[];
  metrics: ProofMetric[];
  currentRole: CurrentRoleHighlight;
  links: ActionLinkItem[];
  vcard: VCardInfo;
}

export const SHARED_PROFILE = {
  name: "Abdelrahman Mahmoud",
  availabilityText: "Available for opportunities",
  heroImage: "/me.png",
  accreditationFooter: "DiGiLiANS • MCIT • Military Academy • NTI",
  institutions: [
    {
      name: "DiGiLiANS",
      src: "/logos/digilians.png",
      widthClass: "w-16",
    },
    {
      name: "MCIT",
      src: "/logos/mcit.png",
      widthClass: "w-16",
    },
    {
      name: "Military Academy",
      src: "/logos/military-academy.png",
      widthClass: "w-9",
    },
    {
      name: "NTI",
      src: "/logos/nti.png",
      widthClass: "w-14",
    },
  ] satisfies InstitutionLogo[],
  quickContacts: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Abdelrahman-Mahmoud-Elsaeed",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/201095160726",
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:abdelrahman.mahmoud.elsaeed@gmail.com",
    },
    {
      id: "website",
      label: "Personal Website",
      href: "https://abdelrahmanmahmoud.vercel.app/",
    },
  ] satisfies QuickContactItem[],
} as const;

const BASE_VCARD = {
  fullName: "Abdelrahman Mahmoud",
  organization: "MCIT • Digilians Initiative",
  phone: "+201095160726",
  email: "abdelrahman.mahmoud.elsaeed@gmail.com",
  url: "https://abdelrahmanmahmoud.vercel.app",
  address: ";;Cairo;Egypt;;;",
  fileName: "Abdelrahman-Mahmoud.vcf",
};

export const PROFILE_VARIANTS: Record<ProfileVariantKey, ProfileVariant> = {
  fullstack: {
    pageTitle: "Abdelrahman Mahmoud | Full-Stack Developer",
    role: "Full-Stack Developer | Node.js, React & AWS",
    locationLine: "Cairo, Egypt",
    bio: "Building resilient Node.js backends & modern React apps.",
    fellowshipBadge: "AWS Certified",
    skills: [
      { label: "Node.js" },
      { label: "TypeScript" },
      { label: "React" },
      { label: "PostgreSQL" },
      { label: "AWS", highlighted: true },
    ],
    metrics: [
      { value: "Dual AWS", label: "DVA & CLF" },
      { value: "47+ Routes", label: "Multi-Tenant API" },
      { value: "5.0 ★", label: "Upwork Rating" },
    ],
    currentRole: {
      title: "Full-Stack Engineer Intern @ MCIT",
      summary:
        "Designing a Node.js and React processing engine to validate digitization/OCR deliveries, detect file-structure and metadata inconsistencies, and standardize inputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Full-Stack CV • PDF",
        href: "/cv/fullstack-cv.pdf",
        downloadName: "Abdelrahman Mahmoud - Fullstack Developer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/abdelrahman-mahmoud-akl/",
      },
      {
        id: "about",
        title: "About Me",
        subtitle: "Career journey & background",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/about",
      },
      {
        id: "portfolio",
        title: "Portfolio & Projects",
        subtitle: "NEXUS-CRM, MediMind & more",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/projects",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Full-Stack Developer | Software Engineer Intern @ MCIT",
      note: "Dual AWS Certified (DVA-C02 & CLF-C02) • Node.js, React & Cloud",
    },
  },
  backend: {
    pageTitle: "Abdelrahman Mahmoud | Backend & Cloud Engineer",
    role: "Backend & Cloud Engineer | Node.js & AWS",
    locationLine: "Cairo, Egypt",
    bio: "Multi-tenant APIs, Redis caching, RBAC & AWS ECS systems.",
    fellowshipBadge: "Dual AWS Certified",
    skills: [
      { label: "Node.js" },
      { label: "TypeScript" },
      { label: "PostgreSQL" },
      { label: "Redis" },
      { label: "AWS", highlighted: true },
    ],
    metrics: [
      { value: "47+ Routes", label: "NEXUS-CRM API" },
      { value: "Dual AWS", label: "DVA & CLF" },
      { value: "5.0 ★", label: "Upwork Rating" },
    ],
    currentRole: {
      title: "Backend Engineer Intern @ MCIT",
      summary:
        "Building a Node.js processing engine to validate digitization/OCR deliveries, detect file-structure and metadata inconsistencies, and prepare standardized pipeline inputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Back-End CV • PDF",
        href: "/cv/backend-cv.pdf",
        downloadName: "Abdelrahman Mahmoud - Backend Developer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/abdelrahman-mahmoud-akl/",
      },
      {
        id: "about",
        title: "About Me",
        subtitle: "Architecture & career journey",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/about",
      },
      {
        id: "portfolio",
        title: "Backend Case Studies",
        subtitle: "NEXUS-CRM (47+ routes) & MediMind",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/projects/nexus-crm",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Backend & Cloud Engineer | Software Engineer Intern @ MCIT",
      note: "Node.js, TypeScript, PostgreSQL, Redis, Terraform & Dual AWS Certified",
    },
  },
  frontend: {
    pageTitle: "Abdelrahman Mahmoud | Front-End Engineer",
    role: "Front-End Engineer | React, Next.js & TypeScript",
    locationLine: "Cairo, Egypt",
    bio: "Fast, accessible React 19, Next.js PWAs & design systems.",
    fellowshipBadge: "Meta Front-End",
    skills: [
      { label: "React 19" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "PWA", highlighted: true },
    ],
    metrics: [
      { value: "React 19", label: "& Next.js PWA" },
      { value: "Meta Cert", label: "Front-End" },
      { value: "5.0 ★", label: "Upwork Rating" },
    ],
    currentRole: {
      title: "Front-End Engineer Intern @ MCIT",
      summary:
        "Designing a React & Node.js interface and processing engine to inspect digitization/OCR deliveries, surface metadata inconsistencies, and standardize outputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Front-End CV • PDF",
        href: "/cv/frontend-cv.pdf",
        downloadName: "Abdelrahman Mahmoud - Frontend Developer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/abdelrahman-mahmoud-akl/",
      },
      {
        id: "about",
        title: "About Me",
        subtitle: "Career journey & background",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/about",
      },
      {
        id: "portfolio",
        title: "UI & Web Projects",
        subtitle: "React, Next.js PWA & Angular",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/projects",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Front-End Engineer | Software Engineer Intern @ MCIT",
      note: "React 19, Next.js, TypeScript, Tailwind CSS & Meta Front-End Certified",
    },
  },
  software: {
    pageTitle: "Abdelrahman Mahmoud | Software Engineer",
    role: "Software Engineer | Systems & Cloud",
    locationLine: "Cairo, Egypt",
    bio: "Building multi-tenant SaaS backends, React apps & AWS cloud.",
    fellowshipBadge: "AWS Certified",
    skills: [
      { label: "TypeScript" },
      { label: "Node.js" },
      { label: "React" },
      { label: "Docker" },
      { label: "AWS", highlighted: true },
    ],
    metrics: [
      { value: "47+ Routes", label: "Multi-Tenant SaaS" },
      { value: "Dual AWS", label: "DVA & CLF" },
      { value: "5.0 ★", label: "Upwork Rating" },
    ],
    currentRole: {
      title: "Software Engineer Intern @ MCIT",
      summary:
        "Working on the design of a Node.js and React processing engine to validate digitization/OCR deliveries, detect file-structure and metadata inconsistencies, and prepare standardized inputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Software Engineer CV • PDF",
        href: "/cv/software-engineer-cv.pdf",
        downloadName: "Abdelrahman Mahmoud - Software Engineer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/abdelrahman-mahmoud-akl/",
      },
      {
        id: "about",
        title: "About Me",
        subtitle: "Engineering journey",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/about",
      },
      {
        id: "portfolio",
        title: "Systems & Projects",
        subtitle: "SaaS, Cloud & C++ HPC",
        href: "https://abdelrahmanmahmoud.vercel.app/portfolio/projects",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Software Engineer | Intern @ MCIT",
      note: "Distributed Systems, C++ HPC, TypeScript & Dual AWS Certified",
    },
  },
};
