<template>
    <div id="app">
        <div id="rightsBanner">
            <div :class="{'rights': true, 'full': true, 'hanging': true, 'open': rightsOpen}">
                {{ rightsBanner.content }}
            </div>
            <div :class="{'rights': true, 'tiny': true, 'hanging': true, 'open': rightsOpen}">
                {{ rightsBanner.content }}
            </div>
        </div>

        <!-- Add @click to this and method to toggle rightsOpen -->
        <!-- Make pride flag a data string and change it to an 'X' when open (in same method as above) -->
        <!-- Then add animation on `top` attr -->
        <!-- Test, then do .tiny: same button, different banner, with full width and all that jazz -->

        <div id="rightsBannerButton" :class="{'noshow': isFirstLoad, 'opacityTransition': true, 'rights': true, 'hanging': true, 'open': rightsOpen}" @click="toggleRightsBanner()"><strong>{{ (rightsOpen) ? rightsBanner.buttonClose : rightsBanner.buttonOpen }}</strong></div>

        <div id="header" :class="{'dividedTop': pageName !== 'home'}">
            <router-link :to="'/'" id="titleLink">
            MattManzi<small>.com</small>
            </router-link>
            <div id="sectionLinks" :class="{'noshow': isFirstLoad, 'opacityTransition': true}">
                <div v-for="section in sections" :key="section.uri">
                    <router-link class="sectionLink" :class="{'currPage': pageName === section.uri}" :to="section.uri">{{ section.title }}</router-link>
                </div>
            </div>
        </div>
        <div class="construction" :class="{'showConstruction': ['faq', 'music'].includes(pageName)}">
            Notice: This website is still under construction, thank you for your understanding.
        </div>
        <router-view></router-view>
        <footer :class="{'noshow': isFirstLoad, 'opacityTransition': true, 'dividedBottom': pageName !== 'home'}">
            <div id="extLinks">
                <a :href="ext.url" class="extLink" v-for="ext in externalLinks" :key="ext.imgRes" target="_blank">
                    <img :src="resolve(ext.imgRes)" :alt="ext.imgAlt" />
                </a>
            </div>
            <br/>
            👨‍💻 with ❤️ by <a class="sectionLink" :href="externalLinks[2].url" target="_blank">mmanzi1</a>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'app',
    data() {
        return {
            rightsOpen: false
        }
    },
    computed: {
        rightsBanner() {
            return this.$store.state.rightsBanner
        },
        sections() {
            return this.$store.state.sections
        },
        pageName() {
            return this.$store.state.route.name
        },
        externalLinks() {
            return this.$store.state.externalLinks
        },
        isFirstLoad() {
            return this.$store.state.isFirstLoad
        },
        ...mapGetters([
            'resolve'
        ])
    },
    mounted() {
        // run after whole view has been loaded
        this.$nextTick(function() {
            this.$store.dispatch('toggleFirstLoad')
        })
    },
    methods: {
        toggleRightsBanner() {
            this.rightsOpen = !this.rightsOpen
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand:300,400');
/* Global attributes */
* {
    border-radius: 5px;
}

/* Root-level attributes */
body {
    margin: 0;
    padding: 0;

    background-color: #011f3a;
}

a {
    text-decoration: none;
}

/* Shared transitions */
.opacityTransition {
    transition-property: opacity;
    transition-duration: 1.5s;
    transition-timing-function: cubic-bezier();
}

/* Shared attributes */
.noshow {
    opacity: 0;
}

.container {
    position: relative;
    width: 92%;
    margin: 0 auto;
    padding-bottom: 5rem;

    text-align: left;
}

.spacing {
    margin: 7em 0;
}

.direct {
    width: 86%;
    margin: 1rem auto;

    font-size: 5.5rem;
    font-weight: 300;
    vertical-align: middle;

    transition-property: font-size, margin-top;
    transition-duration: 1.5s;
    transition-timing-function: cubic-bezier();
}

.custLink {
    color: #6699cc;
}

.custLink:hover {
    color: white;
    text-decoration: underline;
}

.hanging {
    margin-left: auto;
    padding: 0.4em;

    text-align: center;

    border: 1px solid gray;
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #282828;
}

.errorBanner {
    margin-top: 0.5em;
    padding: 0.2em;

    text-align: center;
    color: black;

    background-color: #cc6666;
}

.full {
    display: inherit;
}

.tiny {
    display: none;
}

/* App attributes */
#app {
    width: 100%;

    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 18px; /* make the whole site have a slighty larger font (default: 16px) */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
}

/* Layout attributes */
.rights { /* Common attrs for rights banner elements */
    font-size: 85%;

    transition: top 0.5s,
                opacity 1.5s;
    transition-timing-function: cubic-bezier();
}

#rightsBannerButton {
    position: absolute;
    width: 2rem;
    top: 0;
    left: 3%;
    right: auto;
    z-index: 99;
    cursor: pointer;

    /* modifications on .hanging class specs */
    border: none;
}

#rightsBannerButton.open {
    top: 10.8rem;
}

#rightsBanner .full {
    position: absolute;
    height: 10rem;
    width: 12rem;
    top: -12rem;
    left: 2.5%;
    z-index: 100;
}

#rightsBanner .full.open {
    top: 0rem;
}

#rightsBanner .tiny {
    position: absolute;
    height: 10rem;
    top: -12rem;
    left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 100;

    /* modifications on .hanging class specs */
    border-left: none;
    border-right: none;
    border-radius: 0;
}

#rightsBanner .tiny.open {
    position: relative;
    top: 0rem;
}

#header {
    position: relative;
    width: 92%;
    padding: 2% 4% 1% 4%; /* top: 2%, bottom: 1%, left & right: 4% */
}

.dividedTop {
    border-bottom: 1px solid gray;
}

.dividedBottom {
    border-top: 1px solid gray;
}

#header small {
    font-size: 50%;
}

#titleLink {
    font-size: 3.0rem;
    font-weight: 300;
    color: inherit;
}

#sectionLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
}

.sectionLink {
    padding: 0em 1em; /* top & bottom: 0em, left & right: 1em */

    font-size: 1.25em;
    color: white;
}

.sectionLink:hover {
    color: gray;
    text-decoration: underline;
}

.currPage {
    text-decoration: underline !important;
}

.construction {
    display: none;
    padding: 0.2em 0;

    background-color: #3443A3;

    color: yellow;
}

.showConstruction {
    display: inherit;
}

#extLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 1em 1em;
}

.extLink {
    padding: 0 1.5em;
}

.extLink:hover {
    opacity: 0.5;
}

.extLink img {
    height: 32px;
}

footer {
    width: 100%;
    bottom: 0;
    padding: 0 0 1em 0;

    font-size: 0.93em;
}

footer .sectionLink {
    padding: 0;

    font-size: 0.93em;
}

/* Extra tall and skinny screens (i.e. smartphones) */
@media screen and (max-aspect-ratio: 767/1024) {

    .full {
        display: none;
    }

    .tiny {
        display: inherit;
    }

    .container {
        width: 92%;
    }

    #sectionLinks {
        justify-content: space-around;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    .sectionLink {
        flex: 0 0 auto; /* flex grow and shrink: 0, basis: auto */
        padding: 0em 0.6em; /* top & bottom: 0em, left & right: 0.6em */
    }

}
</style>
