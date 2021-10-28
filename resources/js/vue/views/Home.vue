<template>
  <div class="container is-max-desktop">
    <section class="title">
      <h1>Create your form</h1>
    </section>
    <section>
      <FormHeader />
    </section>

    <section class="form-body"></section>
  </div>
</template>

<script>
import FormHeader from "../components/FormHeader";

export default {
  components: {
    FormHeader
  },
  setup() {
    return {};
  }
};
</script>

<style lang="css" scoped>
.title > h1 {
  overflow: hidden !important;
}
</style>
