import Home from './Home';
import { Page1, Page2, Page3, Page4 } from './pages';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: (to) => {
      return { path: '/home/page1' };
    },
    children: [
      {
        path: '/home/page1',
        name: 'home.page1',
        component: Page1,
      },
      {
        path: '/home/page2',
        name: 'home.page2',
        component: Page2,
      },
      {
        path: '/home/page3',
        name: 'home.page3',
        component: Page3,
      },
      {
        path: '/home/page4',
        name: 'home.page4',
        component: Page4,
      },
    ],
  },
];
