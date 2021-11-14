<template>
  <section class="container">
    <!-- FIELD BODY -->
    <label class="label">
      {{ isRequired ? "*" + inputName : inputName }}
    </label>
    <FormInput
      :type="inputType"
      @onInput="logInput"
      :required="isRequired"
      :options="options"
    />
  </section>
</template>

<script>
import { ref } from "vue";
import FormInput from "./FormInput.vue";

export default {
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    title: {
      type: String
    },
    isRequired: {
      type: Boolean
    },
    options: {
      type: Array
    },
    answer: {
      type: String
    }
  },

  components: {
    FormInput
  },

  setup(props, { emit }) {
    const inputType = ref(props.inputType);
    const inputName = ref(props.title);
    const isRequired = ref(props.isRequired);

    const logInput = (event) => {
      emit("answer", event);
    };

    return {
      inputType,
      inputName,
      isRequired,
      logInput
    };
  }
};
</script>

<style lang="css" scoped>
.container {
  box-sizing: border-box;
  padding: var(--app-container-paddding);

  border-radius: 8px;
  border: 1px solid var(--app-border);
  background-color: var(--app-white);
  border-top: 6px solid var(--app-blue);
  margin-bottom: 15px;
}

.checkbox {
  overflow: hidden !important;
}

.section-footer {
  margin-top: 20px;
}

.example-field {
  margin-top: 10px;
  border: dashed 1px var(--app-border);
  border-radius: 6px;
  padding: 15px 15px;
}
</style>
