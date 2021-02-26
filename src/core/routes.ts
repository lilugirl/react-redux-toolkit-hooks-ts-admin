import NotFound from "modules/exception/404";
import Dashboard from "layouts/dashboard";
// import Blank from 'layouts/blank';
import { lazy } from "react";
const Login = lazy(() => import("../modules/login"));
const About = lazy(() => import("../modules/simple/About"));
const Home = lazy(() => import("../modules/simple/Home"));
const routes = [
  {
    from: "/",
    to: "/dashboard",
  },
  {
    path:'/dashboard',
    exact:true,
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
  {
    path:'/notfound',
    component: NotFound,
  },
  {
    path:'*',
    exact:true,
    component: NotFound,
  }
  
 
];

export default routes;
