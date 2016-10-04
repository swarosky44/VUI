<template>
  <div>
    <headline :isLeftBackIcon="true" :leftTriggerEvent="goBack">
      表单
    </headline>
    <div class="container">
      <div class="form-container">
        <formAction :dataSource="dataSource" :changedTrigger="changedEvent"></formAction>
      </div>
    </div>
  </div>
</template>

<script>
import headline from 'components/headline'
import formAction from 'components/form'

export default {
  data () {
    return {
      username: '',
      password: '',
      dataSource: [
        {name: 'username', type: 'text', cnName: '用户名', icon: ['icon', 'icon-form-name']},
        {name: 'email', type: 'email', cnName: '邮箱', icon: ['icon', 'icon-form-email']},
        {name: 'password', type: 'password', cnName: '密码', icon: ['icon', 'icon-form-password']},
        {name: 'gender', type: 'select', cnName: '性别', icon: ['icon', 'icon-form-gender'], selectOptions: [
          {name: 'Male', value: 'male'},
          {name: 'Female', value: 'female'}
        ]},
        {name: 'birthday', type: 'date', cnName: '生日日期', icon: ['icon', 'icon-form-calendar']},
        {name: 'switch', type: 'checkbox', cnName: '开关', icon: ['icon', 'icon-form-toggle']},
        {name: 'textarea', type: 'textarea', cnName: '文本域', icon: ['icon', 'icon-form-comment']}
      ]
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    },
    changedEvent (e, item) {
      console.log(e.target.value, item)
    }
  },
  components: {
    headline,
    formAction
  }
}
</script>

<style lang="less" scoped>
.form-container {
  margin: 1.75rem 0;
}
</style>
