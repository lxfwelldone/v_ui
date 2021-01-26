<template>
  <div class="wrapper">
    <div class="my-inbox" ref="box" @click.prevent="">
      <div
        v-for="index in 5"
        :key="index"
        :id="index"
        class="item"
        :class="{ active: index <= iSelect }"
        @click="clickOnItem(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lz-roating-bar",
  props: {
    iScore: {
      type: Number,
      default: 5,
      validator: function(value) {
        return value >= 1 && value <= 5;
      }
    },
    isFloat: false,
    isEditable: false,
    
  },
  data() {
    return {
      score: this.getScore(),
      iSelect: this.iScore,
    };
  },
  methods: {
    clickOnItem(idx) {
      if (idx == this.iSelect) {
        return;
      }
      this.iSelect = idx;

      //更新数据
      this.$emit('update:iScore', this.getScore());
    },
    getScore() {
        return this.iSelect;
    },
  },
};
</script>

<style >
.wrapper {
  background-color: #f2f2f2;
  width: 100%;
}
.my-inbox {
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
}
.item {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  background-image: url(../assets/xing.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.active {
  background-image: url(../assets/xing2.png);
}
</style>