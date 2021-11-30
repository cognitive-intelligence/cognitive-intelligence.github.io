<script>
  import CiscoLogo from './CiscoLogo.svelte';
  import { location } from 'svelte-spa-router';

  const handleClick = () => {
    if ($location === '/' || $location.startsWith('/index')) window.location.reload();
  };
</script>

<a href="#/" on:click={handleClick}>
  <CiscoLogo />
  <h1>Cognitive Intelligence</h1>
</a>

<style lang="scss">
  a {
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
    text-decoration: none;
    color: #949494;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      color: #333;
    }

    :global(svg) {
      flex: 0 0 auto;
      height: 30px;
      color: #00bceb;
      fill: currentColor;
    }

    h1 {
      flex: 1 1 auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 24px;
      font-weight: 200;
      margin-left: 16px;
      margin-right: 16px;
    }
  }
</style>
