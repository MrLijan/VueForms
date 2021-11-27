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
    <form @submit.prevent="submitForm">
      <section>
        <field>
          <Input
            inputType="text"
            :isRequired="true"
            title="Tell us your name"
            @updated="setName"
            :key="renderKey"
          />
        </field>
      </section>

      <section>
        <field v-for="(field, index) in form.fields" :key="index">
          <Input
            :inputType="field.type"
            :isRequired="field.isRequired"
            :options="field.options"
            :title="field.title"
            @updated="setAnswer(index, $event)"
            :key="renderKey"
          />
        </field>
      </section>

      <!-- FORM CONTROL -->
      <section>
        <div class="is-flex is-justify-content-end">
          <input class="button is-success" type="submit" />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

import Field from "../components/Submit/Field";
import Input from "../components/Base/Input";

export default {
  components: {
    Field,
    Input
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    let renderKey = ref(1);

    // Dispatch Fetch Form action in store:
    store.dispatch("filled/getForm", route.params.key);

    // Form setup:
    const form = computed(() => {
      renderKey.value++;
      return store.getters["activeForm"];
    });

    // FilledForm var:
    let filledForm = computed(() => {
      return reactive({
        form_key: form.value.key,
        form_name: form.value.name,
        filled_by: "",
        fields: form.value.fields
      });
    });

    // Setting the user:
    const setName = (event) => {
      filledForm.value.filled_by = event;
    };

    // Setting the answer
    const setAnswer = (index, event) => {
      filledForm.value.fields[index].answer = event;
    };

    // Submitting Form
    const submitForm = async () => {
      try {
        await store
          .dispatch("filled/submitForm", filledForm.value)
          .then((res) => {
            router.push("/");
          });
      } catch (err) {
        window.alert(err);
      }
    };

    //END OF SETUP
    return {
      form,
      setName,
      setAnswer,
      submitForm,
      filledForm,
      renderKey
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
