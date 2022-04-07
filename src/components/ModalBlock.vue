<script setup>
const props = defineProps({ nowData: Object });
const emit = defineEmits(["handleModal"]);
</script>

<template>
  <div class="background" @click.self="emit('handleModal', {})">
    <div
      class="box1"
      :style="{ 'background-image': `url(${props.nowData.pic1})` }"
    ></div>
    <div
      class="box2"
      :style="{ 'background-image': `url(${props.nowData.pic2})` }"
    ></div>
    <div class="box3">{{ props.nowData.text1 }}{{ props.nowData.text2 }}</div>
  </div>
</template>

<style lang="scss">
@keyframes spark {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

@keyframes expand_mob {
  to {
    width: 100%;
    height: 100%;
    color: white;
  }
}

@keyframes expand1_pad {
  to {
    width: 35vw;
    height: 40vh;
    color: white;
  }
}

@keyframes expand2_pad {
  to {
    width: 35vw;
    height: 40vh;
    color: white;
  }
}

@keyframes expand3_pad {
  to {
    width: 76vw;
    height: 35vh;
    color: white;
  }
}

@keyframes expand1_pc {
  to {
    width: 20vw;
    height: 25vw;
    color: white;
  }
}

@keyframes expand2_pc {
  to {
    width: 20vw;
    height: 25vw;
    color: white;
  }
}

@keyframes expand3_pc {
  to {
    width: 40vw;
    height: 25vw;
    color: white;
  }
}
</style>
