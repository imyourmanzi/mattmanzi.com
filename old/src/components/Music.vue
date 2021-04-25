<template>
    <div id="musicContainer" class="container">
        <div id="parCansHeader">
            <img class="parCans exclude" :src="resolve('par-cans-left-fade.svg')" alt="" />
            <img class="parCans" :src="resolve('par-cans-right-fade.svg')" alt="" />
        </div>
        <div id="musicRow" class="contentRow">
            <div class="visual">
                <iframe width="100%" height="250" :src="music.music.visual" frameborder="0" ></iframe>
            </div>
            <div class="text">
                <h1 class="logo">{{ music.music.title }}</h1>
                <p>{{ music.music.text }}</p>
            </div>
        </div>
        <div class="spacing"></div>
        <div id="aboutRow" class="contentRow">
            <div class="text">
                <h1 class="logo">{{ music.about.title }}</h1>
                <p>{{ music.about.text }}</p>
            </div>
            <div class="visual">
                <img :src="resolve(music.about.visual)" alt="Official Myx logo"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'music',
    computed: {
        music() {
            return this.$store.state.music
        },
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

#parCansHeader {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* align-items: flex-start; */
}

.parCans {
    height: 12.4em;
    width: auto;
}

.logo {
    font-family: "Leckerli One", cursive;
    font-size: 2.5em;
}

.contentRow {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#musicRow {
    flex-wrap: wrap-reverse;
}

.text {
    max-width: 42em;
    margin: 0 2em;

    text-align: justify;
    text-indent: 30px;
}

.visual {
    width: 100%;
    max-width: 23em;
    margin: 0 2em;
}

@media screen and (max-aspect-ratio: 767/1024) {

    #parCansHeader {
        justify-content: center;
    }

    .exclude {
        display: none;
    }

}
</style>
