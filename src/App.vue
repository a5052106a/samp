<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MarqueeBlock from "./components/MarqueeBlock.vue";
import WaterfallBlock from "./components/WaterfallBlock.vue";
</script>

<template>
  <MarqueeBlock />
  <WaterfallBlock />
</template>

<style lang="scss">
#app {
  position: relative;
}

body {
  margin: 0;
  padding: 0;
  background-color: $app_bgc;
}
</style>
