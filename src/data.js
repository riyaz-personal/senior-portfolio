// export const EXPERIENCE = [
//   {
//     company: 'Altimetrik',
//     role: 'Senior Frontend Engineer',
//     period: 'Jan 2022 — Present',
//     points: [
//       'Product team contributor for Dex (dex.altimetrik.com): complex UI flows (Invite Members, Channel Members, media uploads), polished to Figma with pixel-perfect execution.',
//       'Architected infinite scroll patterns, debounced search, robust empty/error states, and high accessibility/performance standards (Lighthouse 95+).',
//       'Led reusable component design across pages; integrated Redux thunks and API-driven UIs.'
//     ]
//   },
//   {
//     company: 'Wayfair (Client via Altimetrik)',
//     role: 'Senior Frontend Engineer',
//     period: '2023 — 2024',
//     points: [
//       'Shipped scalable UI components, performance optimizations, and DX improvements in a large codebase.',
//       'Collaborated with platform, design, and QA to deliver high-impact features at pace.'
//     ]
//   },
//   {
//     company: 'GoSite (Client)',
//     role: 'Full Stack Developer',
//     period: '≈ 6 months',
//     points: [
//       'Delivered features in a fast-moving startup environment; emphasized responsiveness and code quality.'
//     ]
//   },
//   {
//     company: 'CKS Global Ventures',
//     role: 'Full Stack Developer',
//     period: 'May 2021 — Nov 2021',
//     points: [
//       'Built responsive React apps and improved delivery speed with clean patterns and reusable components.'
//     ]
//   }
// ]

// export const PROJECTS = [
//   {
//     title: 'Dex (Altimetrik) — Channel & Invite Flows',
//     description: 'Core UX for invite users, channel members, media uploads, and infinite scroll feeds with accessible skeleton loading and optimized state updates.',
//     tech: ['React', 'Redux', 'Ant Design', 'Infinite Scroll', 'Thunks'],
//     links: {
//       live: 'https://dex.altimetrik.com/web/',
//       code: '#'
//     },
//     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
//   },
//   {
//     title: 'Intermont — Figma → React',
//     description: 'Pixel-perfect conversion of a complex Figma design into a production-grade, fully responsive React app with Tailwind + SCSS Modules.',
//     tech: ['React', 'Tailwind', 'SCSS Modules'],
//     links: {
//       live: '#',
//       code: '#'
//     },
//     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
//   },
//   {
//     title: 'Global Tech Live — Videos Grid',
//     description: 'React + Redux infinite scroll grid, category filters, modal video player, and debounced search with fallback mock dataset.',
//     tech: ['React', 'Redux', 'Ant Design', 'Infinite Scroll'],
//     links: {
//       live: 'https://dex.altimetrik.com/web/my_space/learning/global-tech-live',
//       code: '#'
//     },
//     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
//   },
//   {
//     title: 'Business Calculator',
//     description: 'A sleek calculator with monthly profit, summaries, and selection features; optimized UI and code structure.',
//     tech: ['React', 'Tailwind'],
//     links: {
//       live: 'https://personal-business.vercel.app',
//       code: 'https://github.com/riyaz-personal/personal-business'
//     },
//     image: '/images/business-calculator.png'
//   }
// ]

export const EXPERIENCE = [
    {
        company: 'Altimetrik India Pvt Ltd (Client: Talent Central & Dex Team)',
        role: 'Senior Frontend Engineer',
        period: 'Aug 2024 — Present',
        points: [
            'Built and optimized Dex learning pages including “Global Tech Live” with full search, infinite scroll pagination, and iframe video popup from scratch.',
            'Developed, tested, and maintained complex React-based modules for Dex web (https://dex.altimetrik.com/web/).',
            'Implemented Jest unit tests to ensure component reliability and performance across large-scale front-end workflows.'
        ]
    },
    {
        company: 'Altimetrik India Pvt Ltd (Client: Wayfair)',
        role: 'Frontend Developer',
        period: 'Oct 2022 — Jul 2024',
        points: [
            'Delivered the Admin Segmentation UI for Wayfair (https://admin.wayfair.com/d/segmentation-ui/) — a marketing query generation tool empowering business users.',
            'Migrated legacy PHP codebases to ReactJS, reducing technical debt and improving maintainability.',
            'Authored and maintained over 400 Jest test cases for critical UI features to ensure quality and regression safety.'
        ]
    },
    {
        company: 'Altimetrik India Pvt Ltd (Client: GoSite)',
        role: 'Full Stack Developer',
        period: 'Jan 2022 — Sep 2022',
        points: [
            'Developed and maintained GoSite web app using Next.js, React.js, and Strapi.',
            'Integrated backend APIs and customized the Strapi CMS for business workflows.',
            'Collaborated closely with design and product teams to ensure scalable, maintainable architecture.'
        ]
    },
    {
        company: 'CKS Global Ventures (Client: Condé Nast)',
        role: 'Full Stack Developer',
        period: 'May 2021 — Jan 2022',
        points: [
            'Delivered the official Condé Nast website using Next.js, React.js, and Contentful CMS.',
            'Created reusable components and content management workflows to enhance editorial productivity.',
            'Collaborated across disciplines to align technical delivery with business requirements.'
        ]
    },
    {
        company: 'Trioangle Technologies',
        role: 'Full Stack Developer',
        period: 'Sep 2019 — May 2021',
        points: [
            'Built “Makent SwitchNight” — a React + GraphQL + Apollo Server web platform for home stay bookings.',
            'Developed both frontend and backend modules using MongoDB and Apollo to improve booking data flow.',
            'Enhanced performance and implemented test coverage for critical endpoints.'
        ]
    },
    {
        company: 'RadicalStart',
        role: 'Full Stack Developer',
        period: 'Jun 2018 — Aug 2019',
        points: [
            'Developed full-stack applications with React, Sequelize, Apollo Server, and MySQL.',
            'Worked closely with cross-functional teams to design and document scalable architectures.',
            'Delivered robust business logic for SaaS-based real estate and travel products.'
        ]
    },
    {
        company: 'IT Flex Solutions',
        role: 'PHP Developer',
        period: 'Aug 2016 — Jun 2018',
        points: [
            'Developed dynamic web applications using PHP MVC frameworks and MySQL.',
            'Integrated front-end and back-end features with strong attention to maintainability and scalability.',
            'Collaborated with cross-functional teams to deliver production-grade web portals.'
        ]
    }
];

