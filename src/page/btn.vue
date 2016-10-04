<template>
  <div>
    <headline :isLeftBackIcon="true" :leftTriggerEvent="goBack">
      按钮
    </headline>
    <div class="container">
      <p class="item-title">
        默认按钮
      </p>
      <div class="btn-content">
        <div class="content-item">
          <btn type="usual">Usual Button 1</btn>
        </div>
        <div class="content-item">
          <btn type="success">Success Button 1</btn>
        </div>
        <div class="content-item">
          <btn type="danger">Danger Button 1</btn>
        </div>
        <div class="content-item">
          <btn type="warning">Warning Button 1</btn>
        </div>
        <div class="content-item">
          <btn type="usual" :isRound="true">Round Button 1</btn>
        </div>
        <div class="content-item">
          <btn type="usual" :isBig="true">Big Button 1</btn>
        </div>
        <div class="content-item">
          <btn type="usual" :isRound="true" :isBig="true">Big Round Button 1</btn>
        </div>
        <div class="content-item">
          <btn type="usual" :isFill="true">Fill Usual Button</btn>
        </div>
        <div class="content-item">
          <btn type="success" :isFill="true">Fill Success Button</btn>
        </div>
        <div class="content-item">
          <btn type="danger" :isFill="true">Fill Danger Button</btn>
        </div>
        <div class="content-item">
          <btn type="warning" :isFill="true">Fill Warning Button</btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headline from 'components/headline'
import btn from 'components/btn'

export default {
  methods: {
    goBack () {
      window.history.go(-1)
    }
  },
  components: {
    headline,
    btn
  }
}
</script>

<style lang="less" scoped>
  .container {
    overflow-y: scroll;
  }
  .item-title {
    margin: 1.75rem .75rem .5rem;
    font-size: .7rem;
  }
  .btn-content {
    padding: 0 .75rem;
    .content-item {
      margin-bottom: 1rem;
    }
  }
</style>
