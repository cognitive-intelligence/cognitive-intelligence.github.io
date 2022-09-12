<div class="img-grid">
  <slot />
</div>

<style lang="scss">
  div.img-grid {
    display: block;

    > :global(p) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: max-content;
      grid-gap: 20px;
      gap: 20px;
    }

    > :global(p) {
      > :global(img) {
        display: block;
        width: 100%;
        border-radius: 10px;
      }
    }
  }
</style>
