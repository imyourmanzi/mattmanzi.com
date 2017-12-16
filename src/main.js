// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync' // import this with { }
import router from './router/router'
import { store } from './store/store' // import this with { }

sync(store, router) // done. Returns an unsync callback fn, assign if necessary

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store: store,
    router: router,
    template: '<App/>',
    components: { App }
})
