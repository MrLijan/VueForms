<template>
  <div
    class="icon-wrapper"
    v-html="svg"
    :style="{ width: size, height: size }"
  ></div>
</template>

<script>
import { ref } from "vue";
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
    const defaultSvg = "assets/icons/search-outline.svg";
    const baseSRC = `/assets/icons/${props.src}`;
    const color = ref(props.color);
    const svg = ref("");
    const getSvg = (src) => {
      axios.get(src).then((res) => {
        if (!/svg/gm.test(res.headers["content-type"]))
          return getSvg(defaultSvg);
        svg.value = `${res.data}`;
      });
    };
    getSvg(baseSRC);
    // svg.value.style.backgroundColor = "#fff";
    // console.log(ref.svg);
    return { svg, baseSRC, color };
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
