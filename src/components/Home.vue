<template>
    <div id="homeContainer" class="container">
        <p :class="{'direct': true, 'frontAndCenter': isFirstLoad}">As we say it,<br/>so it shall be.</p>
        <div id="sectionBoxes" :class="{'noshow': isFirstLoad, 'opacityTransition': true}">
            <div v-for="section in sections" :key="section.uri">
                <router-link class="sectionBoxLinkWrap" :to="section.uri">
                    <div class="sectionInnerBox">
                        <p>{{ section.title }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    computed: {
        sections() {
            return this.$store.state.sections
        },
        isFirstLoad() {
            return this.$store.state.isFirstLoad
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeContainer {
    text-align: center !important;
}

.frontAndCenter {
    margin-top: 7rem;
    font-size: 10rem;
}

#sectionBoxes {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 86%;
    margin: auto;
    max-width: 1200px;
}

.sectionBoxLinkWrap {
    padding: 0em 1em;

    color: inherit;
}

.sectionBoxLinkWrap:hover {
    color: gray;
}

.sectionInnerBox {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 12rem;
    height: 16rem;

    border: solid thin white;
}

.sectionInnerBox p {
    font-size: 2.5em;
}

/* Large text looks bad when animating on screens that are
   near square or thinner */
@media screen and (max-aspect-ratio: 6/5) {

     /* same as .direct */
    .frontAndCenter {
        margin-top: 1rem;
        font-size: 5.5rem;
    }

}

@media screen and (prefers-color-scheme: light) {
    .sectionInnerBox {
        border: solid thin #011f3a;
    }
}
</style>
