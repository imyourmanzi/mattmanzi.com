<template>
    <div id="musicContainer" class="container">
        <img :src="resolve('music-header@0-33x.png')"/>
        <img :src="resolve('myx-logo.svg')"/>
        <iframe id="soundcloud" width="40%" height="465" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/official-myx&amp;auto_play=false&amp;buying=false&amp;liking=true&amp;download=false&amp;sharing=true&amp;show_artwork=true&amp;show_comments=false&amp;show_playcount=false&amp;show_user=true&amp;hide_related=true&amp;visual=true&amp;start_track=0"></iframe>
</iframe>
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

.soundcloud {

}

/* @media screen and (max-aspect-ratio: 767/1024) {

    img {
        position: relative;
        left: -20%;
        width: 140%;
    }

} */
</style>
