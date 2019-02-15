<template>
    <div id="photosContainer" class="container">
        <div id="featuredContainer" v-if="featuredCollections.length > 0 || featuredFetchError !== null">
            <h1>Featured Collections</h1>
            <div class="errorBanner" v-if="featuredFetchError !== null">
                <strong>An error ({{ featuredFetchError.status }} {{ featuredFetchError.message }}) occurred fetching featured photo collections: {{ featuredFetchError.resource }}</strong>
            </div>
            <div id="featuredCollections">
                <div class="photoCollectionBoundingBox" v-for="feat in featuredCollections" :key="feat.id">
                    <router-link class="custLink" :to="{ name: 'featured-photo-collection', params: { feat_id: feat.id }}">
                        <div :class="['photoCollection', (activeFeaturedCollection != feat.id && activeFeaturedCollection != -1) ? 'inactiveCollection' : ((activeFeaturedCollection == feat.id) ? 'activeCollection' : '')]" @mouseenter="activeFeaturedCollection = feat.id" @mouseleave="activeFeaturedCollection = -1">
                            <h3>{{ feat.name }}</h3>
                            <div class="thumbnailSquare">
                                <div class="thumbnailCorner" v-for="photo in getPhotosFromCollection(feat, '', 'tbm-150', 4)" :key="photo.thumbnail">
                                    <img :src="photo.thumbnail" />
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <h1>Photo Collections</h1>
        <div class="errorBanner" v-if="fetchError !== null">
            <strong>An error ({{ fetchError.status }} {{ fetchError.message }}) occurred fetching photo colletions: {{ fetchError.resource }}</strong>
        </div>
        <div id="photoCollections" v-else>
            <div class="photoCollectionBoundingBox" v-for="col in collections" :key="col.id">
                <router-link class="custLink" :to="{ name: 'photo-collection', params: { col_id: col.id }}">
                    <div :class="['photoCollection', (activeCollection != col.id && activeCollection != -1) ? 'inactiveCollection' : ((activeCollection == col.id) ? 'activeCollection' : '')]" @mouseenter="activeCollection = col.id" @mouseleave="activeCollection = -1">
                        <h3>{{ col.name }}</h3>
                        <h5><em>{{ (new Date(col.date)).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric"}) }}</em></h5>
                        <div class="thumbnailSquare">
                            <div class="thumbnailCorner" v-for="photo in getPhotosFromCollection(col, '', 'tbm-150', 4)" :key="photo.thumbnail">
                                <img :src="photo.thumbnail" />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'photos',
    data() {
        return {
            featuredCollections: [],
            featuredFetchError: null,
            activeFeaturedCollection: -1,
            collections: [],
            fetchError: null,
            activeCollection: -1
        }
    },
    computed: {
        ...mapGetters([
            'getPhotosFromCollection'
        ])
    },
    methods: {
        getCollections() {
            this.$http.get(this.$store.state.photos.baseApiUrlFeatured).then(response => {
                this.featuredCollections = response.body.sort((a,b) => {
                    return a.date < b.date
                })
                this.fetchError = null
            }, response => {
                this.featuredCollections = []
                this.featuredFetchError = {
                    status: response.status,
                    message: response.statusText,
                    resource: response.url
                }
            })

            this.$http.get(this.$store.state.photos.baseApiUrl).then(response => {
                this.collections = response.body.sort((a,b) => {
                    return a.date < b.date
                })
                this.fetchError = null
            }, response => {
                this.collections = []
                this.fetchError = {
                    status: response.status,
                    message: response.statusText,
                    resource: response.url
                }
            })
        }
    },
    beforeMount() {
        this.getCollections()
    }
}
</script>

<style scoped>

#featuredCollections, #photoCollections {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.photoCollectionBoundingBox {
    width: 16em;
    height: 17em;
}

.photoCollection {
    text-align: center;

    transition-property: opacity;
    transition-duration: 0.3s;
}

.inactiveCollection {
    opacity: 0.5;
}

.activeCollection > .thumbnailSquare {
    width: 14em;
    height: 14em;
}

.activeCollection > .thumbnailSquare > .thumbnailCorner > img {
    border-radius: 10px;
}

.photoCollection h3 {
    margin-bottom: 0.2em;
}

.photoCollection h5 {
    margin-top: 0.2em;
    margin-bottom: 0.6em;
}

.thumbnailSquare {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    width: 12em;
    height: 12em;
    margin: auto;

    transition-property: width, height;
    transition-duration: 0.3s;
}

.thumbnailCorner {
    width: 6em;
    height: 6em;
}

.thumbnailCorner img {
    width: inherit;
    height: inherit;
    object-fit: cover;

    transition-property: border-radius;
    transition-duration: 0.3s;
}

@media screen and (max-aspect-ratio: 767/1024) {

    .inactiveCollection {
        opacity: 1;
    }

    .activeCollection > .thumbnailSquare {
        width: 12em;
        height: 12em;
    }

    .activeCollection > .thumbnailSquare > .thumbnailCorner > img {
        border-radius: 5px;
    }

}
</style>
