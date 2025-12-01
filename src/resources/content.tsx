import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Musabbir",
  lastName: "Sagar",
  name: `Musabbir Sagar`,
  role: "Web Developer",
  agency: "Grow your business with",
  avatar: "/images/avatar.png",
  email: "musabbir@thirdbracket.co.uk",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bengali"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sagarmusabbir",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/musabbirsagar/",
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/wwolverinee",
    essential: true,
  },
  {
    name: "Npm",
    icon: "npm",
    link: "https://www.npmjs.com/package/@thirdbracket/bracketui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/og.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>A developer with passion for UI/UX design</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Musabbir, creator of{" "}
      <Text as="span" size="xl" weight="strong">
        Bracket UI
      </Text>
      , where I build intuitive <br /> user experiences. After years, I build my
      own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a full stack developer, Musabbir Sagar has worked with Next.js and
        Payload CMS since the early days and knows both systems inside out. His
        focus on code-first architecture and advanced rendering techniques
        consistently produces sites that outperform even the official Next.js
        benchmarks. Along with building Bracket UI, he also leads development at
        Third Bracket.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Third Bracket",
        timeframe: "2023 - Present",
        role: "Founder",
        achievements: [
          <>
            Founded Third Bracket, a digital agency for bespoke web aplication a
            nd digital marketing.
          </>,
          <>
            Bridged the gap beetween seasoned freelancers and professional
            agency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover1.png",
            alt: "Third Bracket Project",
            width: 16,
            height: 12,
          },
        ],
      },

      {
        company: "Bracket UI",
        timeframe: "2023 - Present",
        role: "Founder",
        achievements: [
          <>
            Founded Bracket UI, a slik, modern yet minimal component library
            made for Next.js with tailwindcss.
          </>,
          <>
            Designed and developed the UI component library and maintaining the
            codebase and npm package.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover2.png",
            alt: "Third Bracket Project",
            width: 16,
            height: 12,
          },
        ],
      },
      {
        company: "MetaConnect",
        timeframe: "2019 - 2023",
        role: "Lead Developer",
        achievements: [
          <>
            Lead the developement team while collaborate with designer and
            client.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Swinburne University of Technology, Sarawak",
        description: <>Studied computer science.</>,
      },
      {
        name: "AWS Cloud Practitioneer",
        description: <>Certified AWS Cloud Practitioneer</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>
            Building custom full stack aplication with Next.js + Bracket UI +
            React.
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },

          {
            name: "Bracket UI",
            icon: "tailwindcss",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 12,
          },
        ],
      },

      {
        title: "PayloadCMS",
        description: <>Able to create almost any custom cms with payloadCMS.</>,
        tags: [
          {
            name: "PayloadCMS",
            icon: "payload",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover3.png",
            alt: "Project image",
            width: 16,
            height: 12,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 12,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/cover4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cover5.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cover6.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cover7.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
