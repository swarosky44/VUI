<template>
  <header class="header">
    <a href="javascript:void(0);" class="header-left" @click="leftTriggerEvent">
      <i class="icon icon-left" v-if="isLeftBackIcon"></i>
      <slot name="left" v-if="isLeftCustom"></slot>
    </a>
    <h1 class="header-title">
      {{ $slots.default[0].text }}
    </h1>
    <a href="javascript:void(0);" class="header-right" @click="rightTriggerEvent">
      <slot name="right" v-if="isRightCustom"></slot>
    </a>
  </header>
</template>

<script>
export default {
  props: {
    isLeftBackIcon: {
      type: Boolean,
      default: false
    },
    isLeftCustom: {
      type: Boolean,
      default: false
    },
    leftTriggerEvent: {
      type: Function,
      default: function () {
        console.log('hello left')
      }
    },
    isRightCustom: {
      type: Boolean,
      default: false
    },
    rightTriggerEvent: {
      type: Function,
      default: function () {
        console.log('hello right')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../less/style.less';
.header {
  position: relative;
  height: 2.2rem;
  padding: 0 .5rem;
  background: @bg-gray;
  box-sizing: border-box;
  .header-title {
    margin: 0;
    padding: 0;
    font-size: .85rem;
    line-height: 2.5;
    text-align: center;
  }
  .header-left {
    position: absolute;
    top: 0;
    left: .5rem;
    height: 100%;
    line-height: 2.2rem;
    color: @theme-blue;
    z-index: 1;
  }
  .header-right {
    position: absolute;
    top: 0;
    right: .5rem;
    height: 100%;
    font-size: .8rem;
    line-height: 2.2rem;
    color: @theme-blue;
    z-index: 1;
  }
}
</style>
