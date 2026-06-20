import moment from 'moment';
import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

const numberToText = (number: number): string => {
  const textNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  return textNumbers[number] || number.toString();
};

const calculateExperienceYears = () => {
  const startDate = moment('2017-07-01');
  const currentDate = moment();
  return currentDate.diff(startDate, 'years');
};

export const greetings: GreetingsType = {
  name: 'Sooraj Parameswaran',
  title: "Hi all, I'm Sooraj Parameswaran",
  description: `Senior Software Engineer with over ${numberToText(
    calculateExperienceYears()
  )} years of experience leading teams and developing full-stack software applications. Proficient in Event-driven architectures, Microservices architecture, Distributed systems, and Serverless paradigms. Demonstrated success in providing technical solutions to multinational enterprise clients and creating rapid prototypes.`,
  generateResume: true,
};

export const openSource = {
  githubUserName: 'srjpn',
};

export const socialLinks: SocialLinksType = {
  url: 'https://srjpn.github.io/',
  linkedin: 'https://www.linkedin.com/in/srjpn/',
  github: 'https://github.com/srjpn',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Backend Development',
      lottieAnimationFile: '/lottie/skills/backend.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Developing RESTful APIs using ASP.Net Core'),
        emoji('⚡ Crafting Application Services with Node.js and Express'),
        emoji(
          '⚡ Constructing RESTful APIs utilizing Django & Django REST Framework'
        ),
        emoji(
          '⚡ Designing Serverless applications using AWS Lambda & API Gateway'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Golang',
          iconifyTag: 'skill-icons:golang',
        },
        {
          skillName: 'NodeJs',
          iconifyTag: 'logos:nodejs',
        },
        {
          skillName: 'Typescript',
          iconifyTag: 'skill-icons:typescript',
        },
        {
          skillName: 'Dotnet core',
          iconifyTag: 'devicon:dotnetcore',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Scala',
          iconifyTag: 'logos:scala',
        },
        {
          skillName: 'AWS-Lambda',
          iconifyTag: 'logos:aws-lambda',
        },
        {
          skillName: 'GraphQL',
          iconifyTag: 'logos:graphql',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Ruby on Rails',
          iconifyTag: 'simple-icons:rubyonrails',
          color: '#b82619',
        },
        {
          skillName: 'Elixir',
          iconifyTag: 'devicon:elixir-wordmark',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'AWS-Cognito',
          iconifyTag: 'logos:aws-cognito',
        },
        {
          skillName: 'AWS-CloudFormation',
          iconifyTag: 'logos:aws-cloudformation',
        },
        {
          skillName: 'AWS-Fargate',
          iconifyTag: 'logos:aws-fargate',
        },
        {
          skillName: 'AWS-Lambda',
          iconifyTag: 'logos:aws-lambda',
        },
        {
          skillName: 'AWS-SQS',
          iconifyTag: 'logos:aws-sqs',
        },
        {
          skillName: 'AWS-SNS',
          iconifyTag: 'logos:aws-sns',
        },

        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },
    {
      title: 'Fullstack / Frontend Development',
      lottieAnimationFile: '/lottie/skills/frontend.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building dynamic user interfaces with React'),
        emoji('⚡ Creating robust web applications using Angular'),
        emoji('⚡ Developing server-side rendered applications with Next.js'),
        emoji('⚡ Crafting visually appealing and responsive designs with CSS'),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'React',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'devicon:angular',
        },
        {
          skillName: 'NextJs',
          iconifyTag: 'logos:nextjs',
        },
        {
          skillName: 'CSS',
          iconifyTag: 'logos:css-3',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
  {
    Stack: 'Cloud Infra',
    progressPercentage: '60',
  },
  {
    Stack: 'Frontend',
    progressPercentage: '40',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Alagappa University, Karaikudi, Tamil Nadu',
    course: 'Master of Business Administration (MBA)',
    duration: '2018 - 2020',
    desc: 'Specialization in Project Management',
  },
  {
    schoolName: 'Alagappa University, Karaikudi, Tamil Nadu',
    course: 'Bachelor of Computer Applications (BCA)',
    duration: '2016 - 2018',
    desc: 'Computer Applications',
  },
  {
    schoolName: 'Govt. Polytechnic College, Chelakkara, Kerala',
    course: 'Diploma in Engineering',
    duration: '2012 - 2015',
    desc: 'Electronics Engineering',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Backend Engineer',
    company: 'Deel',
    companyLogo: '/img/icons/common/deel-logo.png',
    date: 'April 2025 – Present',
    desc: 'Deel is a global workforce platform that helps companies hire and manage remote talent.',
    descBullets: [
      'Working on Deel-IT platform services focused on scalability, reliability, and developer productivity.',
      'Building and improving backend APIs that support global workforce operations and compliance workflows.',
      'Collaborating with product and engineering teams to deliver high-impact features for internal and external users.',
      'Improving performance, observability, and maintainability across critical services.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Agoda',
    companyLogo: '/img/icons/common/agoda-logo-blue.png',
    date: 'July 2024 – January 2025',
    desc: 'Agoda.com is an online travel agency catering primarily to consumers in the Asia-Pacific region, with headquarters in Singapore and operations in Bangkok, Thailand.',
    descBullets: [
      'Worked with the Flights platform team who are responsible for all flight searches and processing flight requests. Dealing with multiple requests per minute.',
      'Participated in multiple design reviews and code reviews inside the team.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Deserve Labs',
    companyLogo: '/img/icons/common/deserve-logo.png',
    date: 'July 2022 – June 2024',
    desc: 'A mobile-first credit card platform that allows partners to offer superior personalized experiences for cardholders.',
    descBullets: [
      'Spearheaded low-level design and implementation across various facets of the self-processing platform.',
      'Designed and developed customer rewards systems for SaaS - Self processing platform (Credit card as a service).',
      'Single-handedly managed real-time reward processing for each transaction based on custom logic for each tenant.',
    ],
  },
  {
    role: 'Senior Consultant',
    company: 'Thoughtworks Technologies',
    companyLogo: '/img/icons/common/Thoughtworks.jpeg',
    date: 'July 2017 – July 2022',
    desc: 'Developed custom software solutions for clients and actively participated in the software development life cycle. Mentored and guided graduate developers and assisted in deciding software infrastructure. Key Project Contributions:',
    descBullets: [
      'Database Developer - Product Catalogue: Modelled databases, optimised queries, and improved query performance by over 50%.',
      'Fullstack Developer - Product Catalogue: Developed a new application reducing spare part search time by 70% for dealers/customers.',
      'Full Stack / Lead Developer - Exhibition Organisers: Built a new platform to manage over 400 show engagements with global coordination.',
    ],
  },
  {
    role: 'STEP Intern',
    company: 'Thoughtworks Technologies',
    companyLogo: '/img/icons/common/Thoughtworks.jpeg',
    date: 'June 2015 – June 2017',
    desc: 'STEP is a twenty-four month long intensive entry-level programme which follows a unique “work while you study” methodology that offers you the chance to learn theory and apply it while you work.',
    descBullets: [
      'Contributed to the development of a Ticket Booking Application handling high request loads and maintained an admin portal for shows.',
      'Built scalable architecture for an instantaneous load of over 10k requests.',
      'Developed applications for iOS and Android devices to provide a consistent user experience.',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'VestiTrack',
    tagline: 'ESOP & Equity Management Platform',
    desc: 'VestiTrack is a comprehensive software platform for managing Employee Stock Ownership Plans (ESOPs), cap tables, funding rounds, and equity allocation. It streamlines the administration of ownership structures for HR, finance teams, and founders by centralizing equity workflows, ensuring compliance, and enhancing transparency. With an intuitive interface and powerful features, VestiTrack fosters employee engagement and trust by providing clear visibility into equity distribution and ownership changes.',
  },
  // {
  //   name: 'Picktrail',
  //   tagline: 'A Streamlined Inventory Management System',
  //   desc: 'Picktrail is an inventory management application designed for precise tracking of consumables at the batch level. It simplifies stock movements, supplier management, and cost traceability for businesses. Picktrail supports batch-specific pricing, multiple suppliers, and audit-ready transaction logs, making it an ideal solution for industries like hospitality, healthcare, retail, and manufacturing. Its flexibility and accuracy help businesses maintain optimal stock control and operational efficiency.',
  // },
  // {
  //   name: 'FreshSlate',
  //   github: 'https://github.com/srjpn/FreshSlate',
  //   tagline: 'Start Fresh, Stay Organized.',
  //   desc: 'FreshSlate is a command-line tool designed to automate and streamline your development environment setup. With FreshSlate, you can easily configure, install, and manage your essential tools, SSH keys, and system settings in a single, seamless workflow. Whether you\'re setting up a new machine or keeping your environment up-to-date, FreshSlate ensures that every installation is repeatable, consistent, and quick, so you can focus on what truly matters—coding.',
  // },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Sooraj Parameswaran',
  description: 'A passionate Full Stack Web Developer.',
  author: 'Sooraj Parameswaran',
  image: 'https://avatars.githubusercontent.com/u/15261233?v=4',
  // url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Sooraj',
    'Sooraj Parameswaran',
    '@SRJPN',
    'SRJPN',
    'srjpn',
    'Portfolio',
    'Sooraj Portfolio ',
    'Sooraj Parameswaran Portfolio',
  ],
};
