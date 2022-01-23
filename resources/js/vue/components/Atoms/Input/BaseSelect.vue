<template>
  <div class="field">
    <label class="label">{{ required ? "*" + label : label }}</label>
    <div class="select">
      <select :required="required" @change="$emit('updated', input)">
        <option v-for="(item, index) in options" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
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
