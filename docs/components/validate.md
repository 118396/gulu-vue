---
title: Validate 表单验证
---
# 表单验证

## 引入 
```bash
import {Validate} from 'zebra-ui'
```

## 预览
<ClientOnly>
 <validate-demo/>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue
    <form class="form" @submit.prevent="onSubmit">
      <h1>登录</h1>
      <demo-form-row label="邮箱" :error="errors.email">
        <g-input type="text" v-model="user.email"></g-input>
      </demo-form-row>
      <demo-form-row label="密码" :error="errors.password">
        <g-input type="password" v-model="user.password"></g-input>
      </demo-form-row>
      <div>
        <g-button type="submit">提交</g-button>
      </div>
    </form>
     <!-- 规则 -->
     rules: [
        { key: "email", pattern: "email", required: true },
        { key: "password", minLength: 6, required: true }
      ]
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
        <td>key</td>
        <td>需验证规则的字段名</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>pattern</td>
        <td>验证格式</td>
        <td>String</td>
        <td>-</td>
      </tr>
        <tr>
        <td>required</td>
        <td>是否必填</td>
        <td>Boolean</td>
        <td>true</td>
      </tr>
        <tr>
        <td>minLength</td>
        <td>字段最小长度</td>
        <td>Number</td>
        <td>-</td>
      </tr>
    </tbody>
    </table>