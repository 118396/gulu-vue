<template>
  <div style="padding-top: 16px;">
    <div>
      <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
      <g-button @click="$toast('点击弹出提示', { position: 'middle' })"
        >中间弹出</g-button
      >
      <g-button @click="$toast('点击弹出提示', { position: 'bottom' })"
        >下方弹出</g-button
      >
    </div>
    <div style="padding-top: 16px;">
      <h3>设置关闭按钮</h3>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>
  </div>
</template>
<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from "../../../src/plugin";
import GButton from "../../../src/button/button";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: { GButton },
  methods: {
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          }
        },
        
      });
    }
  }
};
</script>