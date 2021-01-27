<template>
  <div class="nav">
    <div class="status_bar"></div>

    <div class="nav_bar">
      <div class="left">
        <span @click="onClickLeft" v-show="leftText != null" class="item">{{
          leftText
        }}</span>
      </div>
      <div class="title">{{ title }}</div>
      <div class="right">
        <span @click="onClickRight" v-show="rightText != null" class="item">{{
          rightText
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: null,
    leftText: null,
    rightText: null,
  },
  methods: {
    onClickLeft: function () {
      this.$emit("leftAction");
    },
    onClickRight: function () {
      this.$emit("rightAction");
    },
  },
};
</script>

<style>
.nav {
  background-color: #42b983;
}

.status_bar {
  height: 1.25rem;
}
.nav_bar {
  height: 2.75rem;
  line-height: 2.75rem;
  color: #ffffff;
  display: flex;
}
.nav_bar .title {
  text-align: center;
  flex: 1;
}
.nav_bar .left {
  width: 3.75rem;
}
.nav_bar .right {
  width: 3.75rem;
}

.nav_bar .item {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
}
</style>
