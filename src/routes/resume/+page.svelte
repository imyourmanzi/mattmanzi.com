<script lang="ts">
  const resume = {
    version: '2021.12.22.Full',
    name: 'Matt R. Manzi',
    email: 'manzi.mattr@gmail.com',
    profile: {
      text: "Self-driven, hardworking technology solutions developer.  Team-oriented and versatile, with the proven ability to step up and lead.  Emphasis on communication and iteration early and often.  Passionate about collaboration and documentation.  Summa cum laude graduate with a B.S. in Computer Science and Certificate in Chinese Studies, along with certifications in AWS and Splunk.  I'm intentional in what I do, and I don't let that stop me from failing forward."
    },
    education: [
      {
        schoolName: 'University of Maryland, Baltimore County (UMBC)',
        location: 'Baltimore, MD',
        gradDate: 'May 2020',
        major:
          'Bachelor of Science, Computer Science, Cybersecurity Track; Certificate in Chinese Studies',
        gpa: null as number | null,
        majorGpa: null as number | null,
        honors: [
          'Summa Cum Laude',
          'Center for Women in Technology (CWIT) Cyber Scholar',
          "Dean's Fellow"
        ]
      }
    ],
    skills: [
      {
        subset: 'Programming',
        values: [
          'TypeScript',
          'Python',
          'HTML & CSS',
          'Swift',
          'Shell Scripting',
          'Java',
          'C & C++'
        ]
      },
      {
        subset: 'Technologies',
        values: [
          'Node.js',
          'RESTful Services',
          'CloudFormation',
          'Splunk',
          'pfSense',
          'Networking',
          'SQL Databases',
          'MS-Office'
        ]
      },
      {
        subset: 'Platforms',
        values: [
          'AWS',
          'macOS',
          'Linux (Debian-based, Fedora-based)',
          'Windows Desktop & Server'
        ]
      },
      {
        subset: 'Practices',
        values: ['Serverless Architecture', 'Peer Review', 'BDD-style Testing']
      },
      {
        subset: 'Management',
        values: ['Task Planning & Prioritization', 'Documentation']
      }
    ],
    experience: [
      {
        employerName: 'Relay Network',
        title: 'Full Stack Software Engineer',
        location: 'Radnor, PA',
        timeDetail: 'Sep 2020 \u2013 Present',
        points: [
          'Design, develop, and maintain new, customer-facing applications and features, specialized solutions for backend services, and systems for internal engineering initiatives',
          'Provide on-call support for critical systems',
          'Participate in project and sprint planning',
          'Train and mentor new hires'
        ]
      },
      {
        employerName: 'Juniper Networks',
        title: 'Systems Engineering Intern',
        location: 'Sunnyvale, CA',
        timeDetail: 'May \u2013 Aug 2019',
        points: [
          'Evaluated a new product in order to write and produce a 50-page guide designed to expedite the learning process for other pre-sales systems engineers',
          'Presented the deliverable at a company-wide showcase to employees of all business verticals',
          'Shadowed other systems engineers in sales and customer meetings to learn sales and business principles'
        ]
      },
      {
        employerName: 'Parsons Cyber',
        title: 'Cybersecurity Engineer Intern',
        location: 'Columbia, MD',
        timeDetail: 'Jun \u2013 Aug 2018',
        points: [
          'Defined, designed, and implemented cybersecurity analytics and visualizations to identify and assess network and device security, and microservices for parallelized data correlation',
          'Analyzed network traffic for individual and overall anomalies in connections',
          'Researched, configured, and implemented an offline region-mapping visualization solution for threat identification in a secure environment',
          'Presented solution to business leaders in AFCEA Central Maryland at their Summer Intern Presentation Showcase'
        ]
      },
      {
        employerName: 'WSFS Bank',
        title: 'Software Developer Intern',
        location: 'Wilmington, DE',
        timeDetail: 'Jun \u2013 Aug 2017, Jan 2018',
        points: [
          'Collaborated with developers and project managers over a 3-sprint, Agile project to successfully deliver a check processing application to an internal customer by the end of the summer',
          'Contributed to the design and implemented the RESTful API and database for the product, a web application',
          'Participated in daily standups with team to identify highs and lows of the current sprint and overall project'
        ]
      }
    ],
    additionalExperience: [
      {
        employerName: 'Self-Employed',
        title: 'DJ and Master of Ceremonies',
        location: 'Aston, PA',
        timeDetail: 'Sep 2013 \u2013 Present',
        points: [
          'Provide music, lighting and announcement for private parties of up to 100 people',
          'Manage all business finances and logistics'
        ]
      },
      {
        employerName: 'UMBC',
        title: 'Computer Science Lead Teaching Assistant (TA)',
        location: 'Baltimore, MD',
        timeDetail: 'Aug 2017 \u2013 May 2019',
        points: [
          'Headed a team of 20+ TAs, working with course faculty to delegate tasks and ensure consistent education',
          'Assisted students and graded assignments for Computer Science I for Majors (CMSC 201)',
          'Led discussion groups covering material in Python programming language',
          'Held weekly office hours to aid students outside of class',
          'Wrote and maintained scripts to optimize student assignment submission and grading processes'
        ]
      }
    ],
    projects: [
      {
        name: 'MattManzi.com',
        organization: '',
        timeDetail: 'Sep 2015 \u2013 Present',
        points: [
          'Design and develop personal website to communicate professional and personal interests while exploring new technologies'
        ]
      },
      {
        name: 'Mid-Atlantic Collegiate Cyber Defense Competition Qualifiers',
        organization: 'UMBC',
        timeDetail: 'Feb 2018',
        points: [
          'Managed and protected multiple Linux-based systems and firewall rules for each device'
        ]
      },
      {
        name: 'iOS Application Development',
        organization: '',
        timeDetail: 'Sep 2014 \u2013 May 2020',
        points: [
          'Designed, developed, and published mobile applications to the Apple App Store through self-direction'
        ]
      }
    ]
  };

  let openSections = ['profile'];

  /**
   * Toggle if a resume section is open or closed.
   *
   * @param sectionKey the name/key of the section
   */
  const toggleShowSection = (sectionKey: string) => {
    return () => {
      const sectionIndex = openSections.indexOf(sectionKey);

      // if section is not yet expanded...
      if (sectionIndex === -1) {
        openSections = [...openSections, sectionKey];
      } else {
        openSections.splice(sectionIndex, 1);
        openSections = openSections;
      }
    };
  };
