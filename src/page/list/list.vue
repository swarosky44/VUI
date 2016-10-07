<template>
  <div>
    <headline :isLeftBackIcon="true" :leftTriggerEvent="goBack">
      列表
    </headline>
    <div class="container">
      <div class="list-wrap">
        <list :dataSource="dataSource" :isBackIcon="true" :triggerEvents="triggerEvents"></list>
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
        {name: '视图列表', url: 'view'},
        {name: '联系人列表', url: 'contact'},
        {name: '曲目列表', url: 'music'},
        {name: '邮件应用列表', url: 'email'},
        {name: '简单列表', url: 'simple'},
        {name: '可选择列表', url: 'choose'}
      ]
    }
  },
  methods: {
    triggerEvents (event, item) {
      window.router.push({ name: item.url })
    },
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
