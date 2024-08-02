<script lang="ts">
  import hljs from 'highlight.js/lib/core';
  import { onMount } from 'svelte';
  import type { SupportedLanguages } from '../../routes/+layout';

  export let language: SupportedLanguages;
  export let code: string;

  let codeBlockElement: HTMLPreElement;

  onMount(() => {
    codeBlockElement.setHTMLUnsafe(hljs.highlight(code, { language }).value);
  });
</script>

<pre class="hljs" bind:this="{codeBlockElement}"><code class="language-css"></code></pre>

<style>
  pre {
    max-width: fit-content;
    padding: 1em;

    font-family: 'dm';
    font-size: 0.9em;
    overflow: auto;
  }
</style>
