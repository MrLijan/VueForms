<template>
  <section>
    <div v-if="type == 'textarea'">
      <textarea
        class="textarea"
        name="textarea"
        id=""
        cols="30"
        rows="5"
        v-model="input"
        @input="emitValue"
      ></textarea>
    </div>
    <div v-else>
      <input
        class="input"
        :type="type"
        name="input"
        v-model="input"
        @input="emitValue"
      />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "text"
    }
  },

  emits: ["onInput"],

  setup(props, { emit }) {
    const input = ref("");

    const emitValue = () => {
      emit("onInput", input.value);
    };

    return {
      input,
      emitValue
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
  border-top: 6px solid #48c774;
}

.checkbox {
  overflow: hidden !important;
}
</style>
