<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
import Input from "../Base/Input";

export default {
  components: {
    Input
  },

  setup() {
    return {};
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
  margin-bottom: 15px;
}
</style>
