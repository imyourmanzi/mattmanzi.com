// import Home from '@/components/Home'
const Home = () => import('../components/Home.vue')
// import Tech from '@/components/Tech'
const Tech = () => import('../components/Tech.vue')
// import Music from '@/components/Music'
const Music = () => import('../components/Music.vue')
// import Photos from '@/components/Photos'
const Photos = () => import('../components/Photos.vue')
// import Resume from '@/components/Resume'
const Resume = () => import('../components/Resume.vue')
// import PhotoCollection from '@/components/PhotoCollection'
const PhotoCollection = () => import('../components/PhotoCollection.vue')
// import FeaturedPhotoCollection from '@/components/FeaturedPhotoCollection'
const FeaturedPhotoCollection = () => import('../components/FeaturedPhotoCollection.vue')

export default {
    routes: [
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
            path: '/photos/:col_id',
            name: 'photo-collection',
            component: PhotoCollection
        },
        {
            path: '/photos/featured/:feat_id',
            name: 'featured-photo-collection',
            component: FeaturedPhotoCollection
        },
        {
            path: '/resume',
            name: 'resume',
            component: Resume
        }
    ],
    mode: 'history'
}
