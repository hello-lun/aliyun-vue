<template>
  <div class="wrap">
    <p class="title animated rubberBand">一起走过的日子</p>
    <!-- <title-animation /> -->
    <div style="margin-top: 160px;">
      <van-field v-model="name" label="用户名" left-icon="contact" />
      <van-field
        v-model="password"
        placeholder="随便输入数字即可"
        label="密码"
        left-icon="eye-o"
      />

      <van-button type="primary" size="small" class="button" @click="login"
        >登录</van-button
      >
      <van-button type="warning" size="small" class="button" @click="registered"
        >注册</van-button
      >
    </div>
  </div>
</template>

<script>
import { Field, Button, Toast, Notify } from "vant";
import Axios from "@/api/axios/index.js";
import title from "@/views/animation/title.vue";

export default {
  name: "",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    titleAnimation: title
  },
  computed: {},
  methods: {
    registered() {
      if (!this.name)
        return Notify({ type: "danger", message: "请填写用户名" });
      if (!this.password)
        return Notify({ type: "danger", message: "请填写密码" });
      Axios({
        url: "/api/member/registered",
        method: "get",
        params: {
          name: this.name,
          password: this.password
        }
      })
        .then(res => {
          Toast.success("注册成功");
          this.$router.push("/page");
        })
        .catch(err => {
          Toast.fail("注册失败，" + err.error);
        });
    },
    login() {
      if (!this.name)
        return Notify({ type: "danger", message: "请填写用户名" });
      if (!this.password)
        return Notify({ type: "danger", message: "请填写密码" });

      Axios({
        url: "/api/member/login",
        method: "get",
        params: {
          name: this.name,
          password: this.password
        }
      })
        .then(res => {
          Toast.success("登录成功");
          this.$router.push("/page");
        })
        .catch(err => {
          console.log(err, 999);
          Toast.fail("登录失败，" + err.error);
        });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 15px 15px;
  z-index: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
  box-sizing: border-box;
}

.wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.wangEditor-container {
  padding: 56px 20px 0;
  border: none;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> fix/回滚
