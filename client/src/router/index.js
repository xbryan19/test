import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);

let router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'not_found',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('../views/Summary.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter: (to, from, next) => {
        store.state.userInfo.EmployeeCode == undefined ? next() : next({
          name: 'summary'
        })
      }
    },

  ],
  mode: 'history'

});

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login') {
//     next()
//     if (store.state.userInfo.length != 0) {
//       next()
//     } else {
//       next({
//         name: 'login'
//       })
//     }
//   } else if (store.state.userInfo.EmployeeCode != undefined) {
//     next({
//       name: 'not_found'
//     })
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.userInfo.length != 0) {
      next()
    } else {
      next({name: 'login'})
    }
  }else if(to.path == undefined){
    // console.log('asdasd')
      next({ name: 'not_found' })
  }else {
    // console.log('here')
      next()
  }
})

export default router