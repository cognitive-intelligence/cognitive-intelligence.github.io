<script>
  import CiscoLogo from './CiscoLogo.svelte';
  import AppFooterNav from '../pages/_footer.md';
</script>

<footer>
  <h2>Contact, Policies and Legal</h2>
  <CiscoLogo />
  <AppFooterNav />
</footer>

<style lang="scss">
  footer {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
    background: #0d274d;
    color: #fff;
    padding: 20px 20px 40px;

    :global(svg) {
      flex: 0 0 auto;
      height: 35px;
      fill: currentColor;
    }

    :global(p) {
      flex: 0 0 auto;
      padding-top: 20px;
      font-size: 11px;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      align-items: center;

      :global(a){
        flex: 0 0 auto;
      }
    }

    :global(a) {
      color: #fff;
      padding: 8px;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        color: #74c04b;
        text-decoration: underline;
      }
    }

    > h2 {
      display: none;
    }
  }
</style>
