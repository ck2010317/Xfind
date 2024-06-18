<main>
  <div class="top-spot">
    <slot name="top" />
  </div>
  <div class="top-14">
    <slot name="groups" />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 23px;
    padding: 0 23px;
  }

  .top-14 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 23px;
  }

  @media only screen and (width < 1600px) {
    .top-14 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (width < 1300px) {
    .top-14 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (width < 895px) {
    .top-14 {
      grid-template-columns: 1fr;
    }
  }
</style>