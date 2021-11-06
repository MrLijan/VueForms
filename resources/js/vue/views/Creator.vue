<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="title">
      <h1 class="is-size-1">Create your form</h1>
      <span class="tag is-light" v-if="route.params.key"
        >Form ID: {{ form.key }}</span
      >
    </section>
    <!-- FORM HEADER -->
    <section>
      <FormHeader
        v-model:name="form.name"
        v-model:description="form.description"
        v-model:creator="form.creator"
      />
    </section>

    <!-- FORM BODY -->
    <section class="form-body">
      <FormBody ref="field" :data="form.fields" />
    </section>

    <!-- FORM CONTROL -->
    <section class="form-control-wrapper is-flex is-justify-content-center">
      <div class="is-flex form-control">
        <button class="button is-info" @click="addNewFieldAtChild()">
          Add Section
        </button>
        <div class="vl"></div>
        <button class="button is-success" @click="saveForm">Save Form</button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import FormHeader from "../components/FormHeader";
import FormBody from "../components/FormBody";
import FormInput from "../components/FormInput";

export default {
  components: {
    FormHeader,
    FormBody,
    FormInput
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const field = ref();

    // Form Variables:
    let form = reactive({
      name: "",
      description: "",
      creator: "",
      fields: [
        {
          title: "This is your first Field",
          type: "textarea",
          isRequired: false,
          answer: ""
        }
      ]
    });

    // Save Form handler:
    const saveForm = () => {
      form.fields = field.value.logField();
      store.dispatch("form/createNewForm", form);
    };

    function addNewFieldAtChild() {
      field.value.addNewField();
    }

    /* EDITOR PAGE HANDLER: */
    //If the router contain Keys, an dispatch method will be executed
    //in order to fetch the exact form.
    if (route.params.key) {
      function getForm(key) {
        console.log(form);
        store.dispatch("form/getSingleForm", key);
      }

      getForm(route.params.key);

      form = computed(() => store.state.form.singleForm);
    }

    // END OF SETUP
    return {
      route,
      store,
      form,
      saveForm,
      field,
      addNewFieldAtChild
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

.title > h1 {
  font-weight: 900;
  color: var(--app-border);
  padding: 8px;
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
