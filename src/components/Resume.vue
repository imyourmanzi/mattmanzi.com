1<template>
    <div id="resumeContainer" class="container">
        <!-- download box -->
        <div id="downloadContainer">
            <div class="hanging full">
                <a class="custLink" :href="resolve('resume_pdf')" target="_blank">
                    <!-- no space between image and text to avoid awkward underline -->
                    <img :src="resolve('dl.svg')" />Download PDF
                </a>
            </div>
            <div class="hanging tiny">
                <a class="custLink" :href="resolve('resume_pdf')" target="_blank">
                    <img :src="resolve('dl.svg')" />
                </a>
            </div>
        </div>
        <!-- resume header -->
        <div id="nameplate">
            <h1>Matt R. Manzi</h1>
            <a href="mailto:manzi.mattr@gmail.com">manzi.mattr@gmail.com</a>
        </div>
        <!-- education header -->
        <div class="section" @click="toggleShowSection(0)">
            <h3>Education</h3>
            <h3>{{ openSections.indexOf(0) === -1 ? "+" : "\u2013" }}</h3>
        </div>
        <hr />
        <!-- education section -->
        <transition name="reveal">
            <div v-if="openSections.indexOf(0) !== -1">
                <div class="education" v-for="edu in resume.education" :key="edu.schoolName">
                    <div class="detailLine">
                        <p><strong>{{ edu.schoolName }}</strong> {{ edu.location }}</p>
                        <p v-if="edu.majorGpa">
                            <em>GPA: {{ edu.gpa.toPrecision(4) }} (major: {{ edu.majorGpa.toPrecision(2) }}), {{ edu.gradDate }}</em>
                        </p>
                        <p v-else>
                            <em>GPA: {{ edu.gpa.toPrecision(4) }}, {{ edu.gradDate }}</em>
                        </p>
                    </div>
                    <div class="detailLine">
                        <p>{{ edu.major }}</p>
                    </div>
                    <p><em>Honors:</em> {{ edu.honors.join(", ") }}</p>
                </div>
            </div>
        </transition>
        <!-- tech skills header -->
        <div class="section" @click="toggleShowSection(1)">
            <h3>Technical Skills</h3>
            <h3>{{ openSections.indexOf(1) === -1 ? "+" : "\u2013" }}</h3>
        </div>
        <hr />
        <!-- tech skills section -->
        <transition name="reveal">
            <div v-if="openSections.indexOf(1) !== -1">
                <div class="skill" v-for="skill in resume.skills" :key="skill.subset">
                    <div>
                        <p class="typeName"><em>{{ skill.subset }}:</em></p>
                    </div>
                    <div class="scrollable">
                        <p>{{ skill.values.join(", ") }}</p>
                    </div>
                </div>
            </div>
        </transition>
        <!-- experience header -->
        <div class="section" @click="toggleShowSection(2)">
            <h3>Relevant Experience</h3>
            <h3>{{ openSections.indexOf(2) === -1 ? "+" : "\u2013" }}</h3>
        </div>
        <hr />
        <!-- experience section -->
        <transition name="reveal">
            <div v-if="openSections.indexOf(2) !== -1">
                <div class="experience" v-for="exp in resume.experience" :key="exp.employerName">
                    <div class="detailLine">
                        <p>{{ exp.employerName ? exp.employerName + ", " : "" }}<em>{{ exp.title }}</em>{{ exp.location ? ", " + exp.location : "" }}</p>
                        <p><em>{{ exp.timeDetail }}</em></p>
                    </div>
                    <ul>
                        <li v-for="point in exp.points" :key="point">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <!-- addt'l experience header -->
        <div class="section" @click="toggleShowSection(3)">
            <h3>Additional Experience</h3>
            <h3>{{ openSections.indexOf(3) === -1 ? "+" : "\u2013" }}</h3>
        </div>
        <hr />
        <!-- addt'l experience section -->
        <transition name="reveal">
            <div v-if="openSections.indexOf(3) !== -1">
                <div class="experience" v-for="exp in resume.additionalExp" :key="exp.employerName">
                    <div class="detailLine">
                        <p>{{ exp.employerName ? exp.employerName + ", " : "" }}<em>{{ exp.title }}</em>{{ exp.location ? ", " + exp.location : "" }}</p>
                        <p><em>{{ exp.timeDetail }}</em></p>
                    </div>
                    <ul>
                        <li v-for="point in exp.points" :key="point">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <!-- projects header -->
        <div class="section" @click="toggleShowSection(4)">
            <h3>Projects</h3>
            <h3>{{ openSections.indexOf(4) === -1 ? "+" : "\u2013" }}</h3>
        </div>
        <hr />
        <!-- projects section -->
        <transition name="reveal">
            <div v-if="openSections.indexOf(4) !== -1">
                <div class="project" v-for="proj in resume.projects" :key="proj.name">
                    <div class="detailLine">
                        <p><em>{{ proj.name }}</em>{{ proj.organization ? ", " + proj.organization : "" }}</p>
                        <p><em>{{ proj.timeDetail }}</em></p>
                    </div>
                    <ul>
                        <li v-for="point in proj.points" :key="point">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <!-- volunteer header -->
        <div class="section" @click="toggleShowSection(5)">
            <h3>Volunteer Activities</h3>
            <h3>{{ openSections.indexOf(5) === -1 ? "+" : "\u2013" }}</h3>
        </div>
        <hr />
        <!-- volunteer section -->
        <transition name="reveal">
            <div v-if="openSections.indexOf(5) !== -1">
                <div class="activity" v-for="activity in resume.volunteer" :key="activity.name">
                    <div class="detailLine">
                        <p><em>{{ activity.name }}</em>{{ activity.organization ? ", " + activity.organization : "" }}</p>
                        <p><em>{{ activity.timeDetail }}</em></p>
                    </div>
                    <ul>
                        <li v-for="point in activity.points" :key="point">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <div id="resumeVersion">
            Version: {{ resume.version }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'resume',
    data() {
        return {
            openSections: [0] /* first section should be open on load */
        }
    },
    computed: {
        resume() {
            return this.$store.state.resume
        },
        ...mapGetters([
                'resolve'
        ])
    },
    methods: {
        toggleShowSection(sectionId) {

            var sectionIndex = this.openSections.indexOf(sectionId)

            if (sectionIndex === -1) {
                this.openSections.push(sectionId)
            } else {
                this.openSections.splice(sectionIndex, 1)
            }

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#resumeContainer {
    padding-bottom: 0;
}

#downloadContainer .full {
    position: relative;
    width: 9em;
    z-index: 99;
}

#downloadContainer img {
    height: 1em;
    padding-right: 0.3em;
}

