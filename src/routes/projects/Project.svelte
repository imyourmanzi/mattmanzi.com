<script lang="ts">
  /**
   * This is a "hack" that Svelte sorta recommends because TypeScript support is
   * [still incomplete](https://svelte.dev/docs/typescript#experimental-advanced-typings).
   */
  interface $$Slots {
    /**
     * Expects HTML
     */
    description: any;
    /**
     * Expects HTML
     */
    deepDive: any;
  }

  export let imageSource: string;
  export let imageAlternateText: string;
  export let name: string;
  export let active: boolean = false;
  export let dateRange: string;
  export let projectLink: string | null = null;

  let deepDiveIsOpen = false;

  const projectId =
    // prefix the id with the year (if there's more than one the starting year is used)
    (dateRange.match(/\d{4}/)?.[0]?.concat('-') ?? '') +
    // add on the project name (everything after the last colon)
    // - remove any portion with parentheses
    // - remove excess whitespace
    // - replace spaces with hyphens
    // - remove all other non-alphabetical characters
    // - convert to lower case
    name
      .split(':')
      .pop()
      ?.replaceAll(/\(.+\)/g, '')
      .trim()
      .replaceAll(/\s+/g, '-')
      .replaceAll(/((?!-)\W)/g, '')
      .toLowerCase();

  const toggleDeepDive = () => {
    if (deepDiveIsOpen) {
      deepDiveIsOpen = false;
    } else {
      deepDiveIsOpen = true;
    }
  };
</script>

<div class="projectContainer">
  <div id="{projectId}" class="projectSummary">
    <img class="wideScreensOnly" src="{imageSource}" alt="{imageAlternateText}" />
    <div class="projectTextContainer">
      <h2 class="projectName"><a href="#{projectId}">{name}</a></h2>
      <div class="projectDetail">
        {#if active}
          <span class="projectActiveTag">Active</span>
        {/if}
        <span class="projectDateRange">{dateRange}</span>
      </div>
      <div class="projectDescription">
        <slot name="description"></slot>
        {#if projectLink}
          <div class="projectLink">
            <p>
              <a href="{projectLink}" target="_blank" rel="external noreferrer"
                >Project Link <sup
                  ><i class="fa-solid fa-arrow-up-right-from-square"></i></sup
                ></a
              >
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="projectDeepDive">
    <button on:click="{toggleDeepDive}"
      ><i class="fa-solid fa-chevron-down" class:chevronFlip="{deepDiveIsOpen}"
      ></i>&nbsp;Dive Deeper&nbsp;<i
        class="fa-solid fa-chevron-down"
        class:chevronFlip="{deepDiveIsOpen}"
      ></i></button
    >
    <div class="deepDiveContent" class:deepDiveOpen="{deepDiveIsOpen}">
      <slot name="deepDive"></slot>
    </div>
  </div>
</div>

<style>
  .projectContainer {
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1em;
  }

  .projectContainer:nth-child(2n + 1) {
    background-color: rgba(181, 160, 77, 0.05);
  }

  .projectSummary {
    display: flex;
    justify-content: space-evenly;
  }

  .projectSummary > img {
    width: 25%;
    max-height: 325px;
    padding-top: 3rem;
    object-fit: contain;
  }

  .projectTextContainer {
    width: 55%;
  }

  .projectName {
    margin-bottom: 0;

    text-align: center;
  }

  .projectName > a {
    color: inherit;
    text-decoration: none;
  }

  .projectName > a::before {
    content: '# ';
    color: transparent;
  }

  .projectName > a:hover::before {
    color: inherit;
  }

  .projectDetail {
    display: flex;
    justify-content: center;

    text-align: center;
    font-size: 0.9em;
  }

  .projectActiveTag {
    padding: 1px 5px 1px 6px;
    margin: auto 0.75em;

    border-radius: 5px;
    background-color: #218e61;

    font-weight: 600;
  }

  .projectDateRange {
    font-style: italic;
  }

  .projectDescription {
    text-align: left;
  }

  .projectDeepDive {
    width: 88%;
    margin-left: 6%;
    margin-top: 0rem;

    text-align: center;
  }

  .projectDeepDive > button {
    font-size: 1.2rem;
  }

  .deepDiveContent {
    max-height: 0;
    overflow: hidden;

    background-color: #0a3052;
    padding: 0 2rem;
    box-shadow: inset rgb(1, 31, 58) 0 0 4rem 0.5rem;

    text-align: left;

    transition: max-height 0.5s;
  }

  .deepDiveOpen {
    max-height: 1000rem;
    transition: max-height 0.8s ease-in;
  }

  .fa-solid.fa-chevron-down {
    transition: transform 0.5s;
    transition-delay: 0.3s ease-out;
  }

  .fa-solid.fa-chevron-down.chevronFlip {
    transform: rotateX(0.5turn);
    transition: transform 0.5s;
  }

  @media screen and (max-aspect-ratio: 1167/1024) {
    .projectTextContainer {
      width: 96%;
    }
  }

  /* Light mode vs. dark mode (default) */
  @media screen and (prefers-color-scheme: light) {
    .projectContainer:nth-child(2n + 1) {
      background-color: rgba(181, 161, 77, 0.07);
    }

    .projectActiveTag {
      background-color: rgb(136, 223, 161);
    }

    .deepDiveContent {
      background-color: #f5f4ee;
      box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 2rem -1.2rem;
    }
  }
</style>
