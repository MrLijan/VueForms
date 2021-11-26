<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section>
      <FormHeader :number="form.key" :title="form.title" />
    </section>
    <!-- FORM DETAILS -->
    <section>
      <FormDetails
        v-model:name="form.name"
        v-model:description="form.description"
        v-model:creator="form.creator"
      />
    </section>

    <!-- FORM FIELDS -->
    <section class="form-body">
      <FormFields ref="fields" :fields="form.fields" />
    </section>

    <!-- FORM CONTROL -->
    <section class="form-control-wrapper is-flex is-justify-content-center">
      <div class="is-flex form-control">
        <button class="button is-info" @click="addNewField">Add Section</button>
        <div class="vl"></div>
        <button
          class="button is-success"
          @click="updateForm"
          v-if="route.params.key"
        >
          Update Form
        </button>
        <button class="button is-success" @click="saveForm" v-else>
          Create Form
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import FormHeader from "../components/Creator/FormHeader";
import FormDetails from "../components/Creator/FormDetails";
import FormFields from "../components/Creator/FormFields";

export default {
  components: {
    FormHeader,
    FormDetails,
    FormFields
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const fields = ref();
    const formBodyKey = ref(1);

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

    // Add new field
    function addNewField() {
      form.fields.push({
        title: "What do you whish to know?",
        type: "textarea",
        isRequired: false,
        answer: ""
      });
    }

    // Save Form handler:
    const saveForm = () => {
      store
        .dispatch("form/createNewForm", form)
        .then((res) => {
          // router.push("/");
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // Update Form handler:
    const updateForm = () => {
      store
        .dispatch("form/updateForm", form)
        .then((res) => {
          // router.push("/");
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    /* EDITOR PAGE HANDLER: */
    //If the router contain Keys, an dispatch method will be executed
    //in order to fetch the exact form.
    if (route.params.key) {
      onMounted(() => {
        store.dispatch("form/getSingleForm", route.params.key);
      });

      form = computed(() => {
        formBodyKey.value++;
        return store.state.form.singleForm;
      });
    }

    // END OF SETUP
    return {
      route,
      store,
      form,
      saveForm,
      updateForm,
      fields,
      addNewField,
      formBodyKey
    };
  }
};
</script>

<style lang="css" scoped>
.container > * {
  margin-bottom: 20px;
}

.form-control {
  position: fixed;
  bottom: 0;
  margin-bottom: 15px;
  max-width: 633.3px;
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
