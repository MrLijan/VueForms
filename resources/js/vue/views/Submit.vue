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
    <section v-for="(field, index) in form.fields" :key="field">
      <Field
        :title="field.title"
        :inputType="field.type"
        :required="field.required"
        v-model:answer="answer"
        @answer="logAnswer(index, $event)"
      />
    </section>

    <!-- FORM CONTROL -->
    <section>
      <button class="button is-success" @click="logForm">Add Section</button>
    </section>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import FormHeader from "../components/FormHeader";
import Field from "../components/Field";
import FormInput from "../components/FormInput";

export default {
  components: {
    FormHeader,
    Field,
    FormInput
  },
  setup() {
    // Form config:
    let form = reactive({
      name: "This is the form",
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

    const answer = ref(null);

    const logAnswer = (index, event) => {
      form.fields[index].answer = event;
    };

    const logForm = () => {
      console.log(form);
    };

    //END OF SETUP
    return {
      form,
      answer,
      logAnswer,
      logForm
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
