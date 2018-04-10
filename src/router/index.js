import Vue from 'vue'
import VueRouter from 'vue-router'

// LAZY LOADING ROUTER
// import HelloWorld from '@/components/HelloWorld'
const Error = resolve => require(['./../components/error/Error'],resolve);
const Login = resolve => require(['./../components/login/Login'],resolve);
const Main = resolve => require(['./../components/main/MainContent'],resolve);
// const Pg1 = resolve => require(['./../components/Page1'],resolve);
// const Pg2 = resolve => require(['./../components/Page2'],resolve);
const Table = resolve => require(['./../components/main/contents/Table'],resolve);
const Grid = resolve => require(['./../components/main/contents/Grid'],resolve);
const Calendar = resolve => require(['./../components/main/contents/Calendar'],resolve);
const Map = resolve => require(['./../components/main/contents/Map'],resolve);
// const Map2 = resolve => require(['./../components/main/contents/Map2'],resolve);
// const MapWMS = resolve => require(['./../components/main/contents/MapWMS'],resolve);

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children : [
        {
          path: '/table',
          name: 'Table',
          component: Table
        },
        {
          path: '/grid',
          name: 'Grid',
          component: Grid
        },
        {
          path: '/calendar',
          name: 'Calendar',
          component: Calendar
        },
        {
          path: '/map',
          name: 'Map',
          component: Map
        },
        // {
        //   path: '/map2',
        //   name: 'Map2',
        //   component: Map2
        // },
        // {
        //   path: '/mapWMS',
        //   name: 'MapWMS',
        //   component: MapWMS
        // }
      ]
    },
    {
      path : '*',
      name : 'Error',
      component : Error
    }

  ]
})
