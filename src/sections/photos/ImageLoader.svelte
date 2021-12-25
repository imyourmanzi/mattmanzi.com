<script lang="ts">
  import { onMount } from 'svelte';
  import IntersectionObserver from './IntersectionObserver.svelte';
  import Image from './Image.svelte';

  export let src: string;
  export let alt: string;

  // determine whether to bypass intersction-based loading
  let nativeLoading = false;
  onMount(() => {
    if ('loading' in HTMLImageElement.prototype) {
      nativeLoading = true;
    }
  });
</script>

<IntersectionObserver once="{true}" let:intersecting>
  {#if intersecting || nativeLoading}
    <Image alt="{alt}" src="{src}" />
  {/if}
</IntersectionObserver>
