import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Code from '@/components/Code'
import Music from '@/components/Music'
import Resume from '@/components/Resume'
import Faq from '@/components/Faq'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/code',
        name: 'code',
        component: Code
    },
    {
        path: '/music',
        name: 'music',
        component: Music
    },
    {
        path: '/resume',
        name: 'resume',
        component: Resume
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    }
]

export default new Router({
    routes: routes
})
