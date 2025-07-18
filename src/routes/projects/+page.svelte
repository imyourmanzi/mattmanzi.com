<script lang="ts">
  import DOMPurify from 'dompurify';
  import hljs from 'highlight.js/lib/core';
  import bash from 'highlight.js/lib/languages/bash';
  import c from 'highlight.js/lib/languages/c';
  import css from 'highlight.js/lib/languages/css';
  import javascript from 'highlight.js/lib/languages/javascript';
  import swift from 'highlight.js/lib/languages/swift';
  import plaintext from 'highlight.js/lib/languages/plaintext';
  import x86asm from 'highlight.js/lib/languages/x86asm';
  import { Marked } from 'marked';
  import { markedHighlight } from 'marked-highlight';
  import Project from './Project.svelte';
  import './styles/projects.css';

  /**
   * The structure of a project.
   */
  type ProjectType = {
    /**
     * Source URI for a project image, if available
     */
    imageSource: string;
    /**
     * Alternate text for the project image
     */
    imageAlternateText: string;
    /**
     * Name to use in the heading
     */
    name: string;
    /**
     * Is the project currently being developed/maintained?
     */
    active?: boolean;
    /**
     * When was the project active?
     */
    dateRange: string;
    /**
     * Link to the best example of it, probably a GitHub link
     */
    projectLink?: string;
    /**
     * Filename prefix used to identify content to be display for this project
     *
     * There are two options for this file:
     *   - ${prefix}_description.md
     *   - ${prefix}_deepdive.md
     *
     * This content will show up in the similarly-named sections under the project heading.
     */
    markdownFilePrefix: string;
  };

  /**
   * A grouping of projects that have their own section/timeline on this page.
   */
  type Era = {
    /**
     * Name of the era
     */
    name: string;
    /**
     * Colors of the timeline line and its name, for both dark and light themes
     *
     * Must be hex strings so they can be passed to CSS for use as color variables.
     */
    colors: {
      dark: `#${string}`;
      light: `#${string}`;
    };
    /**
     * The projects that are in this era
     */
    projects: ProjectType[];
  };

  const eras: Era[] = [
    {
      name: 'College',
      colors: {
        dark: '#FF0000',
        light: '#FF0000'
      },
      projects: [
        {
          imageSource: '/img/projects/linuxfirewall0.gif',
          imageAlternateText:
            'Output of a compilation and test run for the project, showing all passing results except for one test',
          name: 'Assignment: Linux Firewall',
          dateRange: 'Mar – May 2019',
          projectLink: 'https://github.com/imyourmanzi/LinuxFirewall',
          markdownFilePrefix: 'linuxfirewall'
        },
        {
          imageSource: '/img/projects/tictacsweeper0.jpg',
          imageAlternateText:
            'A screenshot of probably the most gnarly block of code from the project, an array of 400 numbers',
          name: 'Assignment: Tic Tac Sweeper',
          dateRange: 'Mar – Apr 2018',
          projectLink: 'https://github.com/imyourmanzi/TicTacSweeper',
          markdownFilePrefix: 'tictacsweeper'
        }
      ]
    },
    {
      name: 'High School',
      colors: {
        dark: '#38d978',
        light: '#44915c'
      },
      projects: [
        {
          imageSource: '/img/projects/valleymatch0.jpg',
          imageAlternateText: 'Official poster for the Valley Match fundraiser',
          name: 'Valley Match',
          dateRange: 'Jan – Feb 2016',
          projectLink: 'https://github.com/imyourmanzi/ValleyMatch',
          markdownFilePrefix: 'valleymatch'
        },
        {
          imageSource: '/img/projects/mattmanzi-com0.jpg',
          imageAlternateText: 'Logo of MattManzi.com',
          name: 'MattManzi.com (This Website)',
          active: true,
          dateRange: 'since 2015',
          projectLink: 'https://github.com/imyourmanzi/mattmanzi.com',
          markdownFilePrefix: 'mattmanzi-com'
        },
        {
          imageSource: '/img/projects/gvgold0.png',
          imageAlternateText: 'Icon and main screen of my GV Gold Tour app',
          name: 'iOS App #3: GV Gold Tour',
          dateRange: 'Oct 2015',
          markdownFilePrefix: 'gvgold'
        },
        {
          imageSource: '/img/projects/timetogo0.png',
          imageAlternateText: "Icon and main screen of my It's Time To Go app",
          name: 'iOS App #2: It’s Time To Go',
          dateRange: 'Jun 2015 – May 2020',
          projectLink: 'https://github.com/imyourmanzi/TimeToGo',
          markdownFilePrefix: 'timetogo'
        },
        {
          imageSource: '/img/projects/yousalty0.png',
          imageAlternateText: 'Icon and main screen of my You Salty? app',
          name: 'iOS App #1: You Salty?',
          dateRange: 'Nov 2014 – May 2017',
          projectLink: 'https://github.com/imyourmanzi/YouSalty',
          markdownFilePrefix: 'yousalty'
        }
      ]
    }
  ];

  /**
   * Languages supported for code highlighting.
   */
  const supportedLanguages = [
    ['bash', bash],
    ['c', c],
    ['css', css],
    ['javascript', javascript],
    ['nasm', x86asm],
    ['plaintext', plaintext],
    ['swift', swift]
  ] as const;

  // register all supported languages
  supportedLanguages.forEach(([supportedLanguage, languageFn]) => {
    hljs.registerLanguage(supportedLanguage, languageFn);
  });

  const projectMarkdownParser = new Marked();
  projectMarkdownParser.use(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, detectedLanguage) {
        const language = hljs.getLanguage(detectedLanguage)
          ? detectedLanguage
          : 'plaintext';

        return hljs.highlight(code, { language }).value;
      }
    })
  );
  projectMarkdownParser.use({
    hooks: {
      postprocess(html) {
        return html
          .replaceAll('<a', '<a target="_blank" rel="external noreferrer" ')
          .replaceAll('<img', '<img loading="lazy" ');
      }
    }
  });

  /**
   * Laod in project content from relevant Markdown files and parse & sanitized them into
   * valid HTML.
   *
   * @param project the project whose content should be loaded
   * @returns an object with the relevant project content
   */
  const loadProjectContent = async (project: ProjectType) => {
    // import the content files
    const imports: Promise<typeof import('*?raw')>[] = [
      import(`./data/${project.markdownFilePrefix}_description.md?raw`),
      import(`./data/${project.markdownFilePrefix}_deepdive.md?raw`)
    ];

    // if a file imports properly, immediately get its raw value, parse, and sanitize it
    const chainedImports = imports.map((i) =>
      i
        .then((module) => module.default)
        .then((raw) => projectMarkdownParser.parse(raw))
        .then((parsed) =>
          DOMPurify.sanitize(parsed, {
            USE_PROFILES: { html: true, svg: true, svgFilters: true },
            ADD_ATTR: ['target', 'loading']
          })
        )
    );

    const settledImports = await Promise.allSettled(chainedImports);

    // get either the final HTML of an imported file or nullify it
    const final = settledImports.map(
      (settled) => settled.status === 'fulfilled' && settled.value
    );

    return { description: final[0], deepDive: final[1] };
  };
