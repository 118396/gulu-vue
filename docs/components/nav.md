---
title: Nav 导航栏
---
# Nav
## 引入
```
import {Nav，SubNav, NavItem} from 'zebra-ui' 
```
## 预览
<ClientOnly>
  <nav-demo/>
</ClientOnly>


## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
      <!-- 顶栏 -->
      <g-nav :selected.sync="selected" style=" margin: 20px;">
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav name="about">
          <template slot="title"
            >关于</template
          >
          <g-nav-item name="culture">企业文化</g-nav-item>
          <g-nav-item name="developers">开发团队</g-nav-item>
          <g-sub-nav name="contacts">
            <template slot="title"
              >联系方式</template
            >
            <g-nav-item name="wechat">微信</g-nav-item>
            <g-nav-item name="qq">QQ</g-nav-item>
            <g-sub-nav name="phone">
              <template slot="title"
                >手机</template
              >
              <g-nav-item name="cm">移动</g-nav-item>
              <g-nav-item name="cu">联通</g-nav-item>
              <g-nav-item name="cn">电信</g-nav-item>
            </g-sub-nav>
          </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
      </g-nav>

      <!-- 侧栏 -->
      <g-nav :selected.sync="selected" vertical style=" gidth: 200px;">
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav name="about">
          <template slot="title"
            >关于</template
          >
          <g-nav-item name="culture">企业文化</g-nav-item>
          <g-nav-item name="developers">开发团队</g-nav-item>
          <g-sub-nav name="contacts">
            <template slot="title"
              >联系方式</template
            >
            <g-nav-item name="wechat">微信</g-nav-item>
            <g-nav-item name="qq">QQ</g-nav-item>
            <g-sub-nav name="phone">
              <template slot="title"
                >手机</template
              >
              <g-nav-item name="cm">移动</g-nav-item>
              <g-nav-item name="cu">联通</g-nav-item>
              <g-nav-item name="cn">电信</g-nav-item>
            </g-sub-nav>
          </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
      </g-nav>
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
        <td> 传给 Menu，代表点击的那一项的 name，点击后赋值给 selected</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>name</td>
        <td>传给 MenuItem 和 SubMenu，标识 MenuItem 和 SubMenu</td>
        <td>String</td>
        <td>必须填</td>
      </tr>
      <tr>
        <td>vertical</td>
        <td>传给 Menu，开始垂直版本	</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
    </tbody>
    </table>
    

