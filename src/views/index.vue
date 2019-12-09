<template>
  <div class=''>
    <van-nav-bar
      title="首页"
      left-text="文章"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
       <van-icon name="friends" slot="right" size="1.2em" />
    </van-nav-bar>
    <ul>
      <li v-for="item in list" :key="item" class="item" @click="onClickRight">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { NavBar, Icon } from 'vant';
import Axios from '@/api/axios/index.js';

export default {
  name: '',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  data() {
    return {
      list: ['上课的法国队', '数据的分布桂萼不过覅']
    };
  },
  computed: {},
  methods: {
    onClickLeft () {
      this.$router.push('/page');
    },
    onClickRight () {
      this.$router.push('/page');
    },
  },

  created() {
    Axios({
      url: '/member/pageList',
      method: 'get',
    }).then(res => {
      this.list = res.list;
    });
  },
  mounted() {},
}
</script>

<style lang='css' scoped>

.item {
  padding: 10px 10px 10px;
  border-bottom: 1px solid #ddd;

}
</style>