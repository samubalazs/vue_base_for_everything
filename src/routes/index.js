import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const NotFound = { template: '<p>Page not found</p>' };
const Home = { template: '<p>home page</p>' };
const About = { template: '<p>about page</p>' };

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default new VueRouter({
  routes,
});
