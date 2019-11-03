---
title: Input 输入框
---
# 输入框

## 引入 
```bash
import {Input} from 'zebra-ui'
```

## 预览
<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
    <g-input></g-input>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
    <g-input value="123" error="请重新输入手机号码"></g-input>


    <!-- 双向绑定 -->
    <g-input v-model="value"></g-input>
    value: {{ value }}

    data() {
    return {
      value: "1"
    };
  }
 
```
</details>

# API
<table>
    <thead>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </thead>
    <tbody>
      <tr>
        <td>readonly</td>
        <td>是否可编辑</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>error</td>
        <td>错误提示状态</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td> 是否禁用</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
    </tbody>
    </table>
    
    