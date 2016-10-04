<template>
  <div class="app">
    <transition name="slide-right" mode="out-in">
      <router-view class="page"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
