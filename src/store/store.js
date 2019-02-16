const DOMAIN_NAME = "mattmanzi.com"

const RESUME_PREFIX  = "Matt R Manzi - "
const RESUME_VERSION = "08-2018 Technical v1"

const STATIC_DIR    = "" // static dir changed to public in v3+, route needs to be abosolute
const IMG_DIR       = STATIC_DIR + "img/"
const DOCS_DIR      = STATIC_DIR + "docs/"
const RES_NOT_FOUND = "res-not-found.jpg"

const API_ENP_PREFIX      = "api/"
const PHOTO_COL_ENDP      = "photo-collections/"
const FEAT_PHOTO_COL_ENDP = "featured/"
const PHOTO_COL_API       = process.env.VUE_APP_API_ROOT + API_ENP_PREFIX + PHOTO_COL_ENDP
const FEAT_PHOTO_COL_API  = PHOTO_COL_API + FEAT_PHOTO_COL_ENDP
const PHOTO_COL_ROOT      = process.env.VUE_APP_API_ROOT + PHOTO_COL_ENDP

export default {
    strict: process.env.NODE_ENV !== "production",
    state: {
        isFirstLoad: true,
        rightsBanner: {
            buttonOpen: "🏳️‍🌈",
            buttonClose: "X",
            content: "In light of current legistature, I would like to share some resources about becoming a better ally to those who are transgender.",
            links: [
                {
                    linkText: "more than just my own perspective.",
                    url: "https://www.hrc.org/resources/understanding-the-transgender-community",
                    text: "There are more transgender people around us than we realize, and it's not always obvious nor does it need to be; they integrate into society like everyone else.  Still, I find it helpful to understand "
                },
                {
                    linkText: "why?",
                    url: "https://www.psychologytoday.com/us/blog/the-truth-about-exercise-addiction/201612/why-transgender-people-experience-more-mental-health",
                    text: "Being transgender often comes with a lot of baggage, but "
                },
                {
                    linkText: "support people being themselves.",
                    url: "https://www.glaad.org/transgender/allies",
                    text: "As an ally, I didn't need to change my lifestyle or bend over backwards to accomodate others.  I just do small things to be courteous (like respecting pronouns) to show that I "
                }
            ]
        },
        sections: [
            {
                title: "Tech",
                uri: "/tech"
            },
            // {
            //     title: "Music",
            //     uri: "/music"
            // },
            {
                title: "Photos",
                uri: "/photos"
            },
            {
                title: "Résumé",
                uri: "/resume"
            }/*,
            {
                title: "FAQ",
                uri: "/faq"
            }*/
        ],
        externalLinks: [
            {
                imgRes: "ext_fb.svg",
                imgAlt: "Link to Facebook profile",
                url: "https://www.facebook.com/imyourmanzi"
            },
            {
                imgRes: "ext_tw.svg",
                imgAlt: "Link to Twitter profile",
                url: "https://twitter.com/imyourmanzi"
            },
            {
                imgRes: "ext_git.svg",
                imgAlt: "Link to GitHub profile",
                url: "https://github.com/mmanzi1"
            },
            {
                imgRes: "ext_in.png",
                imgAlt: "Link to LinkedIn profile",
                url: "https://www.linkedin.com/in/mmanzir/"
            }
        ],
        tech: {
            iosProjects: [
                {
                    name: "You Salty?",
                    about: "Whether it’s your friend or some old dude, let them know they’re being a little *salty* with this nifty app.\n\nAbout the Creators:\nWe are just two high school students: one with creativity and one who knows how to code.\n\nDeveloper Story:\nFor a simple 'shaker' app, it's taught me a whole lot.  This is the first iOS application I ever developed and distributed, so not only was I learning a new language but also a new operation system, API, and development process.  After all was said and done, version 1.0 was rejected for being \"too simple\" and lacking the standard complexity of other apps available on the Store.  As you might guess, I also learned about persistence.  The upgraded version was completed in the following weeks and still stands as my most downloaded app on the App Store.  A shoutout is due to my friend, Will, who convinced me to do it in the first place; if he hadn't asked me in my junior year of high school, I would be years behind where I am now.",
                    imgRes: "you-salty-screenshot.jpg",
                    imgAlt: "Screenshot of You Salty?, salt shaker",
                    peekRes: "peek-you-salty-screenshot.jpg",
                    url: "https://itunes.apple.com/us/app/you-salty/id957210202?mt=8",
                    contact: "saltshakersupport@" + DOMAIN_NAME
                },
                {
                    name: "It's Time To Go",
                    about: "Never be late again.\n\nIt’s Time To Go is great for everyone, whether you're a road warrior, soccer mom, busy student, weekend partier, casual traveler, or just a Type A personality. Within seconds, easily create a schedule of activities and tasks to make sure you get to your event on time. No more stress over \"When do I have to…?\" Planning is a breeze!\n\nFeatures:\n- Built-in, default schedules for one-tap time management\n- Add directly to iOS Calendar\n- 100% customizable schedules for travel, sports, extracurriculars, and more\n- Save and re-open prior events and trips\n- Uses Apple Maps integration to get driving times\n\nDeveloper Story:\nIt's Time To Go (originally TravelTimer) was an app I developed for my Dad.  Always travelling for work, he found it handy to start with the time that his plane or train departed and subtract away the time it took to complete prior steps like going through TSA checks, checking luggage, and driving to the airport or station to know at what time each task would need to be done, ultimately telling him when it was time to go.",
                    imgRes: "time-to-go-screenshot.jpg",
                    imgAlt: "Screenshot of It's Time To Go, Home tab",
                    peekRes: "peek-time-to-go-screenshot.jpg",
                    url: "https://itunes.apple.com/us/app/its-time-to-go/id1016276343?ls=1&mt=8",
                    contact: "timetogosupport@" + DOMAIN_NAME
                },
                {
                    name: "GV 50: Gold Tour",
                    about: "Celebrate Garnet Valley High School’s 50th Homecoming Anniversary by downloading The GV Tour App! \n\nDeveloper Story:\nThis app was created for my high school's 50th homecoming celebration to let alumni tour the school and see how it's changed.  The project was part of a technology education campaign, spearheaded by the robotics team.  After collaborating with the team's president for content and design, the entire app was completed in three days.",
                    imgRes: "gv-gold-screenshot.jpg",
                    imgAlt: "Screenshot of GV 50: Gold Tour, tour spot 2",
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
        photos: {
            baseApiUrl: PHOTO_COL_API,
            baseApiUrlFeatured: FEAT_PHOTO_COL_API,
            viewerOptions: {
                shareButtons: [
                    {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
                    {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
                    {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
                ],
                shareEl: true,
                captionEl: false,
                getTextForShare: function() {
                    return "Check out this photo! -->"
                }
            },
            insta: "https://www.instagram.com/imyourmanzi/"
        },
        resume: {
            ids: {
                education: 0,
                skills: 1,
                experience: 2,
                projects: 3,
                volunteer: 4
            },
            education: [
                {
                    schoolName: "University of Maryland, Baltimore County (UMBC)",
                    location: "Baltimore, MD",
                    gradDate: "May 2020",
                    major: "Bachelor of Science, Computer Science",
                    gpa: 4.0,
                    honors: [
                        "Dean’s Fellow",
                        "Center for Women in Technology (CWIT) Cyber Scholar"
                    ]
                }
            ],
            skills: [
                {
                    subset: "Programming",
                    values: ["Java", "Python", "C++", "C", "Swift (iOS)", "SQL", "Bash", "HTML", "CSS", "JavaScript", "Intel Assembly (x86-64)", "C#"]
                },
                {
                    subset: "Operating Systems",
                    values: ["macOS 9-12", "Ubuntu Server/Desktop 16", "CentOS 7", "Windows 10"]
                },
                {
                    subset: "Software",
                    values: ["MS-Office", "Xcode", "Splunk 6.3 Power User", "Elastic Stack", "Palo Alto NetFlow", "VMware"]
                },
                {
                    subset: "Hardware",
                    values: ["Raspberry Pi", "Rack Servers", "Networking Equipment", "PC Components", "Arduino"]
                }
            ],
            experience: [
                {
                    employerName: "UMBC",
                    title: "Computer Science Lead Teaching Assistant",
                    location: "Baltimore, MD",
                    timeDetail: "Aug 2017 – Present",
                    points: [
                        "Assist students and grade assignments for Computer Science I for Majors (CMSC 201)",
                        "Lead discussion groups for students, covering material in Python programming language",
                        "Hold weekly office hours to aid students outside of class"
                    ]
                },
                {
                    employerName: "Self-Employed",
                    title: "iOS Application Developer",
                    location: "Aston, PA",
                    timeDetail: "Sep 2014 – Present",
                    points: [
                        "Design, develop, and publish mobile applications through self-direction",
                        "Three (3) applications available on the Apple App Store"
                    ]
                },
                {
                    employerName: "Parsons Cyber",
                    title: "Cybersecurity Engineer Intern",
                    location: "Columbia, MD",
                    timeDetail: "Jun – Aug 2018",
                    points: [
                        "Defined, designed, developed, and implemented cybersecurity analytics and visualizations to identify and assess network and device security and vulnerabilities, and microservices for extensive, parallelized data correlation",
                        "Analyzed network traffic for individual and overall anomalies in connections",
                        "Researched, configured, and implemented offline region-mapping visualization solution for potential cybersecurity network risks"
                    ]
                },
                {
                    employerName: "WSFS Bank",
                    title: "Software Developer Intern",
                    location: "Wilmington, DE",
                    timeDetail: "Jun – Aug 2017, Jan 2018",
                    points: [
                        "Collaborated with 3 developers and 2 project managers over a 3-sprint, Agile project to provide a working product (check processing application) to an internal customer by the end of the summer",
                        "Contributed to the design of and implemented the RESTful API and database for the product, a web application",
                        "Participated in daily standup meetings team members to discuss progress, speed bumps, and successes of the current sprint and project"
                    ]
                },
                {
                    employerName: "Cratr LLC",
                    title: "Senior Programmer",
                    location: "",
                    timeDetail: "Aug 2016 – May 2017",
                    points: [
                        "Developed website payment system and product pages; company startup and formation"
                    ]
                }
            ],
            projects: [
                {
                    name: "Summer Intern Presentation Showcase (SIPS), AFCEA Central Maryland",
                    organization: "AFCEA Central Maryland",
                    timeDetail: "Jul 2018",
                    points: [
                        "Presented solution to internal and external business leaders in AFCEA"
                    ]
                },
                {
                    name: "Mid-Atlantic Collegiate Cyber Defense Competition Qualifiers",
                    organization: "UMBC",
                    timeDetail: "Feb 2018",
                    points: [
                        "Managed and protected multiple Linux-based systems and firewall rules for each device"
                    ]
                },
                {
                    name: "CyberDawgs Cyber Defense Exercise",
                    organization: "UMBC",
                    timeDetail: "Nov 2017",
                    points: [
                        "Defended a Linux server, while supporting team efforts to complete offensive business objectives"
                    ]
                },
                {
                    name: "Innovate Good Hackathon",
                    organization: "UMBC",
                    timeDetail: "Apr 2017",
                    points: [
                        "Collaborated with 3 students to brainstorm, develop, launch, and present a winning web application (using Django API in Python on a Heroku app) in a 24-hour time constraint, aimed to help crime victims"
                    ]
                }
            ],
            volunteer: [
                {
                    name: "Bits and Bytes & Cyber 101",
                    organization: "UMBC CWIT",
                    timeDetail: "Feb 2017, Sep 2017",
                    points: [
                        "Assisted participants in a programming workshop intended to promote STEM fields to high school junior girls"
                    ]
                },
                {
                    name: "Photo Club",
                    organization: "UMBC",
                    timeDetail: "Aug 2017 – May 2018",
                    points: [
                        "Served as Treasurer; responsible for managing funds, fundraising, and contributing to overall club management"
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
        resolve() {

            return function(filename = RES_NOT_FOUND) {

                var imgRegex    = /.*\.(png|jpg|svg)/
                var resumeRegex = /resume_(pdf|docx)/

                if (imgRegex.test(filename)) {
                    return IMG_DIR + filename
                } else if (resumeRegex.test(filename)) {
                    return STATIC_DIR +
                           DOCS_DIR +
                           RESUME_PREFIX +
                           RESUME_VERSION +
                           "." + filename.match(resumeRegex)[1] /* filetype */
                }

                return IMG_DIR + RES_NOT_FOUND;
            }

        },

        getPhotosFromCollection() {

            return function(collection, pubSize = "pub-1800", tbmSize = "tbm-250", maxPhotos = 0) {

                var photos = []

                if (collection === null) {
                    return photos
                }

                collection.photos.forEach((p, i) => {
                    if (maxPhotos === 0 || i < maxPhotos) {
                        photos.push({
                            src: PHOTO_COL_ROOT + p.colId + "/" + pubSize + "-" + p.seqId + ".jpg",
                            thumbnail: PHOTO_COL_ROOT + p.colId + "/" + tbmSize + "-" + p.seqId + ".jpg",
                            w: p.width,
                            h: p.height,
                            title: p.title,
                            seq: p.seqId
                        })
                    }
                })

                return photos.sort((a, b) => (a.seq > b.seq))
            }

        }

    },
    mutations: {

        toggleFirstLoad(state) {
            state.isFirstLoad = !state.isFirstLoad
        }

    },
    actions: {

        toggleFirstLoad(context) {
            setTimeout(function() {
                context.commit('toggleFirstLoad')
            }, 900)
        }

    }
}
