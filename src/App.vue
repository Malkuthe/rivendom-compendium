<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <div id="content"><router-view/></div>
</template>

<style lang="scss">
@import './scss/breakpoints.scss';
body {
  background-color: rgb(241, 241, 241);
  margin: 0;
  height: 1px;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-rows: minmax(30px,5%) auto;
  grid-template-areas: "nav" "content";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #001a12;
  height: 100%;

  @include breakpoint(m) {
    grid-template-columns: [lgutter] 1fr [main] 600px [rgutter] 1fr;
    grid-template-rows: minmax(max-content, 5%) auto;
    grid-template-areas:
      "nav nav nav"
      "lgutter content rgutter";
  }

  @include breakpoint(xl) {
    grid-template-columns: [lgutter] 1fr [main] 1024px [rgutter] 1fr;
  }
}

#content {
  height: 100%;
  width: 100%;
  grid-area: content;
  display: grid;
}

#nav {
  padding: 5px;
  background-color: rgb(10,10,10);
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area:nav;

  a {
    font-weight: bold;
    text-decoration:none;
    color: #267d63;

    &.router-link-exact-active {
      color: #56baa0;
    }
  }
}
</style>
