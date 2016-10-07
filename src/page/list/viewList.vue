<template>
  <div>
    <headline　:isLeftBackIcon="true" :leftTriggerEvent="goBack">视图列表</headline>
    <div class="container">
      <div class="module">
        <p class="module-title">
          仅有标题
        </p>
        <list :dataSource="dataSource"></list>
      </div>
      <div class="module">
        <p class="module-title">
          带有按钮
        </p>
        <list :dataSource="dataSource1"　:isBackIcon="true"></list>
      </div>
      <div class="module">
        <p class="module-title">
          带有标记
        </p>
        <list :dataSource="dataSource2"　:isBackIcon="true"　:isMarkIcon="true"></list>
      </div>
      <div class="module">
        <p class="module-title">
          带有自定义标签
        </p>
        <list :dataSource="dataSource3" :isCustomIcon="true">
          自定义标签
          <span slot="custom">
            自定义标签
          </span>
        </list>
      </div>
    </div>
  </div>
</template>

<script>
import headline from 'components/headline'
import list from 'components/list/list'
export default {
  data () {
    return {
      dataSource: [
        {name: '仅有标题'}
      ],
      dataSource1: [
        {name: '带回退按钮'}
      ],
      dataSource2: [
        {name: '带有标记', mark: '5'}
      ],
      dataSource3: [
        {name: '自定义标签'}
      ]
    }
  },
  methods: {
    goBack () {
      window.history.back()
    }
  },
  components: {
    headline,
    list
  }
}
</script>

<style lang="less" scoped>
.module {
  .module-title {
    margin: 1.75rem .75rem .5rem;
    font-size: .7rem;
  }
}
</style>
