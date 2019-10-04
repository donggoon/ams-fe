import Vue from 'vue'
import VueRouter from 'vue-router'
import AssetStatus from '@/components/AssetStatus'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/assets',
      name: 'AssetStatus',
      component: AssetStatus,
      meta: {
        title: '자산현황'
      }
    }
  ]
})