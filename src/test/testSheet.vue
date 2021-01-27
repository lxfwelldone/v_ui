<template>
  <div>
    <h1>测试自定义组件 </h1>
    <div @click="showSheet()">弹1个按钮框</div>
    <lz-sheet :p_visiable.sync="iShow" :p_title="iTitle" :p_sheetItems="sheetItems"  @clickOnSheet="clickOnSheet"/>
    
    <hr />

  </div>
</template>


<script>
import LzSheet from '../components/LzSheet.vue';

export default {
  components: {
    LzSheet
  },
  data() {
    return {
      iTitle: "选择性别",
      iLeft: "取消",
      iShow: false,
      sheetItems:[
        {
          id: 1,
          name: "男",
        },        {
          id: 2,
          name: "女",
        },
        
      ],
    };
  },
  methods: {
      showSheet() {
        this.iShow = true;
      },
      clickOnSheet(obj) {
          console.log(obj.name);
      },
  },
};
</script>

<style>
</style>