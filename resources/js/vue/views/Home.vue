<template>
  <div>
    <!-- PAGE HEADER -->
    <section class="home-header">
      <h1 class="is-size-1">Your Forms</h1>
      <router-link to="/creator">
        <button class="button is-success">NEW FORM</button>
      </router-link>
    </section>

    <!-- FORMS LIST -->
    <section class="table-container">
      <table class="table is-hoverable is-striped">
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Creator</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="form in forms" :key="form">
            <td>
              <code>{{ form.key }}</code>
            </td>
            <td>
              <strong>{{ form.name }}</strong>
            </td>
            <td>{{ form.creator }}</td>
            <td class="is-flex">
              <Icon
                src="arrow-top-right"
                @click="redirectUser(`/submit/${form.key}`)"
              />
              <Icon src="pen" @click="redirectUser(`/edit/${form.key}`)" />
              <Icon src="trash" @click="modal = !modal" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <div class="modal" :class="modal ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">We need your confimation!</p>
            <button
              class="delete"
              aria-label="close"
              @click="modal = !modal"
            ></button>
          </header>
          <section class="modal-card-body">
            <p>You are about to delete this entry,</p>
            <p>Are you sure?</p>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </footer>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FormHeader from "../components/FormHeader";
import FormField from "../components/FormField";
import FormInput from "../components/FormInput";
import Icon from "../components/Icon";

export default {
  components: {
    FormHeader,
    FormField,
    FormInput,
    Icon
  },
  setup() {
    // Variables:
    const store = useStore();
    const router = useRouter();
    const modal = ref(false);

    // Handle Redirecting:
    const redirectUser = (path) => {
      router.push(path);
    };

    // Dispatch Fetching the form
    function fetchForms() {
      store.dispatch("form/getForms");
    }

    fetchForms();

    const forms = computed(() => store.state.form.forms);

    // END OF SETUP
    return {
      redirectUser,
      forms,
      fetchForms,
      modal
    };
  }
};
</script>

<style lang="css" scoped>
.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
}

.home-header > h1 {
  font-weight: 900;
  color: var(--app-border);
}

.container > * {
  margin-bottom: 20px;
}

.table-container {
  padding: var(--app-container-paddding);

  border-radius: 8px;
  border: 1px solid var(--app-border);
  background-color: var(--app-white);
  border-top: 6px solid var(--app-field-top);
}

table {
  table-layout: auto;
}

td > * {
  margin-left: 5px !important;
  overflow: hidden !important;
}

td {
  border: none !important;
}

tr {
  border-bottom: 1px solid #dbdbdb;
}
</style>
