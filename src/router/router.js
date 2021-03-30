const Home = () => import('../components/Home.vue')
const Tech = () => import('../components/Tech.vue')
const Music = () => import('../components/Music.vue')
const Photos = () => import('../components/Photos.vue')
const Resume = () => import('../components/Resume.vue')
const PhotoCollection = () => import('../components/PhotoCollection.vue')
const FeaturedPhotoCollection = () => import('../components/FeaturedPhotoCollection.vue')
const NotFound = () => import('../components/NotFound.vue')

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
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/not-found'
        }
    ]
}
