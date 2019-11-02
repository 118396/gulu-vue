---
title: Cascader 级联选择器
---
# Cascader 
## 引入
```
import {Cascader} from 'zebra-ui' 
```
## 预览
<ClientOnly>
  <cascader-demo/>
</ClientOnly>


## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
    <g-cascader
      :source.sync="source"
      popover-height="180px"
      :selected.sync="selected"
      :load-data="updateNewList"
    >
    </g-cascader>
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
        <td> 已选中的数组，要添加 .sync 才能被组件内部影响</td>
        <td>Array</td>
        <td>-</td>
      </tr>
      <tr>
        <td>source</td>
        <td>传入要渲染的数据</td>
        <td>Array</td>
        <td>必须要包含name、id</td>
      </tr>
      <tr>
        <td>loadData</td>
        <td>次级列表查询函数</td>
        <td>Object</td>
        <td>参数为id 和 回调函数</td>
      </tr>
    </tbody>
    </table>
    

