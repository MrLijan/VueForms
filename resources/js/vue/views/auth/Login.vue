<template>
  <div class="container is-max-desktop">
    <div class="wrapper">
      <section class="header">
        <div class="title">
          <h1 class="is-size-1">Login</h1>
        </div>
        <p class="subtitle">Please login to get achieve all the benefits</p>
      </section>
      <section class="content">
        <form action="#" class="form">
          <base-input
            inputType="email"
            title="Email Address"
            isRequired
          ></base-input>
          <base-input
            inputType="password"
            title="Password"
            isRequired
          ></base-input>
          <button class="button is-success">Click to Login</button>
        </form>
        <div class="actions">
          <span>Don't have an account yet? </span>
          <router-link to="/register">Create now</router-link>
        </div>
      </section>
      <section class="actions"></section>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../components/Base/Input.vue";

export default {
  components: {
    BaseInput
  },
  setup() {
    return {};
  }
};
</script>

<style lang="css" scoped>
.container {
  position: relative;
  display: grid;
  place-items: center;
}

.wrapper {
  width: 90%;
  max-width: 450px;
}

.header {
  display: grid;
  place-items: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title > h1 {
  overflow: hidden !important;
  font-weight: 900;
  padding: 8px 0;
  color: var(--app-border);
}

.content {
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid var(--app-border);
  background-color: var(--app-white);
  border-top: 6px solid var(--app-green);
  padding: var(--app-container-paddding);
  padding-bottom: 30px;
  padding-top: 30px;
}

.form > button {
  width: 100%;
  margin-top: 25px;
}

.actions {
  padding-top: 15px;
  font-size: 0.95em;
  text-align: center;
}
</style>
