<template>
  <div class="container is-max-desktop">
    <!-- PAGE TITLE -->
    <section class="title">
      <h1>Create your form</h1>
    </section>
    <!-- FORM HEADER -->
    <section>
      <FormHeader />
    </section>

    <!-- FORM BODY -->
    <section>
      <FormSection />
    </section>
  </div>
</template>

<script>
import FormHeader from "../components/FormHeader";
import FormSection from "../components/FormSection";

export default {
  components: {
    FormHeader,
    FormSection
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

.container > * {
  margin-bottom: 20px;
}
</style>
