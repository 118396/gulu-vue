---
title: Button 
---
# 按钮
## 引入
```
import {Button} from 'zebra-ui' 
```
## 预览
<ClientOnly>
  <button-demos/>
</ClientOnly>

## 代码


<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
    <g-button>默认按钮</g-button>
    <g-button icon="settings">带icon按钮</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
```
</details>

## API
<table>
  <tr>
    <th>参数</th>
    <th>说明</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>icon</td>
    <td>icon 图标名</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>loading</td>
    <td>加载状态</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>禁用按钮</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>iconPosition</td>
    <td>改变图标位置</td>
    <td>String</td>
    <td>left</td>
  </tr>
</table>



