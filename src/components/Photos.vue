<template>
    <div id="photosContainer" class="container">
        <h1>Collections</h1>
        <div id="photoCollections">
            <div class="photoCollectionBoundingBox" v-for="(col, i) in collections" >
                <router-link class="custLink" :to="col.uri">
                    <div :class="['photoCollection', (activeCollection != i && activeCollection != -1) ? 'inactiveCollection' : ((activeCollection == i) ? 'activeCollection' : '')]" @mouseenter="activeCollection = i" @mouseleave="activeCollection = -1">
                        <h3>{{ col.name }}</h3>
                        <h5><em>{{ col.date }}</em></h5>
                        <div class="thumbnailSquare">
                            <div class="thumbnailCorner" v-for="photo in col.photos">
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
export default {
    name: 'photos',
    data() {
        return {
            activeCollection: -1
        }
    },
    computed: {
        collections() {
            return this.$store.state.photos.collections
        }
    }
}
</script>

<style scoped>
#photoCollections {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.photoCollectionBoundingBox {
    width: 16em;
    height: 20em;
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

.photoCollection h3 {
    margin-bottom: 0.2em;
}

.photoCollection h5 {
    margin-top: 0.2em;
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
}

@media screen and (max-aspect-ratio: 767/1024) {

    .inactiveCollection {
        opacity: 1;
    }

    .activeCollection > .thumbnailSquare {
        width: 12em;
        height: 12em;
    }

}
</style>
