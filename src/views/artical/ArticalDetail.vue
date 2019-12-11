<template>
  <div class=''>
    <h2>图片上传</h2>
    <van-uploader :after-read="afterRead" result-type="file" enctype="multipart/form-data"  accept="image/*"/>
    <img :src="src" width="200px" />
  </div>
</template>

<script>
import { Uploader } from 'vant';
import API from '@/api/common.js';

export default {
  name: '',
  components: {
    [Uploader.name]: Uploader
  },
  data() {
    return {
      src: '',
    };
  },
  computed: {},
  methods: {
    afterRead(file) {
      let params = new FormData(); //创建form对象
      params.append("files", file.file); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
  
      API.upload(params).then(res => {
        this.src = res.src;
      }).catch(err => {
        console.log(err)
      });
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang='scss' scoped>

</style>