<template>
  <div class="container is-max-desktop">
    <!-- PAGE HEADER -->
    <section
      class="is-flex is-justify-content-space-between is-align-items-flex-end"
    >
      <h1 class="is-size-1">Your Forms</h1>
      <router-link to="/creator">
        <button class="button is-success">NEW FORM</button>
      </router-link>
    </section>

    <!-- FORMS LIST -->
    <section class="table-container">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Form Number</th>
            <th>Form Name</th>
            <th>Creator</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="form in forms" :key="form">
            <td>{{ form.key }}</td>
            <td>
              <strong>{{ form.name }}</strong>
            </td>
            <td>{{ form.creator }}</td>
            <td>
              <router-link :to="`/submit/${form.key}`">
                <button class="button"><Icon src="arrow-top-right" /></button>
              </router-link>
              <router-link :to="`/edit/${form.key}`">
                <button class="button"><Icon src="pen" /></button>
              </router-link>
              <router-link :to="`/delete/${form.key}`">
                <button class="button">
                  <Icon src="trash" />
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
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
    const store = useStore();
    const selector = ref(null);

    const sections = ref([1]);

    const addSection = () => {
      sections.value.push(1);
      console.log(sections.value);
    };

    //Dispatch action
    function fetchForms() {
      store.dispatch("form/getForms");
    }

    fetchForms();

    const forms = computed(() => store.state.form.forms);

    // Handle

    return {
      selector,
      sections,
      addSection,
      forms,
      fetchForms
    };
  }
};
</script>

<style lang="css" scoped>
.title > h1 {
  overflow: hidden !important;
}

.container > * {
  margin-bottom: 20px;
}

.table-container {
  box-sizing: border-box;
  padding: var(--app-container-paddding);

  border-radius: 8px;
  border: 1px solid var(--app-border);
  background-color: var(--app-white);
  border-top: 6px solid var(--app-field-top);
}

.table {
  width: 100%;
}

.table-body:hover {
  background-color: black;
}

td {
  overflow: hidden !important;
}
</style>
