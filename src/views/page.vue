<template>
  <div class="home">
    <van-nav-bar
      title="大美女覃丹丹"
      left-text="退出"
      right-text="按钮"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-swipe :autoplay="3000" indicator-color="white" class="img-wrap">
      <van-swipe-item
        ><img src="../assets/4.jpg" style="width: 100%;height: 100%;"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../assets/105.jpg" style="width: 100%;height: 100%;"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../assets/9043.jpg" style="width: 100%;height: 100%;"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../assets/4182057.jpg" style="width: 100%;height: 100%;"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../assets/womwn.jpg" style="width: 100%;height: 100%;"
      /></van-swipe-item>
      <!-- <van-swipe-item v-for="item in imgs" :key="item"><img :src="item" style="width: 100%;"/></van-swipe-item> -->
    </van-swipe>

    <van-card
      v-for="item in goods"
      :key="item.title"
      :tag="item.tag"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.thumb"
    />

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="star-o"
        >当前已注册（{{ memberList.length }}）人</van-tabbar-item
      >
      <van-tabbar-item icon="like-o" @click="more">更多美图</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Button,
  Swipe,
  SwipeItem,
  Card,
  Dialog
} from "vant";
import API from "@/api/member/index.js";

export default {
  name: "homesgehe",
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Card.name]: Card
  },
  data() {
    return {
      active: null,
      imgs: [],
      goods: [],
      memberList: []
    };
  },
  methods: {
    more() {
      Dialog.alert({
        title: "提示",
        message: "居然还想看，可惜没有了，哈哈"
      }).then(() => {
        // on close
      });
    },
    onClickLeft() {
      Dialog.alert({
        title: "提示",
        message: "请再欣赏10分钟再退出吧"
      }).then(() => {
        // on close
      });
      // this.$router.go(-1);
    },
    onClickRight() {
      let _this = this;
      Dialog.confirm({
        title: "标题",
        message: "加载其他"
      })
        .then(() => {
          API.getMemberList().then(res => {
            _this.goods = res.list;
          });
        })
        .catch(() => {});
    },

    routerPush() {
      this.$router.push("/page");
    }
  },
  created() {
    API.getAllMember().then(res => {
      this.memberList = res.list;
    });
  }
};
</script>

<style lang="scss" scoped>
.img-wrap {
  width: 100%;
  height: 300px;
}
</style>
