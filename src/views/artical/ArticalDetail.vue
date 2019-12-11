<template>
  <div class='wrap'>
    <h2>图片上传</h2>
    <van-uploader :after-read="afterRead" result-type="file" enctype="multipart/form-data"  accept="image/*"/>
    <img :src="src" width="200px" />
    
    <div class="wangEditor-txt" v-html="messageData.content"></div>
  </div>
</template>

<script>
import { Uploader } from 'vant';
import API from '@/api/artical/index.js';

export default {
  name: '',
  components: {
    [Uploader.name]: Uploader
  },
  data() {
    return {
      src: '',
      messageData: {
        title: '',
        content: ''
      },
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
  created() {
    API.getArticalById({id: 1}).then(res => {
      this.messageData.content = res.data.content;
      this.messageData.title = res.data.title;
    });;
  },
  mounted() {},
}
</script>

<style lang='scss' scoped>

// .wangEditor-container {
//   width: 100%;
//   height: 100%;

//   img {
//     max-width: 100% !important;
//   }
// }

.wrap {
  width: 100%;
  height: 100%;
  
  img {
    max-width: 100% !important;
  }
}
</style>