<template>
  <div class="container is-max-desktop">
    <!-- PAGE HEADER -->
    <section>
      <h1 class="is-size-1">Your Forms</h1>
    </section>

    <!-- FORMS LIST -->
    <section class="table-container">
      <table class="table">
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
            <td>Edit | Submit</td>
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

export default {
  components: {
    FormHeader,
    FormField,
    FormInput
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
  border-top: 6px solid #48c774;
}

.table {
  width: 100%;
}
</style>
