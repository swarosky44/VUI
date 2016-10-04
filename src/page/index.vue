<template>
  <div>
    <headline :isLeftCustom="true" :isRightCustom="true">
      <i slot="left" class="icon icon-me"></i>
      SUI Mobile
      <span slot="right">
        关于<i class="icon icon-menu"></i>
      </span>
    </headline>
    <div class="container">
      <p class="demo-title">
        示例
      </p>
      <div class="list-container">
        <List :dataSource="dataSource" :isBackIcon="true" :triggerEvents="routerGo"></List>
      </div>
    </div>
    <div class="footer">
      <a href="javascript:void(0);" class="footer-left">
        <i class="icon icon-edit"></i>
      </a>
      <a href="javascript:void(0);" class="footer-right">
        <i class="icon icon-settings"></i>
      </a>
    </div>
  </div>
</template>

<script>
import List from 'components/list'
import headline from 'components/headline'

export default {
  data () {
    return {
      dataSource: [
        {name: '标题栏', url: 'title'},
        {name: '按钮', url: 'button'},
        {name: '表单', url: 'form'},
        {name: '搜索栏', url: 'search'},
        {name: '列表', url: 'list'},
        {name: '标签页', url: 'tabs'},
        {name: '卡片', url: 'card'},
        {name: '栅格', url: 'grid'},
        {name: '对话框', url: 'dialog'},
        {name: '加载提示', url: 'lodingTip'},
        {name: '操作表', url: 'actionsheet'},
        {name: '日历', url: 'calendar'},
        {name: 'picker', url: 'picker'},
        {name: '日期选择器', url: 'date'},
        {name: '幻灯片', url: 'slide'},
        {name: '图片浏览器', url: 'imgsBox'},
        {name: '下拉刷新', url: 'refresh'},
        {name: '无限滚动', url: 'roll'}
      ]
    }
  },
  methods: {
    routerGo (e, item, index) {
      window.router.push({ name: item.url })
    }
  },
  components: {
    List,
    headline
  }
}
</script>

<style lang="less" scoped>
@import '../less/style.less';
.container .demo-title {
  font-size: .7rem;
  line-height: 1;
  padding: 1.75rem .75rem .5rem;
  margin: 0;
  box-sizing: border-box;
  background: @bg-gray-deep;
}
.list-container {
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
}
</style>
