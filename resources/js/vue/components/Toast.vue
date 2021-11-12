<template>
  <transition name="slide-fade">
    <div class="wrapper" :class="type">
      <Icon src="close" class="ico" />
      <div class="text">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import Icon from "./Icon.vue";

export default {
  props: {
    type: {
      type: String
    },
    text: {
      type: String,
      default: "Default Toast Text"
    }
  },

  components: {
    Icon
  },

  setup(props) {
    const text = ref(props.text);
    const type = ref(props.type);

    return {
      text,
      type
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

  box-shadow: var(--app-shadow);
}

.success {
  background-color: var(--app-green-shadow);
  border: 1.5px solid var(--app-green);
}

.info {
  background-color: var(--app-blue-shadow);
  border: 1.5px solid var(--app-blue);
}

.warning {
  background-color: var(--app-yellow-shadow);
  border: 1.5px solid var(--app-yellow);
}

.error {
  background-color: var(--app-red-shadow);
  border: 1.5px solid var(--app-red);
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