h1 {
    margin-bottom: 0;

    font-weight: 400;
}

#nameplate {
    position: relative;
    top: -2.15em;
    z-index: 0;

    text-align: center;
}

#nameplate a {
    color: inherit;
}

#nameplate a:hover {
    text-decoration: underline;
}

h3 {
    margin-bottom: 0em;
    margin-top: 0.7em;

    font-weight: 400;
    text-transform: uppercase;
}

p {
    margin: 0;

    padding-left: 2em;
}

ul {
    margin-top: 0.5em;
    padding-left: 5em;
}

.section {
    display: flex;
    justify-content: space-between;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    cursor: pointer;
}

.detailLine {
    display: flex;
    justify-content: space-between;
    padding-right: 0.3em;
}

.skill {
    display: flex;
    justify-content: flex-start;
}

.skill .typeName {
    width: 10em;
}

.skill .scrollable {
    white-space: normal;
    overflow: auto;
}

.skill .scrollable p {
    padding: 0;
}

.reveal-enter, .reveal-leave-to {
    opacity: 0;
}

.reveal-enter-active {
    transition: opacity 0.7s;
}

.reveal-leave-active {
    transition: opacity 0.2s;
}

#resumeVersion {
    padding-top: 1em;
    padding-bottom: 4em;

    text-align: right;
    color: rgba(130, 130, 130, 0.7);
    font-size: 80%;
}

@media screen and (max-aspect-ratio: 767/1024) {

    #downloadContainer .tiny {
        position: relative;
        width: 1em;
        z-index: 99;
    }

    .skill .scrollable {
        height: 2.25em;

        white-space: nowrap;
        overflow: scroll;
    }

}
</style>
