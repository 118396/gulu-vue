---
title: Collapse 折叠面板
---
# Collapse 
## 引入
```
import {Collapse,CollapseItem} from 'zebra-ui' 
```
## 预览
<ClientOnly>
  <collapse-demo/>
</ClientOnly>


## 代码

<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<!-- 简单用法 -->
    <g-collapse :selected.sync="slectedTabs">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>

<!-- 手风琴效果 -->
    <g-collapse :selected.sync="slectedTabs2" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
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
        <td>当前展开 item 的 name 组成的数组。可以用 .sync 修饰符绑定</td>
        <td>Array</td>
        <td>-</td>
      </tr>
      <tr>
        <td>single</td>
        <td>是否允许同时展开多个 item</td>
        <td>Boolean</td>
        <td>必须写</td>
      </tr>
      <tr>
        <td>name</td>
        <td>item 的 name 属性，唯一且必填</td>
        <td>String</td>
        <td>-</td>
      </tr>
        <tr>
        <td>title</td>
        <td>item 的 title 属性</td>
        <td>String</td>
        <td>-</td>
      </tr>
    </tbody>
    </table>
    

