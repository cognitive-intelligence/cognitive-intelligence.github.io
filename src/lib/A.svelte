<script>
  import { location } from 'svelte-spa-router';
  export let rel = null;
  rel = rel;

  const hrefDefault = '#/index';
  export let href = hrefDefault;

  $: sHref = typeof href === 'string' || href instanceof String ? href : hrefDefault;

  const handleClick = () => {
    if (`#${$location}` === sHref) window.location.reload();
  };
</script>

<a href={sHref} on:click={handleClick}>
  <slot />
</a>
