<template>
    <div id="resumeContainer" class="container">
        <div id="nameplate">
            <h1>Matthew R. Manzi</h1>
            ERK 406, UMBC 1000 Hilltop Circle, Baltimore, MD 21250 • (610) 368-4021 • manzi.matthewr@gmail.com
        </div>
        <div class="section" @click="toggleShowSection(resume.ids.education)">
            <h3>Education</h3>
            <h3>{{ openSections.indexOf(resume.ids.education) === -1 ? "+" : "\u2014" }}</h3>
        </div>
        <hr />
        <transition name="reveal">
            <div v-if="openSections.indexOf(resume.ids.education) !== -1">
                <div class="education">
                    <div class="detailLine">
                        <p><strong>University of Maryland, Baltimore County (UMBC)</strong> Baltimore, MD</p>
                        <p><em>May 2020</em></p>
                    </div>
                    <div class="detailLine">
                        <p>Bachelor of Science, Computer Science</p>
                        <p><em>GPA: 4.0</em></p>
                    </div>
                    <p><em>Honors:</em> Dean's Fellow, Center for Women in Technology (CWIT) Cyber Scholar</p>
                </div>
            </div>
        </transition>
        <div class="section" @click="toggleShowSection(resume.ids.skills)">
            <h3>Technical Skills</h3>
            <h3>{{ openSections.indexOf(resume.ids.skills) === -1 ? "+" : "\u2014" }}</h3>
        </div>
        <hr />
        <transition name="reveal">
            <div v-if="openSections.indexOf(resume.ids.skills) !== -1">
                <div class="skill" v-for="skill in resume.skills">
                    <p class="sameWidth"><em>{{ skill.subset }}</em></p>
                    <p>{{ skill.values.join(", ") }}</p>
                </div>
            </div>
        </transition>
        <div class="section" @click="toggleShowSection(resume.ids.experience)">
            <h3>Experience</h3>
            <h3>{{ openSections.indexOf(resume.ids.experience) === -1 ? "+" : "\u2014" }}</h3>
        </div>
        <hr />
        <transition name="reveal">
            <div v-if="openSections.indexOf(resume.ids.experience) !== -1">
                <div class="experience" v-for="exp in resume.experience">
                    <div class="detailLine">
                        <p>{{ exp.employerName }}, <em>{{ exp.title }}</em>, {{ exp.location }}</p>
                        <p><em>{{ exp.timeDetail }}</em></p>
                    </div>
                    <ul>
                        <li v-for="point in exp.points">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <div class="section" @click="toggleShowSection(resume.ids.projects)">
            <h3>Projects</h3>
            <h3>{{ openSections.indexOf(resume.ids.projects) === -1 ? "+" : "\u2014" }}</h3>
        </div>
        <hr />
        <transition name="reveal">
            <div v-if="openSections.indexOf(resume.ids.projects) !== -1">
                <div class="project" v-for="proj in resume.projects">
                    <div class="detailLine">
                        <p><em>{{ proj.name }}</em>, {{ proj.organization }}</p>
                        <p><em>{{ proj.timeDetail }}</em></p>
                    </div>
                    <ul>
                        <li v-for="point in proj.points">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <div class="section" @click="toggleShowSection(resume.ids.volunteer)">
            <h3>Volunteer Activities</h3>
            <h3>{{ openSections.indexOf(resume.ids.volunteer) === -1 ? "+" : "\u2014" }}</h3>
        </div>
        <hr />
        <transition name="reveal">
            <div v-if="openSections.indexOf(resume.ids.volunteer) !== -1">
                <div class="activity" v-for="activity in resume.volunteer">
                    <div class="detailLine">
                        <p><em>{{ activity.name }}</em>, {{ activity.organization }}</p>
                        <p><em>{{ activity.timeDetail }}</em></p>
                    </div>
                    <ul>
                        <li v-for="point in activity.points">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'resume',
    data() {
        return {
            openSections: [1]
        }
    },
    computed: {
        resume() {
            return this.$store.state.resume
        }
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
h1 {
    margin-bottom: 0;

    font-weight: 400;
}

#nameplate {
    text-align: center;
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
}

.skill {
    display: flex;
    justify-content: flex-start;
}

.skill .sameWidth {
    width: 11em;
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
</style>
