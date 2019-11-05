---
title: Uploader 文件上传
---
# 文件上传

## 引入 
```bash
import {Uploader,http} from 'zebra-ui'
```

## 预览
<ClientOnly>
 <uploader-demo/>
</ClientOnly>

## 代码
<details style="margin-top: 32px;">
 <summary style=" outline: none">点击查看代码</summary> 

```vue  
  <g-uploader
    accept="image/*"
    method="POST"
    action="http://127.0.0.1:3000/upload"
    name="file"
    :parseResponse="parseResponse"
    :file-list.sync="fileList"
    @error="error = $event"
    :sizeLimit="2*1024 * 1024"
  >
    <g-button icon="upload">上传</g-button>
  </g-uploader>

  data() {
    return {
      fileList: [],
      error: ""
    };
  },
  methods: {
    parseResponse(response) {
      let object = JSON.parse(response);
      let url = `http://127.0.0.1:3000/preview/${object.id}`;
      return url;
    }
  }
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
        <td>accept</td>
        <td>上传内容接受的类型</td>
        <td>String</td>
        <td>image/*</td>
      </tr>
      <tr>
        <td>action</td>
        <td>上传地址</td>
        <td>String</td>
        <td>必填</td>
      </tr>
        <tr>
        <td>name</td>
        <td>上传的文件字段名</td>
        <td>String</td>
        <td>必填</td>
      </tr>
        <tr>
        <td>size</td>
        <td>上传内容的大小</td>
        <td>Number</td>
        <td>2 * 1024 * 1024</td>
      </tr>
        <tr>
        <td>method</td>
        <td>请求方式</td>
        <td>String</td>
        <td>post</td>
      </tr>
            <tr>
        <td>fileList</td>
        <td>上传的文件列表</td>
        <td>Array</td>
        <td>-</td>
      </tr>
    </tbody>
    </table>