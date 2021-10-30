<template>
  <section>
    <div v-if="type == 'textarea'">
      <textarea
        class="textarea"
        name="textarea"
        id=""
        cols="30"
        rows="5"
      ></textarea>
    </div>
    <div v-else>
      <input class="input" :type="type" name="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "text"
    }
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
  border-top: 6px solid #48c774;
}

.checkbox {
  overflow: hidden !important;
}
</style>
