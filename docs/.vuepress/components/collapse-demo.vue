<template>
  <div style="padding-top: 16px;">
    <h3>简单用法</h3>
    <g-collapse :selected.sync="slectedTabs">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>


    <div style="padding: 16px 0;">
    <h3>手风琴效果</h3>
      <g-collapse :selected.sync="slectedTabs2" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
    </div>
  </div>
</template>
<script>
import GCollapse from "../../../src/collapse/collapse";
import GCollapseItem from "../../../src/collapse/collapse-item";
export default {
  components: {
    GCollapse,
    GCollapseItem
  },
  data() {
    return {
      slectedTabs: [],
      slectedTabs2: []
    };
  }
};
</script>