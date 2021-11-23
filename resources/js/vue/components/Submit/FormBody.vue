<template>
  <div class="container"></div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    fields: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const fields = ref(props.fields);

    return {
      fields
    };
  }
};
</script>

<style lang="scss" scoped></style>
