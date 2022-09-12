<script>
  export let img;
  export let href;
</script>

<a {href}>
  <span>
    <slot />
  </span>
  <figure style={`background-image: url("${img}")`} />
</a>

<style lang="scss">
  a {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    text-decoration: none;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
    color: #0d274d;
    background: #fff;

    span {
      flex: 1 1 auto;
      order: 1;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      padding: 50px;
      text-align: center;
      transition-property: background;
      transition-duration: 300ms;

      :global(h3) {
        font-size: 36px;
        font-weight: 100;
        flex: 0 0 auto;
      }

      :global(p) {
        font-size: 18px;
        font-weight: 100;
        line-height: 1.4rem;
        margin-top: 2rem;
        flex: 1 1 auto;
      }
    }

    figure {
      flex: 0 0 auto;
      order: 0;
      background-repeat: no-repeat;
      background-attachment: local;
      background-size: cover;
      background-position: 50%;
      transition-property: background-position;
      transition-duration: 2s;
      height: 250px;
    }

    &:hover {
      figure {
        background-position-y: 60%;
      }
    }
  }
</style>
