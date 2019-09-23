import Vue from 'vue'
import VueRouter from 'vue-router'
import AssetStatus from '@/components/AssetStatus'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: AssetStatus
    }
  ]
})