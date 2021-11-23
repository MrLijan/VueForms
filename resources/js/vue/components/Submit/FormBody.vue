<template>
  <div class="container">
    <section v-for="(field, index) in fields" :key="index">
      <Input
        :inputType="field.type"
        :title="field.title"
        :isRequired="field.isRequired"
        :options="field.options"
      />
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import Input from "../Base/Input";

export default {
  props: {
    fields: {
      type: Object,
      required: true
    }
  },

  components: {
    Input
  },

  setup(props) {
    const fields = ref(props.fields);

    const addField = () => {
      fields.value.push({
        type: "textarea",
        title: "Another field please...",
        isRequired: false,
        answer: null
      });
    };

    return {
      fields,
      addField
    };
  }
};
</script>

<style lang="scss" scoped></style>
