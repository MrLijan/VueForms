<template>
  <section class="container" v-for="(field, index) in fields" :key="index">
    <!-- SECTION BODY -->
    <section class="container-content">
      <div class="field is-flex-grow-1">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="How are you today?"
            v-model="field.title"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Type</label>
        <div class="control">
          <div class="select">
            <select v-model="field.type">
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
        <label class="label">
          {{ field.required ? field.title + "*" : field.title }}
        </label>
        <FormInput :type="field.type" />
      </div>
    </section>

    <hr class="solid" />

    <!-- FIELD CONTROL -->
    <section class="flex is-pulled-right">
      <!-- <Icon src="trash" /> -->
      <label class="checkbox">
        <input type="checkbox" v-model="field.required" />
        Required field
      </label>
      <button class="button is-danger is-small" @click="deleteField">
        Delete
      </button>
    </section>
  </section>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import FormInput from "./FormInput.vue";

export default {
  props: {
    data: {
      type: Object
    }
  },

  components: {
    FormInput
  },

  setup(props) {
    const fields = ref(props.data);

    // const field = {
    //   title: "What do you whish to know?",
    //   type: "textarea",
    //   isRequired: false,
    //   answer: ""
    // };

    const logField = () => {
      return fields.value;
    };

    const addNewField = () => {
      fields.value.push({
        title: "What do you whish to know?",
        type: "textarea",
        isRequired: false,
        answer: ""
      });
      console.log(fields);
    };

    return {
      fields,
      logField,
      addNewField
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
  border-top: 6px solid var(--app-blue);
  margin-bottom: 10px;
}

.container-content {
  display: flex;
  align-items: center;
  justify-content: center;
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
