<template>
    <div id="faqContainer" class="container">
        <div class="faqEntry" v-for="faqEntry in faqEntries">
            <div class="entryQuestion" @click="toggleShowAnswer(faqEntry.id)">
                <h3>{{ faqEntry.question }}</h3>
            </div>
            <transition name="reveal">
                <div class="entryAnswer" v-if="openFaqs.indexOf(faqEntry.id) !== -1">
                    <pre>{{ faqEntry.answer }}</pre>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'faq',
    data() {
        return {
            openFaqs: []
        }
    },
    computed: {
        faqEntries() {
            return this.$store.state.faqEntries
        }
    },
    methods: {
        toggleShowAnswer(faqId) {

            var faqIndex = this.openFaqs.indexOf(faqId)

            if (faqIndex === -1) {
                this.openFaqs.push(faqId)
            } else {
                this.openFaqs.splice(faqIndex, 1)
            }

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#faqContainer {
    /* background-color: #FF00FF; */
}

.entryQuestion {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
}

.entryAnswer {
    margin: 0 2em;
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

pre {
    font-family: inherit;
    white-space: pre-wrap;
}
</style>
