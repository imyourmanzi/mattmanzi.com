<script lang="ts">
  interface $$Slots {
    deepDive: any;
  }
  type ProjectDescription = { solution: string; technology: string; takeaways: string };

  export let imageSource: string;
  export let imageAltText: string;
  export let name: string;
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
    <img src="{imageSource}" alt="{imageAltText}" />
    <div class="projectTextContainer">
      <h2 class="projectName">{name}</h2>
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
        >{deepDiveIsOpen ? 'Collapse' : 'Dive Deeper'}&nbsp;<i
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
    width: 80vw;

    margin-left: 10vw;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .projectSummary {
    display: flex;
    justify-content: space-evenly;
  }

  .projectSummary > img {
    width: 25vw;
    max-height: 27vh;
    padding-top: 3vh;
    object-fit: contain;
  }

  .projectTextContainer {
    width: 50vw;
  }

  .projectName {
    text-align: center;
  }

  .projectDescription {
    text-align: left;
  }

  .projectDeepDive {
    width: 80vw;
    margin-top: 0rem;

    text-align: center;
  }

  .projectDeepDive > button::before {
    content: '— ';
  }

  .projectDeepDive > button::after {
    content: ' —';
  }

  .deepDiveContent {
    max-height: 0;
    overflow: hidden;

    color: rgb(246, 240, 237);
    background-color: rgb(84, 97, 118);
    padding: 0 2rem;
    box-shadow: inset black 0 0 5rem -1.3rem;

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
</style>
