<script>
  export let gray = false;
</script>

<section class:gray>
  <slot />
</section>

<style lang="scss">
  section {
    padding: 10px 10vw 40px;

    &.gray {
      background: #f2f2f2;

      :global(h3) {
        color: #0d274d;
      }
    }

    :global(h1) {
      display: block;
      font-size: 36px;
      margin: 2rem 0 1rem;
      font-weight: 200;
      color: #74c04b;
      line-height: 1.2em;
    }

    :global(h2) {
      display: block;
      font-size: 32px;
      margin: 2rem 0 1rem;
      font-weight: 200;
      color: #949494;
      line-height: 1.2em;
    }

    :global(h3) {
      display: block;
      font-size: 28px;
      margin: 2rem 0 1rem;
      font-weight: 200;
      color: #949494;
      line-height: 1.2em;
    }

    :global(h4) {
      display: block;
      font-size: 24px;
      margin: 2rem 0 1rem;
      font-weight: 200;
      color: #949494;
      line-height: 1.2em;
    }

    :global(h5) {
      display: block;
      font-size: 20px;
      margin: 2rem 0 1rem;
      font-weight: 300;
      line-height: 1.2em;
    }

    :global(h6) {
      display: block;
      font-size: 16px;
      margin: 2rem 0 1rem;
      font-weight: 300;
      line-height: 1.2em;
    }

    :global(p) {
      display: block;
      margin: 1rem 0;
      line-height: 1.2rem;
    }

    :global(hr) {
      display: block;
      border: none;
      border-top: solid 1px #dfdfdf;
      margin: 1rem 0;
    }

    :global(strong),
    :global(b) {
      font-weight: 400;
    }

    :global(em) {
      font-style: italic;
    }

    :global(blockquote) {
      display: block;
      border-left: 3px solid #dfdfdf;
      margin: 1rem;
      padding: 0 1rem;
    }

    :global(ul) {
      display: block;
      list-style-type: disc;
      margin: 1rem;
    }

    :global(ol) {
      display: block;
      list-style-type: decimal;
      margin: 1rem;
      line-height: 1.2rem;
    }

    :global(li) {
      display: list-item;
      margin-left: 1rem;
      padding: 0.3rem;
      line-height: 1.2rem;
    }

    :global(li) {
      > :global(p) {
        margin: 0;
      }
    }

    :global(pre) {
      font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
      white-space: pre;
      background: #f2f2f2;
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid #dfdfdf;
    }

    :global(code) {
      font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
      white-space: pre;
      background: #f2f2f2;
    }

    :global(table) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 2rem;
    }

    :global(th) {
      vertical-align: bottom;
      border-bottom: 2px solid #dfdfdf;
      padding: 0.3rem 1rem;
      text-align: left;
      color: #949494;
      line-height: 1.2rem;
    }

    :global(td) {
      vertical-align: top;
      border-bottom: 1px solid #dfdfdf;
      padding: 1rem;
      line-height: 1.2rem;
    }

    :global(a) {
      color: #007493;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: #74c04b;
      }
    }

    :global(img) {
      max-width: 100%;
    }
  }
</style>
