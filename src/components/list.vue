<template>
  <div class="list-wrap">
    <transition-group class="list" :name="transitionName" tag="ul">
      <li class="list-item" v-for="(item, index) in dataSource" :key="index" @click="triggerEvents($event, item, index)">
        <span class="item-content">
          {{ item.name }}
        </span>
        <a class="item-right" href="javascript:void(0);">
          <i class="icon icon-right" v-if="isBackIcon"></i>
          <i class="mark" v-if="isMarkIcon">
            {{ item.mark }}
          </i>
          <i class="custom" v-if="isCustomIcon">
            <slot name="custom"></slot>
          </i>
        </a>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    triggerEvents: {
      type: Function,
      required: false
    },
    transitionName: {
      type: String,
      default: 'fade'
    },
    isBackIcon: {
      type: Boolean,
      default: false
    },
    isMarkIcon: {
      type: Boolean,
      default: false
    },
    isCustomIcon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import '../less/style.less';
.list-wrap {
  height: 100%;
  background: #fff;
  font-size: .85rem;
  .list {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    .list-item {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      min-height: 2.2rem;
      padding: 0 .75rem;
      box-sizing: border-box;
      list-style: none;
      &:not(:last-child):after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: 0;
        left: .75rem;
        background: @bg-gray;
      }
      .item-right {
        position: absolute;
        top: 0;
        right: .5rem;
        height: 100%;
        line-height: 2.2rem;
        .icon {
          color: @font-light;
        }
      }
    }
  }
}
</style>
