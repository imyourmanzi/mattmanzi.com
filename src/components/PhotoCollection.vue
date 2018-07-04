<template>
    <div id="photoCollectionContainer" class="container">
        This collection: {{ $route.params.photo_collection }}
        <em>Enjoi some boi</em>
        <!-- <vue-picture-swipe :items="viewer.imgs" :options="viewer.options">
        </vue-picture-swipe> -->
    </div>
</template>

<script>
export default {
    name: 'photo-collection',
    computed: {
        viewer() {
            return this.$store.state.photos.viewer
        }
    }
}
</script>

<style scoped>
</style>
