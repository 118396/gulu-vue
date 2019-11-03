---
title: Grid 网格
---
# 网格

## 引入 
```bash
import {Col, Row} from 'zebra-ui'
```

## 预览
<ClientOnly>
<grid-demo/> 
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<!-- 24网格 -->
  <g-row class="demoRow">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>

    <!-- 设置 gutter -->
    <g-row class="demoRow" gutter="10">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>
      <!-- 设置空隙 -->
      <g-row class="demoRow" gutter="10">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8" offset="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="6" offset="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6" offset="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4" offset="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4" offset="8">
          <div class="demoCol">4</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
      </g-row>
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
        <td>gutter</td>
        <td>由 Row 接收，设置内部 Col 的 间隔</td>
        <td>Number 或者类型为 String 的数字</td>
        <td>0</td>
      </tr>
      <tr>
        <td>span</td>
        <td>由 Col 接收，设置一个 Col 占父元素的多少比例，取值为 0-24 的整数</td>
        <td>Number 或者类型为 String 的数字</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>由 Col 接收，设置该 Col 向右偏移的距离，取值为 0-24 的整数</td>
        <td>Number 或者类型为 String 的数字</td>
        <td>-</td>
      </tr>
    </tbody>
    </table>
    
