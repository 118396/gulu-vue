---
title: Layout - 布局
---
# 布局


## 引入 
```bash
import {Layout, Header, Footer, Content, Sider} from 'zebra-ui'
```

## 预览
<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
    <!-- 多栏布局 1 -->
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>

    <!-- 多栏布局 2 -->
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-layout>
        <g-sider
          style="height: 100px; background:#ddd; width:200px; color: black;"
        >
          sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>

    <!-- 多栏布局 3 -->
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-sider
        style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:100px; color: white;"
      >
        sider
      </g-sider>
      <g-layout>
        <g-header
          style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
        >
          header
        </g-header>
        <g-content
          style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
        >
          content
        </g-content>
        <g-footer
          style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
        >
          footer
        </g-footer>
      </g-layout>
    </g-layout>
```
</details>
