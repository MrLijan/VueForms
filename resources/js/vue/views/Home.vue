<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="title">
      <h1>Create your form</h1>
    </section>
    <!-- FORM HEADER -->
    <section>
      <FormHeader />
    </section>

    <!-- FORM BODY -->
    <!-- <section v-for="sec in sections" :key="sec">
      <FormSection />
    </section> -->
    <section v-for="field in form.fields" :key="field">
      <FormField
        :title="field.title"
        :inputType="field.type"
        :required="field.required"
      />
    </section>

    <!-- FORM CONTROL -->
    <section>
      <button class="button is-success" @click="addSection()">
        Add Section
      </button>
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
</style>
