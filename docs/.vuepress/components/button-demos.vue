<template>

  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <h3>预览</h3>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>

    <p>
      <h3>代码</h3>
    </p>

    <pre><code>{{content}}</code></pre>
     <div>
       <p>
      <h3>API</h3>
       </p>
       <div>
           <table>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
              <tr>
                <td>icon</td>
                <td>代表要插入的 icon 的名称，具体值请看 icon 部分</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>设置为 loading 状态，此时不用传 icon，但是依然可以设置 iconPosition</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>禁用按钮</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>iconPosition</td>
                <td>改变 icon 的位置，可传 left 或 right</td>
                <td>String</td>
                <td>left</td>
              </tr>
           </table>
       </div>
     </div>
  </div>
</template>
<script>
import Button from "../../../src/button/button.vue"
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
      `
        .replace(/\t+| +/g, "")
        .trim()
    };
  }
};
</script>