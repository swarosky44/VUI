<template>
  <div class="search-wrap">
    <label class="search-top" for="search">
      <i class="icon icon-search"></i>
      <input class="top-search" type="text" id="search" v-model="value" @change="changeTrigger(value)" placeholder="输入关键字...">
    </label>
  </div>
</template>

<script>
export default {
  props: {
    changeTrigger: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import '../less/style.less';
@bg-gray-deeper: #e7e7e7;
@font-light: #3d4145;

.search-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: .4rem .5rem;
  background: @bg-gray-deeper;
  box-sizing: border-box;
  .search-top {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    width: 100%;
    height: 1.4rem;
    padding: 0 .5rem;
    border-radius: 5px;
    background: #fff;
    color: @font-light;
    box-sizing: border-box;
    .icon {
      margin-right: .5rem;
    }
    input {
      flex-grow: 1;
      flex-basis: 0;
      border: none;
      font-size: .7rem;
      font-weight: normal;
      color: @font-light;
    }
  }
}
</style>
