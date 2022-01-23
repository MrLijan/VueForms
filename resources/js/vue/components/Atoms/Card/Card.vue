<template>
  <div class="container" :class="border">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: String,
      value: ["green", "blue", "red"],
      required: false,
      default: "blue"
    }
  },
  setup(props) {
    // END OF SETUP
    return {};
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

.green {
  border-top: 6px solid var(--app-green);
}

.blue {
  border-top: 6px solid var(--app-blue);
}

.red {
  border-top: 6px solid var(--app-red);
}
</style>
