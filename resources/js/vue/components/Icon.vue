<template>
  <div
    class="icon-wrapper"
    v-html="icon"
    :style="{ width: size, height: size }"
  ></div>
</template>

<script>
import { ref, onUpdated } from "vue";
import axios from "axios";

export default {
  props: {
    src: {
      required: true,
      type: String
    },

    hovered: Boolean,

    size: {
      type: [String, Number],
      default: "24px"
    },

    stroke: {
      type: String,
      default: "white"
    }
  },

  setup(props) {
    const defaultIcon = "search-outline";
    const baseURL = `${process.env.MIX_APP_URL}/assets/icons`;
    const icon = ref("");

    const getIcon = (src) => {
      axios.get(`${baseURL}/${src}.svg`).then((res) => {
        icon.value = res.data;
      });
    };

    onUpdated(() => {
      getIcon(props.src);
    });

    getIcon(props.src);

    return {
      icon,
      defaultIcon,
      getIcon
    };
  }
};
</script>

<style lang="css" scoped>
.icon-wrapper ::v-deep .icon {
  stroke: currentColor !important;
  width: 100% !important;
  height: 100% !important;
}

.icon-wrapper {
  box-sizing: border-box;
}
</style>
