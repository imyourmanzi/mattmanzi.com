<template>
    <div id="techContainer" class="container">
        <div id="projects">
            <h1 class="md"># Projects</h1>
            <h2 class="md">&nbsp;## iOS Apps</h2>
            <div id="iosProjects">
                <div class="panel" v-for="proj in iosProjects">
                    <h3 class="md">{{ proj.name }}</h3>
                    <p>
                        {{ proj.about }}
                    </p>
                    <img :src="resolve(proj.imgUri)" class="screenshot" />
                    <a :href="proj.url" target="_blank"><img src="../../static/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" /></a>
                </div>
            </div>
            <div class="spacing"></div>
            <h2 class="md">&nbsp;## Valley Match</h2>
            <p>
                Purpose/intent, goals, about, etc.
            </p>
            <div id="valleyMatchSteps">
                <div class="panel">
                    <h3 class="md">Design and Approval</h3>
                    <p>
                        The desigadsfkfsdfkjl
                    </p>
                </div>
                <div class="panel">
                    <h3 class="md">Development</h3>
                    <p>
                        The devgadsfkfsdfkjl
                    </p>
                </div>
                <div class="panel">
                    <h3 class="md">Results</h3>
                    <p>
                        The resigadsfkfsdfkjl also a graph in here or something
                    </p>
                </div>
            </div>
        </div>
        <div class="spacing"></div>
        <div id="contact">
            <h1 class="md"># Contact</h1>
            <table>
                <thead class="md">
                    <tr>
                        <th>App</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="proj in iosProjects">
                        <td>{{ proj.name }}</td>
                        <td><a :href="'mailto:' + proj.contact" class="custLink">{{ proj.contact }}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'tech',
    computed: {
        iosProjects() {
            return this.$store.state.iosPojects;
        },
        ...mapGetters([
            'resolve'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* markdown style */
.md {
    padding: 0 1em;

    font-family: 'Courier New', monospace;
}

.spacing {
    margin: 7em 0;
}

p {
    width: 94%;
    padding: 0 3%;

    text-align: justify;
    text-indent: 30px;
}

h3 {
    text-align: center;
}

.panel {
    padding: 0 0.5em;
    width: 21em;
}

#iosProjects {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.screenshot {
    width: 96%;
    margin: 2%;
}

#valleyMatchSteps {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

#contact table {
    width: 92%;
    margin: auto 4%;

    border-collapse: collapse;

    font-size: 1.2em;
}

#contact thead {
    background-color: black;

    text-align: center;
}

#contact th, td {
    padding: 0.3em 1.5em;

    border: 1px solid #494949;
}

#contact tbody tr:nth-child(odd) {
    background-color: #282828;
}

#contact tbody tr:nth-child(even) {
    background-color: #191919;
}
</style>
