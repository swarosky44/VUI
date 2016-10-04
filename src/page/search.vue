<template>
  <div>
    <headline :isLeftBackIcon="true" :leftTriggerEvent="goBack">搜索栏</headline>
    <div class="container">
      <search :changeTrigger="changeEvent"></search>
    </div>
  </div>
</template>

<script>
import headline from 'components/headline'
import search from 'components/search'
export default {
  methods: {
    goBack () {
      window.history.go(-1)
    },
    changeEvent (val) {
      console.log(val)
    }
  },
  components: {
    headline,
    search
  }
}
</script>
