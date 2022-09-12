<div>
  <slot />
</div>

<style lang="scss">
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: max-content;
    grid-gap: 3vw;
    gap: 3vw;

    background: #f2f2f2;
    padding: 3vw;
  }
  @media only screen and (min-width: 920px) {
    div {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
  }
</style>
