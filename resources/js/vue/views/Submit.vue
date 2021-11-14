<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="header">
      <div class="title">
        <h1 class="is-size-1">{{ form.name }}</h1>
      </div>
      <p class="subtitle">{{ form.description }}</p>
      <div class="is-flex is-justify-content-end">
        <span class="tag is-light">Form ID: {{ form.key }}</span>
        <div class="tag is-success is-light">
          Created by: {{ form.creator }}
        </div>
      </div>
    </section>

    <!-- FORM BODY -->
    <form action="">
      <section>
        <Field
          title="Tell us your name"
          inputType="text"
          v-model:answer="user"
          @answer="setUser"
          :isRequired="true"
          :key="fieldKey"
        />
      </section>
      <section v-for="(field, idx) in form.fields" :key="idx">
        <Field
          :title="field.title"
          :inputType="field.type"
          :isRequired="field.isRequired"
          :options="field.options"
          v-model:answer="answer"
          @answer="setAnswer(idx, $event)"
          :key="fieldKey"
        />
      </section>
    </form>

    <!-- FORM CONTROL -->
    <section>
      <div class="is-flex is-justify-content-end">
        <button class="button is-success" @click="submitForm">
          Submit Form
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
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
    const router = useRouter();
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
      filledForm.value.filled_by = event;
    };

    // Setting the answer
    const setAnswer = (idx, event) => {
      filledForm.value.fields[idx].answer = event;
    };

    // Submitting Form
    const submitForm = () => {
      store
        .dispatch("filledForm/submitForm", filledForm)
        .then(() => {
          router.push("/");
        })
        .catch((err) => {
          window.alert("Something Went wrong");
        });
    };

    //Form Validator:

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
  color: var(--app-border);
}

.tag {
  font-weight: 600 !important;
}

.container > * {
  margin-bottom: 20px;
}
</style>
