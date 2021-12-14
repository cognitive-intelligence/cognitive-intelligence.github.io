<script>
  export let href;
</script>

<div>
  <slot />
</div>

<style lang="scss">
  div {
    font-size: 16px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    color: white;
    padding: 8px 16px;
    background: #007493;
    :global(p) {
      display: block;
      flex: 1 1 auto;
    }
    :global(p:last-child) {
      flex: 0 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: stretch;
      align-items: center;

      :global(a){
        display: block;
        flex: 0 0 auto;
        color: #fff;
        border: #fff solid 1px;
        padding: 5px 15px;
        border-radius: 50px;
        font-size: 13px;
        font-weight: 400;
        text-decoration: none;
      }
    }

  }
</style>
