import TS from '../../assets/ts.svg';
import JS from '../../assets/js.svg';
import CSS from '../../assets/CSS3.svg';
import HTML from '../../assets/HTML5.svg';
import REACT from '../../assets/react.svg';
import VSCODE from '../../assets/vscode.svg';
import GITHUB from '../../assets/github.svg';
import SASS from '../../assets/sass.svg';
import MUI from '../../assets/mui.svg';
import ChakraUI from '../../assets/ChakraUI.svg';
import BitBucket from '../../assets/bitbucket.svg';
import Redux from '../../assets/redux.svg';
import jQuery from '../../assets/jquery-2.svg';
import NodeJS from '../../assets/nodejs-icon.svg';
import RadixUI from '../../assets/radix-ui.svg';
import ViteJS from '../../assets/vitejs.svg';
import JSON from '../../assets/json.svg';
import JIRA from '../../assets/jira-1.svg';
import Bootstrap from '../../assets/bootstrap-4.svg';
import NextJS from '../../assets/nextjs.svg';
import Tailwind from '../../assets/tailwind.svg';
import StyledComponents from '../../assets/Styled.png';

interface Tech {
  label: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'devops';
}

export const techs: Tech[] = [
  {
    label: 'React',
    icon: REACT,
    category: 'frontend',
  },
  {
    label: 'Next.js',
    icon: NextJS,
    category: 'frontend',
  },
  {
    label: 'Typescript',
    icon: TS,
    category: 'frontend',
  },
  {
    label: 'Tailwind CSS',
    icon: Tailwind,
    category: 'frontend',
  },
  {
    label: 'Redux',
    icon: Redux,
    category: 'frontend',
  },
  {
    label: 'NodeJS',
    icon: NodeJS,
    category: 'backend',
  },
  {
    label: 'Javascript',
    icon: JS,
    category: 'frontend',
  },
  {
    label: 'MaterialUI',
    icon: MUI,
    category: 'frontend',
  },
  {
    label: 'Sass',
    icon: SASS,
    category: 'frontend',
  },
  {
    label: 'CSS3',
    icon: CSS,
    category: 'frontend',
  },
  {
    label: 'HTML5',
    icon: HTML,
    category: 'frontend',
  },
  {
    label: 'Bootstrap',
    icon: Bootstrap,
    category: 'frontend',
  },
  {
    label: 'ViteJS',
    icon: ViteJS,
    category: 'tools',
  },
  {
    label: 'VSCode',
    icon: VSCODE,
    category: 'tools',
  },
  {
    label: 'Github',
    icon: GITHUB,
    category: 'tools',
  },
  {
    label: 'Bitbucket',
    icon: BitBucket,
    category: 'tools',
  },
  {
    label: 'JSON',
    icon: JSON,
    category: 'devops',
  },
];
