<template>
  <div>
    <section class="toasts">
      <div v-for="(toast, index) in toasts" :key="index">
        <Toast :type="toast.type" :text="toast.text" />
      </div>
    </section>
    <section class="container mt-5 is-max-desktop">
      <router-view />
    </section>
    <footer class="footer is-size-7">
      <div class="has-text-centered">
        Developed by
        <a href="https://github.com/MrLijan">MrLijan (liramj21@gmail.com)</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Toast from "./components/Toast.vue";

export default {
  components: {
    Toast
  },

  setup() {
    const store = useStore();
    const toasts = computed(() => {
      return store.state.toast.activeToasts;
    });

    return {
      toasts
    };
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
  --app-green-shadow: hsl(138, 45%, 94%);

  --app-yellow: hsl(48, 100%, 67%);
  --app-yellow-shadow: hsl(39, 91%, 96%);

  --app-red: hsl(11, 82%, 55%);
  --app-red-shadow: hsl(13, 76%, 95%);

  --app-blue: hsl(204, 86%, 53%);
  --app-blue-shadow: hsl(213, 67%, 94%);

  --app-container-paddding: 25px 25px;
}

* {
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--app-bg) !important;
  overflow: auto;
}

body {
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 400;
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

footer {
  background: none !important;
  display: flex;
  justify-content: center;
}

.toasts {
  position: fixed;
  top: 25px;
  width: 100%;
  z-index: 40;
  display: grid;
  place-items: center;
}

.toasts > div {
  margin-bottom: 10px;
}
</style>
