import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './features/Home'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      component: App,
      children: [
        {
          meta: {
            title: '天仙液'
          },
          path: 'home',
          component: Home,
        }
      ]
    }
  ]
})

router.beforeEach(route => {
  if (route.meta.title) {
    document.title = route.meta.title
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
