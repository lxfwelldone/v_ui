<template>
  <div>
    <h1>测试自定义组件 </h1>
    <lz-marquee :sendVal="newsItems" @clickNews="clickNews" />
  </div>
</template>

<script>
import LzMarquee from "../components/LzMarquee.vue";
export default {
  components: {
    LzMarquee,
  },
  data() {
    return {
      newsItems: [
        {
          detail: "恭喜宫姐姐喜提海尔冰箱",
        },
        {
          detail: "恭喜李狗蛋喜提美女一枚",
        },
        {
          detail: "恭喜峰哥哥喜提iPhone 12",
        },
      ],
    };
  },
  methods: {
    clickNews: function (news) {
      console.log(news.detail);
    },
  },
};
</script>

<style>
</style>
