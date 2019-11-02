---
title: Pager 分页器
---
# Pager

## 引入
```
import {Pager} from 'zebra-ui' 
```
## 预览
<ClientOnly>
  <pager-demo/>
</ClientOnly>


## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
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
        <td>total</td>
        <td> 传给 Nav，代表点击的那一项的 name，点击后赋值给 selected</td>
        <td>Number</td>
        <td>-</td>
      </tr>
      <tr>
        <td>currentPage</td>
        <td>指定当前处于第几页，需要 .sync 修饰符</td>
        <td>Number</td>
        <td>1</td>
      </tr>
    </tbody>
    </table>
    

