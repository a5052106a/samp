<script setup>
import { ref, onMounted } from "vue";
import { marqueeText } from "@/assets/site_data_sets.js";

const text = ref(marqueeText);

const checkTextLength = () => {
  const multiTimes = Math.ceil(
    (4 * document.querySelector(".container").offsetWidth) /
      document.querySelector(".text").offsetWidth
  );
  console.log(multiTimes);
  for (let i = 1; Math.pow(2, i) < multiTimes; i++) {
    text.value += text.value;
  }
};

onMounted(() => {
  checkTextLength();
});
</script>

<template>
  <dir class="marquee-box">
    <span class="text">{{ text }}</span>
  </dir>
</template>

<style lang="scss" scoped>
@keyframes move {
  0% {
    left: 0%;
  }
  100% {
    left: -100%;
  }
}
</style>