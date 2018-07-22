<template>
    <div id="photoCollectionContainer" class="container">
        <!-- <h1>a{{ collection.name }} <small>{{ collection.date }}</small></h1>
        <div id="photoCollectionDescription">{{ collection.description }}</div>
        <vue-picture-swipe :items="photos" :options="viewerOptions"></vue-picture-swipe> -->
    </div>
</template>

<script>
export default {
    name: 'photo-collection',
    // data() {
    //     return {
    //         nullCollection: {
    //             id: "-1",
    //             name: "Unknown Photo Collection: " + $route.params.col_id,
    //             description: "The requested photo collection could not be found."
    //         },
    //         photos: []
    //     }
    // },
    // computed: {
    //     collection() {
    //         var collection = this.$store.state.photos.collections.find(col => col.id === $route.params.col_id)
    //         if (collection === undefined) {
    //             return this.nullCollection
    //         }
    //
    //         return collection
    //     },
    //     viewerOptions() {
    //         return this.$store.state.photos.viewerOptions
    //     }
    // }
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
