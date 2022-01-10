<script lang="ts">
  import LazyImage from './photos/LazyImage.svelte';
</script>

<div id="photosBackground">
  <h1>Photography</h1>
  <div id="photosContainer">
    <LazyImage
      className="photo selfPortait3"
      src="img/2020-11-29-Self-Portrait-Wide.3.png"
      alt="Self portrait (left)"
    />
    <LazyImage
      className="photo selfPortait2"
      src="img/2020-11-29-Self-Portrait-Wide.2.png"
      alt="Self portrait (center)"
    />
    <LazyImage
      className="photo selfPortait1"
      src="img/2020-11-29-Self-Portrait-Wide.1.png"
      alt="Self portrait (right)"
    />
    <LazyImage className="photo dsc05900" src="img/insta-DSC05900.jpg" alt="Pumpkin" />
    <LazyImage className="photo dsc05982" src="img/insta-DSC05982.jpg" alt="Pumpkin" />
    <LazyImage className="photo dsc05907" src="img/insta-DSC05907.jpg" alt="Pumpkin" />
    <LazyImage
      className="photo dsc00738Edit"
      src="img/DSC00738-Edit.png"
      alt="Mountain"
    />
    <LazyImage
      className="photo dsc06553"
      src="img/standard-DSC06553.jpg"
      alt="Teddy nose"
    />
    <LazyImage
      className="photo dsc01523Edit"
      src="img/standard-DSC01523-Edit.jpg"
      alt="Building"
    />
    <LazyImage
      className="photo dsc01518"
      src="img/standard-DSC01518.jpg"
      alt="Building"
    />
    <LazyImage
      className="photo dsc06523Edit"
      src="img/standard-DSC06523-Edit.jpg"
      alt="Teddy face bed"
    />
    <LazyImage
      className="photo dsc06548"
      src="img/standard-DSC06548.jpg"
      alt="Teddy eye"
    />
    <LazyImage
      className="photo teddy3"
      src="img/insta-2020-03-14-Teddy-Wide.3.png"
      alt="Teddy wide (left)"
    />
    <LazyImage
      className="photo teddy2"
      src="img/insta-2020-03-14-Teddy-Wide.2.png"
      alt="Teddy wide (middle)"
    />
    <LazyImage
      className="photo teddy1"
      src="img/insta-2020-03-14-Teddy-Wide.1.png"
      alt="Teddy wide (right)"
    />
    <LazyImage className="photo dsc01530" src="img/standard-DSC01530.jpg" alt="Trolley" />
  </div>
</div>

<style>
  #photosBackground {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1)
    );
    border-radius: 0;
  }

  #photosContainer {
    display: grid;
    width: 96%;
    margin-left: auto;
    margin-right: 2%;

    grid-template-columns: [left-edge] repeat(9, minmax(20px, 1fr)) [right-edge];
    grid-template-rows: [top-edge] repeat(4, minmax(20px, 1fr)) [bottom-edge];
    gap: 7px;
  }

  #photosContainer :global(.photo.selfPortait3) {
    grid-column: left-edge / 3;
    grid-row: top-edge / 3;
    place-self: center;
  }

  #photosContainer :global(.photo.selfPortait2) {
    grid-column: 3 / 5;
    grid-row: top-edge / 3;
    place-self: center;
  }

  #photosContainer :global(.photo.selfPortait1) {
    grid-column: 5 / 7;
    grid-row: top-edge / 3;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc05900) {
    grid-column: 7 / 8;
    grid-row: top-edge / 2;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc05982) {
    grid-column: 7 / 8;
    grid-row: 2 / 3;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc05907) {
    grid-column: 8 / right-edge;
    grid-row: top-edge / 3;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc00738Edit) {
    grid-column: left-edge / 4;
    grid-row: 3 / 4;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc06553) {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc01523Edit) {
    grid-column: left-edge / 2;
    grid-row: 4 / 5;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc01518) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc06523Edit) {
    grid-column: 5 / 6;
    grid-row: 4 / 5;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc06548) {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
    place-self: center;
  }

  #photosContainer :global(.photo.teddy3) {
    grid-column: 5 / 6;
    grid-row: 3 / 4;
    place-self: center;
  }

  #photosContainer :global(.photo.teddy2) {
    grid-column: 6 / 8;
    grid-row: 3 / 5;
    place-self: center;
  }

  #photosContainer :global(.photo.teddy1) {
    grid-column: 8 / right-edge;
    grid-row: 3 / 5;
    place-self: center;
  }

  #photosContainer :global(.photo.dsc01530) {
    grid-column: 3 / 4;
    grid-row: 4 / 5;
    place-self: center;
  }

  @media screen and (max-aspect-ratio: 767/1024) {
    #photosContainer {
      grid-template-columns: [left-edge] repeat(4, minmax(20px, 1fr)) [right-edge];
      grid-template-rows: [top-edge] repeat(6, minmax(100px, 1fr)) [bottom-edge];
    }
  }
</style>
