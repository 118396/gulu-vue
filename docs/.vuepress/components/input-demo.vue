<template>
  <div style="padding-top: 16px;">
    <g-input></g-input>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
    <g-input value="123" error="请重新输入手机号码"></g-input>
    <div style="padding-top: 16px;">
        <h4>双向绑定</h4>
    <g-input v-model="value"></g-input>
    <div>value: {{ value }}</div>
    </div>
  </div>
</template>
<script>
import GInput from "../../../src/input";
export default {
  components: { GInput },
  data() {
    return {
      value: "1"
    };
  }
};
</script>