<template>
  <div class="field">
    <label class="label">{{ isRequired ? "*" + title : title }}</label>
    <div class="control">
      <!-- If type is SELECT -->
      <div class="select" v-if="inputType == 'select'">
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
      <div v-else-if="inputType == 'textarea'">
        <textarea
          class="textarea"
          :required="isRequired"
          @input="$emit('updated', $event.target.value)"
          :value="value"
        ></textarea>
      </div>

      <!-- Else -->
      <div v-else>
        <input
          class="input"
          :type="inputType"
          :required="isRequired"
          @input="$emit('updated', $event.target.value)"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
    },

    placeholder: {
      type: String,
      required: false
    },

    value: {
      type: String,
      required: false
    }
  },

  emits: ["updated"],

  setup(props) {
    // const type = ref(props.inputType);
    // const label = ref(props.title);
    // const isRequired = ref(props.isRequired);
    // const options = ref(props.options);
    // // END OF SETUP
    // return {
    //   type,
    //   label,
    //   isRequired,
    //   options
    // };
  }
};
</script>

<style lang="css" scoped>
.select,
.select :nth-child(1) {
  width: 100%;
}
</style>
