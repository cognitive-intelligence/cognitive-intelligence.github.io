<script context="module">
  import A from './A.svelte';
  export { A as a };
</script>

<script>
  import { onMount } from 'svelte';

  export let params = {};

  export let layout = null;
  layout = layout;

  $: view = params.view ? params.view : 'top';

  $: {
    let sel = document.querySelector(`a[name="${view}"`);
    if (sel) {
      sel.scrollIntoView();
    } else {
      window.scroll(0, 0);
    }
  }
  onMount(() => {
    let sel = document.querySelector(`a[name="${view}"`);
    if (sel) {
      sel.scrollIntoView();
    } else {
      window.scroll(0, 0);
    }
  });
</script>

<slot />
