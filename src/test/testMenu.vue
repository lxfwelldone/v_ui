<template>
  <div>
    <h1>测试自定义组件 </h1>
    <lz-menu :menuItems="menuItems" :iActiveColor="iActiveColor" :DefaultIndex="(1)" @clickLzMenuItem="clickMenuItem" />
  </div>
</template>

<script>

import LzMenu from "../components/LzMenu.vue";
export default {
  components: {
    LzMenu,
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "通知公告",
        },
        {
          id: 2,
          name: "讲座预告",
        },
        {
          id: 3,
          name: "综合新闻",
        },
        {
          id: 4,
          name: "校园动态",
        },
        {
          id: 5,
          name: "教育教学",
        },
        {
          id: 6,
          name: "创新创业",
        },
        {
          id: 7,
          name: "开放办学",
        },
        {
          id: 8,
          name: "我爱我家",
        },
      ],
      iActiveColor: "#ff0",
    };
  },
  methods: {
    clickMenuItem: function(item) {
      console.log(item.name);
    }
  },
};
</script>

<style>
</style>
