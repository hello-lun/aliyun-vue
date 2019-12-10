<template>
  <div class='wrap'>
    <p class="title">伦哥网站登录页面,你们号码666</p>
    <div style="margin-top: 160px;">
      <van-field
        v-model="name"
        label="用户名"
        left-icon="contact"/>
      <van-field
        v-model="password"
        placeholder="随便输入数字即可"
        label="密码"
        left-icon="eye-o"/>

      <van-button type="primary" size="large" class="button" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Button, Toast, Notify } from 'vant';
import Axios from '@/api/axios/index.js';

export default {
  name: '',
  data() {
    return {
      name: '',
      password: ''
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,

  },
  computed: {},
  methods: {
    login () {
      if (!this.name) return Notify({ type: 'danger', message: '请填写用户名' });
      if (!this.password) return Notify({ type: 'danger', message: '请填写密码' });

      Axios({
        url: '/member/login',
        method: 'get',
        params: {
          name: this.name,
          password: this.password,
        }
      }).then(res => {
        Toast.success('登录成功');
        this.$router.push('/page');
      }).catch(err => {
        Toast.fail('登录失败');
      });
    },
  },
  created() {},
  mounted() {},
}
</script>

<style lang='css' scoped>

.wrap {
  box-sizing: border-box;
  padding: 0 30px;
  width: 100%;
  height: 100%;
}

.button {
  margin-top: 20px;
}

.title {
  color: #7584a0;
  padding: 0 0 15px;
  font-size: 16px;
  border-bottom: 1px solid #f3f2f2;
}

</style>