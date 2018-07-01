import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tech from '@/components/Tech'
import Music from '@/components/Music'
import Photos from '@/components/Photos'
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
        path: '/tech',
        name: 'tech',
        component: Tech
    },
    {
        path: '/music',
        name: 'music',
        component: Music
    },
    {
        path: '/photos',
        name: 'photos',
        component: Photos
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
    routes: routes,
    mode: 'history'
})
