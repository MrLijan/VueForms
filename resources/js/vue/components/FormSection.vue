<template>
  <section class="container">
    <!-- SECTION BODY -->
    <section
      class="is-flex is-justify-content-space-between is-align-items-center"
    >
      <div class="field">
        <label class="label">Field Name</label>
        <div class="control">
          <input
            class="input"
            :type="text"
            placeholder="i.e. Boring Wozniak"
            v-model="inputName"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Type</label>
        <div class="control">
          <div class="select">
            <select v-model="selectType">
              <option value="text">Short Answer</option>
              <option value="textarea">Paragraph</option>
              <option value="date">Date</option>
              <option value="email">Email</option>
              <option value="tel">Cellphone</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
      </div>
      <div class="required is-pulled-right">
        <label class="checkbox">
          <input type="checkbox" />
          Required field
        </label>
      </div>
    </section>

    <!-- FIELD EXAMPLE -->
    <section class="section-footer">
      <label class="label" for="">Input Example</label>
      <div class="example-field">
        <label class="label" for="">{{ inputName }}</label>
        <FormInput :type="selectType" />
      </div>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import FormInput from "./FormInput.vue";

export default {
  components: {
    FormInput
  },

  setup() {
    const selectType = ref("text");
    const inputName = ref(null);

    return {
      selectType,
      inputName
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

.section-footer {
  margin-top: 20px;
}

.example-field {
  margin-top: 10px;
  border: dotted 1px var(--app-border);
  padding: 15px 15px;
}
</style>
