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
            <th>Form Name</th>
            <th>Form Name</th>
            <th>Form Name</th>
            <th>Form Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Form name 1</td>
            <td>Form name 1</td>
            <td>Form name 1</td>
            <td>Form name 1</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
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
    const selector = ref(null);

    const sections = ref([1]);

    const addSection = () => {
      sections.value.push(1);
      console.log(sections.value);
    };

    const form = {
      name: "This is the form",
      id: 234,
      creator: "Liram Jan",
      fields: [
        {
          title: "How are you today?",
          type: "textarea",
          required: true
        },
        {
          title: "Let me ask you some question",
          type: "text",
          required: true
        },
        {
          title: "What is the date today?",
          type: "date",
          required: false
        }
      ]
    };

    return {
      selector,
      sections,
      addSection,
      form
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
