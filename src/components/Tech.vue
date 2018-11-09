<template>
    <div id="techContainer" class="container">
        <div id="projects">
            <h1>Projects</h1>
            <h2>iOS Apps</h2>
            <div id="iosProjects">
                <div class="panel" v-for="(proj, i) in tech.iosProjects" :key="i">
                    <h3>{{ proj.name }}</h3>
                    <div class="appStore">
                        <a :href="proj.url" target="_blank">
                            <img :src="resolve('Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg')" />
                        </a>
                    </div>
                    <img :src="resolve(proj.imgRes)" class="screenshot" :alt="proj.imgAlt" />
                    <p>{{ proj.about }}</p>
                </div>
            </div>
            <!-- <div class="spacing"></div>
            <h2>Valley Match</h2>
            <p>
                Purpose/intent, goals, about, etc.
            </p>
            <div id="valleyMatchSteps">
                <div class="panel">
                    <h3>Design and Approval</h3>
                    <p>
                        The desigadsfkfsdfkjl
                    </p>
                </div>
                <div class="panel">
                    <h3>Development</h3>
                    <p>
                        The devgadsfkfsdfkjl
                    </p>
                </div>
                <div class="panel">
                    <h3>Results</h3>
                    <p>
                        The resigadsfkfsdfkjl also a graph in here or something
                    </p>
                </div>
            </div> -->
        </div>
        <div id="contact">
            <h1>Contact Support</h1>
            <table class="full">
                <thead>
                    <tr>
                        <th>App</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="proj in tech.iosProjects" :key="proj.name">
                        <td>{{ proj.name }}</td>
                        <td><a :href="'mailto:' + proj.contact" class="custLink">{{ proj.contact }}</a></td>
                    </tr>
                </tbody>
            </table>
            <table class="tiny" v-for="proj in tech.iosProjects" :key="proj.name">
                <tbody>
                    <tr>
                        <td>{{ proj.name }}</td>
                    </tr>
                    <tr>
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
        tech() {
            return this.$store.state.tech
        },
        ...mapGetters([
            'resolve'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    white-space: pre-line;

    width: 94%;
    padding: 0 3%;
}

h2 {
    padding-left: 1em;
}

h3 {
    text-align: center;
}

#iosProjects {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.panel {
    padding: 0 0.5em;
    width: 22em;
}

.panel h3 {
    margin-bottom: 0.5em;
}

.appStore {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.5em;

    text-align: center;
}

.appStore img {
    height: 35px;

    text-align: center;
}

.screenshot {
    width: 96%;
    height: 85px;
    margin: 0 2%;

    border-radius: 10px;
    object-fit: cover;
    opacity: 0.7;

    transition: opacity 0.3s,
                height 0.5s,
                border-radius 0.5s;
}

.screenshot:hover {
    height: 675px;

    border-radius: 5px;
    opacity: 1;
}

#contact .full {
    display: table;
    margin: auto;

    border-collapse: collapse;
}

#contact .full thead {
    background-color: black;

    text-align: center;
}

#contact .full th, td {
    padding: 0.3em 1.5em;

    border: 1px solid #494949;
}

#contact .full tbody tr:nth-child(odd) {
    background-color: #282828;
}

#contact .full tbody tr:nth-child(even) {
    background-color: #191919;
}

@media screen and (max-aspect-ratio: 767/1024) {

    #contact .full {
        display: none;
    }

    #contact .tiny {
        width: 100%;
        margin: auto;

        display: table;
    }

    #contact .tiny {
        margin-bottom: 1em;

        border-collapse: collapse;
    }

    #contact .tiny tr:nth-child(odd) {
        background-color: black;
        border-bottom: 2px solid #494949;
    }

    #contact .tiny tbody tr:nth-child(even) {
        background-color: #282828;
    }

    #contact .tiny td {
        border: none;
    }

}
</style>
