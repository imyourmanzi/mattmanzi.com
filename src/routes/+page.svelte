<script lang="ts">
  import { Marked } from 'marked';
  import profileText from './profile_text.md?raw';
  import DOMPurify from 'dompurify';

  const projectMarkdownParser = new Marked();
  projectMarkdownParser.use({
    hooks: {
      postprocess(html) {
        return html.replaceAll('<a', '<a target="_blank" rel="external noreferrer" ');
      }
    }
  });

  const loadProfileText = async () => {
    const parsed = await projectMarkdownParser.parse(profileText);

    const sanitized = DOMPurify.sanitize(parsed, {
      USE_PROFILES: { html: true, svg: true, svgFilters: true },
      ADD_ATTR: ['target']
    });

    return sanitized;
  };
</script>

<div id="homeContainer" class="container">
  <div id="profileHeader">
    <div id="profileButtonsAndImage">
      <div id="profileContactRow" class="wideScreensOnly">
        <a href="tel:14433847455" title="Phone: +1 (443) 384-7455"
          ><i class="fa-solid fa-phone"></i></a
        >
        <a href="mailto:manzi.mattr@gmail.com" title="Email: manzi.mattr@gmail.com"
          ><i class="fa-solid fa-at"></i></a
        >
        <a
          href="docs/Matt R. Manzi.2025.06.30.East Coast.pdf"
          title="Résumé for Matt R. Manzi"
          target="_blank"
        >
          <i class="fas fa-file-pdf"></i>
        </a>
        <a
          href="/docs/key.asc"
          title="PGP: 665C 3199 D621 6EFC 90FF F11C A5FF 3F30 E4B8 3E20"
          ><i class="fa-solid fa-key"></i></a
        >
      </div>
      <img alt="Matt R. Manzi profile" src="/img/profile_Trees.jpg" />
    </div>
    <div id="profileNameAndTitle">
      <h1 title="Matt Manzi (he/him)">
        <span class="wideScreensOnly">Hi, I'm </span>Matt Manzi<span
          class="wideScreensOnly">.</span
        >
      </h1>
      <div>
        <p>Self-Driven & Highly Skilled Software Engineer</p>
        <p id="profileQuote">"As we say it, so it shall be."</p>
      </div>
      <div id="profileContactRow">
        <a href="tel:14433847455" title="Phone: +1 (443) 384-7455"
          ><i class="fa-solid fa-phone"></i></a
        >
        <a href="mailto:manzi.mattr@gmail.com" title="Email: manzi.mattr@gmail.com"
          ><i class="fa-solid fa-at"></i></a
        >
        <a
          href="docs/Matt R. Manzi.2025.06.30.East Coast.pdf"
          title="Résumé for Matt R. Manzi"
          target="_blank"
        >
          <i class="fas fa-file-pdf"></i>
        </a>
        <a
          href="/docs/key.asc"
          title="PGP: 665C 3199 D621 6EFC 90FF F11C A5FF 3F30 E4B8 3E20"
          ><i class="fa-solid fa-key"></i></a
        >
      </div>
    </div>
  </div>
  {#await loadProfileText() then loadedProfileText}
    <div id="profileText">
      {@html loadedProfileText}
    </div>
  {/await}
</div>

<style>
  #profileHeader {
    display: flex;
    justify-content: center;
    align-content: baseline;
    align-items: center;

    margin: 20px auto auto auto;
    width: 60%;
  }

  #profileButtonsAndImage {
    display: flex;
    justify-content: space-evenly;

    max-height: 250px;
  }

  #profileButtonsAndImage > #profileContactRow {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  #profileContactRow a {
    padding: 5px;
    width: 1.28em;
    margin-right: 0.8em;

    background-color: #222537;

    text-align: center;
  }

  #profileHeader img {
    margin: auto 1.5em auto 0.75em;
    width: 200px;
    max-width: 35vw;

    border-radius: 50%;
  }

  #profileNameAndTitle {
    height: fit-content;
  }

  #profileHeader h1 {
    display: inline;
    text-align: left;
  }

  #profileHeader p {
    margin: 0.4em auto;
  }

  #profileQuote {
    font-style: italic;
    font-weight: 350;
  }

  #profileNameAndTitle > #profileContactRow {
    display: none;
  }

  #profileText {
    margin: auto;
    width: 60%;
  }

  @media screen and (max-aspect-ratio: 1167/1024) {
    #profileHeader {
      width: 100%;
    }

    #profileHeader img {
      margin: 1em 1em;
    }

    #profileHeader h1 {
      font-size: 1.4em;
    }

    #profileNameAndTitle > #profileContactRow {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
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
