import Vue from 'vue'
import Vuex from 'vuex'

const M_DASH      = "\u2014"
const DOMAIN_NAME = "mattmanzi.com"

const RESUME_PREFIX  = "Matthew R Manzi - "
const RESUME_VERSION = "01-2018 Technical v1"

const STATIC_DIR    = "../../static/"
const IMG_DIR       = STATIC_DIR + "img/"
const RES_NOT_FOUND = IMG_DIR + "res-not-found.jpg"

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
            }/*,
            {
                title: "FAQ",
                uri: "faq"
            }*/
        ],
        tech: {
            iosProjects: [
                {
                    name: "It's Time To Go",
                    about: "Never be late again.\n\nIt’s Time To Go is great for everyone, whether you're a road warrior, soccer mom, busy student, weekend partier, casual traveler, or just a Type A personality. Within seconds, easily create a schedule of activities and tasks to make sure you get to your event on time.\n\nBenefits:\n- No more stress over \"When do I have to…?\"\n- Saves time" + M_DASH + "planning is a breeze!\n\nFeatures:\n- Built-in, default schedules for one-tap time management\n- Add directly to iOS Calendar\n- 100% customizable schedules for travel, sports, extracurriculars, and more\n- Save and re-open prior events and trips\n- Uses Apple Maps integration to get driving times\n- No ads!\n\nBackstory:\nIt's Time To Go (originally TravelTimer) was an app I developed for my Dad.  Always travelling for work, he found it handy to start with the time that his plane or train departed and subtract away the time it took to complete prior steps like going through TSA checks, checking luggage, and driving to the airport or station to know at what time each task would need to be done, ultimately telling him when it was time to go.",
                    imgRes: "time-to-go-screenshot.jpg",
                    peekRes: "peek-time-to-go-screenshot.jpg",
                    url: "https://itunes.apple.com/us/app/its-time-to-go/id1016276343?ls=1&mt=8",
                    contact: "timetogosupport@" + DOMAIN_NAME
                },
                {
                    name: "You Salty?",
                    about: "Whether it’s your friend or some old dude, let them know they’re being a little *salty* with this nifty app.\n\nAbout the Creators:\nWe are just two high school students: one with creativity and one who knows how to code.\n\nBackstory:\nFor a simple 'shaker' app, it taught me a whole lot.  It's the first iOS application I ever developed and distributed, so not only was I learning a new language but a new operation system, API, and development process.  After all was said and done, version 1.0 was rejected as \"too simple\" and lacked the standard complexity of other apps available on the store.  But as you might be able to tell, I also learned about persistence.  The upgraded version was completed in the following weeks and still stands as my most downloaded app on the store.  A shoutout is due to my friend Will who convinced me to do it in the first place; if he hadn't asked me in junior year of high school, I would be years behind where I am now.",
                    imgRes: "you-salty-screenshot.jpg",
                    peekRes: "peek-you-salty-screenshot.jpg",
                    url: "https://itunes.apple.com/us/app/you-salty/id957210202?mt=8",
                    contact: "saltshakersupport@" + DOMAIN_NAME
                },
                {
                    name: "GV 50: Gold Tour",
                    about: "Celebrate Garnet Valley High School’s 50th Homecoming Anniversary by downloading The GV Tour App! \n\nCome join us on October 24, 2015 for a student-organized-and-designed tour of the high school to truly see how far it’s come in 50 years! Let this app serve as a companionate guide.\n\nBackstory:\nThis app was created for my high school's 50th homecoming celebration to let alumni tour the school and see how it's changed.  The project was part of a technology education campaign, spearheaded by the robotics team.  After collaborating with the team's president for content and design, the entire app was completed in three days.",
                    imgRes: "gv-gold-screenshot.jpg",
                    peekRes: "peek-gv-gold-screenshot.jpg",
                    url: "https://itunes.apple.com/us/app/gv-50-gold-tour/id1047338881?mt=8",
                    contact: "gvgoldsupport@" + DOMAIN_NAME
                }
            ]
        },
        music: {
            music: {
                title: "Music",
                visual: "https://www.mixcloud.com/widget/follow/?u=%2Fofficial_myx%2F&hide_followers=1",
                text: "sgfdg jlksgjldfk sjgdfksl;gjksdfl; g jdsfklgsdfjgh sdfghsdfjkghdfgfsdgjfdsh kjdf jdfjsghlkjdfshgldf ljdfgh ljdshgdlfjks hsfljtgr ruthreog hgsdf ghdsfg herljthg lhaslu ghshg ;gf gfdfsgfg dfsgfdlkghj fghdfgf hf wioej bgire ioj iua hawiu gnfkhurt awkjbrg ljkg uairwih trouitha oghag gjfghraeg. dsafh sajfh sajkh asg sjkfh askhfjklsa hgkjha kjlsdafh ksdfh ajks haskjhgjk safh jksalhf fkjgh jklfgh ag hauiwerhtiaufajsfh aui fsuifh iuaharahga kjgh aifh kbvka  fsb sahfhahfiauh aiuh kajshf ksahdf skfg skjf sdf."
                //text: "Poopy-di scoop/Scoop-diddy-whoop/Whoop-di-scoop-di-poop/Poop-di-scoopty/Scoopty-whoop/Whoopity-scoop, whoop-poop/Poop-diddy, whoop-scoop/Poop, poop/Scoop-diddy-whoop/Whoop-diddy-scoop/Whoop-diddy-scoop, poop"
            },
            about: {
                title: "About",
                visual: "myx-logo.svg",
                text: "sgfdg jlksgjldfk sjgdfksl;gjksdfl; g jdsfklgsdfjgh sdfghsdfjkghdfgfsdgjfdsh kjdf jdfjsghlkjdfshgldf ljdfgh ljdshgdlfjks hsfljtgr ruthreog hgsdf ghdsfg herljthg lhaslu ghshg ;gf gfdfsgfg dfsgfdlkghj fghdfgf hf wioej bgire ioj iua hawiu gnfkhurt awkjbrg ljkg uairwih trouitha oghag gjfghraeg. dsafh sajfh sajkh asg sjkfh askhfjklsa hgkjha kjlsdafh ksdfh ajks haskjhgjk safh jksalhf fkjgh jklfgh ag hauiwerhtiaufajsfh aui fsuifh iuaharahga kjgh aifh kbvka  fsb sahfhahfiauh aiuh kajshf ksahdf skfg skjf sdf."
            }
        },
        resume: {
            ids: {
                education: 0,
                skills: 1,
                experience: 2,
                projects: 3,
                volunteer: 4
            },
            skills: [
                {
                    subset: "Programming",
                    values: ["Java", "Swift (iOS)", "Python", "C++", "Transact-SQL", "Bash", "HTML", "CSS", "JavaScript", "C#", "C"]
                },
                {
                    subset: "Operating Systems",
                    values: ["macOS 9-12", "Ubuntu Server/Desktop 16", "Windows 7/8/10"]
                },
                {
                    subset: "Software",
                    values: ["MS-Office", "Xcode", "NetBeans", "SQL Server Mgmt Studio", "Splunk (Power User 6.3)", "Eclipse", "VMware"]
                },
                {
                    subset: "Hardware",
                    values: ["Arduino", "Raspberry Pi", "Rack Servers", "Networking Equipment", "PC Components"]
                }
            ],
            experience: [
                {
                    employerName: "UMBC",
                    title: "Computer Science Teaching Assistant",
                    location: "Baltimore, MD",
                    timeDetail: "Aug 2017 – Present",
                    points: [
                        "Assist, grade, and support students taking Computer Science I for Majors (CMSC 201)",
                        "Lead discussion and review sections for students, covering material in Python programming language",
                        "Hold weekly office hours to aid students outside of class"
                    ]
                },
                {
                    employerName: "Self-Employed",
                    title: "iOS Application Developer",
                    location: "Aston, PA",
                    timeDetail: "Sep 2014 – Present",
                    points: [
                        "Design, develop and publish mobile applications through self-direction",
                        "Three (3) applications available on the Apple App Store"
                    ]
                },
                {
                    employerName: "WSFS Bank",
                    title: "Software Developer Intern",
                    location: "Wilmington, DE",
                    timeDetail: "Jun – Aug 2017",
                    points: [
                        "Worked with 3 developers and 2 project managers over a 3-sprint Agile project to develop and deliver a working web-based check processing application to an internal customer",
                        "Co-designed and implemented the RESTful API and database for the application",
                        "Participated in daily standup meetings with team members to discuss progress, speed bumps, and successes of the current sprint and overall project"
                    ]
                },
                {
                    employerName: "Cratr LLC",
                    title: "Senior Programmer",
                    location: "Glen Mills, PA",
                    timeDetail: "Aug 2016 – May 2017",
                    points: [
                        "Built and integrated features to provide crucial website functionality and benefit user experience, including a payment system and product pages",
                        "As a member of the management team and co-owner, collaborated with 5 team members to facilitate personal and other’s contributions to the formation of the business and startup of the company"
                    ]
                }
            ],
            projects: [
                {
                    name: "Innovate Good Hackathon",
                    organization: "UMBC",
                    timeDetail: "Apr 2017",
                    points: [
                        "Collaborated with 3 students to brainstorm, develop, launch, and present a winning web application (using Django API in Python on a Heroku app) in a 24-hour time constraint, aimed to help crime victims"
                    ]
                },
                {
                    name: "HackUMBC Hackathon",
                    organization: "UMBC",
                    timeDetail: "Oct 2016",
                    points: [
                        "Collaborated with 3 students to brainstorm, develop, launch, and present an original website in a 24-hour time constraint to provide users with crowdsourced restaurant wait times"
                    ]
                },
                {
                    name: "NSA 4th Codebreaker Challenge",
                    organization: "UMBC",
                    timeDetail: "Sep – Dec 2016",
                    points: [
                        "Independently solved challenges mimicking real-world tasks to learn various computer security techniques through network-based and reverse engineering tasks"
                    ]
                }
            ],
            volunteer: [
                {
                    name: "Bits and Bytes",
                    organization: "UMBC CWIT",
                    timeDetail: "Feb 2017",
                    points: [
                        "Assisted participants in a programming workshop intended to promote STEM fields to high school junior girls"
                    ]
                },
                {
                    name: "Community Outreach",
                    organization: "GVHS Robotics Team",
                    timeDetail: "Jul – Oct 2015",
                    points: [
                        "Developed and taught two 2-week summer programming camps",
                        "Designed, developed and published mobile (iOS) guided tour application for the school’s 50th Homecoming"
                    ]
                }
            ]
        },
        faqEntries: [
            {
                question: "Are you a nerd?",
                answer: "Yes, of course."
            },
            {
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

                var imgRegex    = /.*\.(jpg|svg)/
                var resumeRegex = /resume_(pdf|docx)/

                if (imgRegex.test(filename)) {
                    return IMG_DIR + filename
                } else if (resumeRegex.test(filename)) {
                    return STATIC_DIR +
                           RESUME_PREFIX +
                           RESUME_VERSION +
                           "." + filename.match(resumeRegex)[1] /* filetype */
                }

                return RES_NOT_FOUND
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
