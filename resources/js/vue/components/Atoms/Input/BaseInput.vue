<template>
  <div class="field">
    <label class="label">{{ required ? "*" + label : label }}</label>
    <input
      class="input"
      :type="inputType"
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

export default {
  props: {
    label: {
      type: String,
      required: false
    },
    inputType: {
      type: String,
      required: true,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
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
