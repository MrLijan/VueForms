<template>
  <div class="field">
    <label class="label">{{ required ? "*" + label : label }}</label>
    <textarea
      class="textarea"
      type="textarea"
      :required="required"
      @input="$emit('updated', input)"
      :placeholder="placeholder"
      v-model="input"
      :disabled="disabled"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";

export default {
  extends: BaseInput,

  props: {
    inputType: {
      required: false
    }
  },

  emits: ["updated"],

  setup(props) {
    const input = ref(props.value);

    // END OF SETUP
    return {
      input
    };
  }
};
</script>

<style lang="css" scoped></style>
