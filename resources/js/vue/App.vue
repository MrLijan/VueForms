<template>
  <div>
    <nav>
      <h2>Liram's Logo</h2>
      <p>This should be improved</p>
    </nav>
    <section class="container mt-5 is-max-desktop">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&family=Zen+Old+Mincho:wght@400;700;900&display=swap");
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

/* GLOBAL VARS */
:root {
  --app-bg: hsl(216, 45%, 98%);
  --app-text: hsl(225, 34%, 20%);
  --modal-bg: hsla(225, 34%, 20%, 0.5);
  --app-white: hsl(0, 0%, 100%);
  --app-shadow: 0px 5px 15px -5px hsl(220, 2%, 68%);
  --app-border: hsla(220, 2%, 68%, 0.5);

  --app-green: hsl(153, 53%, 51%);
  --app-blue: hsl(204, 86%, 53%);
  --app-yellow: hsl(48, 100%, 67%);
  --app-red: hsl(348, 100%, 61%);

  --app-container-paddding: 25px 25px;
}

/* RESETS */
/* #app {
  width: 100vw;
  height: 100vh;
} */

* {
  margin: 0;
  padding: 0;
  overflow: auto !important;
}

body {
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 400;
  background-color: var(--app-bg) !important;
  display: grid;
}

nav {
  display: flex;
  justify-content: space-between;

  align-items: center;
  height: 45px;

  padding: 0 25px;
  background-color: var(--app-white);
  color: var(--app-text);
  box-shadow: var(--app-shadow);
}

nav > h2 {
  font-weight: 900 !important;
}

/* ROUTER-VIEW */
</style>