export const PROJECTS = [
    {
        title: 'Dex — Global Tech Live & Channel Platform',
        description:
            'Built and maintained key Dex learning platform modules, including search, infinite scroll, and video playback features. Implemented robust error handling, API integration, and optimized reusability with Redux and Ant Design.',
        tech: ['React', 'Redux', 'Ant Design', 'Jest', 'Infinite Scroll'],
        links: {
            live: 'https://dex.altimetrik.com/web/my_space/learning/global-tech-live',
            code: '#'
        },
        image:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
    },
    {
        title: 'Wayfair — Admin Segmentation UI',
        description:
            'Developed an internal marketing query generation platform enabling Wayfair marketers to segment and analyze customer data efficiently. Migrated from PHP to React and achieved 100% test coverage with Jest.',
        tech: ['React', 'Jest', 'Postgres'],
        links: {
            live: 'https://admin.wayfair.com/d/segmentation-ui/overview',
            code: '#'
        },
        image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
    },
    {
        title: 'GoSite — Business App Platform',
        description:
            'Implemented full-stack functionality with Next.js, React.js, and Strapi CMS for small-business automation apps, integrating dynamic APIs and custom content workflows.',
        tech: ['Next.js', 'React', 'Strapi'],
        links: {
            live: 'https://www.gosite.com/',
            code: '#'
        },
        image:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
    },
    {
        title: 'Condé Nast — Global Media Platform',
        description:
            'Developed and maintained responsive content delivery systems using React and Contentful, enhancing editorial efficiency across Condé Nast’s web presence.',
        tech: ['Next.js', 'React', 'Contentful'],
        links: {
            live: 'https://www.condenast.com/',
            code: '#'
        },
        image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
    },
    {
        title: 'Makent SwitchNight',
        description:
            'Developed an Airbnb-style React + GraphQL platform for women-only homestays with Apollo Server and MongoDB integration.',
        tech: ['React', 'GraphQL', 'MongoDB', 'Apollo Server'],
        links: {
            live: 'https://makentswitchnight.trioangle.com/',
            code: '#'
        },
        image:
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1600&auto=format&fit=crop'
    },
    {
        title: 'Business Calculator',
        description: 'A sleek calculator with monthly profit, summaries, and selection features; optimized UI and code structure.',
        tech: ['React', 'Tailwind'],
        links: {
            live: 'https://personal-business.vercel.app',
            code: 'https://github.com/riyaz-personal/personal-business'
        },
        image: '/images/business-calculator.png'
    }
];


export const SKILLS = [
    'React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind', 'SCSS', 'GraphQL', 'Apollo', 'Node.js', 'MySQL', 'Contentful', 'Vite', 'Framer Motion'
]

export const TESTIMONIALS = [
  {
    name: 'Anmol Dixit',
    role: 'Project Manager — Global Tech Live, Altimetrik',
    feedback:
      'Recognized my contribution to the Dex “Global Tech Live” platform, acknowledged delivery ownership, and promised a professional shoutout for performance during appraisal and transition discussions.',
    images: [
      '/images/testimonials/anmol-1.png',
      '/images/testimonials/anmol-2.png'
    ]
  },
  {
    name: 'Hidayathullah Khan',
    role: 'Reporting Manager — Wayfair Project, Altimetrik',
    feedback:
      'Appreciated my technical presentation skills and clarity of communication during team demos. Encouraged continued excellence in project updates and delivery flow.',
    images: ['/images/testimonials/hidayathullah.png']
  },
  {
    name: 'Alka Raghuvanshi',
    role: 'Client Employee — Senior Software Engineer, Wayfair',
    feedback:
      'Appreciated my support and collaboration during knowledge transfer and delivery handoff. Extended best wishes for future projects and acknowledged professionalism in team coordination.',
    images: ['/images/testimonials/alka.png']
  }
];
