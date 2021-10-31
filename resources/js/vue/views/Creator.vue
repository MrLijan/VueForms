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
    <section class="form-control-wrapper is-flex is-justify-content-center">
      <div class="is-flex form-control">
        <button class="button is-info" @click="addSection()">
          Add Section
        </button>
        <div class="vl"></div>
        <button class="button is-success" @click="saveForm()">Save Form</button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
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
      form.fields.push({
        title: "",
        type: "text",
        required: false,
        answer: ""
      });
    };

    const form = reactive({
      name: "This is the form",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      id: 234,
      creator: "Liram Jan",
      fields: [
        {
          title: "How are you today?",
          type: "textarea",
          required: true,
          answer: null
        },
        {
          title: "Let me ask you some question",
          type: "text",
          required: true,
          answer: null
        },
        {
          title: "What is the date today?",
          type: "date",
          required: false,
          answer: ""
        }
      ]
    });

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

.form-control {
  position: fixed;
  bottom: 0;
  margin-bottom: 15px;
  max-width: 33.3%;
  background-color: white;
  padding: 15px 15px;
  border-radius: 15px;
  border: 1px solid var(--app-border);
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
}

.vl {
  border-left: 1px solid var(--app-border);
  margin: 5px 15px;
}
</style>
