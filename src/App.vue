<template>
    <div id="app">
        <div id="header" v-bind:class="">
            <router-link :to="'/'" id="titleLink">
            <!-- <img id="logo-header" src="./assets/img/header-logo.png" /> -->
            MattManzi<small>.com</small>
            </router-link>
            <div id="sectionLinks">
                <div v-for="section in sections">
                    <router-link class="sectionLink" v-bind:class="{'currPage': pageName == section.uri}" :to="section.uri">{{ section.title }}</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <footer>
            <div id="supportContact" v-if="pageName == 'tech'">
                Trouble with an App?&nbsp;&nbsp;&nbsp;&nbsp;<a href="#contact" class="custLink">Contact Support</a>
            </div>
            &copy; Matthew R. Manzi 2017
        </footer>
    </div>
</template>

<script>
export default {
    name: 'app',
    computed: {
        sections() {
            return this.$store.state.sections
        },
        pageName() {
            return this.$store.state.route.name
        }
    }
}
</script>

<style>
/* Root-level attributes */
.container {
    position: relative;
    width: 68%;
    margin: 0 auto;
    padding-bottom: 5rem;

    text-align: left;
}

.direct {
    width: 86%;
    margin: 1rem auto;

    font-size: 5.0rem;
    font-weight: 300;
    vertical-align: middle;
}

.custLink {
    text-decoration: none;
    color: #2375d3;
}

.custLink:hover {
    color: #0f97e0;
}

/* Layout-level attributes */
body {
    margin: 0 0 3rem 0;
    padding: 0;

    background-color: #000a21;
}

#app {
    font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    width: 100%;
}

/* Normal attributes */
#header {
    position: relative;
    width: 92%;
    padding: 2% 4% 1% 4%; /* top: 2%, bottom: 1%, left & right: 4% */

    background-color: #000a21;
}

#header a {
    text-decoration: none;
}

#header small {
    font-size: 50%;
}

#titleLink {
    font-size: 2.2rem;
    font-weight: lighter;
    color: inherit;
}

#sectionLinks {
    position: relative;
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
}

.currPage {
    text-decoration: underline !important;
}

footer {
    position: fixed;
    width: 100%;
    padding: 0 0 1em 0;
    bottom: 0;

    background-color: #000a21;

    vertical-align: middle;
}

#supportContact {
    padding: 0.4em 0;
    margin: 0 0 1em 0;

    background-color: #282828;
}

/* Extra tall and skinny screens (i.e. smartphones) */
@media screen and (max-aspect-ratio: 767/1024) {

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
