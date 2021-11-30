<script>
  import Section from './Section.svelte';
  import LayoutPage from './LayoutPage.svelte';

  export let params = {};
</script>

<LayoutPage {params}>
  <Section>
    <slot />
  </Section>
</LayoutPage>
