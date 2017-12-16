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
        iosPojects: [
            {
                name: "It's Time To Go",
                about: "Inspired by the \"frequent flyer,\" this app was an original idea of my father's.  Though he travels for work, anyone who's flown before knows how crucial it is to get to your next checkpoint\u2014whether it's airport parking or a clean hotel room\u2014on time.  It's Time To Go helps you do exactly that.  You decide your schedule and let the rest fall into place.  Integration with Apple Maps connects you with driving directions and travel times, and the ability to share to calendar means you can receive notifications for each step in your schedule.  There are many updates and new versions to come, so download it now for free and watch your productivity soar.",
                imgUri: "../../static/img/time-to-go-screenshot.png",
                url: "https://itunes.apple.com/us/app/its-time-to-go/id1016276343?ls=1&mt=8",
                contact: "timetogosupport@mattmanzi.com"
            },
            {
                name: "You Salty?",
                about: "You Salty? (Salt Shaker) was an app I developed for my friend in my junior year of high school.  It was the first iOS application I had ever written and had approved for sale.  It's been free on the App Store since February 2015 and continues to entertain users.  The user interface features a home screen, from which a user may reach a salt or pepper shaker or the app credits.",
                imgUri: "../../static/img/you-salty-screenshot.png",
                url: "https://itunes.apple.com/us/app/you-salty/id957210202?mt=8",
                contact: "saltshakersupport@mattmanzi.com"
            },
            {
                name: "GV 50: Gold Tour",
                about: "This app was built as a testimony to show importance utilizing and teaching technology in the classroom.",
                imgUri: "../../static/img/gv-gold-screenshot.png",
                url: "https://itunes.apple.com/us/app/gv-50-gold-tour/id1047338881?mt=8",
                contact: "gvgoldsupport@mattmanzi.com"
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
