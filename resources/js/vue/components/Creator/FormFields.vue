<template>
  <div class="container" v-for="(field, index) in fields" :key="index">
    <!-- QUESTION CONFIG -->
    <div class="is-flex is-justify-content-space-between">
      <Input
        class="is-flex-grow-1 mr-5"
        inputType="text"
        :isRequired="true"
        title="Question Title"
        @updated="field.title = $event"
        :placeholder="field.title"
      />
      <Input
        class="is-flex-grow-1"
        inputType="select"
        :isRequired="true"
        title="Question Type"
        :options="fieldTypes"
        @updated="field.type = $event"
      />
    </div>

    <!-- IF QUESTION TYPE IS SELECT -->
    <div v-if="field.type === 'select'" class="options-input">
      <Input
        inputType="text"
        :isRequired="true"
        title="Dropdown Options"
        @updated="toOptionsArray(index, $event)"
        placeholder="Example: Sunday, Monday, Tuesday"
      />
    </div>

    <!-- EXAMPLE FIELD -->
    <div class="example-field">
      <Input
        :inputType="field.type"
        :isRequired="field.isRequired"
        :title="field.title"
        :options="field.options"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Input from "../Base/Input";

export default {
  props: {
    fields: {
      type: [Array, Object],
      required: true
    }
  },
  components: { Input },

  setup(props) {
    // const data = ref(props.fields);

    const fieldTypes = [
      "textarea",
      "text",
      "date",
      "email",
      "tel",
      "number",
      "select"
    ];

    const toOptionsArray = (index, event) => {
      const options = event.split(",");
      props.fields[index].options = options;
    };

    // Return Fields Config and Value
    const logFields = () => {
      return props.fields;
    };

    return {
      // data,
      fieldTypes,
      toOptionsArray,
      logFields
    };
  }
};
</script>

<style lang="css" scoped>
.container {
  box-sizing: border-box;
  display: grid;
  padding: var(--app-container-paddding);

  border-radius: 8px;
  border: 1px solid var(--app-border);
  background-color: var(--app-white);
  border-top: 6px solid var(--app-blue);
  margin-bottom: 10px;
}

.options-input {
  width: 50%;
}

.example-field {
  border: dashed 1px var(--app-border);
  border-radius: 6px;
  padding: 15px;
  margin-top: 50px;
}
</style>
