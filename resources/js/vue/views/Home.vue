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
    <section v-for="sec in sections" :key="sec">
      <form action="">
        <FormSection />
      </form>
    </section>

    <!-- FORM CONTROL -->
    <section>
      <button class="button is-success" @click="addSection()">
        Add Section
      </button>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import FormHeader from "../components/FormHeader";
import FormSection from "../components/FormSection";
import FormInput from "../components/FormInput";

export default {
  components: {
    FormHeader,
    FormSection,
    FormInput
  },
  setup() {
    const selector = ref(null);

    const sections = ref([1]);

    const addSection = () => {
      sections.value.push(1);
      console.log(sections.value);
    };

    return {
      selector,
      sections,
      addSection
    };
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
