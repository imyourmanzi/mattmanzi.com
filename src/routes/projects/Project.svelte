<script lang="ts">
  interface $$Slots {
    deepDive: any;
  }
  type ProjectDescription = { solution: string; technology: string; takeaways: string };

  export let imageSource: string | null = null;
  export let imageAltText: string | null = null;
  export let name: string;
  export let dateRange: string;
  export let description: ProjectDescription;

  let deepDiveIsOpen = false;

  const toggleDeepDive = () => {
    if (deepDiveIsOpen) {
      deepDiveIsOpen = false;
    } else {
      deepDiveIsOpen = true;
    }
  };
</script>

<div class="projectContainer">
  <div class="projectSummary">
    {#if imageSource && imageAltText}
      <img src="{imageSource}" alt="{imageAltText}" />
    {/if}
    <div class="projectTextContainer">
      <h2 class="projectName">{name}</h2>
      <div class="projectDateRange">{dateRange}</div>
      <div class="projectDescription">
        <div><p><strong>Solution: </strong>{description.solution}</p></div>
        <div><p><strong>Tech Highlight: </strong>{description.technology}</p></div>
        <div><p><strong>Takeaways: </strong>{description.takeaways}</p></div>
      </div>
    </div>
  </div>

  <div class="projectDeepDive">
    {#if $$slots.deepDive}
      <button on:click="{toggleDeepDive}"
        ><i class="{`fa-solid fa-chevron-down ${deepDiveIsOpen && 'chevronFlip'}`}"
        ></i>&nbsp;Dive Deeper&nbsp;<i
          class="{`fa-solid fa-chevron-down ${deepDiveIsOpen && 'chevronFlip'}`}"
        ></i></button
      >
      <div class="{`deepDiveContent ${deepDiveIsOpen && 'deepDiveOpen'}`}">
        <slot name="deepDive"></slot>
      </div>
    {/if}
  </div>
</div>

<style>
  .projectContainer {
    max-width: 80%;

    margin-left: 10%;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .projectSummary {
    display: flex;
    justify-content: space-evenly;
  }

  .projectSummary > img {
    width: 25%;
    max-height: 27vh;
    padding-top: 3rem;
    object-fit: contain;
  }

  .projectTextContainer {
    width: 50%;
  }

  .projectName {
    margin-bottom: 0;

    text-align: center;
  }

  .projectDateRange {
    text-align: center;
    font-style: italic;
    font-size: 0.9em;
  }

  .projectDescription {
    text-align: left;
  }

  .projectDeepDive {
    width: 90%;
    margin-left: 5%;
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

    text-align: justify;

    transition: max-height 0.5s;
  }

  .deepDiveOpen {
    max-height: 100vh;
    transition: max-height 0.8s;
  }

  .fa-solid.fa-chevron-down {
    transition: transform 0.5s;
    transition-delay: 0.3s;
  }

  .fa-solid.fa-chevron-down.chevronFlip {
    transform: rotateX(0.5turn);
    transition: transform 0.5s;
  }

  /* Light mode vs. dark mode (default) */
  @media screen and (prefers-color-scheme: light) {
    .deepDiveContent {
      background-color: #f5f4ee;
      box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 2rem -1.2rem;
    }
  }
</style>
