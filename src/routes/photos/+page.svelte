<script lang="ts">
  import LazyImage from './LazyImage.svelte';
</script>

<h1>Photography</h1>
<div id="fadedSpacer"></div>
<div id="photosBackdrop">
  <div id="photosContainer">
    <LazyImage
      className="photo selfPortaitLeft"
      src="./img/2020-11-29-Self-Portrait-Wide.3.jpg"
      alt="Self portrait (left)"
    />
    <LazyImage
      className="photo selfPortaitMiddle"
      src="./img/2020-11-29-Self-Portrait-Wide.2.jpg"
      alt="Self portrait (middle)"
    />
    <LazyImage
      className="photo selfPortaitRight"
      src="./img/2020-11-29-Self-Portrait-Wide.1.jpg"
      alt="Self portrait (right)"
    />
    <LazyImage className="photo dsc05900" src="./img/insta-DSC05900.jpg" alt="Pumpkin" />
    <LazyImage className="photo dsc05982" src="./img/insta-DSC05982.jpg" alt="Pumpkin" />
    <LazyImage className="photo dsc05907" src="./img/insta-DSC05907.jpg" alt="Pumpkin" />
    <LazyImage
      className="photo dsc00738Edit"
      src="./img/DSC00738-Edit.jpg"
      alt="Mountain"
    />
    <LazyImage
      className="photo dsc06553"
      src="./img/standard-DSC06553.jpg"
      alt="Teddy nose"
    />
    <LazyImage
      className="photo dsc01523Edit"
      src="./img/standard-DSC01523-Edit.jpg"
      alt="Building"
    />
    <LazyImage
      className="photo dsc01518"
      src="./img/standard-DSC01518.jpg"
      alt="Building"
    />
    <LazyImage
      className="photo dsc06523Edit"
      src="./img/standard-DSC06523-Edit.jpg"
      alt="Teddy face bed"
    />
    <LazyImage
      className="photo dsc06548"
      src="./img/standard-DSC06548.jpg"
      alt="Teddy eye"
    />
    <LazyImage
      className="photo teddyLeft"
      src="./img/insta-2020-03-14-Teddy-Wide.3.jpg"
      alt="Teddy wide (left)"
    />
    <LazyImage
      className="photo teddyMiddle"
      src="./img/insta-2020-03-14-Teddy-Wide.2.jpg"
      alt="Teddy wide (middle)"
    />
    <LazyImage
      className="photo teddyRight"
      src="./img/insta-2020-03-14-Teddy-Wide.1.jpg"
      alt="Teddy wide (right)"
    />
    <LazyImage
      className="photo dsc01530"
      src="./img/standard-DSC01530.jpg"
      alt="Trolley"
    />
  </div>
</div>

