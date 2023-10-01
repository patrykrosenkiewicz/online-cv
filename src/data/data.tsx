import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Patryk Rosenkiewicz',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Patryk Rosenkiewicz.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">The Software House</strong> helping with realization of customers plans.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">riding motorcycle</strong>, walking my{' '}
        <strong className="text-stone-100">dog</strong>, or playing with{' '}
        <strong className="text-stone-100">new technologies</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Web developer with 5 years of experience. I worked on a great variety of projects written in Perl, Bash, C++, Ruby, PHP, Python, and JavaScript. Love learning new things and playing with my two dogs.`,
  aboutItems: [
    {label: 'Location', text: 'Gdańsk', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Polish', Icon: FlagIcon},
    {label: 'Interests', text: 'Psychology, dogs, new technologies', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Gdańsk, Psychology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'The Software House', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Polish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 9,
      },
      {
        name: 'NextJS',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      {
        name: 'Perl',
        level: 6,
      },
      {
        name: 'PHP',
        level: 4,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'GitHub Actions',
        level: 6,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'VirtualBox',
        level: 5,
      },
      {
        name: 'AWS / Azure',
        level: 5,
      },
      {
        name: 'Linux',
        level: 7,
      },
      {
        name: 'Bash',
        level: 4,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2020',
    location: 'University of Gdańsk',
    title: 'Masters in Psychology',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2023 - Present',
    location: 'The Software House',
    title: 'Node.js developer',
    content: (
      <p>
        Backend developer in greenfield project which is responsble for comparing banking products. Main technologies:
        TypeORM, Express.js, TypeScript and PostgreSQL.
      </p>
    ),
  },
  {
    date: 'May 2023 - July 2023',
    location: 'The Software House',
    title: 'Full-stack developer',
    content: (
      <p>
        Data warehouse hosted on AWS cloud. I was responsible for adjusting the process of authentication by omitting a
        proxy module responsible for integrating with the self-hosted IAM service, keycloak. I also did minor
        improvements and optimizations of data imports within step-functions workflows. Main technologies: TypeScript,
        AWS Step functions, S3, PostgreSQL and Keycloak.
      </p>
    ),
  },
  {
    date: 'April 2022 - May 2023',
    location: 'The Software House',
    title: 'Full-stack developer',
    content: (
      <p>
        Legacy CRM application which main features was to create contracts and then generate invoices. I was responsible
        for refactoring the code and adding new features. Application had plenty of integrations with external services.
        And application used self-hosted IAM service, FusionAuth for authorization and authentication. Main
        technologies: Node.js, Express.js, TypeScript, PostgreSQL, FusionAuth, React and Next.js.
      </p>
    ),
  },
  {
    date: 'January 2018 - March 2022',
    location: 'DIR',
    title: 'Full-stack developer',
    content: (
      <p>
        Responsible for developing and maintaining stack of applications related to call centers. Main features of
        applications was to manage call center, create new agents, queues setting priorites etc. And calculate
        statistics of call centers like eg. call durations, call hangout reason, response time etc. Main technologies:
        Perl, PHP, JavaScript, JQuery, Bash and PostgreSQL.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to send me an email or reach me through linkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'patrykrosenkiewicz@gmail.com',
      href: 'mailto:patrykrosenkiewicz@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Gdańsk, Poland',
      href: 'https://www.google.pl/maps/place/Gda%C5%84sk/@54.3611752,18.5252233,11z',
    },
    {
      type: ContactType.Github,
      text: 'patrykrosenkiewicz',
      href: 'https://github.com/patrykrosenkiewicz',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/patrykrosenkiewicz'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://pl.linkedin.com/in/patryk-rosenkiewicz-5751b5130'},
];
