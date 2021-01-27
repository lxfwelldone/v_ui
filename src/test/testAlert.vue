<template>
  <div>
    <h1>测试自定义组件 </h1>
    <div @click="showAlert1()">弹1个按钮框</div>
    <lz-alert :visiable.sync="iShow1" :title="iTitle" :msg="iMsg" :left="iLeft" />
    <hr />
    <div @click="showAlert2()">弹2个按钮框</div>
    <lz-alert :visiable.sync="iShow2" :title="iTitle" :msg="iMsg" :left="iLeft" :right="iRight" />
    <hr />
    <div @click="showAlert3()">不含标题</div>
    <lz-alert :visiable.sync="iShow3" :msg="iMsg" :left="iLeft" :right="iRight" :leftAction="leftAct3()" :rightAction="rightAct3()" />

  </div>
</template>


<script>
import LzAlert from '../components/LzAlert.vue';

export default {
  components: {
    LzAlert
  },
  data() {
    return {
      iTitle: "提示信息",
      iMsg: "如果您的个人信息发现异常，请及时修改密码",
      iLeft: "取消",
      iRight: "确定",
      iShow1: false,
      iShow2: false,
      iShow3: false,
    };
  },
  methods: {
      showAlert1() {
        this.iShow1 = true;
      },
      showAlert2() {
        this.iShow2 = true;
      },
      showAlert3() {
        this.iShow3 = true;
      },

      leftAct3() {
        console.log("点击了取消");
      },
      rightAct3() {
        console.log("点击了确定");

      }
  },
};
</script>

<style>
</style>