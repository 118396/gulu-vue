---
title: Popover 弹出层
---
# 弹出层

## 引入 
```bash
import {Popover} from 'zebra-ui'
```

## 预览
<ClientOnly>
  <popover-demo>
  </popover-demo>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
<g-popover>
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>

<!-- 将触发方式改为 hover -->
  <g-popover trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
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
        <td>trigger</td>
        <td>选择触发方式，默认为 click，可以选择 hover（悬入）和 focus（长按）</td>
        <td>String</td>
        <td>click</td>
      </tr>
      <tr>
        <td>position</td>
        <td>配置悬出的位置，有 top、left、right、bottom 四个可选值</td>
        <td>String</td>
        <td>top</td>
      </tr>
    </tbody>
    </table>
    
