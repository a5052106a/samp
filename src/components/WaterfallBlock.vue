<script setup>
import { ref } from "vue";
import ModalBlock from "./ModalBlock.vue";
import { dataSets } from "@/assets/site_data_sets.js";

const blocks = ref(dataSets);
const nowData = ref({});
const getPosts = () => {
  blocks.value = [...blocks.value, ...dataSets];
  console.log("觸發元素添加判定");
};
const handleScroll = () => {
  let scrollHeight = window.scrollY;
  let maxHeight =
    window.document.body.scrollHeight -
    window.document.documentElement.clientHeight;
  if (scrollHeight >= maxHeight - 200) {
    console.log("觸發高度差判定");
    getPosts();
  }
};
window.addEventListener("scroll", handleScroll);

const openIndex = ref(false);
const handleModal = (nowClick) => {
  openIndex.value = !openIndex.value;
  openIndex.value
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "");
  nowData.value = nowClick;
};
</script>

<template>
  <Teleport to="#app" v-if="openIndex">
    <ModalBlock
      :openIndex="openIndex"
      :nowData="nowData"
      @handleModal="handleModal"
    />
  </Teleport>
  <div class="container">
    <div
      class="item"
      :style="{ 'background-image': `url(${item.pic})` }"
      v-for="(item, index) in blocks"
      :key="index"
      @click="handleModal(item)"
    >
      {{ item.text1 }}
      {{ item.text2 }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: grid;
  gap: 20px;
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 768px) and (max-width: 1279.98px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
