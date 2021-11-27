<template>
  <section>
    <!-- IF ON EDIT MODE -->
    <div class="title" v-if="number">
      <h1 class="is-size-1">{{ title }}</h1>
      <span class="tag is-light">Form Key: {{ number }}</span>
    </div>

    <!-- ELSE ON CREATE NEW MODE -->
    <div class="title" v-else>
      <h1 class="is-size-1">Create your form</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    number: {
      type: [String, Number],
      required: false
    },
    title: {
      type: String,
      required: false
    }
  }

  // setup() {

  //   //END OF SETUP
  //   return {};
  // }
};
</script>

<style lang="css" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden !important;
}

.title > .tag {
  padding: 0 20px;
  overflow: hidden !important;
}

.title > h1 {
  font-weight: 900;
  color: var(--app-border);
  padding: 8px;
}
</style>
