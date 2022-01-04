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
  <LazyImage
    className="photo selfPortait2"
    src="img/2020-11-29-Self-Portrait-Wide.png"
    alt="image"
  />
  <LazyImage
    className="photo selfPortait3"
    src="img/2020-11-29-Self-Portrait-Wide.png"
    alt="image"
  />
  <LazyImage
    className="photo selfPortait4"
    src="img/2020-11-29-Self-Portrait-Wide.png"
    alt="image"
  />
  <LazyImage
    className="photo selfPortait5"
    src="img/2020-11-29-Self-Portrait-Wide.png"
    alt="image"
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

  #photosContainer :global(.photo.selfPortait2) {
    grid-column: left-edge / right-edge;
    grid-row: 2 / 3;
    justify-self: center;
  }

  #photosContainer :global(.photo.selfPortait3) {
    grid-column: left-edge / right-edge;
    grid-row: 3 / 4;
    justify-self: center;
  }

  #photosContainer :global(.photo.selfPortait4) {
    grid-column: left-edge / right-edge;
    grid-row: 4 / 5;
    justify-self: center;
  }

  #photosContainer :global(.photo.selfPortait5) {
    grid-column: left-edge / right-edge;
    grid-row: 5 / bottom-edge;
    justify-self: center;
  }
</style>
