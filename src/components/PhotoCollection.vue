<template>
    <div id="photoCollectionContainer" class="container">
        <h1>{{ collection.name }} <small>{{ collection.date }}</small></h1>
        <div id="photoCollectionDescription">{{ collection.description }}</div>
        <vue-picture-swipe :items="collection.photos" :options="viewerOptions"></vue-picture-swipe>
    </div>
</template>

<script>
export default {
    name: 'photo-collection',
    computed: {
        collection() {
            var openCollection = {
                name: "Unknown Collection",
                photos: []
            }
            this.$store.state.photos.collections.forEach(function(col) {
                console.log("$coluri$ : " + col.uri)
                console.log("$routeparam$ : " + this.$route.params.photo_collection)
                if (col.uri === this.$route.params.photo_collection) {
                    console.log("yes")
                    openCollection = col
                }
            }, this)
            return openCollection
        },
        viewerOptions() {
            return this.$store.state.photos.viewerOptions
        }
    }
}
</script>

<style scoped>
h1 small {
    font-size: 55%;
    font-weight: lighter;
    font-style: italic;
}

#photoCollectionDescription {
    padding: 0 2em 2em 2em;
}
</style>
