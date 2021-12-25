<script lang="ts">
  const resume = {
    version: '2020.07.3.Full',
    name: 'Matt R. Manzi',
    email: 'manzi.mattr@gmail.com',
    education: [
      {
        schoolName: 'University of Maryland, Baltimore County (UMBC)',
        location: 'Baltimore, MD',
        gradDate: 'May 2020',
        major: 'Bachelor of Science, Computer Science; Certificate in Chinese Studies',
        gpa: 3.975,
        majorGpa: 4.0,
        honors: ['Dean’s Fellow', 'Center for Women in Technology (CWIT) Cyber Scholar'],
      },
    ],
    skills: [
      {
        subset: 'Programming',
        values: [
          'Python',
          'Java',
          'C/C++',
          'C#',
          'Swift',
          'HTML/CSS',
          'JavaScript',
          'Shell Scripting',
          'Intel Assembly (x86-64)',
        ],
      },
      {
        subset: 'Technologies',
        values: ['RESTful Services', 'SQL Databases', 'Vue.js', 'Virtual Machines'],
      },
      {
        subset: 'Operating Systems',
        values: ['Ubuntu Server 16', 'CentOS 7', 'macOS', 'Windows & Windows Server'],
      },
      {
        subset: 'Software',
        values: [
          'Xcode',
          'Eclipse',
          'Proxmox',
          'VMware',
          'Splunk 6.3 (Power User certified)',
          'Elastic Stack',
          'MS-Office',
        ],
      },
      {
        subset: 'Hardware',
        values: [
          'Rackmount Servers',
          'Juniper Networking Equipment',
          'Arduino',
          'Raspberry Pi',
        ],
      },
    ],
    experience: [
      {
        employerName: 'Juniper Networks',
        title: 'Systems Engineering Intern',
        location: 'Sunnyvale, CA',
        timeDetail: 'May \u2013 Aug 2019',
        points: [
          'Evaluated a new product in order to write and produce a 50-page guide designed to expedite the learning process for other pre-sales systems engineers',
          'Presented the deliverable at a company-wide showcase to employees of all business verticals',
          'Shadowed other systems engineers in sales and customer meetings to learn sales and business principles',
        ],
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
          'Presented solution to business leaders in AFCEA Central Maryland at their Summer Intern Presentation Showcase',
        ],
      },
      {
        employerName: 'WSFS Bank',
        title: 'Software Developer Intern',
        location: 'Wilmington, DE',
        timeDetail: 'Jun \u2013 Aug 2017, Jan 2018',
        points: [
          'Collaborated with developers and project managers over a 3-sprint, Agile project to successfully deliver a check processing application to an internal customer by the end of the summer',
          'Contributed to the design and implemented the RESTful API and database for the product, a web application',
          'Participated in daily standups with team to identify highs and lows of the current sprint and overall project',
        ],
      },
      {
        employerName: 'UMBC',
        title: 'Computer Science Lead Teaching Assistant',
        location: 'Baltimore, MD',
        timeDetail: 'Aug 2017 \u2013 May 2019',
        points: [
          'Headed a team of 20+ TAs, working with course faculty to delegate tasks and ensure consistent education',
          'Assisted students and graded assignments for Computer Science I for Majors (CMSC 201)',
          'Led discussion groups covering material in Python programming language',
          'Held weekly office hours to aid students outside of class',
          'Wrote and maintained scripts to optimize student assignment submission and grading processes',
        ],
      },
      {
        employerName: 'Cratr LLC',
        title: 'Senior Programmer and Management Team Member',
        location: '',
        timeDetail: 'Aug 2016 \u2013 May 2017',
        points: [
          'Developed website payment system and product pages; collaborated on company startup and formation',
        ],
      },
    ],
    additionalExp: [
      {
        employerName: 'Self-Employed',
        title: 'DJ and Master of Ceremonies',
        location: 'Aston, PA',
        timeDetail: 'Sep 2013 \u2013 Present',
        points: [
          'Provide music, lighting and announcement for private parties of up to 100 people',
        ],
      },
      {
        employerName: 'IceWorks Skating Complex',
        title: 'DJ and Video Producer',
        location: 'Aston, PA',
        timeDetail: 'Nov 2012 \u2013 Sep 2015',
        points: [
          'Created an exciting and social environment for audiences of all ages to enjoy public skating',
          'Produced commercials for skating complex and junior pro hockey team to advertise opportunities and increase sales and public awareness',
        ],
      },
    ],
    projects: [
      {
        name: 'Mid-Atlantic Collegiate Cyber Defense Competition Qualifiers',
        organization: 'UMBC',
        timeDetail: 'Feb 2018',
        points: [
          'Managed and protected multiple Linux-based systems and firewall rules for each device',
        ],
      },
      {
        name: 'Innovate Good Hackathon',
        organization: 'UMBC',
        timeDetail: 'Apr 2017',
        points: [
          'Collaborated with 3 students to brainstorm, develop, launch, and present a winning web application (using Django API in Python on a Heroku app) in a 24-hour time constraint, aimed to help crime victims',
        ],
      },
      {
        name: 'iOS Application Developer',
        organization: '',
        timeDetail: 'Sep 2014 \u2013 Present',
        points: [
          'Design, develop, and publish mobile applications through self-direction',
          'Three (3) applications available on the Apple App Store',
        ],
      },
    ],
    volunteer: [
      {
        name: 'Retriever Music Society',
        organization: 'UMBC',
        timeDetail: 'Feb 2017 \u2013 May 2020',
        points: [
          'Perform as a DJ and master of ceremonies for on-campus events and organizations',
        ],
      },
      {
        name: 'Bits and Bytes & Cyber 101',
        organization: 'UMBC CWIT',
        timeDetail: 'Feb, Sep 2017 & Feb 2020',
        points: [
          'Helped organize an overnight program for high school junior girls to visit UMBC and engage in meaningful activities related to their interests in STEM, as well as held presentations and assisted participants throughout the program',
        ],
      },
      {
        name: 'Internet Day',
        organization: 'Juniper Networks',
        timeDetail: 'Jul 2019',
        points: [
          'Planned and coordinated an intern-led, all-day event over two weeks to educate underprivileged elementary school students on the technologies and concepts that drive the modern Internet',
        ],
      },
      {
        name: 'Photo Club',
        organization: 'UMBC',
        timeDetail: 'Aug 2017 \u2013 May 2018',
        points: [
          'Served as Treasurer; responsible for managing funds, fundraising, and contributing to overall club management',
        ],
      },
    ],
  };

  let expandedSections = [0];
  const toggleShowSection = (sectionId: number) => {
    return () => {
      const sectionIndex = expandedSections.indexOf(sectionId);

      // if section is not yet expanded...
      if (sectionIndex === -1) {
        expandedSections = [...expandedSections, sectionId];
      } else {
        expandedSections.splice(sectionIndex, 1);
        expandedSections = expandedSections;
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
      alt="Download PDF"
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
  <!-- education header -->
  <button class="sectionButton" on:click="{toggleShowSection(0)}">
    {#if expandedSections.indexOf(0) === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Education</span>
  </button>
  <hr />
  <!-- education section -->
  {#if expandedSections.indexOf(0) !== -1}
    {#each resume.education as edu (edu.schoolName)}
      <div class="education">
        <div class="detailLine">
          <p><strong>{edu.schoolName}</strong> {edu.location}</p>
          {#if edu.majorGpa}
            <p>
              <em
                >GPA: {edu.gpa.toPrecision(4)} (major: {edu.majorGpa.toPrecision(2)}), {edu.gradDate}</em
              >
            </p>
          {:else}
            <p>
              <em>GPA: {edu.gpa.toPrecision(4)}, {edu.gradDate}</em>
            </p>
          {/if}
        </div>
        <div class="detailLine">
          <p>{edu.major}</p>
        </div>
        <p><em>Honors:</em> {edu.honors.join(', ')}</p>
      </div>
    {/each}
  {/if}
  <!-- tech skills header -->
  <button class="sectionButton" on:click="{toggleShowSection(1)}">
    {#if expandedSections.indexOf(1) === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Technical Skills</span>
  </button>
  <hr />
  <!-- tech skills section -->
  {#if expandedSections.indexOf(1) !== -1}
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
  <!-- experience header -->
  <button class="sectionButton" on:click="{toggleShowSection(2)}">
    {#if expandedSections.indexOf(2) === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Relevant Experience</span>
  </button>
  <hr />
  <!-- experience section -->
  {#if expandedSections.indexOf(2) !== -1}
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
  <button class="sectionButton" on:click="{toggleShowSection(3)}">
    {#if expandedSections.indexOf(3) === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Additional Experience</span>
  </button>
  <hr />
  <!-- additional experience section -->
  {#if expandedSections.indexOf(3) !== -1}
    {#each resume.additionalExp as exp (exp.employerName)}
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
  <button class="sectionButton" on:click="{toggleShowSection(4)}">
    {#if expandedSections.indexOf(4) === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Projects</span>
  </button>
  <hr />
  <!-- projects section -->
  {#if expandedSections.indexOf(4) !== -1}
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
  <!-- volunteer header -->
  <button class="sectionButton" on:click="{toggleShowSection(5)}">
    {#if expandedSections.indexOf(5) === -1}
      <i class="fas fa-plus"></i>
    {:else}
      <i class="fas fa-minus"></i>
    {/if}
    <span> Volunteer Activities</span>
  </button>
  <hr />
  <!-- volunteer section -->
  {#if expandedSections.indexOf(5) !== -1}
    {#each resume.volunteer as activity (activity.name)}
      <div class="activity">
        <div class="detailLine">
          <p>
            <em>{activity.name}</em>{activity.organization
              ? ', ' + activity.organization
              : ''}
          </p>
          <p><em>{activity.timeDetail}</em></p>
        </div>
        <ul>
          {#each activity.points as point (point)}
            <li>{point}</li>
          {/each}
        </ul>
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
