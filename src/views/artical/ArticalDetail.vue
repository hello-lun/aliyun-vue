<template>
  <div class='wrap'>
    <!-- <h2>图片上传</h2>
    <van-uploader :after-read="afterRead" result-type="file" enctype="multipart/form-data"  accept="image/*"/>
    <img :src="src" width="200px" />
     -->
    <van-skeleton title avatar :row="3" v-for="item in 3" :key="item" :loading="loading"/>

    <h3 class="title">{{ messageData.title }}</h3>
    <div class="wangEditor-container">
      <div class="wangEditor-txt" v-html="messageData.content"></div>
    </div>
  </div>
</template>

<script>
import { Uploader,Skeleton } from 'vant';
import API from '@/api/artical/index.js';
import API_UPLOAD from '@/api/common.js';
import YimoVueEditor from 'yimo-vue-editor';

export default {
  name: '',
  components: {
    [Uploader.name]: Uploader,
    [Skeleton.name]: Skeleton,
    YimoVueEditor,
  },
  data() {
    return {
      src: '',
      loading: true,
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
  
      API_UPLOAD.upload(params).then(res => {
        this.src = res.src;
      }).catch(err => {
        console.log(err)
      });
    }
  },
  created() {
    let { id } = this.$route.query;
    API.getArticalById({id}).then(res => {
      this.messageData.content = res.data.content;
      this.messageData.title = res.data.title;
      this.loading = false;
    }).catch(err => {
      this.loading = false;
      console.log(err)
    });
  },
  mounted() {},
}
</script>

<style lang='scss' scoped>

.title {
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0;
  border-bottom: 1px solid #f3f3f3;
  margin: 0;
  padding: 15px 0;
}

.wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.wangEditor-txt {
  padding: 56px 20px 0;
}
</style>