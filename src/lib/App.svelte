<script>
  import '../assets/scss/cisco-sans.scss';
  import '../assets/scss/reset.scss';

  import Headroom from './Headroom.svelte';
  import AppHeader from './AppHeader.svelte';
  import AppFooter from './AppFooter.svelte';

  let pin = true;

  const onPin = () => {
    pin = true;
  };
  const onUnpin = () => {
    pin = false;
  };
</script>

<!-- svelte-ignore a11y-missing-content -->
<a name="top" />

<Headroom on:pin={onPin} on:unpin={onUnpin} offset={60} tolerance={5}>
  <AppHeader />
</Headroom>

<main class:pin>
  <slot />
</main>

<AppFooter />

<style lang="scss">
  :global(html) {
    font-family: CiscoSans, Arial, sans-serif;
    font-size: 16px;
    background: #fff;
    color: #333;
    font-weight: 300;
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    width: 100%;
    min-height: 100vh;
  }

  main {
    transition: margin-top 300ms linear;
    margin-top: 0;
    flex: 1 1 auto;
    min-height: 160px;

    &.pin {
      margin-top: 60px;
    }
  }
</style>
