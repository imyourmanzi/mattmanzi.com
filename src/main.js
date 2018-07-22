// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync' // import this with { }
import store from './store/store'
import router from './router/router'
import VuePictureSwipe from 'vue-picture-swipe'

Vue.use(Vuex)
Vue.use(VueRouter)

const vstore = new Vuex.Store(store)
const vrouter = new VueRouter(router)

// eslint-disable-next-line
const unsync = sync(vstore, vrouter) // done. Returns an unsync callback fn

Vue.component('vue-picture-swipe', VuePictureSwipe)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store: vstore,
    router: vrouter,
}).$mount('#app')
