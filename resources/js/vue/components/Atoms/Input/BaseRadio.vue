<template>
  <div class="field">
    <label class="label">{{ required ? "*" + label : label }}</label>
    <div class="control">
      <label v-for="(option, index) in options" :key="index" class="radio">
        <input type="radio" class="radio" @input="$emit('updated', input)">
        {{ option }}
      </label>
    </div>
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
    },
    options: {
      type: Array,
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

<style lang="css" scoped>
.select,
.select :nth-child(1) {
  width: fit-content;
  max-width: 100%;
}
</style>
