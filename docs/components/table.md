---
title: Table 表格
---
# Table 表格

## 引入 
```bash
import {Table,GTableColumn } from 'zebra-ui'
```

## 预览
<ClientOnly>
  <table-demo></table-demo>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<!-- 固定表头 -->
<g-table  
  :columns="columns"
  :data-source="dataSource"
  bordered
  :selected-items.sync="selected"
  :order-by.sync="orderBy"
  @update:orderBy="x"
  :loading="loading"
  :height="400"
  checkable
  >
</g-table>

<!-- 可折叠 -->
<g-table  
  :columns="columns"
  :data-source="dataSource"
  :selected-items.sync="selected"
  expend-field="description"
  >
</g-table>
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
        <td>columns</td>
        <td> 每列的名字及对应的key</td>
        <td>Array</td>
        <td>必须填</td>
      </tr>
      <tr>
        <td>dataSource</td>
        <td>表格的数据</td>
        <td>Array</td>
        <td>必须填</td>
      </tr>
      <tr>
        <td>bordered</td>
        <td>是否需要边框</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
       <tr>
        <td>expendField</td>
        <td>是否有展开项</td>
        <td>String</td>
        <td>-</td>
      </tr>
        <tr>
        <td>checkable</td>
        <td>是否有选择按钮</td>
        <td>	Boolean</td>
        <td>true</td>
      </tr>
    </tbody>
    </table>
    



