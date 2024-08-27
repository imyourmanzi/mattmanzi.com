<script lang="ts">
</script>

<div id="homeContainer" class="container">
  <div id="profileHeader">
    <div id="profileButtonsAndImage">
      <div id="profileContactRow">
        <a href="tel:14433847455" title="Phone"><i class="fa-solid fa-phone"></i></a>
        <a href="mailto:manzi.mattr@gmail.com" title="Email"
          ><i class="fa-solid fa-at"></i></a
        >
        <a href="/docs/key.asc" title="PGP: "><i class="fa-solid fa-key"></i></a>
      </div>
      <img alt="Matt R. Manzi profile" src="/img/profile_Trees.jpg" />
    </div>
    <div>
      <h1 title="Matt Manzi (he/him)">Hi, I'm Matt Manzi.</h1>
      <div>
        <p>Versatile, Self-Driven Technology Solutions Developer</p>
        <p id="profileQuote">As we say it, so it shall be.</p>
      </div>
    </div>
  </div>
  <div id="profileText">
    <p>
      Hi, I’m Matt Manzi, a self-driven, hardworking technology solutions developer. And a
      smart home enthusiast, Mandarin learner, rock climber, traveler, and dog lover. In
      2020, I graduated Summa Cum Laude from the University of Maryland, Baltimore County
      with a Bachelor of Science in Computer Science, focusing on Cybersecurity, and a
      Certificate of Chinese Studies.
    </p>
    <p>
      By profession, I’m a software engineer. By interest, I’m a lot more. Since
      childhood, I’ve been driven to learn about all the different kinds of technology
      that power our lives: electronic & mechanical, software & hardware, cameras & audio,
      custom systems & open source. Along the way I picked up hobbies in filmmaking &
      photography, DJing, learning Mandarin, rock climbing, driving manuals, and
      traveling.
    </p>
    <p>
      I work as a full-stack software engineer building SaaS applications on AWS. I
      contribute to every aspect of the cloud and local tech stack: <strong
        >TypeScript & JavaScript, AWS Lambda & AWS ECS</strong
      >
      to write server applications in <strong>Node.js</strong>, frontend applications in
      <strong>React & Angular</strong>,
      <strong>Docker, Terraform, & AWS CloudFormation</strong>
      to deploy those applications, <strong>Python & Datadog</strong> to optimize
      observability, logging, and auditing workflows, and
      <strong>Bash scripting & various developer tooling</strong> to improve the development
      experience. To challenge myself, I recently began contributing to open source projects
      I use, and I’m learning about operating systems and OS-level software development.
    </p>
    <p id="profileContactLine">
      If you think I might be a good fit for your team, let’s chat! Give me a call or send
      me a note: <a href="tel:14433847455">(443) 384-7455</a> or
      <a href="mailto:manzi.mattr@gmail.com">manzi.mattr@gmail.com</a>.
    </p>
  </div>
</div>

<style>
  #profileHeader {
    display: flex;
    justify-content: center;
    align-content: baseline;

    margin: 20px auto auto auto;
    width: 60%;
  }

  #profileButtonsAndImage {
    display: flex;
    justify-content: space-evenly;

    width: 250px;
    max-height: 250px;
  }

  #profileContactRow {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  #profileContactRow a {
    padding: 5px;
    width: 1.28em;

    background-color: #222537;

    text-align: center;
  }

  #profileHeader img {
    margin: auto 1.5em auto 0.75em;
    width: 200px;
    max-width: 35vw;

    border-radius: 50%;
  }

  #profileHeader h1 {
    font-size: 2.5em;
  }

  #profileHeader p {
    margin: 0.4em auto;
  }

  #profileQuote {
    font-style: italic;
    font-weight: 350;
  }

  #profileText {
    margin: auto;
    width: 60%;
  }

  #profileContactLine {
    font-style: italic;
  }

  /* Extra tall and skinny screens (i.e. smartphones) */
  @media screen and (max-aspect-ratio: 767/1024) {
    #profileHeader {
      width: 100%;
    }

    #profileContactRow {
      flex-direction: row;
    }
    #profileButtonsAndImage {
      flex-direction: column-reverse;
      justify-content: center;
    }

    #profileHeader img {
      margin: 1em 1em;
    }

    #profileHeader h1 {
      font-size: 1.5em;
    }

    #profileText {
      width: 90%;
    }
  }

  /* Light mode vs. dark mode (default) */
  @media screen and (prefers-color-scheme: light) {
    #profileContactRow a {
      background-color: #f0f8ff;
    }
  }
</style>
