<script lang="ts">
  import CodeBlock from '../../components/code-block/CodeBlock.svelte';
  import Project from './Project.svelte';
</script>

<div id="projectsContainer" class="container">
  <h1>Projects</h1>

  <Project
    name="MattManzi.com (This Website)"
    dateRange="since 2015"
    projectLink="https://github.com/imyourmanzi/MattManziUI"
  >
    <span slot="solution"
      >A personal website for me to showcase my experience, hobbies, and new technologies
      I’m learning.</span
    >
    <span slot="technology"
      >Probably the most interesting aspect is that this website has transformed from pure
      HTML/CSS running on bare metal nginx to using the latest Svelte framework and
      hosting it on GCP.</span
    >
    <span slot="takeaways"
      >Putting the work in to build and maintain this website has encouraged me to keep up
      with web technologies and given me a platform to experiment with them.</span
    >
    <div slot="deepDive">
      <p>
        I have maintained this site since 2015, where I originally used it to host "lesson
        downloads" for a students I tutored in my senior year of high school. That, and
        showcase my high school fixation on narwhals (more below).
      </p>

      <h3>Technologies</h3>

      <p>
        Over the years, I taught myself (varying degrees of fluency in) different web
        technologies. Since this is the deep dive, I get to list them all out.
      </p>

      <div class="multiColumn">
        <div>
          <h4>Front-end</h4>
          <ul>
            <li>HTML+CSS</li>
            <li>npm</li>
            <li>JavaScript</li>
            <li>Vue 1.x–3.x</li>
            <li>Svelte 1.x–3.x</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div>
          <h4>Backend/Cloud</h4>
          <ul>
            <li>Django</li>
            <li>ASP.NET</li>
            <li>Go</li>
            <li>Perfect (Swift)</li>
          </ul>
        </div>
        <div>
          <h4>Server and Tooling</h4>
          <ul>
            <li>git</li>
            <li>Linux CLI and scripting</li>
            <li>nginx</li>
            <li>Apache</li>
            <li>Ansible</li>
            <li>GCP/Firebase</li>
            <li>Terraform</li>
          </ul>
        </div>
      </div>

      <h3>Really Nerdy Stuff</h3>

      <p>
        Owing to the fact that I started off learning just HTML and CSS (and for a while
        stubbornly refused to learn JavaScript), I picked up a trick that I thought was
        pretty cool back in high school: <a
          href="https://css-tricks.com/a-complete-guide-to-css-media-queries/"
          >CSS <code>@media</code> queries</a
        >. Two in particular have stood the test of time throughout the many iterations of
        the codebase.
      </p>

      <div class="multiColumn">
        <div>
          <h4>Color Scheme</h4>
          <p>
            It is my personal opinion—and I’m sure many of you will agree—that every
            modern application should not only have light and dark themes, but also adhere
            to the user’s preference. In recent years, this can be done almost
            effortlessly with browsers pulling color scheme preference from the operating
            system and then passing it along to this media query.
          </p>
          <CodeBlock
            language="css"
            code="{`/* Default colors for dark mode */
body {
  background-color: #011f3a;
  color: white;
  font-weight: 400;
}

a {
  color: #97b0ca;
}

/* Modifications for light mode */
@media screen and (prefers-color-scheme: light) {
  body {
    background-color: #fcfbf7;
    color: #011f3a;
  }

  a {
    color: #277ad3;
  }
}`}"
          />
          <p>
            What you see above is an excerpt of CSS from this site. Global colors are set
            for text in the <code>body</code> and <code>a</code> tags. Then, a media query
            watches for when the user’s device is set to light mode and applies the
            overriding styles. This makes it extremely useful for users whose devices are
            set to “auto” and will transition from light to dark around sunset (a setting
            I
            <a href="https://www.youtube.com/watch?v=Ieq5sNEoc1E"> highly recommend</a>).
            This CSS will ensure that site visitors never miss a beat and they don’t have
            to fiddle with an individual toggle for the website. And finally, it’s a
            JS-free solution that works on
            <a href="https://caniuse.com/prefers-color-scheme">all modern browsers</a>.
          </p>
        </div>
        <div>
          <h4>Aspect Ratio</h4>
          <p>
            When I started building my website, “mobile-first design” was a big buzzword
            and I was not going to be left out. 😤 So, with the CSS-only chip on my
            shoulder, I set out to find a solution that would solve my mobile-first woes.
            Media queries gives us access to a number of details about the device screen,
            but my favorite is the <a
              href="https://caniuse.com/mdn-css_at-rules_media_aspect-ratio"
              ><code>aspect-ratio</code></a
            >.
          </p>
          <CodeBlock
            language="css"
            code="{`#navigationLinks {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
}

/* Extra tall and skinny screens (i.e. smartphones) */
@media screen and (max-aspect-ratio: 767/1024) {
  #navigationLinks {
    justify-content: space-around;
  }
}`}"
          />
          <p>
            A common first pass at solving the mobile-first design problem was to pick a
            screen resolution width that couldn’t possibly be computer (because it would
            have such small value) so it must be a phone. However, at the time, mobile
            screens were boasting increasingly higher resolutions. Between that, certain
            operating system settings to tweak effective screen size, and tablets, it was
            near impossible to pick one number and have your website look how you wanted
            it to on most devices.
          </p>
          <p>
            Enter <code>max-aspect-ratio</code>, which redefined the problem statement. It
            wasn’t “is this screen big or small?” but rather “is it wide or tall?” Now,
            elements that needed to be shifted due to width constraints could know the
            exact point where they should start saving width over height. And if you’re
            wondering about the obscure <code>767/1024</code> ratio, it was inspired by the
            aspect ratio of my iPhone 5S at the time.
          </p>
        </div>
      </div>

      <h3>Time Capsule</h3>

      <p>
        Here's a snapshot of my a page from my original site in its infancy. Remember how
        I said “fixation on narwhals”? Well, the domain used to be <code
          >narwhalsandcode[.]com</code
        >. At this point in the timeline, I didn't understand JavaScript and the whole
        website was me using just HTML and CSS to build everything from scratch.
        Unfortunately, all that code is lost to time since I didn’t really start
        understanding git until I
        <a
          href="https://github.com/imyourmanzi/MattManziUI/tree/29f792fb163ff2d44c248539f412b122a1bd3722"
          >ported to Vue</a
        >.
      </p>

      <div class="centeredImage">
        <img
          src="/img/timecapsule.jpg"
          alt="A screenshot of a clearly very dated version of my personal website."
        />
      </div>
      <br />
    </div>
  </Project>
</div>

<style>
  .multiColumn {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .multiColumn > div {
    margin: 0 0.5em;
    max-width: calc(100% - 1em);
  }

  /* no idea but it works: https://stackoverflow.com/a/57643770/15114520 */
  .multiColumn p {
    width: 0;
    min-width: 100%;
  }

  .centeredImage {
    text-align: center;
  }

  .centeredImage > img {
    width: 100%;
    max-width: 500px;

    object-fit: contain;
  }
</style>
