import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
        sections: [
            {
                title: "Tech",
                uri: "tech"
            },
            {
                title: "Music",
                uri: "music"
            },
            {
                title: "Resumé",
                uri: "resume"
            },
            {
                title: "FAQ",
                uri: "faq"
            }
        ],
        faqEntries: [
            {
                id: 1,
                question: "Question #1",
                answer: "Answer #1"
            },
            {
                id: 2,
                question: "Question #2",
                answer: "Answer #2"
            },
            {
                id: 3,
                question: "Question #3",
                answer: "Answer #3"
            },
            {
                id: 4,
                question: "Question #4",
                answer: "Answer #4"
            }
        ]
    },
    getters: {
        // add getters for state data here
    },
    mutations: {
        // add mutations for state data here
    },
    actions: {
        // add actions for state here
    }
})
