<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="header px-5">
      <div class="title">
        <h1 class="is-size-1">{{ form.name }}</h1>
        <span class="tag is-light">Form ID: {{ form.id }}</span>
      </div>
      <p>{{ form.description }}</p>
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
      <button class="button is-success is-pulled-right" @click="logForm">
        Submit Form
      </button>
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
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title > h1 {
  overflow: hidden !important;
}

.container > * {
  margin-bottom: 20px;
}
</style>
