---
title: Toast
---
# Toast

## 引入 
```bash
import {Toast,Button} from 'zebra-ui'
```

## 预览
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<style>
 .gulu-toast {
    z-index: 30;
    }
</style>
g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>

<!-- 设置关闭按钮 -->
<style>
  .gulu-toast {
    z-index: 30;
  }
</style>

<div>
  <w-button @click="onClickButton">上方弹出</w-button>
</div>

<script>
methods: {
  onClickButton () {
    this.$toast('你知道我在等你吗？', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
},
</script>
```
</details>

# API
toast与其他组件不同，采用插件的形式开发，因此可以在方法中直接调用 this.$toast(MESSAGE, OPTIONS), 其中MESSAGE是提示内容，传字符串，OPTIONS是配置选项，是一个Object
<table>
    <thead>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </thead>
    <tbody>
      <tr>
        <td>autoClose</td>
        <td>消息提示显示时间，单位是 s,也可以直接传布尔值，表示是否自动关闭</td>
        <td>Boolean 或者类型为 Number 的数字</td>
        <td>5</td>
      </tr>
      <tr>
        <td>position</td>
        <td>提示框位置，有 top、meddle、bottom 三个可选值</td>
        <td>String</td>
        <td>top</td>
      </tr>
            <tr>
        <td>closeButton</td>
        <td>	有两个字段，text 以及 callback，前者表示关闭按钮的文字内容，后者表示点击了关闭之后的回调</td>
        <td>Object</td>
        <td>{test: '关闭', callback: undefined}</td>
      </tr>
    </tbody>
    </table>