<template>
    <div id="featuredPhotoCollectionContainer" class="container">
        <div class="errorBanner" v-if="fetchError !== null">
            <strong>An error ({{ fetchError.status }} {{ fetchError.message }}) occurred fetching resource: {{ fetchError.resource }}</strong>
        </div>
        <div id="backToCollections">
            <big>&lt; </big>
            <router-link class="custLink" :to="{ name: 'photos' }">All Collections</router-link>
        </div>
        <h1>{{ name }}</h1>
        <vue-picture-swipe :items="photos" :options="viewerOptions"></vue-picture-swipe>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'featured-photo-collection',
    data() {
        return {
            fetchError: null,
            id: -1,
            name: "Unknown Featured Photo Collection: " + this.$store.state.route.params.feat_id,
            photos: []
        }
    },
    computed: {
        viewerOptions() {
            return this.$store.state.photos.viewerOptions
        },
        ...mapGetters([
            'getPhotosFromCollection'
        ])
    },
    methods: {
        getCollection() {
            this.$http.get(this.$store.state.photos.baseApiUrlFeatured + this.$store.state.route.params.feat_id).then(response => {
                this.id = response.body.id
                this.name = response.body.name
                this.photos = this.getPhotosFromCollection(response.body)
                this.fetchError = null
            }, response => {
                this.fetchError = {
                    status: response.status,
                    message: response.statusText,
                    resource: response.url
                }
            })
        }
    },
    beforeMount() {
        this.getCollection()
    }
}
</script>

<style scoped>
#backToCollections {
    margin-top: 0.8em;
    font-weight: bold;
}

#backToCollections big {
    vertical-align: text-bottom;
}

h1 small {
    font-size: 55%;
    font-weight: lighter;
    font-style: italic;
}
</style>
