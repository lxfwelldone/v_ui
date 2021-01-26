<template>
  <div>
    <h1>测试自定义组件</h1>

    <!-- 使用.sync 进行数据的双向绑定 -->
    <lz-roating-bar :iScore.sync="score" />
    <div>当前评分为: {{ score }}</div>
  </div>
</template>

<script>
import LzRoatingBar from "../components/LzRoatingBar.vue";
export default {
  components: {
    LzRoatingBar,
  },

  data() {
    return {
      score: 1,
    };
  },
};
</script>

<style>
</style>
