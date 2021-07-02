import { lazy } from 'react';
import { RouteConfig, RouteType } from '../interface/route';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Login = lazy(() => import('../pages/Login'));

export const routes: RouteConfig[] = [
  {
    key: "home",
    type: RouteType.APPLIED,
    path: "/",
    component: Home,
    exact: true,
  },
  {
    key: "about",
    type: RouteType.APPLIED,
    path: "/about",
    component: About,
    exact: true,
  },
  {
    key: "login",
    type: RouteType.APPLIED,
    path: "/login",
    component: Login,
    exact: true,
  }
];
