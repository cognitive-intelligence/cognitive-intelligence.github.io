<span class="load">
  <span />
  <span />
  <span />
  <span />
</span>

<style lang="scss">
  .load {
    display: block;
    position: absolute;
    top: calc(50% - 60px);
    left: 50%;
    transform: translate(-50%, -50%);

    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    width: 100px;
    height: 100px;

    span {
      border: 0;
      margin: 0;
      width: 40%;
      height: 40%;
      position: absolute;
      border-radius: 50%;
      animation: spin 2s ease infinite;

      &:first-child {
        background: #19a68c;
        animation-delay: -1.5s;
      }

      &:nth-child(2) {
        background: #f63d3a;
        animation-delay: -1s;
      }

      &:nth-child(3) {
        background: #fda543;
        animation-delay: -0.5s;
      }

      &:last-child {
        background: #193b48;
      }
    }
  }

  @keyframes spin {
    0%,
    100% {
      transform: translate(0);
    }
    25% {
      transform: translate(160%);
    }
    50% {
      transform: translate(160%, 160%);
    }
    75% {
      transform: translate(0, 160%);
    }
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
