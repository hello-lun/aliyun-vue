<template>
  <div class='wrap'>
    <van-nav-bar
      title="博客文章"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      class="list"
      @load="onLoad"
    >
      <van-card
        v-for="item in articalList"
        :key="item.title"
        :desc="item.desc"
        :thumb="item.cover"
        @click="pageDetail(item.id)">
        <div slot="title" class="title">{{ item.title }}</div>
        <span slot="price">{{ item.createTime }}</span>
        <span slot="num">阅读({{ item.read }})</span>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import { NavBar, List, Icon, Card } from 'vant';
import title from '@/views/animation/title.vue';
import API from '@/api/artical/index.js';

export default {
  name: '',
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Icon.name]: Icon,
    [Card.name]: Card,
    titleAnimation: title,
  },
  data() {
    return {
      loading: false,
      finished: false,
      articalList: [{
        desc: '深刻的v觉得v',
        title: '深刻的佛哦发货'
      }],
    };
  },
  computed: {},
  methods: {
    pageDetail (id) {
      this.$router.push({
        path: '/artical-detail',
        query: {id}
      });
    },
    onLoad () {},
    onClickLeft () {
      this.$router.back();
    },
  },
  created() {
    this.loading = true;
    API.getArticalList().then(res => {
      console.log(res, 7766);
      this.articalList = res.list;
      this.finished = true;
    });
  },
  mounted() {},
}
</script>

<style lang='scss' scoped>

.wrap {
  height: 100%;
  position: relative;

  .list {
    position: absolute;
    top: 46px;
    bottom: 0;
    width: 100%;
    overflow: auto;
  }

  .title {
    font-size: 15px;
    font-weight: 600;
  }

  .van-card__content {
    div {
      margin: 0 0 5px 0;
      text-align: left;
    }
  }

}

</style>