<template>
    <div id="musicContainer" class="container">
        <img src="../../static/img/music-header@0-33x.png"/>
        <img src="../../static/img/myx-logo.svg"/>
    </div>
</template>

<script>
export default {
    name: 'music'
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
