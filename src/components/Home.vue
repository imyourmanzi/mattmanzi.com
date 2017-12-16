<template>
    <div id="homeContainer" class="container">
        <p class="direct">As we say it,<br/>so it shall be.</p>
        <div id="sectionBoxes">
            <div v-for="section in sections">
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeContainer {
    text-align: center !important;
}

#sectionBoxes {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    /*align-items: center;*/

    width: 86%;
    margin: auto;
    max-width: 1200px;
}

#sectionBoxes a {
    text-decoration: none;
}

.sectionBoxLinkWrap {
    padding: 0em 1em; /* top & bottom: 0em, left & right: 1em */

    /* font-size: 1.1em; */
    color: white;
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

</style>
