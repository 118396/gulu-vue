<template>
  <div class="cascader">
    <div class="trigger" @click="popovervisible = !popovervisible"></div>
    <div class="popover-wrapper" v-if="popovervisible">
      <cascader-items
        :items="source"
        class="popover"
        :height="popoverHeight"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from "./cascader-items";
import { stringify } from "querystring";
export default {
  name: "GuluCascader",
  components: { CascaderItems },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    }
  },
  data() {
    return {
      popovervisible: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  .trigger {
    border: 1px solid black;
    height: 32px;
    width: 100px;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    @extend .box-shadow;
    display: flex;
  }
}
</style> 