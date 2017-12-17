import Vue from 'vue'
import Vuex from 'vuex'

const M_DASH      = "\u2014"
const DOMAIN_NAME = "mattmanzi.com"

const STATIC_DIR = "../../static/"
const IMG_DIR    = STATIC_DIR + "img/"

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
                about: "Inspired by the \"frequent flyer,\" this app was an original idea of my father's.  Though he travels for work, anyone who's flown before knows how crucial it is to get to your next checkpoint" + M_DASH + "whether it's airport parking or a clean hotel room" + M_DASH + "on time.  It's Time To Go helps you do exactly that.  You decide your schedule and let the rest fall into place.  Integration with Apple Maps connects you with driving directions and travel times, and the ability to share to calendar means you can receive notifications for each step in your schedule.  There are many updates and new versions to come, so download it now for free and watch your productivity soar.",
                imgUri: "time-to-go-screenshot.png",
                url: "https://itunes.apple.com/us/app/its-time-to-go/id1016276343?ls=1&mt=8",
                contact: "timetogosupport@" + DOMAIN_NAME
            },
            {
                name: "You Salty?",
                about: "You Salty? (Salt Shaker) was an app I developed for my friend in my junior year of high school.  It was the first iOS application I had ever written and had approved for sale.  It's been free on the App Store since February 2015 and continues to entertain users.  The user interface features a home screen, from which a user may reach a salt or pepper shaker or the app credits.  **Note: my goal is to write more words here so that way the text height matches the time to go one and it will eventually get there one day I just have to keep type and talking and eating food to stay alive oh look I'm almost there yup I'm here.",
                imgUri: "you-salty-screenshot.png",
                url: "https://itunes.apple.com/us/app/you-salty/id957210202?mt=8",
                contact: "saltshakersupport@" + DOMAIN_NAME
            },
            {
                name: "GV 50: Gold Tour",
                about: "This app was built as a testimony to show importance utilizing and teaching technology in the classroom.  **Note: I need a LOT of frickin words to get this to one to be the same length but I'm gonna do it alright because there aren't going to be that many people that read this but I just want it to look aesthetic and even and so who needs code to do that I will just write up enough to get there myself but it's tough to get there I mean there are so many words in the other ones I just want there to be the amount here, alas I hope my efforts are not all for naught and that I truly can make it to the bottom to be with my other paragraph friends!",
                imgUri: "gv-gold-screenshot.png",
                url: "https://itunes.apple.com/us/app/gv-50-gold-tour/id1047338881?mt=8",
                contact: "gvgoldsupport@" + DOMAIN_NAME
            }
        ],
        faqEntries: [
            {
                id: 1,
                question: "Are you a nerd?",
                answer: "Yes, of course."
            },
            {
                id: 2,
                question: "Where did you learn all this programming stuff?",
                answer: "I am currently pursuing a bachelor of science degree in computer science at the University of Maryland, Baltimore County.\n\nThat's...not the full answer.  Now ramble about self-taught stuff from my notes."
            }
        ]
    },
    getters: {

        // Returns a function that accepts a filename and returns
        // the relative path to the file (if the extension is
        // recognized) from the `components` directory
        resolve(state) {

            return function(filename) {

                var imgRegex = /.*(\.png|\.svg)/

                if (imgRegex.test(filename)) {
                    return IMG_DIR + filename
                }

                return ""
            }

        }
        
    },
    mutations: {
        // add mutations for state data here
    },
    actions: {
        // add actions for state here
    }
})
