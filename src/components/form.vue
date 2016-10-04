<template>
  <form class="form-wrap">
    <label class="form-item" v-for="item in dataSource" :for="item.name">
      <i v-if="item.icon && item.icon.length" :class="item.icon"></i>
      <span class="item-content">
        <span class="item-title">{{ item.cnName || item.name }}</span>
        <input v-if="otherFormEle.indexOf(item.type) < 0" :type="item.type" :id="item.name" @change="changedTrigger($event, item)">
        <select v-if="item.type === 'select'" @change="changedTrigger($event, item)" :id="item.name">
          <option v-for="s in item.selectOptions" :value="s.value">{{ s.name }}</option>
        </select>
        <input v-if="item.type === 'checkbox'" type="checkbox" @change="changedTrigger($event, item)" :id="item.name">
        <span v-if="item.type === 'checkbox'" class="checkbox"></span>
        <textarea v-if="item.type === 'textarea'" :id="item.name"></textarea>
      </span>
    </label>
  </form>
</template>

<script>
export default {
  data () {
    return {
      otherFormEle: ['select', 'textarea', 'checkbox']
    }
  },
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    changedTrigger: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../less/style.less';
.form-wrap {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  background: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  .form-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 2.2rem;
    padding-left: .75rem;
    box-sizing: border-box;
    font-size: .85rem;
    .item-content {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      flex-basis: 0;
      align-items: center;
      min-height: 2.2rem;
      padding-top: .4rem;
      padding-bottom: .35rem;
      margin-left: .75rem;
      border-bottom: 1px solid @bg-gray-deep;
      box-sizing: border-box;
      .item-title {
        flex-shrink: 0;
        width: 35%;
        margin: 4px 0;
      }
      input, select, textarea {
        width: 100%;
        min-height: 1.5rem;
        border: none;
        color: @font-normal;
      }
      input[type="checkbox"] {
        display: none;
      }
      .checkbox {
        width: 2.8rem;
        border-radius: .8rem;
        height: 1.6rem;
        border: 2px solid @bg-gray-deep;
        box-sizing: border-box;
        &:after {
          content: '';
          display: block;
          height: 1.4rem;
          width: 1.4rem;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 .25rem rgba(0, 0, 0, .4);
          transition: transform .3s ease;
          transform: translate3d(0, 0, 0);
        }
      }
      input[type="checkbox"]:checked + .checkbox {
        background: @theme-green;
      }
      input[type="checkbox"]:checked + .checkbox:after {
        transform: translate3d(1.4rem, 0, 0);
      }
    }
    &:last-child .item-content {
      border-bottom: none;
    }
  }
}
</style>
