---
title: Tabs 标签
---
# Tabs 标签 

## 引入 
```bash
import {Tabs, TabsHead, TabsBody, TabsPane, TabsItem} from 'zebra-ui'
```

## 预览
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
        <g-tabs-item name="3" disabled>3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
        <g-tabs-pane name="3">content 3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
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
        <td>selected</td>
        <td>默认选中某一项</td>
        <td>String</td>
        <td>name值</td>
      </tr>
      <tr>
        <td>name</td>
        <td>title 的名称，唯一、必填且与 title 一致</td>
        <td>String</td>
        <td>必须写</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td> 是否禁用</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
    </tbody>
    </table>
    



