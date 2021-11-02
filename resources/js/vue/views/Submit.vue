<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="header px-5">
      <div class="title">
        <h1 class="is-size-1">{{ form.name }}</h1>
        <span class="tag is-light">Form ID: {{ form.key }}</span>
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
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
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
    const route = useRoute();
    const store = useStore();

    // Dispatch Fetch Form action in store
    function getForm(key) {
      store.dispatch("form/getSingleForm", key);
    }

    const form = computed(() => store.state.form.singleForm);

    getForm(route.params.key);

    // Handling answer:
    const answer = ref(null);
    let submit = reactive({});

    const logAnswer = (index, event) => {
      form.value.fields[index].answer = event;
    };

    const logForm = () => {
      console.log(form.value);
    };

    //END OF SETUP
    return {
      form,
      getForm,
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
