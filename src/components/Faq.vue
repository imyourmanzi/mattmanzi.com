<template>
    <div id="faqContainer" class="container">
        <div class="faqEntry" v-for="(faqEntry, i) in faqEntries" :key="i">
            <div class="entryQuestion" @click="toggleShowAnswer(i)">
                <h3>{{ faqEntry.question }}</h3>
                <h3>{{ openFaqs.indexOf(i) === -1 ? "+" : "\u2013" }}</h3>
            </div>
            <transition name="reveal">
                <div class="entryAnswer" v-if="openFaqs.indexOf(i) !== -1">
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
.entryQuestion {
    display: flex;
    justify-content: space-between;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    cursor: pointer;
}

.entryAnswer {
    margin: 0 2em;
}

.entryAnswer pre {
    font-family: inherit;
    white-space: pre-wrap;
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
