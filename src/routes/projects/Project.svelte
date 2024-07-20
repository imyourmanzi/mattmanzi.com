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

<div class="container">
  <div class="summary">
    <img src="{imageSource}" alt="{imageAltText}" />
    <div class="textContainer">
      <h2 class="name">{name}</h2>
      <div class="description">
        <div><p><strong>Solution: </strong>{description.solution}</p></div>
        <div><p><strong>Tech Highlight: </strong>{description.technology}</p></div>
        <div><p><strong>Takeaways: </strong>{description.takeaways}</p></div>
      </div>
    </div>
  </div>

  <div class="deepDive">
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
  .container {
    width: 80vw;

    margin-left: 10vw;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .summary {
    display: flex;
    justify-content: space-around;
  }

  .summary > img {
    max-width: 30vw;
    min-width: 15vw;
    object-fit: contain;
  }

  .textContainer {
    width: 40vw;
  }

  .name {
    text-align: center;
  }

  .description {
    text-align: left;
  }

  .deepDive {
    width: 60vw;
    margin-left: 10vw;
    margin-top: 0rem;

    text-align: center;
  }

  .deepDive > button::before {
    content: '— ';
  }

  .deepDive > button::after {
    content: ' —';
  }

  .deepDiveContent {
    max-height: 0;
    overflow: hidden;

    text-align: justify;

    transition: max-height 0.5s ease-out;
  }

  .deepDiveOpen {
    max-height: 200vh;
    transition: max-height 0.5s ease-in;
  }

  .fa-solid.fa-chevron-down {
    transition: transform 0.5s ease-in;
  }

  .fa-solid.fa-chevron-down.chevronFlip {
    transform: rotateX(0.5turn);
    transition: transform 0.5s;
  }
</style>
