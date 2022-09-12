<script>
  export let filled = false;
  export let href = null;
</script>

{#if href}
  <a class:filled role="button" {href}>
    <slot />
  </a>
{:else}
  <span class:filled role="button">
    <slot />
  </span>
{/if}

<style lang="scss">
  span, a {
    flex: 0 0 auto;
    display: inline-block;
    color: #00bceb;
    border: #00bceb solid 1px;
    padding: 10px 30px;
    border-radius: 50px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;

    &:hover {
      border-color: #74c04b;
      color: #74c04b;
      text-decoration: none;
    }

    &.filled {
      background: #00bceb;
      color: #ffffff;

      &:hover {
        background: #74c04b;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
</style>
