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
      v-show="!skeletonLoading"
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

    <van-skeleton title avatar :row="3" v-for="item in 3" :key="item" :loading="skeletonLoading"/>
  </div>
</template>

<script>
import { NavBar, List, Icon, Card, Skeleton } from 'vant';
import title from '@/views/animation/title.vue';
import API from '@/api/artical/index.js';

export default {
  name: '',
  components: {
    [NavBar.name]: NavBar,
    [Skeleton.name]: Skeleton,
    [List.name]: List,
    [Icon.name]: Icon,
    [Card.name]: Card,
    titleAnimation: title,
  },
  data() {
    return {
      skeletonLoading: true,
      loading: false,
      finished: false,
      articalList: [],
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
    this.skeletonLoading = true;

    API.getArticalList().then(res => {
      this.skeletonLoading = false;
      this.loading = false;
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