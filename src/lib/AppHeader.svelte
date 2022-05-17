<script>
  import AppHeaderTitle from './AppHeaderTitle.svelte';
  import IconClose from './IconClose.svelte';
  import IconHamburger from './IconHamburger.svelte';
  import AppHeaderNavigation from './AppHeaderNavigation.svelte';
  import IconLin from './IconLin.svelte';
  import IconTwi from './IconTwi.svelte';
  import IconBlo from './IconBlo.svelte';

  let open = false;
</script>

<svelte:window on:resize={() => (open = false)} />
<svelte:body on:click={() => (open = false)} />

<header class="header">
  <AppHeaderTitle />
  <span class="fill" />
  <AppHeaderNavigation {open} id={'main-navigation'} />
  <div class="social">
    <a href="https://www.linkedin.com/feed/hashtag/ciscocognitive/" title="Linkedin">
      <IconLin />
    </a>
    <a href="https://twitter.com/hashtag/ciscocognitive?src=hashtag_click&f=live" title="Twitter">
      <IconTwi />
    </a>
    <a href="https://blogs.cisco.com/tag/cognitive-intelligence" title="Cisco Blogs">
      <IconBlo />
    </a>
  </div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class="control"
    on:click|stopPropagation={() => (open = !open)}
    role="button"
    aria-haspopup="true"
    aria-controls="main-navigation"
    aria-expanded={open}
    aria-pressed={open}>
    {#if open === true}
      <IconClose />
    {:else}
      <IconHamburger />
    {/if}
  </a>
</header>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;

    height: 60px;
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 0 16px;
  }

  .fill {
    flex: 1 1 auto;
  }

  .control {
    flex: 0 0 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;

    width: 40px;
    height: 40px;

    cursor: pointer;
    color: #007493;
    border-radius: 50px;

    > :global(svg) {
      flex: 0 0 auto;

      display: block;
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    &:hover {
      color: #74c04b;
      background: #f2f2f2;
    }
  }

  .social {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
    a {
      flex: 0 0 auto;
      width: 40px;
      height: 40px;

      cursor: pointer;
      color: #007493;
      border-radius: 50px;
      overflow: hidden;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;

      :global(svg) {
        display: block;
        width: 24px;
        height: 24px;
        overflow: hidden;
        fill: currentColor;
      }
      &:hover {
        color: #74c04b;
        background: #f2f2f2;
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    .header {
      padding-right: 20px;
    }

    .control {
      display: none;
    }
  }
</style>
