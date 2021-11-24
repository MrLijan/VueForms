<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <!-- If type is SELECT -->
      <div class="select" v-if="type == 'select'">
        <select
          :required="isRequired"
          @change="$emit('updated', $event.target.value)"
        >
          <option v-for="(item, index) in options" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <!-- If type is textarea -->
      <div v-else-if="type == 'textarea'">
        <textarea
          class="textarea"
          @input="$emit('updated', $event.target.value)"
        ></textarea>
      </div>

      <!-- Else -->
      <div v-else>
        <input
          class="input"
          :type="type"
          :required="isRequired"
          @input="$emit('updated', $event.target.value)"
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
      type: Array,
      required: false
    },

    title: {
      type: String,
      required: true,
      default: "Default field title here"
    }
  },

  emits: ["updated"],

  setup(props) {
    const type = ref(props.inputType);
    const label = ref(props.title);
    const isRequired = ref(props.isRequired);
    const options = ref(props.options);

    // END OF SETUP
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
