import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login/Login.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    component: ()=>import(/* webpackChunkName: "mainGroup" */ '@/pages/Main/Main.vue'),
    children:[
      {
        path:'ArrangeEdit',
        name:'arrangeEdit',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Arrange/Edit.vue')
      },
      {
        path: 'Course',
        name: 'course',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Course/Course.vue')
      },
      {
        path: 'Poster',
        name: 'poster',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Poster/Poster.vue')
      },
      {
        path: 'Check',
        name: 'check',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Reserve/Check.vue')
      },
      {
        path: 'TeacherEdit',
        name: 'teacherEdit',
        component:()=>import(/* webpackChunkName: "mainGroup" */ '@/components/Teacher/Edit.vue')
      },
    ]
  }
/*  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../pages/About.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
