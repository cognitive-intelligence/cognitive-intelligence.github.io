<script>
  export let img;
</script>

<div style={`background-image: url("${img}")`}>
  <slot />
</div>

<style lang="scss">
  div {
    background-repeat: no-repeat;
    background-attachment: local;
    background-size: cover;
    background-position: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    padding: 40px 10vw;
    color: white;
    min-height: 250px;

    :global(h3) {
      flex: 0 0 auto;
      font-weight: 200;
      font-size: 46px;
    }

    :global(p) {
      font-weight: 200;
      font-size: 21px;
      margin-top: 10px;
      line-height: 1.5rem;
    }
  }
</style>
