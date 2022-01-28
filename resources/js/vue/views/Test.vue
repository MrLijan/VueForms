<template>
  <div>
    <base-card border="blue">
      <div>
        <base-input
          inputType="text"
          label="LIRAM"
          v-for="(item, index) in form"
          :key="index"
          @updated="item.value = $event"
          :value="item.value"
        ></base-input>
      </div>
    </base-card>
    <button @click="log" class="button">LIRA</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import BaseInput from "../components/Atoms/Input/BaseInput.vue";
import BaseTextarea from "../components/Atoms/Input/BaseTextarea.vue";
import BaseSelect from "../components/Atoms/Input/BaseSelect.vue";
import BaseCard from "../components/Atoms/Card/Card.vue";

export default {
  components: {
    BaseInput,
    BaseTextarea,
    BaseSelect,
    BaseCard,
  },

  setup() {
    const form = reactive([
      { name: "text", text: "This this", value: 'liram' },
      { name: "text", text: "This this", value: null },
      { name: "text", text: "This this", value: null },
      { name: "text", text: "This this", value: null }
    ]);

    const log = () => {
      console.log(form);
    };

    return {
      form,
      log
    };
  }
};
</script>

<style lang="scss" scoped></style>
