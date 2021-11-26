<template>
  <section>
    <!-- IF ON EDIT MODE -->
    <div class="title" v-if="key">
      <h1 class="is-size-1">{{ formTitle }}</h1>
      <span class="tag is-light">Form Key: {{ formKey }}</span>
    </div>

    <!-- ELSE ON CREATE NEW MODE -->
    <div class="title" v-else>
      <h1 class="is-size-1">Create your form</h1>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

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
  },
  setup(props) {
    const formKey = ref(props.number);
    const formTitle = ref(props.title);

    // END OF SETUP
    return {
      formKey,
      formTitle
    };
  }
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
