<script>
  import LayoutCore from './LayoutCore.svelte';
  export let params = {};
  export let layout = null;
  layout = layout
</script>

<LayoutCore {params}>
  <slot />
</LayoutCore>
