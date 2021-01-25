<template>
  <div class="my-outbox">
    <div class="my-inbox" ref="box">
      <div
        class="my-list"
        v-for="(item, index) in sendVal"
        :key="index"
        ref="list"
      >
        <span @click="onItemClick(item)" v class="my-uname">{{
          item.detail
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lz-marquee",
  props: {
    sendVal: Array,
    speed: 10,
  },
  data() {
    return {
      // 定时器标识
      moveTimer: null,
    };
  },
  mounted() {
    this.moveLeft();
  },
  beforeDestroy() {
    // 页面关闭清除定时器
    clearInterval(this.moveTimer);
    // 清除定时器标识
    this.moveTimer = null;
  },
  methods: {
    // 获取margin属性
    getMargin(obj) {
      var marg = window.getComputedStyle(obj, null)["margin-right"];
      marg = marg.replace("px", "");
      return Number(marg); // 强制转化成数字
    },
    onItemClick(item) {
      this.$emit("clickNews", item);
    },
    // 移动的方法
    moveLeft() {
      var item = this.$refs.list;
      var len = this.sendVal.length;
      var inbox = this.$refs.box;
      let width = inbox.clientWidth;

      var margin = this.getMargin(item[0]);
      var w = 0;
      for (var i = 0; i < len; i++) {
        w += item[i].clientWidth + margin;
      }

      // 移动距离
      var moveDis = width;
      inbox.style = `transform: translateX(${moveDis}px)`;

      this.moveTimer = setInterval(function () {
        moveDis -= 0.5;
        if (moveDis < 0 && Math.abs(moveDis) >= Math.abs(w)) {
          moveDis = width;
        }
        // 移动外层盒子
        inbox.style = `transform: translateX(${moveDis}px)`;
      }, 10);
    },
  },
};
</script>

<style >
.my-outbox {
  overflow: hidden;
  background-color: dodgerblue;
  height: 35px;
}

.my-inbox {
  white-space: nowrap;
}
.my-list {
  margin-right: 25px;
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.my-uname {
  color: #ff8900;
  background-color: black;
}
</style>