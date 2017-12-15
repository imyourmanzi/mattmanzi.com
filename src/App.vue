<template>
    <div id="app">
        <div id="header" v-bind:class="">
            <router-link :to="'/'" id="titleLink">
            <!-- <img id="logo-header" src="./assets/img/header-logo.png" /> -->
            Matt Manzi
            </router-link>
            <div id="sectionLinks">
                <div v-for="section in sections">
                    <router-link class="sectionLink" :to="section.uri">{{ section.title }}</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <footer v-bind:class="">
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
        }
    }
}
</script>

<style>
/* Root-level attributes */
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

/*#container {
    width: 84%;
    height: 100%;
    margin: 0 auto;

    background-color: #111111;
}*/

.direct {
    width: 86%;
    margin: 1rem auto;

    font-size: 5.0rem;
    font-weight: 300;
    vertical-align: middle;
}

footer {
    position: fixed;
    width: 92%;
    padding: 1% 4%; /* top & bottom: 1%, left & right: 4% */
    bottom: 0;

    background-color: #000a21;

    vertical-align: middle;
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
