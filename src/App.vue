<template>
    <div id="app">
        <!-- <div id="rightsBanner" v-if="pageName == 'home'">
            <div :class="{'rights': true, 'full': true, 'hanging': true, 'open': rightsOpen}">
                <strong>{{ rightsBanner.content }}</strong>
                <p v-for="link in rightsBanner.links" :key="link.url">
                    {{ link.text }} <a class="custLink" :href="link.url" target="_blank">{{ link.linkText }}</a>
                </p>
            </div>
            <div v-show="rightsOpen" :class="{'rights': true, 'tiny': true, 'hanging': true, 'open': rightsOpen}">
                <strong>{{ rightsBanner.content }}</strong>
                <p v-for="link in rightsBanner.links" :key="link.url">
                    {{ link.text }}<a class="custLink" :href="link.url" target="_blank">{{ link.linkText }}</a>
                </p>
            </div>
        </div>
        <div id="rightsBannerButton" v-if="pageName == 'home'">
            <div :class="{'noshow': isFirstLoad, 'opacityTransition': true, 'rights': true, 'hanging': true, 'full': true, 'open': rightsOpen}" @click="toggleRightsBanner()">
                <strong>{{ (rightsOpen) ? rightsBanner.buttonClose : rightsBanner.buttonOpen }}</strong>
            </div>
            <div :class="{'noshow': isFirstLoad, 'opacityTransition': true, 'rights': true, 'hanging': true, 'tiny': true, 'open': rightsOpen}" @click="toggleRightsBanner()">
                <strong>{{ (rightsOpen) ? rightsBanner.buttonClose : '' }}</strong>
            </div>
        </div> -->

        <div id="header" :class="{'dividedTop': pageName !== 'home'}">
            <router-link :to="'/'" id="titleLink">
            MattManzi<small>.com</small>
            </router-link>
            <div id="sectionLinks" :class="{'noshow': isFirstLoad && pageName === 'home', 'opacityTransition': pageName === 'home'}">
                <div v-for="section in sections" :key="section.uri">
                    <router-link class="sectionLink" :class="{'currPage': pageName === section.uri}" :to="section.uri">{{ section.title }}</router-link>
                </div>
            </div>
        </div>
        <div class="construction" :class="{'showConstruction': ['faq', 'music'].includes(pageName)}">
            Notice: This website is still under construction, thank you for your understanding.
        </div>
        <router-view></router-view>
        <footer :class="{'noshow': isFirstLoad && pageName === 'home', 'opacityTransition': pageName === 'home', 'dividedBottom': pageName !== 'home'}">
            <div id="extLinks">
                <a :href="ext.url" class="extLink" rel="noopener" v-for="ext in externalLinks" :key="ext.imgRes" target="_blank">
                    <img :src="resolve(ext.imgRes)" :alt="ext.imgAlt" />
                </a>
            </div>
            <br/>
            👨‍💻 with ❤️ by <a class="sectionLink" href="https://github.com/imyourmanzi/MattManzi-UI" target="_blank" rel="noopener">imyourmanzi</a>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'app',
    data() {
        return {
            // rightsOpen: false
        }
    },
    computed: {
        // rightsBanner() {
        //     return this.$store.state.rightsBanner
        // },
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
        // toggleRightsBanner() {
        //     this.rightsOpen = !this.rightsOpen
        // }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand:300,400');

/**
    Global attributes
**/

* {
    border-radius: 5px;
}

/**
    Root-level attributes
**/

body {
    margin: 0;
    padding: 0;

    background-color: #011f3a; /* rbg(1, 31, 58) */
}

a {
    text-decoration: none;
}

/**
    Shared transitions
**/

.opacityTransition {
    transition-property: opacity;
    transition-duration: 1.5s;
    transition-timing-function: ease;
}

/**
    Shared attributes
**/

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

.lightMode {
    display: none;
}

.darkMode {
    display: inherit;
}

/**
    App attributes
**/

#app {
    width: 100%;

    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    /* make the whole site have a slighty larger font (default: 16px) */
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: white
}

/**
    Layout attributes
**/

/* Common attrs for rights banner elements */
.rights {

    font-size: 85%;

    transition: top 0.5s,
                opacity 1.5s;
    transition-timing-function: ease;
}

#rightsBannerButton {
    cursor: pointer;
}

#rightsBannerButton .full {
    position: absolute;
    width: 2rem;
    top: 0rem;
    left: 3%;
    right: auto;
    z-index: 99;

    /* modifications on .hanging class specs */
    border: none;
}

#rightsBannerButton .full.open {
    top: 10rem;
    margin-top: 1.1rem;
}

#rightsBannerButton .tiny {
    height: 0.75rem;
    padding: 0 0.5rem;
    margin: 0;

    text-align: left;
    font-size: 70%;

    background-image: linear-gradient(to right, rgb(91, 207, 246), rgb(245, 169, 184) 20%, rgb(255, 255, 255), rgb(245, 169, 184) 80%, rgb(91, 207, 246));

    /* modifications on .hanging class specs */
    border: none;
    border-radius: 0;
}

#rightsBannerButton .tiny.open {
    height: 1rem;
    top: 0;
}

#rightsBanner .full {
    position: absolute;
    height: 10rem;
    width: 22rem;
    top: -10.05rem;
    left: 2.5%;
    margin: 0;
    padding: 0 0.25rem;
    z-index: 100;

    overflow-y: scroll;
}

#rightsBanner .full.open {
    top: 0rem;
    padding: 0.5rem 0.25rem;
}

#rightsBanner .tiny {
    height: 10rem;
    left: 0;
    margin: auto;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    overflow-y: scroll;

    /* modifications on .hanging class specs */
    border: none;
    border-radius: 0;
}

#header {
    position: relative;
    width: 92%;
    padding: 2% 4% 1% 4%;
}

.dividedTop {
    border-bottom: 1px solid gray;

    border-radius: 0;
}

.dividedBottom {
    border-top: 1px solid gray;

    border-radius: 0;
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
    padding: 0em 1em;

    font-size: 1.25em;
    color: inherit;
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
    flex-wrap: nowrap;
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
        flex: 0 0 auto;
        padding: 0em 0.6em;
    }

    #extLinks {
        justify-content: space-around;

        padding: 1em 0;
    }

    .extLink {
        padding: 0;
    }

}

/* Light mode vs. dark mode (default) */
@media screen and (prefers-color-scheme: light) {
    body {
        background-color: #fcfbf7; /* rgb(252, 251, 247) */
    }

    #app {
        color: #011f3a;
    }

    .darkMode {
        display: none;
    }

    .lightMode {
        display: inherit;
    }

    .extLink img {
        filter: invert();
    }

    .custLink:hover {
        color: black;
    }

    .hanging {
        background-color: #CFCFCF;
    }
}
</style>
