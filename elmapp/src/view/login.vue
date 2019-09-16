<template>
    <div class="login">
      <cube-input v-model="username"></cube-input>
      <cube-input v-model="password" type="password" :disabled="disabled" :eye="eye"></cube-input>
      <cube-button>{{btnName}}</cube-button>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      btnName: '',
      eye: {
        open: true,
        reverse: false
      }
    }
  },
  methods: {
    login () {
      if (this.username == '') {
        const toast = this.$createToast({
          txt: '请输入用户名',
          type: 'warn'
        })
        toast.show();
        return false;
      } else if (this.password == '') {
        const toast = this.$createToast({
          txt: '请输入密码',
          type: 'warn'
        })
        toast.show();
        return false;
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
