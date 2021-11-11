<template>
  <transition name="slide-fade">
    <div class="wrapper">
      <Icon src="close" class="ico" />
      <div class="text" :class="classType">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import Icon from "./Icon.vue";

export default {
  props: {
    data: {
      type: Object
    }
  },

  components: {
    Icon
  },

  setup(props) {
    const text = ref(props.data.text);
    const type = ref(props.data.type);

    const classType = ref("info");

    switch (type) {
      case "success":
        classType = "success";
        break;

      case "info":
        classType = "info";
        break;

      case "warning":
        classType = "warning";
        break;

      case "danger":
        classType = "danger";
        break;

      default:
        classType = "info";
    }

    return {
      text,
      type,
      classType
    };
  }
};
</script>

<style lang="css" scoped>
.wrapper {
  display: flex;
  box-sizing: border-box;
  padding: 5px 10px;

  justify-content: space-between;
  align-items: flex-start;
  width: 320px;

  border-radius: 15px;
  border: 1.5px solid var(--app-green);
  background-color: var(--app-green-shadow);
  box-shadow: var(--app-shadow);
}

.wrapper > .ico {
  flex-shrink: 0;
  margin-right: 10px;
}

.wrapper > .text {
  flex-grow: 1;
}

/* SLIDE CONFIG */
.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
/* .slide-fade-enter-from {
  transform: translateY(-50px);
  opacity: 0;
} */
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
