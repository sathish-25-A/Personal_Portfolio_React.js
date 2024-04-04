import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink , } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Project',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sathish',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'A',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Address: ',
    description: 'Madurai',
  },

  {
    id: 6,
    title: 'Langages : ',
    description: ' Tamil , English',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+916382524059',
  },

  {
    id: 8,
    title: 'Linkedin  : ',
    description: <a href="https://www.linkedin.com/in/sathisha25082000  ">Click</a>,
  },

  {
    id: 9,
    title: 'Email : ',
    description: 'sathisha25082000@gmail.com',
  },

  {
    id: 10,
    title: ' GitHub : ',
    description: <a  href="https://github.com/sathish-25-A">Click</a>
  },
];

export const stats = [
  {
    id: 1,
    no: 'Tools',
    title: 'VS Code ',
  },

  {
    id: 2,
    no: '6+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: 'SCM',
    title: 'GitHub',
  },

  {
    id: 4,
    no: 'DB',
    title: ' MongoDB',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Web Developer <span> Looking For a Job </span>',
    desc: "Open to working as a Front-End Developer or Web Developer as a fresher.",
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaGraduationCap />,
    year: '2023',
    title: ' Project <span> Self-Learning </span>',
    desc: 'Self-learning and building projects with my skills.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaGraduationCap />,
    year: 'APR 2023 – JUN 2023',
    title: 'CERTIFICATION <span> FULL STACK DEVELOPER </span>',
    desc: 'I completed a certification in Full Stack Development at Elysium Academy within three months.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2022',
    title: 'B.E, Computer Science <span> SETHU INSTITUTE OF TECHNOLOGY </span>',
    desc: "In my Bachelor of Engineering in Computer Science, I obtained a 7.64 CGPA in my college's overall result",
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2018',
    title: 'HSC <span> MAVMM Matric Hr Secondary School </span>',
    desc: 'In my 12th grade, I attended Stateboard School and obtained a 57% score in the board exams.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015-2016',
    title: 'SSLC <span> St. Mary’s Hr Secondary School </span>',
    desc: 'In my 10th grade, I attended Stateboard School and achieved a 66% score in the board exams.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML 5',
    percentage: '85',
  },

  {
    id: 2,
    title: 'CSS 3',
    percentage: '89',
  },

  {
    id: 3,
    title: 'JAVASCRIPT',
    percentage: '70',
  },

  {
    id: 4,
    title: 'REACT JS',
    percentage: '75',
  },

  {
    id: 5,
    title: 'BOOTSTRAP ',
    percentage: '70',
  },

  {
    id: 6,
    title: 'TAILWIND',
    percentage: '78',
  },

  {
    id: 7,
    title: 'NODE JS',
    percentage: '71',
  },

  {
    id: 8,
    title: 'MONGO DB',
    percentage: '85',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'amazon Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'shopping Website  ',
      },
      {
        icon: <FiUser />,
        title: 'Github : ',
        desc: <a href='https://github.com/sathish-25-A/amazon-Clone.git'>Click Me</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://main--amazon-clone-project-simple.netlify.app/'>Click Me</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Todo',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Todo List',
      },
      {
        icon: <FiUser />,
        title: 'Github : ',
        desc: <a href="https://github.com/sathish-25-A/Todo__List.git">Click Me</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://sathish-25-a.github.io/Todo__List/">Click Me</a> ,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Mern Stack',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Full Online Shopping Website',
      },
      {
        icon: <FiUser />,
        title: 'Github : ',
        desc: <a href="https://github.com/sathish-25-A/ONLINE-CLOTHING-SHOP-MERN-.git">Click Me</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.Js , Express.Js , Node.js , MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://github.com/sathish-25-A/ONLINE-CLOTHING-SHOP-MERN-.git">Click Me</a>,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'YouTube Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone',
      },
      {
        icon: <FiUser />,
        title: 'Github : ',
        desc: <a href="https://github.com/sathish-25-A/YouTube---Clone-HTML-CSS-.git">Click Me</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML 5 , CSS 3 , Javascript ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://sathish-25-a.github.io/YouTube---Clone-HTML-CSS-/">Click Me</a>,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Simple-Website',
    details: [
      {
        title: 'Project : ',
        desc: 'Simple',
      },
      {
        title: 'Github : ',
        desc: <a href="https://github.com/sathish-25-A/HTML-CSS.git">Click Me</a>,
      },
      {
        title: 'Language : ',
        desc: 'HTML 5 , CSS 3',
      },
      {
        title: 'Preview : ',
        desc: <a href="https://sathish-25-a.github.io/HTML-CSS/">Click Me</a>,
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Personal-Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Github : ',
        desc: <a href="https://github.com/sathish-25-A/Simple-React.js-Portfolio.git">Click Me</a>,
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'REACT.JS , TAILWIND',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://simple-react-portfolio-project.netlify.app/">Click Me</a>,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
