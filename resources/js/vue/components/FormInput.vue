<template>
  <section>
    <div v-if="type == 'textarea'">
      <textarea
        class="textarea"
        :class="validation ? 'is-danger' : ''"
        name="textarea"
        id=""
        cols="30"
        rows="5"
        v-model="input"
        @input="emitValue"
      ></textarea>
    </div>
    <div
      v-else-if="type == 'select'"
      class="select"
      :class="validation ? 'is-danger' : ''"
    >
      <select name="select" id="select" v-model="input" @change="emitValue">
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div v-else>
      <input
        class="input"
        :class="validation ? 'is-danger' : ''"
        :type="type"
        name="input"
        v-model="input"
        @input="emitValue"
      />
    </div>
    <div class="required" v-if="required">
      {{ validation }}
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "text"
    },
    options: {
      type: [String, Array]
    },
    required: {
      type: Boolean
    }
  },

  emits: ["onInput"],

  setup(props, { emit }) {
    const input = ref(null);

    const emitValue = () => {
      emit("onInput", input.value);
    };

    const validation = computed(() => {
      return input.value === "" ? "Requried field" : "";
    });

    return {
      input,
      emitValue,
      validation
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

.required {
  color: var(--app-red);
}
</style>