<style>
  #fadedSpacer {
    height: 2rem;

    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    border-radius: 0;
  }

  #photosBackdrop {
    padding-bottom: 1rem;

    background-color: black;
  }

  #photosContainer {
    display: grid;
    width: 96%;
    margin-left: auto;
    margin-right: 2%;

    grid-template-columns: [left-edge] repeat(9, minmax(20px, 1fr)) [right-edge];
    grid-template-rows: [top-edge] repeat(4, fit-content(20px)) [bottom-edge];
    gap: 7px;
  }

  #photosContainer :global(.photo.selfPortaitLeft) {
    grid-column: left-edge / 3;
    grid-row: top-edge / 3;
  }

  #photosContainer :global(.photo.selfPortaitMiddle) {
    grid-column: 3 / 5;
    grid-row: top-edge / 3;
  }

  #photosContainer :global(.photo.selfPortaitRight) {
    grid-column: 5 / 7;
    grid-row: top-edge / 3;
  }

  #photosContainer :global(.photo.dsc05900) {
    grid-column: 7 / 8;
    grid-row: top-edge / 2;
  }

  #photosContainer :global(.photo.dsc05982) {
    grid-column: 7 / 8;
    grid-row: 2 / 3;
  }

  #photosContainer :global(.photo.dsc05907) {
    grid-column: 8 / right-edge;
    grid-row: top-edge / 3;
  }

  #photosContainer :global(.photo.dsc00738Edit) {
    grid-column: left-edge / 4;
    grid-row: 3 / 4;
  }

  #photosContainer :global(.photo.dsc06553) {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
  }

  #photosContainer :global(.photo.dsc01523Edit) {
    grid-column: left-edge / 2;
    grid-row: 4 / 5;
  }

  #photosContainer :global(.photo.dsc01518) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  #photosContainer :global(.photo.dsc06523Edit) {
    grid-column: 5 / 6;
    grid-row: 4 / 5;
  }

  #photosContainer :global(.photo.dsc06548) {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }

  #photosContainer :global(.photo.teddyLeft) {
    grid-column: 5 / 6;
    grid-row: 3 / 4;
  }

  #photosContainer :global(.photo.teddyMiddle) {
    grid-column: 6 / 8;
    grid-row: 3 / 5;
  }

  #photosContainer :global(.photo.teddyRight) {
    grid-column: 8 / right-edge;
    grid-row: 3 / 5;
  }

  #photosContainer :global(.photo.dsc01530) {
    grid-column: 3 / 4;
    grid-row: 4 / 5;
  }

  @media screen and (max-aspect-ratio: 767/1024) {
    #photosContainer {
      grid-template-columns: [left-edge] repeat(8, minmax(20px, 1fr)) [right-edge];
      grid-template-rows: [top-edge] repeat(7, fit-content(20px)) [bottom-edge];
      gap: 4px;
    }

    #photosContainer :global(.photo.selfPortaitLeft) {
      grid-column: left-edge / 3;
      grid-row: top-edge / 2;
    }

    #photosContainer :global(.photo.selfPortaitMiddle) {
      grid-column: 3 / 5;
      grid-row: top-edge / 2;
    }

    #photosContainer :global(.photo.selfPortaitRight) {
      grid-column: 5 / 7;
      grid-row: top-edge / 2;
    }

    #photosContainer :global(.photo.dsc05900) {
      grid-column: 7 / right-edge;
      grid-row: top-edge / 2;
    }

    #photosContainer :global(.photo.dsc01523Edit) {
      grid-column: left-edge / 3;
      grid-row: 2 / 3;
    }

    #photosContainer :global(.photo.dsc01530) {
      grid-column: 3 / 5;
      grid-row: 2 / 3;
    }

    #photosContainer :global(.photo.dsc05907) {
      grid-column: 5 / 7;
      grid-row: 2 / 3;
    }

    #photosContainer :global(.photo.dsc05982) {
      grid-column: 7 / right-edge;
      grid-row: 2 / 3;
    }

    #photosContainer :global(.photo.dsc01518) {
      grid-column: left-edge / 3;
      grid-row: 3 / 4;
    }

    #photosContainer :global(.photo.dsc00738Edit) {
      grid-column: 3 / right-edge;
      grid-row: 3 / 4;
    }

    #photosContainer :global(.photo.teddyLeft) {
      grid-column: left-edge / 3;
      grid-row: 4 / 5;
    }

    #photosContainer :global(.photo.dsc06553) {
      grid-column: left-edge / 2;
      grid-row: 5 / 6;
    }

    #photosContainer :global(.photo.dsc06548) {
      grid-column: 2 / 3;
      grid-row: 5 / 6;
    }

    #photosContainer :global(.photo.teddyMiddle) {
      grid-column: 3 / 6;
      grid-row: 4 / 6;
    }

    #photosContainer :global(.photo.teddyRight) {
      grid-column: 6 / right-edge;
      grid-row: 4 / 6;
    }

    #photosContainer :global(.photo.dsc06523Edit) {
      grid-column: left-edge / right-edge;
      grid-row: 6 / bottom-edge;
    }
  }
</style>
