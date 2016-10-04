<template>
  <div>
    <headline :isLeftBackIcon="true" :leftTriggerEvent="goBack">
      标题栏
    </headline>
    <div class="container">
      <div class="item">
        <headline>
          只有文案的标题栏
        </headline>
      </div>
      <div class="item">
        <headline :isLeftBackIcon="true" :leftTriggerEvent="leftEvent" :isRightCustom="true" :rightTriggerEvent="rightEvent">
          带链接的标题栏
          <span slot="right">
            下一步 <i class="icon icon-right"></i>
          </span>
        </headline>
      </div>
      <div class="item">
        <headline :isLeftCustom="true" :leftTriggerEvent="leftEvent">
          <i slot="left" class="icon icon-me"></i>
          左边自定义的标题栏
        </headline>
      </div>
    </div>
  </div>
</template>

<script>
import headline from 'components/headline'

export default {
  methods: {
    goBack () {
      window.history.go(-1)
    },
    leftEvent () {
      console.log('hey 左边的事件！')
    },
    rightEvent () {
      console.log('hey 右边的事件！')
    }
  },
  components: {
    headline
  }
}
</script>

<style lang="less" scoped>
@import "../less/style.less";
.container {
  .item {
    margin: 1rem 0;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .5);
  }
}
</style>
