<template>
    <div id="photosContainer">
        <em>Enjoi some boi</em>
        <vue-picture-swipe :items="viewer.imgs" :options="viewer.options">
        </vue-picture-swipe>
    </div>
</template>

<script>
export default {
    name: 'photos',
    computed: {
        viewer() {
            return this.$store.state.photos.viewer
        }
    }
}
</script>

<style scoped>
</style>
