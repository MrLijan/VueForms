<template>
  <section class="container">
    <!-- SECTION BODY -->
    <section
      class="is-flex is-justify-content-space-between is-align-items-center"
    >
      <div class="field is-flex-grow-1">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="How are you today?"
            v-model="inputName"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Type</label>
        <div class="control">
          <div class="select">
            <select v-model="inputType">
              <option value="text">Short Answer</option>
              <option value="date">Date</option>
              <option value="email">Email</option>
              <option value="tel">Cellphone</option>
              <option value="number">Number</option>
              <option value="textarea">Paragraph</option>
            </select>
          </div>
        </div>
      </div>
      <div class="required is-pulled-right"></div>
    </section>

    <!-- FIELD EXAMPLE -->
    <section class="section-footer">
      <label class="label" for="">Example</label>
      <div class="example-field">
        <label class="label" for="">
          {{ required ? inputName + "*" : inputName }}
        </label>
        <FormInput :type="inputType" />
      </div>
    </section>

    <hr class="solid" />

    <!-- FIELD CONTROL -->
    <section class="flex is-pulled-right">
      <!-- <Icon src="trash" /> -->
      <label class="checkbox">
        <input type="checkbox" v-model="required" />
        Required field
      </label>
      <button class="button is-danger is-small" @click="deleteField">
        Delete
      </button>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import FormInput from "./FormInput.vue";
// import Icon from "./Icon.vue";

export default {
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    title: {
      type: String
    },
    required: {
      type: Boolean
    }
  },

  components: {
    FormInput
    // Icon
  },

  setup(props) {
    const inputType = ref(props.inputType);
    const inputName = ref(props.title);
    const required = ref(props.required);

    const deleteField = (e) => {
      console.log("d", e);
    };

    return {
      inputType,
      inputName,
      required,
      deleteField
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
  padding-right: 15px;
}

.section-footer {
  margin-top: 20px;
}

.example-field {
  margin-top: 10px;
  border: dashed 1px var(--app-border);
  border-radius: 6px;
  padding: 15px 15px;
}
</style>
