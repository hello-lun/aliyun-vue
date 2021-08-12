<template>
  <div class="wrap">
    <van-nav-bar
      right-text="登录/注册"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <title-animation slot="title" class="mini" />
      <van-icon name="apps-o" slot="left" size="1.3rem" />
    </van-nav-bar>

    <van-popup v-model="popupShow" position="left">
      <div class="left-box">
        <p class="left-item">
          <van-icon name="user-circle-o" size="1.5rem" />
        </p>
        <p class="left-item">
          <span>个人简介</span>
        </p>
        <van-cell title="博客" is-link icon="records" @click="handler('1')" />
        <van-cell
          title="杂文"
          is-link
          icon="newspaper-o"
          @click="handler('2')"
        />
        <van-cell title="心得" is-link icon="like-o" @click="handler('3')" />
        <van-cell title="旅游" is-link icon="logistics" @click="handler('4')" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { NavBar, Popup, Icon, Cell } from "vant";
import title from "@/views/animation/title.vue";

export default {
  name: "",
  components: {
    [NavBar.name]: NavBar,
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    titleAnimation: title
  },
  data() {
    return {
      popupShow: false
    };
  },
  computed: {},
  methods: {
    onClickRight() {
      this.$router.push("/login");
    },
    handler() {
      this.$router.push("/artical");
    },
    onClickLeft() {
      this.popupShow = true;
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.wrap {
  height: 100%;

  .van-popup {
    height: 100%;
  }
}

.left {
  &-box {
    width: 200px;
    height: 100%;
    padding: 20px 0;

    .van-cell__title {
      text-align: left;
    }
  }

  &-item {
    margin: 5px 0;
    text-align: center;
  }
}

.mini {
  padding: 0;
  border: 0;

  /deep/ .cp-preloader__letter {
    font-size: 16px;
  }
}
</style>
