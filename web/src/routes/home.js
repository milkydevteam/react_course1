import Home from '../pages/home/index';
import HomeDetail from '../pages/home/detail';

export default [
  {
    path: '',
    exact: true,
    component: Home,
  },
  {
    path: 'home-detail',
    component: HomeDetail,
  },
];
