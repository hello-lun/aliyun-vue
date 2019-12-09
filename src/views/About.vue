<template>
  <div class="wrap">
    <ul>
      <li v-for="item in dataList" :key="item.age">{{ item.name + ':' + item.age}}</li>
    </ul>
  </div>
</template>

<script>
import Axios from '@/api/axios/index.js';

export default {
  name: '',
  data() {
    return {
      dataList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    Axios({
      url: '/price/list',
      method: 'get',
    }).then(res => {
      this.dataList = res.list;
    });
  },
  mounted() {},
}
</script>

<style lang='scss' scoped>

</style>