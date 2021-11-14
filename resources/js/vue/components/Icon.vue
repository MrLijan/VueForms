<template>
  <keep-alive>
    <div class="icon-wrapper" :style="{ width: size, height: size }">
      <component :is="src"></component>
    </div>
  </keep-alive>
</template>

<script>
import trash from "./icons/trash.vue";
import pen from "./icons/pen.vue";
import close from "./icons/close.vue";
import external_link from "./icons/external_link.vue";

export default {
  components: {
    trash,
    pen,
    close,
    external_link
  },
  props: {
    src: {
      required: true,
      type: String
    },

    hovered: Boolean,

    size: {
      type: [String, Number],
      default: "28px"
    },

    stroke: {
      type: String,
      default: "white"
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="css" scoped>
.icon-wrapper ::v-deep .icon {
  stroke: currentColor;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
}

.icon-wrapper {
  stroke: currentColor;
  box-sizing: border-box;
  overflow: hidden !important;
}
</style>
