<script lang="ts">
  import { Link } from 'svelte-navigator';
  import type { Section } from '../types';

  export let sections: Section[];
</script>

<template>
  <div id="homeContainer" class="container">
    <p class="direct">As we say it,<br />so it shall be.</p>
    <div id="sectionBoxes">
      {#each sections as section (section.destination)}
        <div>
          <Link class="sectionBoxLinkWrap" to="{section.destination}">
            <div class="sectionInnerBox">
              <p>{section.title}</p>
            </div>
          </Link>
        </div>
      {/each}
    </div>
  </div>
</template>

<style>
  #homeContainer {
    text-align: center !important;
  }

  #sectionBoxes {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 86%;
    margin: auto;
    max-width: 1200px;
  }

  #sectionBoxes :global(.sectionBoxLinkWrap) {
    padding: 0em 1em;

    color: inherit;
  }

  #sectionBoxes :global(.sectionBoxLinkWrap:hover) {
    color: gray;
  }

  .sectionInnerBox {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 12rem;
    height: 16rem;

    border: solid thin white;
  }

  .sectionInnerBox p {
    font-size: 2.5em;
  }

  @media screen and (prefers-color-scheme: light) {
    .sectionInnerBox {
      border: solid thin #011f3a;
    }
  }
</style>
