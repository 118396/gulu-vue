<template>
  <div style="padding-top: 16px;">
      <h3>触发方式为点击</h3>
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>

    <div style="padding-top: 16px;">
      <h3>触发方式为 hover</h3>
      <g-popover trigger="hover">
        <g-button>上方弹出</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="bottom" trigger="hover">
        <g-button>下方弹出</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <g-button>左边弹出</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <g-button>右边弹出</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import GButton from "../../../src/button/button";
import GPopover from "../../../src/popover";
export default {
  components: { GButton, GPopover },
  methods: {
    onClickButton() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      });
    }
  }
};
</script>