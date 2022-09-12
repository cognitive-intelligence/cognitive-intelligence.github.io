<script>
  import MD_Header from '../pages/_header.md';

  export let open;
  export let id;
</script>

<nav class:open {id}>
  <h2>Main navigation</h2>
  <MD_Header />
</nav>

<style lang="scss">
  nav {
    position: absolute;
    z-index: 999;
    right: 0;
    top: 60px;
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid #dfdfdf;
    border-bottom: none;

    display: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;

    &.open {
      display: flex;
    }

    :global(p) {
      flex: 1 1 auto;

      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: stretch;
    }

    :global(a) {
      flex: 0 0 auto;

      padding: 20px 30px;
      border-bottom: 1px solid #dfdfdf;
      margin: 0;
      color: #007493;
      text-decoration: none;
      font-weight: 300;
      white-space: nowrap;

      &:hover {
        color: #74c04b;
        background: #f2f2f2;
        text-decoration: none;
      }
    }

    h2 {
      display: none;
    }
  }
  @media only screen and (min-width: 1000px) {
    nav,
    nav.open {
      position: static;
      z-index: auto;
      right: auto;
      top: auto;
      background: transparent;
      box-shadow: none;
      border: none;
      display: flex;

      :global(p) {
        flex-direction: row;
        flex-wrap: nowrap;
      }

      :global(a) {
        padding: 8px 16px;
        border: none;
        border-radius: 50px;
      }
    }
  }
</style>
