<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="header px-5">
      <div class="title">
        <h1 class="is-size-1">{{ form.name }}</h1>
        <span class="tag is-light">Form ID: {{ form.key }}</span>
      </div>
      <div class="tag is-success">Created by: {{ form.creator }}</div>
      <p>{{ form.description }}</p>
    </section>

    <!-- FORM BODY -->
    <form action="">
      <section>
        <Field
          title="Tell us your name"
          inputType="text"
          v-model:answer="user"
          @answer="setUser"
        />
      </section>
      <section v-for="(field, idx) in form.fields" :key="idx">
        <Field
          :title="field.title"
          :inputType="field.type"
          :required="field.required"
          :options="field.options"
          v-model:answer="answer"
          @answer="setAnswer(idx, $event)"
          :key="fieldKey"
        />
      </section>
    </form>

    <!-- FORM CONTROL -->
    <section>
      <button class="button is-success is-pulled-right" @click="submitForm">
        Submit Form
      </button>
    </section>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import FormHeader from "../components/FormHeader";
import Field from "../components/Field";
import FormInput from "../components/FormInput";
// import SubmitBody from "../components/SubmitBody";

export default {
  components: {
    FormHeader,
    Field,
    FormInput
    // SubmitBody
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const fieldKey = ref(1);

    // Dispatch Fetch Form action in store
    store.dispatch("form/getSingleForm", route.params.key);

    const form = computed(() => store.state.form.singleForm);

    let filledForm = computed(() => {
      return {
        form_key: form.value.key,
        form_name: form.value.name,
        filled_by: "",
        fields: form.value.fields
      };
    });

    // Handling answer:
    const answer = ref(null);
    const user = ref(null);

    // Setting the user:
    const setUser = (event) => {
      filledForm.filled_by = event;
    };

    // Setting the answer
    const setAnswer = (idx, event) => {
      filledForm.value.fields[idx].answer = event;
    };

    // Submitting Form
    const submitForm = () => {
      console.log(filledForm.value);
      //store.dispatch("filledForm/submitForm", filledForm);
    };

    //END OF SETUP
    return {
      form,
      answer,
      fieldKey,
      setAnswer,
      setUser,
      user,
      submitForm,
      filledForm
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
  font-weight: 900;
  padding: 8px 0;
}

.container > * {
  margin-bottom: 20px;
}
</style>
