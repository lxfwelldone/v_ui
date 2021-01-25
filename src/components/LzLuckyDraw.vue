<template>
  <div class="wrapper">
    <div
      class="prize-box"
      v-for="(prize, index) in prizes"
      :key="index"
      v-bind:class="{ active: luckyIndex == index }"
      @click="index == 4 && move2Prize()"
    >
      <img class="prize-img" :src="prize.image" />
      <span class="prize-name">{{ prize.detail }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "lz-lucky-draw",
  props: {
    prizes: null,
    moveIndex: {
      //用来控制下一个奖项的索引
      type: Array,
      default: () => [0, 1, 2, 5, 8, 7, 6, 3],
    },
  },
  data() {
    return {
      timer: null,
      moving: false,
      luckyIndex: 4,
      timerSpeed: 100,
      selectedIndex: 0,
    };
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.moving = false;
    },
    getRandom(min, max) {
      //根据最小值和最大值产生一个随机数
      return Math.floor(Math.random() * (max - min) + min);
    },
    move2Prize() {
      if (this.moving == false) {
        this.moving = true;
        var that = this;
        var count = 0;
        var total = this.getRandom(48, 56);
        this.timer = setInterval(function () {
          count++;
          if (count >= total) {
            that.clearTimer();
          }
          console.log("移动次数: " + count);

          if (that.selectedIndex >= that.moveIndex.length) {
            that.selectedIndex = 0;
          }
          that.luckyIndex = that.moveIndex[that.selectedIndex];
          console.log("抽中的东西: " + that.prizes[that.luckyIndex].detail);

          that.selectedIndex++;
        }, this.timerSpeed);
      } else {
        alert("正在抽奖中哦。。");
      }
    },
  },
};
</script>

<style  scoped>
.wrapper {
  color: darkgreen;
  background-color: dodgerblue;
  width: 18rem;
  height: 18rem;
  margin: auto;
  display: grid;
  font-size: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 3%;
  grid-auto-flow: row;
  padding: 20px;
  border-radius: 12px;
}
.prize-box {
  background-color: #f2f2f2;
  margin: 0.1rem;
  text-align: center;
  display: inherit;
  border-radius: 12px;
}

.prize-img {
  width: 60%;
  height: auto;
  margin: 0.5rem auto auto auto;
}
.active {
  background-color: yellow;
  color: red;
  font-weight: 900;
  font-size: 0.8rem;
}
</style>