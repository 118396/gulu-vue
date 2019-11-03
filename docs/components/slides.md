---
title: Slides 轮播
---
# 轮播

## 引入 
```bash
import {SlidesItem,Slides} from 'zebra-ui'
```

## 预览
<ClientOnly>
  <slides-demo>
  </slides-demo>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>

<script>
    data () {
      return {
        selected: "1",
       
      }
    }
    </script>
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
        <td>选中第几个</td>
        <td>String</td>
        <td>必须填,对应的是name</td>
      </tr>
      <tr>
        <td>autoPlay</td>
        <td>是否自动播放</td>
        <td>Boolean</td>
        <td>true</td>
      </tr>
        <tr>
        <td>autoPlayDelay</td>
        <td>间隔多少毫秒播放下一张</td>
        <td>Number</td>
        <td>3000</td>
      </tr>
    </tbody>
    </table>

    