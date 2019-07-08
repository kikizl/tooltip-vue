import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Tooltip from '@/pages/tooltip/Tooltip'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip,
    },
  ]
})
