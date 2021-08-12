<template>
  <div class="cp-preloader_type">
    <span class="cp-preloader__letter" data-preloader="一">一</span>
    <span class="cp-preloader__letter" data-preloader="起">起</span>
    <span class="cp-preloader__letter" data-preloader="走">走</span>
    <span class="cp-preloader__letter" data-preloader="过">过</span>
    <span class="cp-preloader__letter" data-preloader="的">的</span>
    <span class="cp-preloader__letter" data-preloader="日">日</span>
    <span class="cp-preloader__letter" data-preloader="子">子</span>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.cp-preloader__letter {
  display: inline-block;
  position: relative;
  overflow: hidden;
  color: rgba(241, 239, 239, 0.9);
}

.cp-preloader__letter:before {
  content: attr(data-preloader);
  position: absolute;
  top: 0;
  left: 0;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
}

.cp-preloader__letter:nth-child(2):before {
  animation-delay: 0.3s;
}

.cp-preloader__letter:nth-child(3):before {
  animation-delay: 0.45s;
}

.cp-preloader__letter:nth-child(4):before {
  animation-delay: 0.6s;
}

.cp-preloader__letter:nth-child(5):before {
  animation-delay: 0.75s;
}

.cp-preloader__letter:nth-child(6):before {
  animation-delay: 0.9s;
}

.cp-preloader__letter:nth-child(7):before {
  animation-delay: 1.05s;
}

.cp-preloader_type {
  padding: 15px 0;
  text-align: center;
  border-bottom: 1px solid #f3f3f3;

  .cp-preloader__letter:before {
    animation-name: cp-preloader2;
  }
}

@keyframes cp-preloader2 {
  0%,
  75%,
  100% {
    transform: rotateY(-90deg);
    opacity: 0;
  }

  20%,
  58% {
    transform: rotateY(0);
    opacity: 1;
  }
}

.cp-preloader__letter {
  font-size: 20px;
  font-weight: 600;
}

.cp-preloader__letter:before {
  color: #00bbbb;
}

.cp-preloader_type10:before,
.cp-preloader_type10:after {
  background-color: #fefefe;
}
</style>
