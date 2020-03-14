import authRoutes from './auth';
import homeRoutes from './home';

const routers = [
  {
    path: '/',
    listRoutes: homeRoutes,
  },
  {
    path: '/auths',
    listRoutes: authRoutes,
  },
];

// [ [{} {} {}] [{} {} {}] [] ] => [ {} {} {}  ]

// person: {name, age, birthday}

const appRouters = [];

const renderListRoutes = () =>
  routers.forEach((objectRouter) => {
    const tmp = objectRouter.listRoutes.map((router) => ({
      parentPath: objectRouter.path,
      ...router,
    }));
    appRouters.push(...tmp);
  });
renderListRoutes();

export default appRouters;
