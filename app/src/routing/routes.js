import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import User from '../pages/User';

export const authRoutes = [
  {
    path: '/admin',
    element: <Admin/>,

  },
];

export const publicRoutes = [
  {
    path: '/user',
    element: <User/>,

  },

  {
    path: '/auth',
    element: <Auth/>,

  },   
];