</script>

<div id="resumeContainer" class="container">
  <!-- download box -->
  <div id="downloadContainer" class="hanging">
    <a
      class="customLink"
      href="{`docs/${resume.name}.${resume.version}.pdf`}"
      target="_blank"
    >
      <!-- no space between image and text to avoid awkward underline -->
      <i class="fas fa-file-download"></i>
      <span style="text-decoration: none"></span>
      <span class="full">Download PDF</span>
    </a>
  </div>
  <!-- resume header -->
  <div id="nameplate">
    <h1>{resume.name}</h1>
    <a href="{`mailto:${resume.email}`}">{resume.email}</a>
  </div>
  <!-- profile header -->
  <button class="sectionButton" on:click="{toggleShowSection('profile')}">
    {#if openSections.indexOf('profile') === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Profile</span>
  </button>
  <hr />
  <!-- profile section -->
  {#if openSections.indexOf('profile') !== -1}
    <p>{resume.profile.text}</p>
  {/if}
  <!-- tech skills header -->
  <button class="sectionButton" on:click="{toggleShowSection('skills')}">
    {#if openSections.indexOf('skills') === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Skills</span>
  </button>
  <hr />
  <!-- tech skills section -->
  {#if openSections.indexOf('skills') !== -1}
    {#each resume.skills as skill (skill.subset)}
      <div class="skill">
        <div>
          <p class="typeName"><em>{skill.subset}:</em></p>
        </div>
        <div class="scrollable">
          <p>{skill.values.join(', ')}</p>
        </div>
      </div>
    {/each}
  {/if}
  <!-- industry experience header -->
  <button class="sectionButton" on:click="{toggleShowSection('industryExperience')}">
    {#if openSections.indexOf('industryExperience') === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Industry Experience</span>
  </button>
  <hr />
  <!-- industry experience section -->
  {#if openSections.indexOf('industryExperience') !== -1}
    {#each resume.experience as exp (exp.employerName)}
      <div class="experience">
        <div class="detailLine">
          <p>
            {exp.employerName ? exp.employerName + ', ' : ''}<em>{exp.title}</em
            >{exp.location ? ', ' + exp.location : ''}
          </p>
          <p><em>{exp.timeDetail}</em></p>
        </div>
        <ul>
          {#each exp.points as point (point)}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    {/each}
  {/if}
  <!-- additional experience header -->
  <button class="sectionButton" on:click="{toggleShowSection('additionalExperience')}">
    {#if openSections.indexOf('additionalExperience') === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Additional Experience</span>
  </button>
  <hr />
  <!-- additional experience section -->
  {#if openSections.indexOf('additionalExperience') !== -1}
    {#each resume.additionalExperience as exp (exp.employerName)}
      <div class="experience">
        <div class="detailLine">
          <p>
            {exp.employerName ? exp.employerName + ', ' : ''}<em>{exp.title}</em
            >{exp.location ? ', ' + exp.location : ''}
          </p>
          <p><em>{exp.timeDetail}</em></p>
        </div>
        <ul>
          {#each exp.points as point (point)}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    {/each}
  {/if}
  <!-- projects header -->
  <button class="sectionButton" on:click="{toggleShowSection('projects')}">
    {#if openSections.indexOf('projects') === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Projects</span>
  </button>
  <hr />
  <!-- projects section -->
  {#if openSections.indexOf('projects') !== -1}
    {#each resume.projects as proj (proj.name)}
      <div class="project">
        <div class="detailLine">
          <p><em>{proj.name}</em>{proj.organization ? ', ' + proj.organization : ''}</p>
          <p><em>{proj.timeDetail}</em></p>
        </div>
        <ul>
          {#each proj.points as point (point)}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    {/each}
  {/if}
  <!-- education header -->
  <button class="sectionButton" on:click="{toggleShowSection('education')}">
    {#if openSections.indexOf('education') === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Education</span>
  </button>
  <hr />
  <!-- education section -->
  {#if openSections.indexOf('education') !== -1}
    {#each resume.education as edu (edu.schoolName)}
      <div class="education">
        <div class="detailLine">
          <p><strong>{edu.schoolName}</strong> {edu.location}</p>
          <p>
            <em
              >{#if edu.gpa}GPA: {edu.gpa.toPrecision(4)}
                {#if edu.majorGpa}
                  (major: {edu.majorGpa.toPrecision(2)}){/if},
              {/if}
              {edu.gradDate}</em
            >
          </p>
        </div>
        <div class="detailLine">
          <p>{edu.major}</p>
        </div>
        <p><em>Honors:</em> {edu.honors.join(', ')}</p>
      </div>
    {/each}
  {/if}
  <div id="resumeVersion">
    Version: {resume.version}
  </div>
</div>

<style>
  #resumeContainer {
    padding-bottom: 0;
  }

  #downloadContainer {
    width: fit-content;
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

  p {
    margin: 0;

    padding-left: 2em;
  }

  ul {
    margin-top: 0.5em;
    padding-left: 5em;
  }

  .sectionButton {
    width: 100%;
    margin-bottom: 0em;
    margin-top: 0.7em;

    color: white;
    border: none;
    background: none;

    text-align: left;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;

    cursor: pointer;
  }

  hr {
    margin-top: 2px;
  }

  .fa-plus,
  .fa-minus {
    transform: translateY(-2.5px);

    font-size: 0.65em;
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

  #resumeVersion {
    padding-top: 1em;
    padding-bottom: 4em;

    text-align: right;
    color: rgba(130, 130, 130, 0.7);
    font-size: 80%;
  }

  @media screen and (max-aspect-ratio: 767/1024) {
    .skill .scrollable {
      height: 2.25em;

      white-space: nowrap;
      overflow: scroll;
    }
  }

  @media screen and (prefers-color-scheme: light) {
    .sectionButton {
      color: #011f3a;
    }
  }
</style>
