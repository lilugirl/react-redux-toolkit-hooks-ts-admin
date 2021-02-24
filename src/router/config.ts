import { lazy } from "react";
const Login = lazy(() => import("../modules/login"));
const Dashboard=lazy(()=>import('../layouts/dashboard'))
const About = lazy(() => import("../modules/simple/About"));
const Home = lazy(() => import("../modules/simple/Home"));
const routes = [
  {
    from: "/",
    to: "/dashboard",
  },
  {
    path:'/dashboard',
    component:Dashboard,
    meta: {
      needLogin: true,
    },
  },

  {
    path: "/home",
    component: Home,
    meta: {
      needLogin: false,
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      needLogin: false,
    },
  },
  
  {
    path: "/login",
    component: Login,
    meta: { needLogin: false },
  },
];

export default routes;
