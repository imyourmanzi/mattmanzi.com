<script lang="ts">
  import LazyImage from './photos/LazyImage.svelte';
</script>

<h1>Photography</h1>
<div id="photosContainer">
  <LazyImage
    className="photo selfPortait"
    src="img/2020-11-29-Self-Portrait-Wide.png"
    alt="Self portrait"
  />
</div>

<style>
  #photosContainer {
    display: grid;
    width: 96%;
    margin-left: auto;
    margin-right: 2%;

    grid-template-columns: [left-edge] repeat(10, minmax(20px, 1fr)) [right-edge];
    grid-template-rows: [top-edge] repeat(10, minmax(100px, 1fr)) [bottom-edge];
    gap: 7px;
  }

  #photosContainer :global(.photo.selfPortait) {
    grid-column: left-edge / right-edge;
    grid-row: top-edge / 2;
    place-self: center;
  }
</style>
