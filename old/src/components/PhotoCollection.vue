<template>
    <div id="photoCollectionContainer" class="container">
        <div class="errorBanner" v-if="fetchError !== null">
            <strong>An error ({{ fetchError.status }} {{ fetchError.message }}) occurred fetching resource: {{ fetchError.resource }}</strong>
        </div>
        <div id="backToCollections">
            <big>&lt; </big>
            <router-link class="custLink" :to="{ name: 'photos' }">All Collections</router-link>
        </div>
        <div id="collectionHeader">
            <h1>{{ name }} <small>{{ photos.length }} Photo{{ (photos.length > 1) ? "s" : "" }}</small></h1>
            <div>{{ date }}</div>
            <div id="photoCollectionDescription">{{ description }}</div>
        </div>
        <vue-picture-swipe :items="photos" :options="viewerOptions"></vue-picture-swipe>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'photo-collection',
    data() {
        return {
            fetchError: null,
            id: -1,
            name: "",
            date: "",
            description: "",
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
            this.$http.get(this.$store.state.photos.baseApiUrl + this.$store.state.route.params.col_id).then(response => {
                this.id = response.body.id
                this.name = response.body.name
                this.date = (new Date(response.body.date)).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric"})
                this.description = response.body.description
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

#collectionHeader {
    margin: 0 0.5em 0 0.5em;
}

h1 {
    margin-bottom: 0.25em;
}

h1 small {
    font-size: 55%;
    font-weight: lighter;
    font-style: italic;
}

#photoCollectionDescription {
    padding: 0.25em 2em 2em 0;
}
</style>
