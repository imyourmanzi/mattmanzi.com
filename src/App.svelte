<script lang="ts">
  import { Router, Link, Route } from 'svelte-navigator';
  import Resume from './sections/Resume.svelte';

  // temp
  const pageName = 'home';
  // end temp

  const sections = [
    {
      title: 'Tech',
      destination: '/tech',
    },
    {
      title: 'Photos',
      destination: '/photos',
    },
    {
      title: 'Résumé',
      destination: '/resume',
    },
  ];

  const socialLinks = [
    {
      imgResource: 'social_git.svg',
      imgAlt: 'Link to GitHub profile',
      url: 'https://github.com/imyourmanzi',
    },
    {
      imgResource: 'social_ig.png',
      imgAlt: 'Link to Instagram profile',
      url: 'https://www.instagram.com/imyourmanzi/',
    },
    {
      imgResource: 'social_fb.svg',
      imgAlt: 'Link to Facebook profile',
      url: 'https://www.facebook.com/imyourmanzi',
    },
    {
      imgResource: 'social_tw.svg',
      imgAlt: 'Link to Twitter profile',
      url: 'https://twitter.com/imyourmanzi',
    },
    {
      imgResource: 'social_in.png',
      imgAlt: 'Link to LinkedIn profile',
      url: 'https://www.linkedin.com/in/mattrmanzi/',
    },
  ];
</script>

<Router>
  <header class:dividedTop="{pageName !== 'home'}">
    <span id="siteTitleWrapper">
      <Link class="siteTitleLink" to="/">
        <span id="siteTitle">MattManzi<span id="dotCom">.com</span></span>
      </Link>
    </span>
    <nav id="navLinks">
      {#each sections as section (section.destination)}
        <Link class="layoutLink" to="{section.destination}">
          <span class:currentPage="{pageName === section.destination}"
            >{section.title}</span
          >
        </Link>
      {/each}
    </nav>
  </header>
  <Route component="{Resume}" />
</Router>
<footer class:dividedBottom="{pageName !== 'home'}">
  <div id="socialLinks">
    {#each socialLinks as social (social.url)}
      <a href="{social.url}" class="socialLink" rel="noopener" target="_blank">
        <img src="{`img/${social.imgResource}`}" alt="{social.imgAlt}" />
      </a>
    {/each}
  </div>
  <br />
  <span
    >👨🏻‍💻 with ❤️ by
    <a
      class="layoutLink"
      href="https://github.com/imyourmanzi/MattManzi-UI"
      target="_blank"
      rel="noopener">imyourmanzi</a
    >
  </span>
</footer>

<style>
  /* Layout attributes */
  header {
    position: relative;
    width: 92%;
    padding: 2% 4% 1% 4%;
  }

  #siteTitleWrapper :global(.siteTitleLink) {
    color: inherit;
  }

  #siteTitle {
    font-size: 3em;
    font-weight: 300;
  }

  #siteTitle > #dotCom {
    font-size: 50%;
  }

  .dividedTop {
    border-bottom: 1px solid gray;

    border-radius: 0;
  }

  .dividedBottom {
    border-top: 1px solid gray;

    border-radius: 0;
  }

  #navLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }

  header :global(.layoutLink),
  footer :global(.layoutLink) {
    padding: 0em 1em;

    font-size: 1.25em;
    color: inherit;
  }

  header :global(.layoutLink:hover),
  footer :global(.layoutLink:hover) {
    color: gray;
    text-decoration: underline;
  }

  .currentPage {
    text-decoration: underline !important;
  }

  #socialLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    padding: 1em 1em;
  }

  .socialLink {
    padding: 0 1.5em;

    cursor: pointer;
  }

  .socialLink:hover {
    opacity: 0.5;
  }

  .socialLink img {
    height: 32px;
  }

  footer {
    width: 100%;
    bottom: 0;
    padding: 0 0 1em 0;

    font-size: 0.82em;
  }

  footer .layoutLink {
    padding: 0;

    font-size: 100%;
  }

  /* Extra tall and skinny screens (i.e. smartphones) */
  @media screen and (max-aspect-ratio: 767/1024) {
    #navLinks {
      justify-content: space-around;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    header :global(.layoutLink),
    footer :global(.layoutLink) {
      flex: 0 0 auto;
      padding: 0em 0.6em;
    }

    #socialLinks {
      justify-content: space-around;

      padding: 1em 0;
    }

    .socialLink {
      padding: 0;
    }
  }

  /* Light mode vs. dark mode (default) */
  @media screen and (prefers-color-scheme: light) {
    .socialLink img {
      filter: invert();
    }
  }
</style>