</script>

<div id="projectsContainer" class="container">
  <h1>Projects</h1>

  {#each eras as era}
    <div
      class="timeline"
      style="--era-color-dark: {era.colors.dark}; --era-color-light: {era.colors.light}"
    >
      <p class="timelineName">{era.name}</p>
      {#each era.projects as project}
        {#await loadProjectContent(project) then content}
          <Project
            imageSource="{project.imageSource}"
            imageAlternateText="{project.imageAlternateText}"
            name="{project.name}"
            active="{project.active}"
            dateRange="{project.dateRange}"
            projectLink="{project.projectLink}"
          >
            <div slot="description">
              {@html content.description}
            </div>
            <div slot="deepDive">
              {@html content.deepDive}
            </div>
          </Project>
        {/await}
      {/each}
    </div>
  {/each}
</div>

<style>
  .timeline {
    height: calc(100% + 2.15em); /* compensate for the translate below */
    margin: 1.5rem 0;
    padding: 0;
    padding-left: 0.5rem;
    transform: translateY(-2.15em); /* font-size plus bottom margin of .timelineName */

    border-left: solid 5px var(--era-color-dark);
  }

  .timelineName {
    display: inline-block;
    width: 15em;
    margin-top: 0;
    transform: rotate(-0.25turn) translate(-7em, -9rem);

    color: var(--era-color-dark);
    text-align: right;
    font-size: 1.15em;
    font-weight: 520;
    font-variant-caps: small-caps;
  }

  @media screen and (max-aspect-ratio: 1167/1024) {
    #projectsContainer {
      width: 100%;
    }

    .timeline {
      padding-left: 0;
      padding-right: 0;
    }
  }

  /* Light mode vs. dark mode (default) */
  @media screen and (prefers-color-scheme: light) {
    .timeline {
      border-left-color: var(--era-color-light);
    }

    .timelineName {
      color: var(--era-color-light);
    }
  }
</style>
