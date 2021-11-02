<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="title">
      <h1>Create your form</h1>
      <span class="tag is-light">Form ID: {{ form.key }}</span>
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
import { ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";
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
    const route = useRoute();
    const store = useStore();
    const selector = ref(null);
    const sections = ref([1]);

    const randKey = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };

    let form = reactive({
      name: "",
      description: "",
      key: randKey(),
      creator: "",
      fields: [
        { title: "This is your first Field", type: "textarea", required: false }
      ]
    });

    // Dispatch Fetch Form action in Store
    if (route.params.key) {
      function getForm(key) {
        store.dispatch("form/getSingleForm", key);
      }
      getForm(route.params.key);

      form = computed(() => store.state.form.singleForm);
    }

    const addSection = () => {
      form.fields.push({
        title: "",
        type: "text",
        required: false,
        answer: ""
      });
    };

    return {
      route,
      store,
      selector,
      sections,
      addSection,
      form
    };
  }
};
</script>

<style lang="css" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
