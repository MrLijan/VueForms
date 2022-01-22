<template>
  <div class="container is-max-desktop">
    <div class="wrapper">
      <section class="header">
        <div class="title">
          <h1 class="is-size-1">Register</h1>
        </div>
        <p class="subtitle">You can create an account to achieve all content</p>
      </section>
      <section class="content">
        <form class="form" @submit.prevent="submitForm">
          <base-input
            inputType="text"
            title="What's your name?"
            isRequired
            @updated="form.name = $event"
          ></base-input>
          <base-input
            inputType="email"
            title="Email Address"
            isRequired
            @updated="form.email = $event"
          ></base-input>
          <base-input
            inputType="password"
            title="Password"
            isRequired
            @updated="form.password = $event"
          ></base-input>
          <base-input
            inputType="password"
            title="Confirm Password"
            isRequired
            @updated="form.password_confirmation = $event"
          ></base-input>
          <button class="button is-success">Click to Register</button>
        </form>
        <div class="actions">
          <span>Already have an account? </span>
          <router-link to="/login">Login now</router-link>
        </div>
      </section>
      <section class="actions"></section>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BaseInput from "../../components/Base/Input.vue";

export default {
  components: {
    BaseInput
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    // Form values
    const form = reactive({
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    });

    const submitForm = () => {
      store
        .dispatch("auth/submitRegister", form)
        .then((res) => {
          console.log("User created successfully");
          router.push({
            name: "Login",
            params: {
              email: form.email
            }
          });
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    };

    // END OF SETUP
    return {
      form,
      submitForm
    };
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

.form > * {
  margin-top: -10px;
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
