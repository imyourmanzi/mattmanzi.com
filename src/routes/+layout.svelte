<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';

  $: sectionUri = $page.route.id?.split('/')[1];

  export let data: PageData;

  const { sections, socialLinks } = data;
</script>

<header class:dividedTop="{!!sectionUri}">
  <span>
    <a id="siteTitleLink" href="/">
      <span>MattManzi<span id="dotCom">.com</span></span>
    </a>
  </span>
  <nav id="navigationLinks">
    {#each sections as section (section.destination)}
      <a
        class="layoutLink"
        class:currentPage="{sectionUri === section.destination}"
        href="{section.destination}"
      >
        <i class="{section.iconClass}"></i>{section.title}</a
      >
    {/each}
  </nav>
</header>
<slot />
<footer>
  <div id="socialLinks">
    {#each socialLinks as social (social.url)}
      <a
        href="{social.url}"
        class="layoutLink socialLink"
        rel="external noreferrer"
        target="_blank"
      >
        <i class="{social.iconClass}"></i>
      </a>
    {/each}
  </div>
  <div id="attribution">
    <span
      ><i class="fas fa-laptop-code"></i> with <i class="fas fa-heart"></i> by
      <a
        class="layoutLink attributionLink"
        href="https://github.com/imyourmanzi/mattmanzi.com/pulls?page=1&q=is%3Apr+author%3Aimyourmanzi"
        target="_blank"
        rel="external noreferrer">@imyourmanzi</a
      >
    </span>
  </div>
</footer>

<style>
  header {
    position: relative;
    width: 92vw;
    padding: 2vw 4vw 1vw 4vw;
  }

  #siteTitleLink {
    color: inherit;
    font-size: 3em;
    font-weight: 300;
    text-decoration: none;
  }

  #siteTitleLink:hover {
    opacity: 1;
  }

  #siteTitleLink #dotCom {
    font-size: 50%;
  }

  .layoutLink {
    margin: 0em 1em;

    font-size: 1.3rem;
    color: inherit;
    text-decoration: none;
  }

  .layoutLink i {
    margin: 0em 0.35em;

    font-size: 0.9375em;
    color: inherit;
    text-decoration: none;
  }

  .layoutLink:hover {
    text-decoration: underline;
  }

  #navigationLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }

  .layoutLink.currentPage {
    text-decoration: underline;
  }

  .dividedTop {
    border-bottom: 1px solid gray;

    border-radius: 0;
  }

  footer {
    width: 100%;
    margin: 0 0 1.5em 0;

    font-size: 0.82em;

    border-top: 1px solid gray;
    border-radius: 0;
  }

  #socialLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 0.5rem;
  }

  .socialLink {
    margin: 0 0.5em;

    font-size: 2.5em;
  }

  .attributionLink {
    margin: unset;

    font-size: inherit;
  }

  /* Extra tall and skinny screens (i.e. smartphones) */
  @media screen and (max-aspect-ratio: 767/1024) {
    #navigationLinks {
      justify-content: space-around;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
  }
</style>
