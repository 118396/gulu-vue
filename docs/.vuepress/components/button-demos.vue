<template>
  <div style="padding-top: 16px;">
    <g-button>默认按钮</g-button>
    <g-button icon="settings">带icon按钮</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
      
    <!-- <pre><code>{{content}}</code></pre> -->
  </div>
</template>
<script>
import Button from "../../../src/button/button.vue"

export default {
  components: {
    "g-button": Button
  },
  // data() {
  //   return {
  //     content: `
  //   <g-button>默认按钮</g-button>
  //   <g-button icon="settings">带icon按钮</g-button>
  //   <g-button :loading="true">加载按钮</g-button>
  //   <g-button disabled>禁用按钮</g-button>
  //     `
  //       .replace(/\t+| +/g, "")
  //       .trim()
  //   };
  // }
};
</script>