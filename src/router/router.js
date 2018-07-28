import Home from '@/components/Home'
import Tech from '@/components/Tech'
import Music from '@/components/Music'
import Photos from '@/components/Photos'
import Resume from '@/components/Resume'
import Faq from '@/components/Faq'
import PhotoCollection from '@/components/PhotoCollection'
import FeaturedPhotoCollection from '@/components/FeaturedPhotoCollection'

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
            path: '/faq',
            name: 'faq',
            component: Faq
        }
    ],
    mode: 'history'
}
