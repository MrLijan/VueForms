<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <!-- If type is SELECT -->
      <div class="select" v-if="type == 'select'">
        <select :required="isRequired">
          <option v-for="(item, index) in options" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <!-- If type is textarea -->
      <div v-else-if="type == 'textarea'">
        <textarea class="textarea"></textarea>
      </div>

      <!-- Else -->
      <div v-else>
        <input
          class="input"
          :type="type"
          :required="isRequired"
          @input="$emit('value', $e)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    inputType: {
      type: String,
      required: true,
      default: "textarea"
    },

    isRequired: {
      type: Boolean,
      default: false
    },

    options: {
      type: [Array, String],
      required: false
    },

    title: {
      type: String,
      required: true,
      default: "Default field title here"
    }
  },

  setup(props) {
    const type = ref(props.inputType);
    const label = ref(props.label);
    const isRequired = ref(props.isRequired);
    const options = ref(props.options);

    return {
      type,
      label,
      isRequired,
      options
    };
  }
};
</script>

<style lang="scss" scoped></style>
