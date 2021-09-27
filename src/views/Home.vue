<template>
  <div class="home">
    <h1 id="title">RIVENDOM</h1>
    <div class="subtitle">• COMPENDIUM •</div>
  </div>
</template>

<style lang="scss">
.home {
  align-self: center;

  #title {
    margin: 0;
    font-size: 300%;
    font-variant: small-caps;

    @include breakpoint(xl) {
      font-size: 400%;
    }
  }

  .subtitle {
    width: 70%;
    padding-top: 10px;
    font-size: 150%;
    border-top: 2px solid #5BC0BE;
    margin: 0 auto;

    @include breakpoint(xl) {
      width: 50%;
      font-size: 200%;
    }
  }
}
</style>
