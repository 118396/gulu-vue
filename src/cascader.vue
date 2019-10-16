<template>
  <div class="cascader">
    <div class="trigger" @click="popovervisible = !popovervisible"></div>
    <div class="popover" v-if="popovervisible">
        <cascader-items :items="source"></cascader-items>

    </div>
  </div>
</template>
<script>
import CascaderItems from "./cascader-items";
export default {
  name: "GuluCascader",
  components: {CascaderItems},
  props: {
    source: {
      type: Array
    }
  },
  data() {
    return {
      popovervisible: false,
      level1Selected: null,
      level2Selected: null
    };
  },
  computed: {
    level2Items() {
      if (this.level1Selected) {
        return this.level1Selected.children;
      } else {
        return [];
      }
    },
    level3Items() {
      if (this.level2Selected) {
        return this.level2Selected.children;
      } else {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover {
    border: 2px solid green;
    height: 200px;
    display: flex;
    .label {
      white-space: nowrap;
    }
  }
}
</style> 