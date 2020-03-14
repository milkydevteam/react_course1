import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

export default [
  {
    path: '/login',
    private: false,
    component: Login,
  },
  {
    path: '/register',
    private: false,
    component: Register,
  },
];
