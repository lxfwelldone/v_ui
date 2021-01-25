<template>
  <div>
    <h1>测试自定义组件 </h1>
    <lz-lucky-draw :prizes="prizes" :moveIndex="moveIndex" />
  </div>
</template>
<script>
import LzLuckyDraw from "../components/LzLuckyDraw.vue";
export default {
  components: {
    LzLuckyDraw,
  },
  data() {
    return {
      prizes: [
        {
          id: 1,
          detail: "海尔冰箱",
          image: require("../assets/my_vip.png"),
        },
        {
          id: 2,
          detail: "帅哥一枚",
          image: require("../assets/my_vip.png"),
        },
        {
          id: 3,
          detail: "格力空调",
          image: require("../assets/my_vip.png"),
        },
        {
          id: 4,
          detail: "iPhone 12",
          image: require("../assets/my_vip.png"),
        },
        {
          id: 5,
          detail: "立即抽奖",
          image: require("../assets/anniu.png"),
        },
        {
          id: 6,
          detail: "华为M20",
          image: require("../assets/my_vip.png"),
        },
        {
          id: 7,
          detail: "神舟笔记本",
          image: require("../assets/my_vip.png"),
        },
        {
          id: 8,
          detail: "飞科剃须刀",
          image: require("../assets/my_vip.png"),
        },
        {
          id: 9,
          detail: "美女一枚",
          image: require("../assets/my_vip.png"),
        },
      ],
      moveIndex: [0, 3, 6, 7, 8, 5, 2, 1],
    };
  },
  methods: {

  },
};
</script>

<style>
</style>