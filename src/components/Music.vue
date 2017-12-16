<template>
    <div id="musicContainer" class="container">
        <img :src="resolve('music-header@0-33x.png')"/>
        <img :src="resolve('myx-logo.svg')"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'music',
    computed: {
        ...mapGetters([
            'resolve'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100%;
}

@media screen and (max-aspect-ratio: 767/1024) {

    img {
        position: relative;
        left: -20%;
        width: 140%;
    }

}
</style>
